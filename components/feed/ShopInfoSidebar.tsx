"use client";

import { Bookmark, Star, MapPin, Phone, MessageCircle, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function ShopInfoSidebar() {
  const LIKED_PRODUCTS = [
    { id: "1", name: "Nike Air Max 90", price: 150000, shop: "Urban Kicks", rating: 4.5, reviews: 86, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&q=80" },
    { id: "2", name: "Adidas Ultraboost", price: 220000, shop: "Urban Kicks", rating: 4.7, reviews: 112, image: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=200&q=80" },
    { id: "3", name: "Puma RS-X", price: 130000, shop: "Urban Kicks", rating: 4.3, reviews: 64, image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=200&q=80" },
    { id: "4", name: "Reebok Classic", price: 120000, shop: "Urban Kicks", rating: 4.4, reviews: 73, image: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=200&q=80" },
  ];

  return (
    <div className="flex flex-col space-y-6 pb-10">
      
      {/* Shop Info Card */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h3 className="font-bold text-gray-900 mb-5">Shop Information</h3>
        
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0">
            UK
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h4 className="font-bold text-lg text-gray-900">Urban Kicks</h4>
              <ShieldCheck className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-sm text-gray-500 mb-1">2.3K followers</div>
            <div className="flex items-center gap-1.5 text-xs text-gray-600">
              <Star className="w-3.5 h-3.5 text-yellow-400 fill-current" />
              <span className="font-bold text-gray-900">4.7</span>
              <span>(124 reviews)</span>
            </div>
          </div>
        </div>

        <div className="flex gap-3 mb-6">
          <button className="flex-1 bg-[#0A8B42] hover:bg-[#087336] text-white px-4 py-2.5 rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2">
            <span className="w-4 h-4 flex items-center justify-center">+</span> Follow
          </button>
          <button className="flex-1 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-4 py-2.5 rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2">
            <MessageCircle className="w-4 h-4" /> Chat
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4 text-gray-500" />
            </div>
            <div>
              <div className="text-xs font-semibold text-gray-500">Location</div>
              <div className="text-sm text-gray-900 mt-0.5">Kampala, Uganda</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center shrink-0">
              <MessageCircle className="w-4 h-4 text-green-600" />
            </div>
            <div>
              <div className="text-xs font-semibold text-gray-500">WhatsApp</div>
              <div className="text-sm text-gray-900 mt-0.5">+256 700 123 456</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
              <Phone className="w-4 h-4 text-gray-500" />
            </div>
            <div>
              <div className="text-xs font-semibold text-gray-500">Phone</div>
              <div className="text-sm text-gray-900 mt-0.5">+256 700 123 456</div>
            </div>
          </div>
        </div>
      </div>

      {/* Promo Banner */}
      <div className="relative rounded-2xl overflow-hidden bg-black text-white aspect-[21/9] group cursor-pointer shadow-sm">
        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80" alt="Banner" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60 group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex flex-col justify-center p-6">
          <h3 className="font-bold text-lg mb-1 max-w-[150px] leading-tight">Premium Sneakers For Every Style</h3>
          <p className="text-[10px] text-white/80">Authentic • Quality • Affordable</p>
        </div>
      </div>

      {/* You May Also Like */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <div className="flex justify-between items-center mb-5">
          <h3 className="font-bold text-gray-900">You May Also Like</h3>
          <Link href="/discover" className="text-xs font-semibold text-[#0A8B42] hover:underline flex items-center">
            View All <ArrowRight className="w-3 h-3 ml-1" />
          </Link>
        </div>
        
        <div className="space-y-4">
          {LIKED_PRODUCTS.map(product => (
            <div key={product.id} className="flex gap-3 group cursor-pointer">
              <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-100 shrink-0">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="flex-1 py-1">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-gray-900 text-sm truncate pr-2">{product.name}</h4>
                  <button className="text-gray-400 hover:text-[#0A8B42] shrink-0">
                    <Bookmark className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="text-[#0A8B42] font-bold text-xs mt-1">UGX {product.price.toLocaleString()}</div>
                <div className="flex items-center gap-1 mt-1.5">
                  <Star className="w-3 h-3 text-yellow-400 fill-current" />
                  <span className="text-xs font-medium text-gray-700">{product.rating}</span>
                  <span className="text-[10px] text-gray-500">({product.reviews})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Report Button */}
      <button className="w-full flex items-center justify-between p-4 bg-green-50/50 hover:bg-green-50 border border-green-100 rounded-2xl transition-colors group">
        <div className="flex items-start gap-3 text-left">
          <ShieldCheck className="w-5 h-5 text-[#0A8B42] shrink-0 mt-0.5" />
          <div>
            <div className="text-sm font-bold text-[#0A8B42]">Report this video</div>
            <div className="text-xs text-green-700 mt-0.5">Help keep LocalMarket safe and trusted for everyone.</div>
          </div>
        </div>
        <ArrowRight className="w-4 h-4 text-[#0A8B42] opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 transform" />
      </button>

    </div>
  );
}
