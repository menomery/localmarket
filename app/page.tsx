import Link from "next/link";
import { PlayCircle, ShoppingBag, Store, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Discover local products.</span>
              <span className="block text-blue-600">Shop local.</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              The premier online marketplace for independent businesses in Uganda. 
              Discover unique products through short videos, chat directly with sellers, and support local entrepreneurs.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link
                  href="/discover"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                >
                  <PlayCircle className="w-5 h-5 mr-2" />
                  Watch & Discover
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link
                  href="/seller"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  <Store className="w-5 h-5 mr-2" />
                  Open a Shop
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section (Demo) */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Popular Categories</h2>
            <Link href="/categories" className="text-blue-600 hover:text-blue-500 font-medium text-sm">
              View all
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Fashion", "Shoes", "Phones", "Electronics", "Beauty", "Food"
            ].map((category) => (
              <div key={category} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center justify-center hover:shadow-md transition-shadow cursor-pointer">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-3">
                  <ShoppingBag className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-sm font-medium text-gray-900">{category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Prop Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-12 h-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <PlayCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">See It In Action</h3>
              <p className="text-gray-500 text-sm">Discover products through engaging short videos before you buy.</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Store className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Verified Sellers</h3>
              <p className="text-gray-500 text-sm">Shop confidently from verified local businesses and entrepreneurs.</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Direct Communication</h3>
              <p className="text-gray-500 text-sm">Chat directly or WhatsApp sellers for quick responses and support.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
