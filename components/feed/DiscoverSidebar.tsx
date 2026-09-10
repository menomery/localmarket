"use client";

import Link from "next/link";
import { PlayCircle, Users, TrendingUp, Sparkles, MapPin, Star, Zap, ShoppingBag, Store } from "lucide-react";

export default function DiscoverSidebar() {
  const CATEGORIES = [
    { name: "Fashion", icon: "👗", color: "bg-pink-100" },
    { name: "Shoes", icon: "👟", color: "bg-blue-100" },
    { name: "Phones", icon: "📱", color: "bg-gray-100" },
    { name: "Electronics", icon: "💻", color: "bg-indigo-100" },
    { name: "Beauty", icon: "💄", color: "bg-rose-100" },
    { name: "Food", icon: "🍔", color: "bg-orange-100" },
    { name: "Furniture", icon: "🛋️", color: "bg-green-100" }
  ];

  return (
    <div className="flex flex-col space-y-8 pr-2">
      
      {/* Top Nav */}
      <div className="space-y-1">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-6 bg-[#0A8B42] rounded flex items-center justify-center">
            <ShoppingBag className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="font-bold text-gray-900">Discover</span>
        </div>
        
        <Link href="/discover" className="flex items-center gap-3 px-3 py-2.5 bg-[#E6F4EA] text-[#0A8B42] rounded-xl font-bold">
          <PlayCircle className="w-5 h-5" />
          For You
        </Link>
        <Link href="/following" className="flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:bg-gray-100 rounded-xl font-medium transition-colors">
          <Users className="w-5 h-5" />
          Following
        </Link>
        <Link href="/trending" className="flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:bg-gray-100 rounded-xl font-medium transition-colors">
          <TrendingUp className="w-5 h-5" />
          Trending
        </Link>
        <Link href="/new" className="flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:bg-gray-100 rounded-xl font-medium transition-colors">
          <Sparkles className="w-5 h-5" />
          New Arrivals
        </Link>
      </div>

      <div className="h-px bg-gray-200 w-full"></div>

      {/* Categories */}
      <div>
        <div className="flex justify-between items-center mb-4 px-2">
          <h3 className="font-bold text-gray-900">Categories</h3>
          <Link href="/categories" className="text-xs font-semibold text-[#0A8B42] hover:underline">View All →</Link>
        </div>
        <div className="space-y-1">
          {CATEGORIES.map(cat => (
            <Link key={cat.name} href={`/category/${cat.name.toLowerCase()}`} className="flex items-center gap-3 px-2 py-2 hover:bg-gray-100 rounded-xl transition-colors group">
              <div className={`w-8 h-8 rounded-full ${cat.color} flex items-center justify-center text-sm group-hover:scale-110 transition-transform`}>
                {cat.icon}
              </div>
              <span className="font-medium text-gray-700 text-sm">{cat.name}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="h-px bg-gray-200 w-full"></div>

      {/* Quick Links */}
      <div>
        <h3 className="font-bold text-gray-900 mb-4 px-2">Quick Links</h3>
        <div className="space-y-1">
          <Link href="/nearby" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-xl font-medium text-sm transition-colors">
            <MapPin className="w-4 h-4" />
            Shops Near You
          </Link>
          <Link href="/top-rated" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-xl font-medium text-sm transition-colors">
            <Star className="w-4 h-4" />
            Top Rated Shops
          </Link>
          <Link href="/deals" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-xl font-medium text-sm transition-colors">
            <Zap className="w-4 h-4" />
            Flash Deals
          </Link>
        </div>
      </div>

      {/* CTA Box */}
      <div className="bg-[#0A8B42] rounded-2xl p-5 text-white shadow-md relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
          <Store className="w-5 h-5 text-white" />
        </div>
        <h3 className="font-bold text-lg mb-2">Want to sell on LocalMarket?</h3>
        <p className="text-sm text-green-50 mb-4">Create your digital shop and reach more customers today.</p>
        <Link href="/seller" className="block w-full bg-white text-[#0A8B42] font-bold py-2.5 rounded-xl text-center hover:bg-gray-50 transition-colors text-sm">
          Open a Shop →
        </Link>
      </div>

    </div>
  );
}
