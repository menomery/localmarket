"use client";

import { useState } from "react";
import { uploadFile } from "@/lib/storage/storage";
import { UploadCloud, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [result, setResult] = useState<{ url: string; fileId: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setResult(null);
      setError(null);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    setError(null);
    setResult(null);

    try {
      // For Google Drive, the path parameter isn't heavily used unless we create complex folder structures.
      // We pass the file to our storage abstraction.
      const res = await uploadFile(file, "videos");
      setResult(res);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to upload file");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col items-center justify-center p-4 font-sans">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 w-full max-w-md">
        <div className="flex items-center justify-center w-12 h-12 bg-green-100 text-[#0A8B42] rounded-full mb-6 mx-auto">
          <UploadCloud className="w-6 h-6" />
        </div>
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-2">Upload to Google Drive</h1>
        <p className="text-sm text-gray-500 text-center mb-8">Test your Google Drive integration by uploading a video or image.</p>

        <div className="space-y-6">
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:bg-gray-50 transition-colors cursor-pointer relative">
            <input 
              type="file" 
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={handleFileChange}
              accept="video/*,image/*"
            />
            {file ? (
              <div className="text-sm font-medium text-gray-900 truncate px-4">{file.name}</div>
            ) : (
              <div className="text-sm text-gray-500">Click to select a file</div>
            )}
          </div>

          <button 
            onClick={handleUpload} 
            disabled={!file || uploading}
            className="w-full bg-[#0A8B42] hover:bg-[#087336] disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            {uploading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" /> Uploading...
              </>
            ) : (
              "Upload File"
            )}
          </button>

          {error && (
            <div className="bg-red-50 text-red-700 p-4 rounded-xl text-sm flex items-start gap-2">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <div>{error}</div>
            </div>
          )}

          {result && (
            <div className="bg-green-50 text-green-800 p-4 rounded-xl text-sm space-y-2">
              <div className="flex items-center gap-2 font-bold text-green-900">
                <CheckCircle className="w-5 h-5" /> Upload Successful!
              </div>
              <div><span className="font-bold">File ID:</span> {result.fileId}</div>
              <div>
                <span className="font-bold">URL:</span>{" "}
                <a href={result.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline break-all">
                  {result.url}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
