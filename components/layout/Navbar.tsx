"use client";

import Link from "next/link";
import { Search, ShoppingCart, Bell, Home, PlayCircle, LayoutGrid, Store, ChevronDown, User, ShoppingBag } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase/config";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { user, profile, loading } = useAuth();
  const pathname = usePathname();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Discover", href: "/discover", icon: PlayCircle },
    { name: "Categories", href: "/categories", icon: LayoutGrid },
    { name: "Shops", href: "/shops", icon: Store },
  ];

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto">
        <div className="flex justify-between items-center h-[72px]">
          {/* Logo Section */}
          <div className="flex items-center gap-3 min-w-[240px]">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#0A8B42] rounded-xl flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col hidden sm:flex">
                <span className="font-extrabold text-xl tracking-tight text-gray-900 leading-none">
                  LocalMarket
                </span>
                <span className="text-[10px] text-gray-500 font-medium mt-0.5">
                  Discover local products. Shop local.
                </span>
              </div>
            </Link>
          </div>

          {/* Search Bar (Centered) */}
          <div className="hidden md:flex flex-1 max-w-2xl px-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-11 pr-4 py-2.5 border border-transparent rounded-xl leading-5 bg-gray-100 text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-gray-200 focus:ring-0 sm:text-sm transition-colors font-medium"
                placeholder="Search for products, shops, or categories..."
              />
            </div>
          </div>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 px-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (pathname === '/' && link.href === '/'); // Fix logic as needed
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-2 text-sm h-[72px] border-b-[3px] transition-colors ${
                    pathname === link.href ? "border-[#0A8B42] text-[#0A8B42] font-bold" : "border-transparent text-gray-600 hover:text-gray-900 font-semibold"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${pathname === link.href ? 'fill-current' : ''}`} />
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4 min-w-max pl-4 border-l border-gray-100 ml-4">
            <button className="relative p-1 text-gray-400 hover:text-gray-900 transition-colors hidden sm:block">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
            </button>

            {!loading && user ? (
              <>
                <div className="flex items-center gap-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors p-1">
                  <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center">
                    {profile?.photoURL ? (
                      <img src={profile.photoURL} alt="Avatar" className="w-full h-full object-cover" />
                    ) : (
                      <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80" alt="Avatar" className="w-full h-full object-cover" />
                    )}
                  </div>
                  <span className="text-sm font-semibold text-gray-700 hidden xl:block">
                    {profile?.name || "John Doe"}
                  </span>
                  <ChevronDown className="w-4 h-4 text-gray-400 hidden xl:block" />
                </div>
                
                <Link href="/cart" className="flex items-center gap-2 bg-[#0A8B42] hover:bg-[#087336] text-white px-4 py-2 rounded-lg transition-colors relative ml-2">
                  <ShoppingCart className="w-4 h-4" />
                  <span className="text-sm font-bold hidden sm:block">My Cart</span>
                  <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#076630] text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white">
                    2
                  </span>
                </Link>
              </>
            ) : !loading ? (
              <div className="flex items-center gap-4">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80" alt="User" className="w-8 h-8 rounded-full bg-gray-200 object-cover" />
                <Link href="/login" className="text-sm font-semibold text-gray-700 hover:text-gray-900">
                  Login
                </Link>
                <Link href="/register" className="text-sm font-bold text-white bg-[#0A8B42] hover:bg-[#087336] px-4 py-2 rounded-lg transition-colors">
                  Register
                </Link>
              </div>
            ) : (
              <div className="w-32 h-8 bg-gray-100 animate-pulse rounded-lg"></div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
