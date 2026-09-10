"use client";

import Link from "next/link";
import { PlayCircle, ShieldCheck, CreditCard, Truck, HeadphonesIcon, ArrowRight, Heart, Star, CheckCircle, Store } from "lucide-react";

const CATEGORIES = [
  { name: "Fashion", icon: "👔" },
  { name: "Shoes", icon: "👟" },
  { name: "Phones", icon: "📱" },
  { name: "Electronics", icon: "💻" },
  { name: "Beauty", icon: "💄" },
  { name: "Food", icon: "🍔" },
  { name: "Furniture", icon: "🛋️" }
];

const TRENDING_PRODUCTS = [
  { id: "1", name: "Nike Air Max", price: 150000, shop: "Urban Kicks", rating: 4.7, reviews: 124, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80", inStock: true },
  { id: "2", name: "Samsung Galaxy A15", price: 850000, shop: "Tech World", rating: 4.6, reviews: 89, image: "https://images.unsplash.com/photo-1598327105666-5b89351cb31b?w=500&q=80", inStock: true },
  { id: "3", name: "Wireless Earbuds", price: 120000, shop: "Gadget Hub", rating: 4.8, reviews: 98, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80", inStock: true },
  { id: "4", name: "Women's Handbag", price: 85000, shop: "Classy Fashion", rating: 4.4, reviews: 62, image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=500&q=80", inStock: true },
];

const FEATURED_SHOPS = [
  { id: "s1", name: "Urban Kicks", category: "Fashion & Shoes", followers: "2.3K", rating: 4.7, reviews: 124, verified: true },
  { id: "s2", name: "Tech World Uganda", category: "Electronics & Gadgets", followers: "1.8K", rating: 4.6, reviews: 89, verified: true },
  { id: "s3", name: "Beauty Hub", category: "Beauty & Personal Care", followers: "1.2K", rating: 4.5, reviews: 67, verified: true },
  { id: "s4", name: "Home Essentials", category: "Home & Furniture", followers: "980", rating: 4.8, reviews: 112, verified: true },
];

export default function Home() {
  return (
    <div className="bg-[#F8F9FA] min-h-screen pb-12">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* Main Layout: 3 Columns Content, 1 Column Sidebar */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          
          {/* Left Main Content */}
          <div className="xl:col-span-3 space-y-8">
            
            {/* Hero Banner */}
            <div className="relative rounded-2xl overflow-hidden bg-[#0A8B42] text-white">
              {/* Background abstract shapes / image placeholder */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A8B42] to-[#0A8B42]/80 z-10" />
              <img 
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&q=80" 
                alt="Shopping" 
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40"
              />
              
              <div className="relative z-20 p-8 md:p-12 lg:p-16 flex flex-col items-start w-full md:w-2/3">
                <span className="text-sm font-bold tracking-wider uppercase mb-2 text-white/90">LocalMarket</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
                  Discover local products.<br/>Shop local.
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
                  Support local businesses and find amazing products from trusted sellers across Uganda.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/discover" className="bg-white text-[#0A8B42] hover:bg-gray-50 px-8 py-3.5 rounded-full font-bold transition-colors flex items-center gap-2">
                    Start Discovering <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link href="/seller" className="bg-black/20 hover:bg-black/30 backdrop-blur-sm text-white px-8 py-3.5 rounded-full font-bold transition-colors border border-white/20">
                    Open a Shop
                  </Link>
                </div>
              </div>

              {/* Bottom Feature Bar */}
              <div className="relative z-20 bg-black/10 backdrop-blur-md border-t border-white/10 p-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-medium">
                  <div className="flex items-center gap-3"><ShieldCheck className="w-5 h-5 text-green-300" /> Verified Sellers</div>
                  <div className="flex items-center gap-3"><CreditCard className="w-5 h-5 text-green-300" /> Secure Payments</div>
                  <div className="flex items-center gap-3"><Truck className="w-5 h-5 text-green-300" /> Fast Delivery</div>
                  <div className="flex items-center gap-3"><HeadphonesIcon className="w-5 h-5 text-green-300" /> Local Support</div>
                </div>
              </div>
            </div>

            {/* Shop by Category */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-900">Shop by Category</h2>
                <Link href="/categories" className="text-sm font-semibold text-[#0A8B42] hover:underline flex items-center gap-1">
                  View all <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
                {CATEGORIES.map(cat => (
                  <Link key={cat.name} href={`/category/${cat.name.toLowerCase()}`} className="flex-shrink-0 w-28 bg-white rounded-2xl p-4 flex flex-col items-center justify-center gap-3 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-2xl">{cat.icon}</div>
                    <span className="text-sm font-semibold text-gray-800">{cat.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Trending Products */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🔥</span>
                  <h2 className="text-xl font-bold text-gray-900">Trending Products</h2>
                </div>
                <Link href="/trending" className="text-sm font-semibold text-[#0A8B42] hover:underline flex items-center gap-1">
                  View all <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {TRENDING_PRODUCTS.map(product => (
                  <div key={product.id} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow group relative">
                    <button className="absolute top-3 right-3 p-1.5 bg-white/80 backdrop-blur-sm rounded-full text-gray-400 hover:text-red-500 z-10">
                      <Heart className="w-5 h-5" />
                    </button>
                    <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      <div className="absolute top-3 left-3 bg-[#0A8B42] text-white text-[10px] font-bold px-2 py-1 rounded">Trending</div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 mb-1 truncate">{product.name}</h3>
                      <div className="text-[#0A8B42] font-bold text-lg mb-2">UGX {product.price.toLocaleString()}</div>
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                        <Star className="w-3.5 h-3.5 text-yellow-400 fill-current" />
                        <span className="font-medium text-gray-700">{product.rating}</span>
                        <span>({product.reviews})</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full mx-1"></span>
                        <Store className="w-3.5 h-3.5" />
                        <span className="truncate">{product.shop}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs font-semibold text-green-600 bg-green-50 w-max px-2 py-1 rounded">
                        <CheckCircle className="w-3.5 h-3.5" /> In Stock
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Videos (Placeholder for the Video layout) */}
            <div>
               <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-900">Popular Videos</h2>
                <Link href="/discover" className="text-sm font-semibold text-[#0A8B42] hover:underline flex items-center gap-1">
                  View all <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-4">
                <div className="relative flex-1 aspect-video bg-gray-900 rounded-xl overflow-hidden cursor-pointer group">
                  <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="Video cover" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform">
                      <PlayCircle className="w-8 h-8 text-white fill-white/80" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg">Skincare for Glowing Skin</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-6 h-6 bg-white rounded-full"></div>
                      <span className="text-white/90 text-sm font-medium">Beauty Hub</span>
                    </div>
                  </div>
                </div>
                {/* Thumbnails */}
                <div className="w-full md:w-48 grid grid-cols-2 md:grid-cols-1 gap-2">
                  <div className="aspect-video md:aspect-auto md:h-24 bg-gray-200 rounded-lg overflow-hidden relative"><img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&q=80" alt="thumbnail 1" className="w-full h-full object-cover" /></div>
                  <div className="aspect-video md:aspect-auto md:h-24 bg-gray-200 rounded-lg overflow-hidden relative"><img src="https://images.unsplash.com/photo-1598327105666-5b89351cb31b?w=200&q=80" alt="thumbnail 2" className="w-full h-full object-cover" /></div>
                  <div className="hidden md:block aspect-video md:aspect-auto md:h-24 bg-gray-200 rounded-lg overflow-hidden relative"><img src="https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=200&q=80" alt="thumbnail 3" className="w-full h-full object-cover" /></div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            
            {/* Featured Shops List */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-lg font-bold text-gray-900">Featured Shops</h2>
                <Link href="/shops" className="text-xs font-semibold text-[#0A8B42] hover:underline flex items-center">
                  View all <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </div>
              <div className="space-y-5">
                {FEATURED_SHOPS.map(shop => (
                  <div key={shop.id} className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                      {shop.name.substring(0,2).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1">
                        <h3 className="font-bold text-sm text-gray-900 truncate">{shop.name}</h3>
                        {shop.verified && <ShieldCheck className="w-3.5 h-3.5 text-blue-500 shrink-0" />}
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-gray-500 mt-0.5">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="font-medium text-gray-700">{shop.rating}</span>
                        <span>({shop.reviews})</span>
                        <span>•</span>
                        <span>{shop.followers} followers</span>
                      </div>
                      <div className="text-[11px] text-gray-500 mt-0.5 truncate">{shop.category}</div>
                    </div>
                    <button className="px-3 py-1 border border-gray-200 text-[#0A8B42] font-semibold text-xs rounded-full hover:bg-green-50 transition-colors">
                      Follow
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Promo Banner 1 */}
            <div className="relative rounded-2xl overflow-hidden bg-blue-900 text-white aspect-[4/3] group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=400&q=80" alt="Promo" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50 group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="font-bold text-xl mb-1">Support Ugandan Businesses</h3>
                <p className="text-sm text-white/80 mb-4">Local products. Local jobs. A stronger Uganda.</p>
                <button className="bg-[#0A8B42] text-white px-4 py-2 rounded-lg text-sm font-bold w-max flex items-center gap-2 hover:bg-[#087336]">
                  Explore Local Shops <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Promo Banner 2 */}
            <div className="bg-[#E6F4EA] rounded-2xl p-6 text-center border border-green-100">
              <h3 className="font-bold text-lg text-[#0A8B42] mb-2">Want to sell on LocalMarket?</h3>
              <p className="text-sm text-green-800 mb-4">Create your digital shop and reach thousands of customers today.</p>
              <Link href="/seller" className="block w-full bg-white text-[#0A8B42] border border-[#0A8B42] font-bold py-2.5 rounded-xl hover:bg-[#0A8B42] hover:text-white transition-colors">
                Open a Shop
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
