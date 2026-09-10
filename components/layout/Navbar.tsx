"use client";

import Link from "next/link";
import { Search, User, ShoppingCart, Menu, LogOut, Play } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase/config";

export default function Navbar() {
  const { user, profile, loading } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900 hidden sm:block">
                LocalMarket
              </span>
            </Link>
          </div>

          {/* Search Bar (Desktop) */}
          <div className="hidden sm:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:bg-white focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors"
                placeholder="Search products, shops, categories..."
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Link href="/discover" className="hidden sm:flex items-center gap-1 text-sm font-bold text-blue-600 hover:text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full">
              <Play className="h-4 w-4" />
              <span>Watch Feed</span>
            </Link>
            
            <button className="sm:hidden p-2 text-gray-400 hover:text-gray-500">
              <Search className="h-6 w-6" />
            </button>
            <Link href="/cart" className="p-2 text-gray-400 hover:text-gray-500 relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-600 rounded-full">
                0
              </span>
            </Link>
            
            {!loading && user ? (
              <div className="hidden sm:flex items-center gap-4">
                <Link href={profile?.role === "seller" ? "/seller" : "/profile"} className="text-sm font-medium text-gray-700 hover:text-gray-900 flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <span>{profile?.name || "Profile"}</span>
                </Link>
                <button onClick={handleSignOut} className="text-sm font-medium text-gray-500 hover:text-red-600">
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            ) : !loading ? (
              <Link href="/login" className="hidden sm:flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                <User className="h-5 w-5" />
                <span>Sign In</span>
              </Link>
            ) : (
              <div className="hidden sm:block w-20 h-5 bg-gray-200 animate-pulse rounded"></div>
            )}

            <button className="sm:hidden p-2 text-gray-400 hover:text-gray-500">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
