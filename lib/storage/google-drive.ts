import type { UploadOptions, UploadResult } from "./storage";

/**
 * Google Drive Storage Implementation
 * 
 * IMPORTANT: Google Drive API operations require private credentials
 * (Service Account JSON or OAuth Client Secrets). 
 * NEVER expose these secrets to the browser.
 * 
 * Therefore, these client-side functions actually call our Next.js API Routes,
 * which securely communicate with Google Drive on the server-side.
 */

export async function uploadToGoogleDrive(
  file: File,
  path: string,
  options?: UploadOptions
): Promise<UploadResult> {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("path", path);
  if (options?.folderId) formData.append("folderId", options.folderId);

  // Call the secure Next.js API route
  const response = await fetch("/api/storage/upload", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || "Failed to upload file");
  }

  return response.json() as Promise<UploadResult>;
}

export async function deleteFromGoogleDrive(fileId: string): Promise<void> {
  const response = await fetch(`/api/storage/delete?fileId=${fileId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || "Failed to delete file");
  }
}

export async function getGoogleDriveFileUrl(fileId: string): Promise<string> {
  // To play videos directly in a <video> tag, we use the uc?id= format.
  // Note: For large videos, Google might show a virus scan warning which breaks direct playback.
  return `https://drive.google.com/uc?export=view&id=${fileId}`;
}
