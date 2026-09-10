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
                    <Truck className="w-5 h-5 text-[#4ade80]" />
                    <div><div className="text-xs font-bold">Fast Delivery</div><div className="text-[10px] text-gray-300">Across Uganda</div></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <HeadphonesIcon className="w-5 h-5 text-[#4ade80]" />
                    <div><div className="text-xs font-bold">Local Support</div><div className="text-[10px] text-gray-300">We're here to help</div></div>
                  </div>
                </div>
              </div>
            </div>

            {/* SHOP BY CATEGORY */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-[#0A8B42] font-bold text-lg">Shop by Category</h2>
                <Link href="/categories" className="text-xs font-bold text-[#0A8B42] hover:underline flex items-center gap-1">
                  View all <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
              <div className="grid grid-cols-7 gap-3">
                {[
                  { name: "Fashion", icon: "👗", color: "bg-orange-50" },
                  { name: "Shoes", icon: "👟", color: "bg-blue-50" },
                  { name: "Phones", icon: "📱", color: "bg-purple-50" },
                  { name: "Electronics", icon: "💻", color: "bg-cyan-50" },
                  { name: "Beauty", icon: "💄", color: "bg-pink-50" },
                  { name: "Food", icon: "🍔", color: "bg-orange-50" },
                  { name: "Furniture", icon: "🛋️", color: "bg-green-50" },
                ].map(cat => (
                  <Link key={cat.name} href={`/category/${cat.name.toLowerCase()}`} className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center gap-2 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className={`w-12 h-12 rounded-full ${cat.color} flex items-center justify-center text-2xl`}>{cat.icon}</div>
                    <span className="text-xs font-bold text-gray-800">{cat.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* TRENDING PRODUCTS */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🔥</span>
                  <h2 className="text-lg font-bold text-gray-900">Trending Products</h2>
                </div>
                <Link href="/trending" className="text-xs font-bold text-[#0A8B42] hover:underline flex items-center gap-1">
                  View all <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
              <div className="grid grid-cols-5 gap-3">
                {[
                  { name: "Nike Air Max", price: 150000, shop: "Urban Kicks", rating: 4.7, reviews: 124, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80", trend: true },
                  { name: "Samsung Galaxy A15", price: 850000, shop: "Tech World", rating: 4.5, reviews: 98, img: "https://images.unsplash.com/photo-1598327105666-5b89351cb31b?w=400&q=80" },
                  { name: "Wireless Earbuds", price: 120000, shop: "Gadget Hub", rating: 4.6, reviews: 98, img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&q=80" },
                  { name: "Women's Handbag", price: 85000, shop: "Classy Fashion", rating: 4.4, reviews: 62, img: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=400&q=80" },
                  { name: "Smart Watch", price: 180000, shop: "Tech World", rating: 4.3, reviews: 45, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80" },
                ].map((prod, i) => (
                  <div key={i} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm relative group cursor-pointer hover:shadow-md transition-shadow">
                    <button className="absolute top-2 right-2 z-10 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-400 hover:text-red-500">
                      <Heart className="w-3 h-3" />
                    </button>
                    <div className="aspect-square bg-gray-50 relative p-4">
                      {prod.trend && <div className="absolute top-2 left-2 bg-[#0A8B42] text-white text-[9px] font-bold px-1.5 py-0.5 rounded z-10">Trending</div>}
                      <img src={prod.img} alt={prod.name} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform" />
                    </div>
                    <div className="p-3">
                      <h3 className="font-bold text-gray-900 text-xs mb-1 truncate">{prod.name}</h3>
                      <div className="text-[#0A8B42] font-extrabold text-sm mb-1.5">UGX {prod.price.toLocaleString()}</div>
                      <div className="flex items-center gap-1 text-[10px] text-gray-500 mb-2">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="font-bold text-gray-700">{prod.rating}</span>
                        <span>({prod.reviews})</span>
                      </div>
                      <div className="flex items-center gap-1 text-[10px] text-gray-500 mb-2 truncate">
                        <Store className="w-3 h-3" /> {prod.shop}
                      </div>
                      <div className="flex items-center gap-1 text-[9px] font-bold text-[#0A8B42] bg-[#E6F4EA] w-max px-1.5 py-0.5 rounded">
                        <CheckCircle className="w-2.5 h-2.5" /> In Stock
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FEATURED SHOPS (Horizontal) */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-lg text-yellow-400">⭐</span>
                  <h2 className="text-lg font-bold text-gray-900">Featured Shops</h2>
                </div>
                <Link href="/shops" className="text-xs font-bold text-[#0A8B42] hover:underline flex items-center gap-1">
                  View all <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[
                  { name: "Urban Kicks", followers: "2.3k", rating: 4.7, reviews: 124, cat: "Fashion & Shoes", img: "https://images.unsplash.com/photo-1552346154-21d32810baa3?w=400&q=80", logo: "UK", logoColor: "bg-black text-white" },
                  { name: "Tech World Uganda", followers: "1.8k", rating: 4.6, reviews: 89, cat: "Electronics & Gadgets", img: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&q=80", logo: "TW", logoColor: "bg-blue-600 text-white" },
                  { name: "Beauty Hub", followers: "1.2k", rating: 4.5, reviews: 67, cat: "Beauty & Personal Care", img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=400&q=80", logo: "BH", logoColor: "bg-pink-500 text-white" },
                  { name: "Home Essentials", followers: "980", rating: 4.4, reviews: 52, cat: "Home & Furniture", img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&q=80", logo: "🏠", logoColor: "bg-orange-100 text-orange-600" },
                ].map((shop, i) => (
                  <div key={i} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm relative group cursor-pointer">
                    <div className="h-20 overflow-hidden relative">
                      <div className="absolute inset-0 bg-black/20 z-10" />
                      <img src={shop.img} alt={shop.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <div className="px-4 pb-4 pt-8 relative text-center">
                      <div className={`absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 ${shop.logoColor} rounded-full flex items-center justify-center font-bold border-2 border-white shadow-sm z-20 text-sm`}>
                        {shop.logo}
                      </div>
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <h3 className="font-bold text-gray-900 text-sm">{shop.name}</h3>
                        <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
                      </div>
                      <div className="flex items-center justify-center gap-1.5 text-[10px] text-gray-500 mb-1.5">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="font-bold text-gray-700">{shop.rating} ({shop.reviews})</span>
                        <span>•</span>
                        <span>{shop.followers} followers</span>
                      </div>
                      <div className="text-[10px] text-gray-500 mb-3">{shop.cat}</div>
                      <div className="flex justify-center items-center gap-1 text-[10px] font-bold text-[#0A8B42] bg-[#E6F4EA] w-max mx-auto px-2 py-0.5 rounded-full">
                        <CheckCircle className="w-2.5 h-2.5" /> Verified
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN (Approx 28%) */}
          <div className="w-full lg:w-[320px] xl:w-[360px] space-y-6 shrink-0">
            
            {/* FEATURED SHOPS (List) */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-base font-bold text-gray-900">Featured Shops</h2>
                <Link href="/shops" className="text-[11px] font-bold text-[#0A8B42] hover:underline flex items-center gap-1">
                  View all <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
              <div className="space-y-4">
                {[
                  { name: "Urban Kicks", rating: 4.7, reviews: 124, followers: "2.3k", cat: "Fashion & Shoes", logo: "UK", color: "bg-black text-white" },
                  { name: "Tech World Uganda", rating: 4.6, reviews: 89, followers: "1.8k", cat: "Electronics & Gadgets", logo: "TW", color: "bg-blue-600 text-white" },
                  { name: "Beauty Hub", rating: 4.5, reviews: 67, followers: "1.2k", cat: "Beauty & Personal Care", logo: "BH", color: "bg-pink-500 text-white" },
                  { name: "Home Essentials", rating: 4.4, reviews: 52, followers: "980", cat: "Home & Furniture", logo: "🏠", color: "bg-cyan-600 text-white" },
                  { name: "Fresh Foods UG", rating: 4.8, reviews: 96, followers: "1.5k", cat: "Food & Beverages", logo: "🥬", color: "bg-green-500 text-white" },
                ].map((shop, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`w-10 h-10 ${shop.color} rounded-full flex items-center justify-center font-bold text-xs shrink-0`}>
                      {shop.logo}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-sm text-gray-900 truncate">{shop.name}</h3>
                      <div className="flex items-center gap-1 text-[10px] text-gray-500">
                        <Star className="w-2.5 h-2.5 text-yellow-400 fill-current" />
                        <span className="font-bold text-gray-700">{shop.rating} ({shop.reviews})</span>
                        <span>•</span>
                        <span>{shop.followers} followers</span>
                      </div>
                      <div className="text-[10px] text-gray-400 truncate mt-0.5">{shop.cat}</div>
                    </div>
                    <button className="px-3 py-1 border border-gray-200 text-[#0A8B42] font-bold text-[10px] rounded hover:bg-gray-50 transition-colors">
                      Follow
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* BANNER: Support Ugandan Businesses */}
            <div className="relative rounded-2xl overflow-hidden bg-blue-900 text-white aspect-[2/1] group cursor-pointer shadow-sm">
              <img src="https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=600&q=80" alt="Kampala" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60 group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a]/90 to-[#1e3a8a]/40 p-5 flex flex-col justify-end">
                <h3 className="font-bold text-lg mb-1 leading-tight">Support<br/>Ugandan Businesses</h3>
                <p className="text-[11px] text-blue-100 mb-3">Local products. Local jobs.<br/>A stronger Uganda.</p>
                <button className="bg-[#0A8B42] hover:bg-[#087336] text-white px-3 py-1.5 rounded text-[11px] font-bold w-max flex items-center gap-1 transition-colors">
                  Explore Local Shops <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* POPULAR VIDEOS */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-base font-bold text-gray-900">Popular Videos</h2>
                <Link href="/discover" className="text-[11px] font-bold text-[#0A8B42] hover:underline flex items-center gap-1">
                  View all <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-2">
                <div className="relative aspect-video rounded-xl overflow-hidden bg-black mb-2 cursor-pointer group">
                  <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80" alt="Skincare video" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1">
                    <Heart className="w-3 h-3 fill-current text-white" /> 2.4K
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                    0:28
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-10 h-10 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                      <Play className="w-4 h-4 text-white fill-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-2 right-12">
                    <h3 className="text-white font-bold text-xs truncate drop-shadow-md">Skincare for Glowing Skin</h3>
                    <div className="flex items-center gap-1 mt-0.5">
                      <div className="w-4 h-4 bg-pink-500 rounded-full flex items-center justify-center text-[8px] font-bold text-white">BH</div>
                      <span className="text-white/90 text-[10px] drop-shadow-md truncate">Beauty Hub</span>
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
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm">💡</span>
                  <h2 className="text-base font-bold text-gray-900">Recommended For You</h2>
                </div>
                <Link href="/recommended" className="text-[11px] font-bold text-[#0A8B42] hover:underline flex items-center gap-1">
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
                    <div className="w-14 h-14 bg-gray-100 rounded-lg overflow-hidden shrink-0">
                      <img src={prod.img} alt={prod.name} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform p-1" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-xs text-gray-900 truncate pr-4 relative">
                        {prod.name}
                        <Heart className="w-3 h-3 text-gray-300 absolute right-0 top-0.5 group-hover:text-red-500 transition-colors" />
                      </h4>
                      <div className="text-[#0A8B42] font-extrabold text-xs">UGX {prod.price.toLocaleString()}</div>
                      <div className="flex items-center gap-1 text-[9px] text-gray-500 mt-0.5">
                        <Star className="w-2.5 h-2.5 text-yellow-400 fill-current" />
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
            <div className="relative rounded-2xl overflow-hidden bg-black text-white h-48 flex group cursor-pointer shadow-sm">
              <div className="w-1/2 p-5 flex flex-col justify-center z-10">
                <h3 className="font-bold text-sm mb-1 leading-tight">Discover Products<br/>Through Short Videos</h3>
                <p className="text-[10px] text-gray-300 mb-3">Scroll. Watch. Shop.</p>
                <button className="bg-[#0A8B42] hover:bg-[#087336] text-white px-3 py-1.5 rounded text-[10px] font-bold w-max flex items-center gap-1 transition-colors">
                  Watch Now <ArrowRight className="w-3 h-3" />
                </button>
              </div>
              <div className="w-1/2 relative">
                <img src="https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=400&q=80" alt="Phone" className="absolute right-0 top-0 w-[120%] h-[120%] max-w-none object-cover opacity-70 group-hover:scale-105 transition-transform duration-500 origin-bottom-right" />
                <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
