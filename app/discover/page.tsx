import VideoFeed from "@/components/feed/VideoFeed";
import { getFeedProducts } from "@/lib/services/products";

export default async function DiscoverPage() {
  const products = await getFeedProducts();

  return (
    <div className="bg-black min-h-[calc(100vh-4rem)]">
      <VideoFeed initialProducts={products} />
    </div>
  );
}
