import type { Product } from "@/types/product";

// Mock data for the video feed to ensure it looks amazing immediately
export const MOCK_PRODUCTS: Product[] = [
  {
    id: "prod_1",
    sellerId: "seller_1",
    title: "Handcrafted Leather Wallet",
    description: "Genuine Ugandan leather, hand-stitched. Perfect for everyday use.",
    price: 45000,
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4", // Safe public demo video
    category: "Fashion",
    likesCount: 1240,
    commentsCount: 84,
    sharesCount: 12,
    createdAt: Date.now(),
  },
  {
    id: "prod_2",
    sellerId: "seller_2",
    title: "Fresh Organic Matooke",
    description: "Straight from the farm. Delivery available across Kampala.",
    price: 25000,
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    category: "Groceries",
    likesCount: 856,
    commentsCount: 32,
    sharesCount: 45,
    createdAt: Date.now() - 86400000,
  },
  {
    id: "prod_3",
    sellerId: "seller_3",
    title: "Custom Wooden Dining Set",
    description: "Beautiful mahogany dining set. Seats 6. Made to order.",
    price: 850000,
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    category: "Furniture",
    likesCount: 3400,
    commentsCount: 215,
    sharesCount: 89,
    createdAt: Date.now() - 172800000,
  }
];

export async function getFeedProducts(): Promise<Product[]> {
  // In the future, this will be: 
  // const q = query(collection(db, "products"), orderBy("createdAt", "desc"), limit(10));
  // return getDocs(q)...
  
  // For now, return mock data to guarantee the UI works perfectly
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_PRODUCTS), 800);
  });
}
