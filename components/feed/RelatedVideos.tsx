"use client";

import { Bookmark, Star, CheckCircle } from "lucide-react";

export default function RelatedVideos() {
  const RELATED_VIDEOS = [
    { id: "1", name: "Nike Air Force 1", price: 180000, shop: "Urban Kicks", rating: 4.6, reviews: 98, time: "0:24", image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=200&q=80", verified: true },
    { id: "2", name: "Adidas Originals", price: 140000, shop: "Urban Kicks", rating: 4.5, reviews: 76, time: "0:35", image: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=200&q=80", verified: true },
    { id: "3", name: "Travel Backpack", price: 95000, shop: "Urban Kicks", rating: 4.4, reviews: 52, time: "0:28", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&q=80", verified: true },
    { id: "4", name: "Smart Watch", price: 180000, shop: "Tech World Uganda", rating: 4.6, reviews: 93, time: "0:32", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&q=80", verified: true },
    { id: "5", name: "Women's Handbag", price: 85000, shop: "Classy Fashion", rating: 4.3, reviews: 67, time: "0:25", image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=200&q=80", verified: true },
    { id: "6", name: "Samsung Galaxy A15", price: 850000, shop: "Tech World Uganda", rating: 4.5, reviews: 196, time: "0:30", image: "https://images.unsplash.com/photo-1598327105666-5b89351cb31b?w=200&q=80", verified: true },
  ];

  return (
    <div className="flex flex-col h-full">
      
      {/* Tabs */}
      <div className="flex items-center gap-6 px-6 pt-6 pb-4 border-b border-gray-100 sticky top-0 bg-white z-10">
        <button className="px-4 py-2 bg-[#0A8B42] text-white rounded-full font-bold text-sm">Related</button>
        <button className="text-gray-500 font-bold text-sm hover:text-gray-900 transition-colors">From This Shop</button>
        <button className="text-gray-500 font-bold text-sm hover:text-gray-900 transition-colors">More Videos</button>
      </div>

      {/* Video List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {RELATED_VIDEOS.map(video => (
          <div key={video.id} className="flex gap-4 p-2 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer group">
            
            {/* Thumbnail */}
            <div className="relative w-28 h-32 rounded-xl overflow-hidden shrink-0 bg-gray-100">
              <img src={video.image} alt={video.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute bottom-1.5 right-1.5 bg-black/70 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                {video.time}
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0 py-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start gap-2">
                  <h4 className="font-bold text-gray-900 text-sm leading-tight line-clamp-2">{video.name}</h4>
                  <button className="text-gray-400 hover:text-[#0A8B42] shrink-0">
                    <Bookmark className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-[#0A8B42] font-bold text-sm mt-1">UGX {video.price.toLocaleString()}</div>
                
                <div className="flex items-center gap-1.5 text-[11px] text-gray-500 mt-1">
                  <Star className="w-3 h-3 text-yellow-400 fill-current" />
                  <span className="font-medium text-gray-700">{video.rating}</span>
                  <span>({video.reviews})</span>
                </div>
              </div>

              <div className="flex items-center gap-1 text-xs text-gray-600">
                <div className="w-4 h-4 bg-gray-200 rounded-full flex items-center justify-center shrink-0 overflow-hidden">
                  <span className="text-[8px] font-bold">{video.shop.substring(0,1)}</span>
                </div>
                <span className="truncate">{video.shop}</span>
                {video.verified && <CheckCircle className="w-3 h-3 text-blue-500 shrink-0" />}
              </div>
            </div>
            
          </div>
        ))}
      </div>

    </div>
  );
}
