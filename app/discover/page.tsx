import VideoFeed from "@/components/feed/VideoFeed";
import DiscoverSidebar from "@/components/feed/DiscoverSidebar";
import RelatedVideos from "@/components/feed/RelatedVideos";
import ShopInfoSidebar from "@/components/feed/ShopInfoSidebar";
import { getFeedProducts } from "@/lib/services/products";

export default async function DiscoverPage() {
  const products = await getFeedProducts();

  return (
    <div className="bg-[#F8F9FA] min-h-[calc(100vh-72px)] overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto py-6 h-[calc(100vh-72px)]">
        <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-12 gap-6 h-full">
          
          {/* Left Sidebar (Navigation & Categories) */}
          <div className="hidden lg:block xl:col-span-2 overflow-y-auto hide-scrollbar pb-10">
            <DiscoverSidebar />
          </div>

          {/* Main Video Player */}
          <div className="xl:col-span-4 h-full bg-black rounded-2xl overflow-hidden relative shadow-xl">
            <VideoFeed initialProducts={products} />
          </div>

          {/* Related Videos Column */}
          <div className="hidden xl:block xl:col-span-3 h-full overflow-y-auto hide-scrollbar bg-white rounded-2xl border border-gray-100 shadow-sm">
            <RelatedVideos />
          </div>

          {/* Far Right Sidebar (Shop Info & Recommended) */}
          <div className="hidden lg:block xl:col-span-3 h-full overflow-y-auto hide-scrollbar space-y-6">
            <ShopInfoSidebar />
          </div>
          
        </div>
      </div>
    </div>
  );
}
