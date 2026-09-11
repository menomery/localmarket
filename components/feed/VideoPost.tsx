"use client";

import { useRef, useEffect, useState } from "react";
import type { Product } from "@/types/product";
import { Heart, MessageCircle, Share2, Bookmark, Play, VolumeX, Volume2, MoreVertical, Star, CheckCircle, ShoppingCart, MessageSquare, Phone, Store, ShieldCheck } from "lucide-react";

interface VideoPostProps {
  product: Product;
  isActive: boolean;
}

export default function VideoPost({ product, isActive }: VideoPostProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    if (isActive && videoRef.current) {
      videoRef.current.play().catch(() => {
        setIsPlaying(false);
      });
      setIsPlaying(true);
    } else if (!isActive && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }, [isActive]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative w-full h-full bg-black flex items-center justify-center overflow-hidden cursor-pointer" onClick={togglePlay}>
      
      <video
        ref={videoRef}
        src={product.videoUrl || "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"}
        className="w-full h-full object-cover"
        loop
        playsInline
        muted={isMuted}
      />

      {/* Top Bar */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-20">
        <div className="bg-white/90 backdrop-blur-sm text-green-700 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
          <Star className="w-3.5 h-3.5 fill-current" /> Featured
        </div>
        <div className="flex items-center gap-3">
          <button onClick={toggleMute} className="w-10 h-10 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/60 transition">
            {isMuted ? <VolumeX className="w-5 h-5 text-white" /> : <Volume2 className="w-5 h-5 text-white" />}
          </button>
          <button className="w-10 h-10 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/60 transition">
            <MoreVertical className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="w-20 h-20 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
            <Play className="w-8 h-8 text-white fill-white" />
          </div>
        </div>
      )}

      {/* Right Side Interactions */}
      <div className="absolute right-4 bottom-[20%] flex flex-col items-center gap-5 z-20">
        <button onClick={(e) => { e.stopPropagation(); setIsLiked(!isLiked); }} className="flex flex-col items-center gap-1.5 group">
          <div className="w-12 h-12 flex items-center justify-center">
            <Heart className={`w-8 h-8 drop-shadow-lg transition-transform group-hover:scale-110 ${isLiked ? 'text-red-500 fill-current' : 'text-white'}`} />
          </div>
          <span className="text-white text-xs font-bold drop-shadow-md">4.7K</span>
        </button>

        <button className="flex flex-col items-center gap-1.5 group" onClick={(e) => e.stopPropagation()}>
          <div className="w-12 h-12 flex items-center justify-center">
            <MessageCircle className="w-8 h-8 text-white drop-shadow-lg transition-transform group-hover:scale-110" />
          </div>
          <span className="text-white text-xs font-bold drop-shadow-md">328</span>
        </button>

        <button onClick={(e) => { e.stopPropagation(); setIsBookmarked(!isBookmarked); }} className="flex flex-col items-center gap-1.5 group">
          <div className="w-12 h-12 flex items-center justify-center">
            <Bookmark className={`w-8 h-8 drop-shadow-lg transition-transform group-hover:scale-110 ${isBookmarked ? 'text-yellow-400 fill-current' : 'text-white'}`} />
          </div>
        </button>

        <button className="flex flex-col items-center gap-1.5 group" onClick={(e) => e.stopPropagation()}>
          <div className="w-12 h-12 flex items-center justify-center">
            <Share2 className="w-8 h-8 text-white drop-shadow-lg transition-transform group-hover:scale-110" />
          </div>
          <span className="text-white text-xs font-bold drop-shadow-md">856</span>
        </button>

        <button className="flex flex-col items-center gap-1.5 mt-2 group" onClick={(e) => e.stopPropagation()}>
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center border-2 border-white drop-shadow-lg hover:bg-green-600 transition-colors">
            <MessageCircle className="w-6 h-6 text-white fill-current" />
          </div>
          <span className="text-white text-[10px] font-bold drop-shadow-md">WhatsApp</span>
        </button>
      </div>

      {/* Bottom Info Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6 pt-32 bg-gradient-to-t from-black via-black/80 to-transparent z-10" onClick={(e) => e.stopPropagation()}>
        
        {/* Shop Info Row */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden border-2 border-white shadow-lg">
            <span className="font-bold text-gray-900 text-sm">UK</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-1.5">
              <h3 className="font-bold text-white text-base drop-shadow-md">Urban Kicks</h3>
              <ShieldCheck className="w-4 h-4 text-blue-400" />
            </div>
            <div className="text-sm text-gray-300 drop-shadow-md flex items-center gap-2">
              Kampala, Uganda • 2.3K followers
            </div>
          </div>
          <button className="border border-white text-white font-bold text-sm px-4 py-1.5 rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm">
            Follow
          </button>
        </div>

        {/* Product Details */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-white mb-1 drop-shadow-md">Nike Air Max</h2>
          <div className="flex items-center gap-4 mb-2">
            <span className="text-[#0A8B42] text-xl font-bold drop-shadow-md">UGX 150,000</span>
            <div className="flex items-center gap-1 text-sm text-gray-300">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="font-bold text-white">4.7</span>
              <span>(124)</span>
            </div>
            <div className="flex items-center gap-1 text-xs font-bold text-[#0A8B42] bg-[#0A8B42]/20 px-2 py-1 rounded">
              <CheckCircle className="w-3 h-3" /> In Stock
            </div>
          </div>
          <p className="text-sm text-gray-300 line-clamp-2 leading-relaxed">
            Comfort meets style. The Nike Air Max is perfect for everyday wear. Available in multiple sizes and colors.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button className="w-full bg-[#0A8B42] hover:bg-[#087336] text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-green-900/50">
            <ShoppingCart className="w-5 h-5" /> Buy Now
          </button>
          
          <div className="grid grid-cols-4 gap-2">
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 text-white flex flex-col items-center justify-center py-2.5 rounded-xl transition-colors gap-1.5">
              <Store className="w-5 h-5" />
              <span className="text-[10px] font-bold">View Product</span>
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 text-white flex flex-col items-center justify-center py-2.5 rounded-xl transition-colors gap-1.5">
              <MessageSquare className="w-5 h-5" />
              <span className="text-[10px] font-bold">Chat Seller</span>
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 text-white flex flex-col items-center justify-center py-2.5 rounded-xl transition-colors gap-1.5">
              <Phone className="w-5 h-5" />
              <span className="text-[10px] font-bold">WhatsApp</span>
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 text-white flex flex-col items-center justify-center py-2.5 rounded-xl transition-colors gap-1.5">
              <Store className="w-5 h-5" />
              <span className="text-[10px] font-bold">View Shop</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
