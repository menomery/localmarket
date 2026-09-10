import { ShieldCheck, Truck, ShoppingBag, Heart } from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-[#F3Fdf6] border-t border-green-100 py-4 mt-auto">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-[10px] text-green-800">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#0A8B42]" />
          <div><span className="font-bold">Safe & Secure</span><br/>Your data is protected</div>
        </div>
        <div className="flex items-center gap-2">
          <Truck className="w-4 h-4 text-[#0A8B42]" />
          <div><span className="font-bold">Fast & Reliable</span><br/>Delivery across Uganda</div>
        </div>
        <div className="flex items-center gap-1 flex-col justify-center text-center">
          <div className="flex items-center gap-1.5 font-extrabold text-[#0A8B42] text-sm">
            <ShoppingBag className="w-4 h-4" /> LocalMarket
          </div>
          <div className="text-gray-500">Discover local products. Shop local.</div>
        </div>
        <div className="flex items-center gap-2">
          <Heart className="w-4 h-4 text-[#0A8B42]" />
          <div><span className="font-bold">Support Local</span><br/>Build a stronger Uganda</div>
        </div>
      </div>
    </div>
  );
}
