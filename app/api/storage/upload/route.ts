import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import { Readable } from "stream";

// Environment variables needed:
// GOOGLE_DRIVE_CLIENT_EMAIL
// GOOGLE_DRIVE_PRIVATE_KEY
// GOOGLE_DRIVE_FOLDER_ID (The ID of the folder where files will be uploaded. The folder must be shared with the client email with 'Editor' permissions)

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;
    let folderId = formData.get("folderId") as string;
    
    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    if (!folderId) {
      folderId = process.env.GOOGLE_DRIVE_FOLDER_ID || "";
    }

    const clientEmail = process.env.GOOGLE_DRIVE_CLIENT_EMAIL;
    // Handle private key formatting (sometimes newlines are escaped in env vars)
    const privateKey = process.env.GOOGLE_DRIVE_PRIVATE_KEY?.replace(/\\n/g, '\n');

    if (!clientEmail || !privateKey) {
      return NextResponse.json({ error: "Google Drive credentials are not configured on the server." }, { status: 500 });
    }

    // Authenticate with Google API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey,
      },
      scopes: ["https://www.googleapis.com/auth/drive.file"],
    });

    const drive = google.drive({ version: "v3", auth });

    // Convert Web File to Node.js Readable stream
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const stream = new Readable();
    stream.push(buffer);
    stream.push(null);

    // Upload to Google Drive
    const driveRes = await drive.files.create({
      requestBody: {
        name: file.name,
        mimeType: file.type,
        parents: folderId ? [folderId] : undefined,
      },
      media: {
        mimeType: file.type,
        body: stream,
      },
      fields: "id, name, webViewLink, webContentLink",
    });

    // Make the file publicly accessible so users can view it
    if (driveRes.data.id) {
      await drive.permissions.create({
        fileId: driveRes.data.id,
        requestBody: {
          role: "reader",
          type: "anyone",
        },
      });
    }

    // Return the result
    return NextResponse.json({
      url: driveRes.data.webContentLink, // direct download link
      fileId: driveRes.data.id,
      path: driveRes.data.name,
    });

  } catch (error: any) {
    console.error("Google Drive Upload Error:", error);
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
  }
}
