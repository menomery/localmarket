"use client";

import Link from "next/link";
import { Search, Bell, Home, PlayCircle, Grid, Store, Heart, Star, CheckCircle, ShieldCheck, CreditCard, Truck, HeadphonesIcon, ArrowRight, Play, ShoppingBag } from "lucide-react";

export default function HomePage() {
  return (
    <div className="bg-[#F8F9FA] min-h-screen font-sans">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* LEFT COLUMN (Approx 72%) */}
          <div className="flex-1 min-w-0 space-y-8">
            
            {/* HERO BANNER */}
            <div className="relative rounded-2xl overflow-hidden bg-[#075e2d] text-white h-[380px] shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&q=80" 
                alt="Shopping" 
                className="absolute right-0 top-0 h-full w-2/3 object-cover object-left mask-image-gradient"
                style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 40%)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#064e25] via-[#075e2d]/90 to-transparent z-10" />
              
              <div className="relative z-20 h-full flex flex-col p-10 justify-between">
                <div>
                  <div className="text-xs font-bold tracking-widest text-[#4ade80] mb-4 uppercase">LocalMarket</div>
                  <h1 className="text-4xl lg:text-5xl font-extrabold leading-[1.1] mb-4 text-white">
                    Discover local products.<br/>Shop local.
                  </h1>
                  <p className="text-sm lg:text-base text-gray-200 max-w-md mb-8 leading-relaxed">
                    Support local businesses and find amazing products from trusted sellers across Uganda.
                  </p>
                  <div className="flex items-center gap-4">
                    <Link href="/discover" className="bg-[#0A8B42] hover:bg-[#087336] text-white px-6 py-2.5 rounded-full font-bold transition-colors flex items-center gap-2 shadow-lg shadow-green-900/20 text-sm">
                      Start Discovering <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link href="/seller" className="bg-transparent hover:bg-white/10 text-white border border-white/30 px-6 py-2.5 rounded-full font-bold transition-colors text-sm">
                      Open a Shop
                    </Link>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4 pt-6 border-t border-white/10 mt-auto">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[#4ade80]" />
                    <div><div className="text-xs font-bold">Verified Sellers</div><div className="text-[10px] text-gray-300">Shop with confidence</div></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-[#4ade80]" />
                    <div><div className="text-xs font-bold">Secure Payments</div><div className="text-[10px] text-gray-300">Flexible options</div></div>
                  </div>
                  <div className="flex items-center gap-2">
            <div className="relative rounded-2xl overflow-hidden bg-[#075e2d] text-white h-[250px] lg:h-[300px] shadow-sm">
              <div className="absolute right-0 top-0 w-1/2 h-full opacity-60">
                <img src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80" alt="Hero" className="w-full h-full object-cover" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 40%)' }} />
              </div>
              <div className="relative z-10 p-6 lg:p-8 flex flex-col justify-center h-full w-[80%] max-w-2xl">
                <h3 className="text-[10px] font-bold tracking-widest uppercase mb-2 text-green-200">LocalMarket</h3>
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight mb-3">
                  Discover local<br />products.<br />Shop local.
                </h1>
                <p className="text-xs lg:text-sm text-green-50 mb-6 max-w-md leading-relaxed">
                  Support local businesses and find amazing products from trusted sellers across Uganda.
                </p>
                <div className="flex items-center gap-3">
                  <button className="bg-[#4ade80] hover:bg-[#22c55e] text-green-950 px-5 py-2.5 rounded-full font-bold text-xs flex items-center gap-2 transition-transform hover:scale-105 shadow-lg shadow-green-900/20">
                    Start Discovering <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="bg-transparent border border-white hover:bg-white/10 text-white px-5 py-2.5 rounded-full font-bold text-xs transition-colors">
                    Open a Shop
                  </button>
                </div>
              </div>
            </div>

            {/* SHOP BY CATEGORY */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-[#0A8B42] font-bold text-base lg:text-lg">Shop by Category</h2>
                <Link href="/categories" className="text-[10px] lg:text-xs font-bold text-[#0A8B42] hover:underline flex items-center gap-1">
                  View all <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
              <div className="grid grid-cols-4 md:grid-cols-7 gap-2 lg:gap-3">
                {[
                  { name: "Fashion", icon: "👗", color: "text-blue-500" },
                  { name: "Shoes", icon: "👟", color: "text-gray-500" },
                  { name: "Phones", icon: "📱", color: "text-purple-500" },
                  { name: "Electronics", icon: "💻", color: "text-blue-400" },
                  { name: "Beauty", icon: "💄", color: "text-pink-500" },
                  { name: "Food", icon: "🍔", color: "text-orange-500" },
                  { name: "Furniture", icon: "🛋️", color: "text-yellow-600" }
                ].map((cat) => (
                  <Link key={cat.name} href={`/category/${cat.name.toLowerCase()}`} className="bg-white rounded-xl lg:rounded-2xl border border-gray-100 shadow-sm p-3 lg:p-4 flex flex-col items-center justify-center gap-2 hover:shadow-md transition-all hover:-translate-y-1 group">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gray-50 flex items-center justify-center text-xl lg:text-2xl group-hover:scale-110 transition-transform">
                      {cat.icon}
                    </div>
                    <span className="font-bold text-[10px] lg:text-xs text-gray-700">{cat.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* TRENDING PRODUCTS */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-gray-900 font-bold text-base lg:text-lg">Trending Products</h2>
                <Link href="/trending" className="text-[10px] lg:text-xs font-bold text-[#0A8B42] hover:underline flex items-center gap-1">
                  View all <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4">
                {[
                  { name: "Nike Air Force 1", price: 180000, rating: 4.6, reviews: 98, shop: "Urban Kicks", img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&q=80" },
                  { name: "Samsung Galaxy A15", price: 850000, rating: 4.5, reviews: 196, shop: "Tech World", img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&q=80" },
                  { name: "Travel Backpack", price: 95000, rating: 4.4, reviews: 52, shop: "Bag Store", img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80" },
                  { name: "Smart Watch", price: 180000, rating: 4.6, reviews: 93, shop: "Gadget Hub", img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&q=80" },
                  { name: "Women's Handbag", price: 85000, shop: "Classy Fashion", rating: 4.3, reviews: 67, img: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=400&q=80" },
                ].map((prod, i) => (
                  <div key={i} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm relative group cursor-pointer hover:shadow-md transition-shadow">
                    <div className="h-28 lg:h-32 overflow-hidden relative">
                      <img src={prod.img} alt={prod.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <button className="absolute top-2 right-2 w-6 h-6 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white text-gray-400 hover:text-red-500 transition-colors">
                        <Heart className="w-3 h-3" />
                      </button>
                    </div>
                    <div className="p-2 lg:p-3">
                      <h3 className="font-bold text-[10px] lg:text-xs text-gray-900 truncate mb-1">{prod.name}</h3>
                      <div className="text-[#0A8B42] font-extrabold text-xs lg:text-sm mb-1">UGX {prod.price.toLocaleString()}</div>
                      <div className="flex items-center gap-1 text-[8px] lg:text-[10px] text-gray-500 mb-1">
                        <Star className="w-2.5 h-2.5 text-yellow-400 fill-current" />
                        <span className="font-bold text-gray-700">{prod.rating}</span>
                        <span>({prod.reviews})</span>
                      </div>
                      <div className="flex items-center gap-1 text-[8px] lg:text-[10px] text-gray-500">
                        <Store className="w-2.5 h-2.5" /> <span className="truncate">{prod.shop}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FEATURED SHOPS (Horizontal) */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-gray-900 font-bold text-base lg:text-lg">Featured Shops</h2>
                <Link href="/shops" className="text-[10px] lg:text-xs font-bold text-[#0A8B42] hover:underline flex items-center gap-1">
                  View all <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
                {[
                  { name: "Fashion Hub", desc: "Trendy clothing & accessories", rating: 4.8, initial: "FH", color: "bg-pink-100 text-pink-600" },
                  { name: "Electro Gadgets", desc: "Phones, laptops & more", rating: 4.9, initial: "EG", color: "bg-blue-100 text-blue-600" },
                  { name: "Fresh Groceries", desc: "Daily fresh farm produce", rating: 4.7, initial: "FG", color: "bg-green-100 text-green-600" },
                  { name: "Home Decor", desc: "Furniture & interior design", rating: 4.6, initial: "HD", color: "bg-orange-100 text-orange-600" },
                ].map((shop, i) => (
                  <div key={i} className="bg-white rounded-xl border border-gray-100 p-3 lg:p-4 flex items-center gap-3 hover:shadow-md transition-shadow cursor-pointer">
                    <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center font-bold text-sm lg:text-base ${shop.color} shrink-0`}>
                      {shop.initial}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-[10px] lg:text-xs text-gray-900 truncate flex items-center gap-1">
                        {shop.name} <ShieldCheck className="w-3 h-3 text-blue-500" />
                      </h3>
                      <p className="text-[8px] lg:text-[10px] text-gray-500 truncate mb-0.5">{shop.desc}</p>
                      <div className="flex items-center gap-1 text-[8px] lg:text-[10px] font-medium text-gray-600">
                        <Star className="w-2.5 h-2.5 text-yellow-400 fill-current" /> {shop.rating}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN (Sidebar) */}
          <div className="col-span-12 lg:col-span-4 xl:col-span-3 space-y-4 lg:space-y-6">
            
            {/* FEATURED SHOPS (Vertical) */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 lg:p-5">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-sm font-bold text-gray-900">Featured Shops</h2>
                <Link href="/shops" className="text-[10px] font-bold text-[#0A8B42] hover:underline flex items-center gap-1">
                  View all <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
              <div className="space-y-4">
                {[
                  { name: "Urban Kicks", initial: "UK", color: "bg-gray-900 text-white", rating: 4.7, reviews: 124, followers: "2.3k", tags: "Fashion & Shoes" },
                  { name: "Tech World Uganda", initial: "TW", color: "bg-blue-600 text-white", rating: 4.6, reviews: 89, followers: "1.8k", tags: "Electronics & Gadgets" },
                  { name: "Beauty Hub", initial: "BH", color: "bg-pink-500 text-white", rating: 4.5, reviews: 67, followers: "1.2k", tags: "Beauty & Personal Care" },
                  { name: "Home Essentials", initial: "HE", color: "bg-teal-500 text-white", rating: 4.4, reviews: 52, followers: "980", tags: "Home & Furniture" },
                  { name: "Fresh Foods UG", initial: "FF", color: "bg-green-500 text-white", rating: 4.8, reviews: 96, followers: "1.5k", tags: "Food & Beverages" },
                ].map((shop, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${shop.color}`}>
                      {shop.initial}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-xs text-gray-900 truncate leading-tight mb-0.5">{shop.name}</h4>
                      <div className="flex items-center gap-1 text-[9px] text-gray-500 mb-0.5">
                        <Star className="w-2.5 h-2.5 text-yellow-400 fill-current" />
                        <span className="font-bold text-gray-700">{shop.rating} ({shop.reviews})</span>
                        <span>• {shop.followers} followers</span>
                      </div>
                      <div className="text-[9px] text-gray-400 truncate">{shop.tags}</div>
                    </div>
                    <button className="border border-gray-200 hover:border-[#0A8B42] hover:text-[#0A8B42] text-green-700 text-[10px] font-bold px-3 py-1.5 rounded-full transition-colors shrink-0">
                      Follow
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* CITY BANNER */}
            <div className="relative rounded-2xl overflow-hidden bg-blue-900 text-white aspect-[2.5/1] lg:aspect-[2/1] group cursor-pointer shadow-sm">
              <img src="https://images.unsplash.com/photo-1546272989-40c92939c6c2?w=600&q=80" alt="Kampala" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a]/90 to-[#1e3a8a]/40 p-4 lg:p-5 flex flex-col justify-end">
                <h3 className="font-bold text-sm lg:text-base mb-1 leading-tight">Support<br/>Ugandan Businesses</h3>
                <p className="text-[9px] lg:text-[10px] text-blue-100 mb-2 lg:mb-3">Local products. Local jobs.<br/>A stronger Uganda.</p>
                <button className="bg-[#0A8B42] hover:bg-[#087336] text-white px-3 py-1.5 rounded text-[10px] font-bold w-max flex items-center gap-1 transition-colors">
                  Explore Local Shops <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* POPULAR VIDEOS */}
            <div>
              <div className="flex justify-between items-center mb-2 lg:mb-3">
                <h2 className="text-sm font-bold text-gray-900">Popular Videos</h2>
                <Link href="/discover" className="text-[10px] font-bold text-[#0A8B42] hover:underline flex items-center gap-1">
                  View all <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-2">
                <div className="relative aspect-[16/7] lg:aspect-video rounded-xl overflow-hidden bg-black mb-2 cursor-pointer group">
                  <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80" alt="Skincare video" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white text-[9px] lg:text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1">
                    <Heart className="w-2.5 h-2.5 lg:w-3 lg:h-3 fill-current text-white" /> 2.4K
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm text-white text-[9px] lg:text-[10px] font-bold px-1.5 py-0.5 rounded">
                    0:28
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                      <Play className="w-3 h-3 lg:w-4 lg:h-4 text-white fill-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-2 right-12">
                    <h3 className="text-white font-bold text-[10px] lg:text-xs truncate drop-shadow-md">Skincare for Glowing Skin</h3>
                    <div className="flex items-center gap-1 mt-0.5">
                      <div className="w-3 h-3 lg:w-4 lg:h-4 bg-pink-500 rounded-full flex items-center justify-center text-[6px] lg:text-[8px] font-bold text-white">BH</div>
                      <span className="text-white/90 text-[8px] lg:text-[10px] drop-shadow-md truncate">Beauty Hub</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden relative bg-gray-100"><img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&q=80" alt="Thumb" className="w-full h-full object-cover" /></div>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden relative bg-gray-100"><img src="https://images.unsplash.com/photo-1598327105666-5b89351cb31b?w=200&q=80" alt="Thumb" className="w-full h-full object-cover" /></div>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden relative bg-gray-100"><img src="https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=200&q=80" alt="Thumb" className="w-full h-full object-cover" /></div>
                </div>
              </div>
            </div>

            {/* RECOMMENDED FOR YOU */}
            <div>
              <div className="flex justify-between items-center mb-2 lg:mb-3">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs">✨</span>
                  <h2 className="text-sm font-bold text-gray-900">Recommended For You</h2>
                </div>
                <Link href="/recommended" className="text-[10px] font-bold text-[#0A8B42] hover:underline flex items-center gap-1">
                  View all <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-3 space-y-3">
                {[
                  { name: "Portable Bluetooth Speaker", price: 95000, rating: 4.5, reviews: 67, shop: "Tech World", img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=200&q=80" },
                  { name: "Men's Casual Shoes", price: 110000, rating: 4.6, reviews: 82, shop: "Urban Kicks", img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=200&q=80" },
                  { name: "Power Bank 20000mAh", price: 75000, rating: 4.4, reviews: 56, shop: "Gadget Hub", img: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=200&q=80" },
                ].map((prod, i) => (
                  <div key={i} className="flex gap-3 items-center group cursor-pointer">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gray-100 rounded-lg overflow-hidden shrink-0">
                      <img src={prod.img} alt={prod.name} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform p-1" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-[10px] lg:text-xs text-gray-900 truncate pr-4 relative">
                        {prod.name}
                        <Heart className="w-3 h-3 text-gray-300 absolute right-0 top-0.5 group-hover:text-red-500 transition-colors" />
                      </h4>
                      <div className="text-[#0A8B42] font-extrabold text-[10px] lg:text-xs">UGX {prod.price.toLocaleString()}</div>
                      <div className="flex items-center gap-1 text-[8px] lg:text-[9px] text-gray-500 mt-0.5">
                        <Star className="w-2 h-2 lg:w-2.5 lg:h-2.5 text-yellow-400 fill-current" />
                        <span className="font-bold text-gray-700">{prod.rating}</span>
                        <span>({prod.reviews})</span>
                        <span className="truncate">@ {prod.shop}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* BANNER: Discover Products Through Short Videos */}
            <div className="relative rounded-2xl overflow-hidden bg-black text-white h-24 lg:h-32 flex group cursor-pointer shadow-sm">
              <div className="w-1/2 p-4 flex flex-col justify-center z-10">
                <h3 className="font-bold text-[10px] lg:text-xs mb-1 leading-tight">Discover Products<br/>Through Short Videos</h3>
                <p className="text-[8px] lg:text-[9px] text-gray-300 mb-2">Scroll. Watch. Shop.</p>
                <button className="bg-[#0A8B42] hover:bg-[#087336] text-white px-2 py-1 lg:px-3 lg:py-1.5 rounded text-[8px] lg:text-[10px] font-bold w-max flex items-center gap-1 transition-colors">
                  Watch Now <ArrowRight className="w-2.5 h-2.5 lg:w-3 lg:h-3" />
                </button>
              </div>
              <div className="w-1/2 relative">
                <img src="https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=400&q=80" alt="Phone" className="absolute right-0 top-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500 origin-bottom-right" />
                <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
