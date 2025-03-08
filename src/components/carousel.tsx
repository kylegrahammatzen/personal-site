"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type CarouselProps = {
  items: string[];
  interval?: number;
};

export const Carousel = (props: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const interval = props.interval ?? 2000;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % props.items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [props.items.length, interval]);

  return (
    <div className="relative h-[1.2em] overflow-hidden">
      {props.items.map((item, index) => (
        <div
          key={index}
          className={cn(
            "absolute w-full transition-all duration-500 ease-in-out",
            index === currentIndex
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0",
          )}
        >
          {item}
        </div>
      ))}
    </div>
  );
};
