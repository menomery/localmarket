export interface Product {
  id: string;
  sellerId: string;
  title: string;
  description: string;
  price: number;
  videoUrl: string; // The short video URL
  thumbnailUrl?: string;
  category: string;
  likesCount: number;
  commentsCount: number;
  sharesCount: number;
  createdAt: number;
}
