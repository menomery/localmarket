import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
              Shop
            </h3>
            <ul className="space-y-3">
              <li><Link href="/discover" className="text-base text-gray-500 hover:text-gray-900">Discover</Link></li>
              <li><Link href="/categories" className="text-base text-gray-500 hover:text-gray-900">Categories</Link></li>
              <li><Link href="/trending" className="text-base text-gray-500 hover:text-gray-900">Trending</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
              Sell
            </h3>
            <ul className="space-y-3">
              <li><Link href="/seller" className="text-base text-gray-500 hover:text-gray-900">Seller Dashboard</Link></li>
              <li><Link href="/seller/register" className="text-base text-gray-500 hover:text-gray-900">Open a Shop</Link></li>
              <li><Link href="/seller/guide" className="text-base text-gray-500 hover:text-gray-900">Seller Guide</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              <li><Link href="/help" className="text-base text-gray-500 hover:text-gray-900">Help Center</Link></li>
              <li><Link href="/contact" className="text-base text-gray-500 hover:text-gray-900">Contact Us</Link></li>
              <li><Link href="/safety" className="text-base text-gray-500 hover:text-gray-900">Trust & Safety</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="text-base text-gray-500 hover:text-gray-900">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-base text-gray-500 hover:text-gray-900">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} LocalMarket. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
