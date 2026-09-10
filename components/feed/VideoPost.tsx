"use client";

import { useRef, useEffect, useState } from "react";
import type { Product } from "@/types/product";
import { Heart, MessageCircle, Share2, ShoppingCart, Play } from "lucide-react";

interface VideoPostProps {
  product: Product;
  isActive: boolean;
}

export default function VideoPost({ product, isActive }: VideoPostProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  // Auto-play / Pause based on if this video is currently active in the scroll view
  useEffect(() => {
    if (isActive && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Auto-play might be blocked by browser policy until user interacts
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

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-UG', {
      style: 'currency',
      currency: 'UGX',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="relative w-full h-[calc(100vh-4rem)] bg-black snap-start flex justify-center items-center overflow-hidden">
      {/* Video Element */}
      <video
        ref={videoRef}
        src={product.videoUrl}
        className="w-full h-full object-cover"
        loop
        playsInline
        onClick={togglePlay}
      />

      {/* Play Button Overlay (shows if paused) */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Play className="w-16 h-16 text-white opacity-70 fill-current" />
        </div>
      )}

      {/* Right Side Interactions */}
      <div className="absolute right-4 bottom-24 flex flex-col items-center gap-6 z-10">
        <button 
          onClick={() => setIsLiked(!isLiked)} 
          className="flex flex-col items-center gap-1 group"
        >
          <div className="w-12 h-12 bg-black/40 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-black/60 transition-colors">
            <Heart className={`w-7 h-7 ${isLiked ? 'text-red-500 fill-current' : 'text-white'}`} />
          </div>
          <span className="text-white text-xs font-medium drop-shadow-md">
            {isLiked ? product.likesCount + 1 : product.likesCount}
          </span>
        </button>

        <button className="flex flex-col items-center gap-1 group">
          <div className="w-12 h-12 bg-black/40 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-black/60 transition-colors">
            <MessageCircle className="w-7 h-7 text-white" />
          </div>
          <span className="text-white text-xs font-medium drop-shadow-md">
            {product.commentsCount}
          </span>
        </button>

        <button className="flex flex-col items-center gap-1 group">
          <div className="w-12 h-12 bg-black/40 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-black/60 transition-colors">
            <Share2 className="w-7 h-7 text-white" />
          </div>
          <span className="text-white text-xs font-medium drop-shadow-md">
            {product.sharesCount}
          </span>
        </button>
      </div>

      {/* Bottom Product Info Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 pt-12 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10">
        <div className="flex items-end justify-between gap-4">
          <div className="flex-1 text-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                {product.category}
              </span>
            </div>
            <h3 className="text-lg font-bold line-clamp-1 drop-shadow-md">{product.title}</h3>
            <p className="text-sm text-gray-200 line-clamp-2 mt-1 drop-shadow-md">
              {product.description}
            </p>
            <p className="text-xl font-bold text-green-400 mt-2 drop-shadow-md">
              {formatPrice(product.price)}
            </p>
          </div>
          
          <button className="flex-shrink-0 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transform hover:scale-105 transition-all">
            <ShoppingCart className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
