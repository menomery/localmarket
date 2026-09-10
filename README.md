# LocalMarket

A professional online marketplace where independent businesses create digital shops. The core differentiator is product discovery through short vertical videos.

## Core Features
- Mobile-first, fast and accessible
- Short-video discovery feed
- Shop management for sellers
- Real-time chat (Customer-to-Seller)
- WhatsApp integration
- Secure, scalable architecture (Next.js + Firebase + Google Drive)

## Technology Stack
- **Frontend**: Next.js (App Router), React, TypeScript, Tailwind CSS, Lucide Icons
- **Auth**: Firebase Authentication
- **Database**: Cloud Firestore
- **Storage**: Google Drive (Storage Abstraction)

## Development

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Architecture Guidelines
- Strict separation between Firestore (metadata) and Google Drive (media).
- Ensure secure backend interactions with Google Drive API.
- Keep UI optimized for low-bandwidth, low-end mobile devices.
