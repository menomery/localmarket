"use client";

import { useEffect, useState, useRef } from "react";
import type { Product } from "@/types/product";
import VideoPost from "./VideoPost";

interface VideoFeedProps {
  initialProducts: Product[];
}

export default function VideoFeed({ initialProducts }: VideoFeedProps) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [activeIndex, setActiveIndex] = useState(0);
  const feedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: feedRef.current,
      rootMargin: "0px",
      threshold: 0.6, // Video is considered active when 60% is visible
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Extract index from a data attribute we'll set on each post
          const index = Number(entry.target.getAttribute("data-index"));
          setActiveIndex(index);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all video post elements
    const elements = document.querySelectorAll(".video-post-container");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [products]);

  return (
    <div 
      ref={feedRef}
      className="w-full max-w-lg mx-auto bg-black h-[calc(100vh-4rem)] overflow-y-scroll snap-y snap-mandatory hide-scrollbar"
      style={{ scrollBehavior: 'smooth' }}
    >
      {products.map((product, index) => (
        <div 
          key={product.id} 
          className="video-post-container snap-start"
          data-index={index}
        >
          <VideoPost 
            product={product} 
            isActive={index === activeIndex} 
          />
        </div>
      ))}
    </div>
  );
}
