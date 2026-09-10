/**
 * Storage Abstraction Layer
 * 
 * This module defines the interface for all file storage operations.
 * Currently, it delegates to Google Drive, but can easily be swapped
 * for Google Cloud Storage or another provider in the future.
 */

import { uploadToGoogleDrive, deleteFromGoogleDrive, getGoogleDriveFileUrl } from "./google-drive";

export interface UploadOptions {
  folderId?: string;
  metadata?: Record<string, string>;
}

export interface UploadResult {
  fileId: string;
  url: string;
}

export async function uploadFile(
  file: File,
  path: string, // e.g., "users/{userId}/profile", "products/{productId}/images"
  options?: UploadOptions
): Promise<UploadResult> {
  // Delegate to Google Drive implementation
  return uploadToGoogleDrive(file, path, options);
}

export async function deleteFile(fileId: string): Promise<void> {
  // Delegate to Google Drive implementation
  return deleteFromGoogleDrive(fileId);
}

export async function getFileUrl(fileId: string): Promise<string> {
  // Delegate to Google Drive implementation
  return getGoogleDriveFileUrl(fileId);
}
