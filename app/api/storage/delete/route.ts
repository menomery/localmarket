import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const fileId = searchParams.get("fileId");

    if (!fileId) {
      return NextResponse.json({ error: "No fileId provided" }, { status: 400 });
    }

    const clientEmail = process.env.GOOGLE_DRIVE_CLIENT_EMAIL;
    const privateKey = process.env.GOOGLE_DRIVE_PRIVATE_KEY?.replace(/\\n/g, '\n');

    if (!clientEmail || !privateKey) {
      return NextResponse.json({ error: "Google Drive credentials are not configured on the server." }, { status: 500 });
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey,
      },
      scopes: ["https://www.googleapis.com/auth/drive.file"],
    });

    const drive = google.drive({ version: "v3", auth });

    await drive.files.delete({ fileId });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Google Drive Delete Error:", errMessage);
    return NextResponse.json({ error: errMessage || "Internal server error" }, { status: 500 });
  }
}
