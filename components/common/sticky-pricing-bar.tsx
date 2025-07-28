"use client";
import { useEffect, useState } from "react";

export default function StickyPricingBar() {
  const [showBar, setShowBar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        // Scrolling Down
        setShowBar(true);
      } else {
        // Scrolling Up
        setShowBar(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed block lg:hidden bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${showBar ? "translate-y-0" : "translate-y-full"
        }`}
    >
      <div className="bg-white shadow-[1px_13px_61px_25px_rgba(0,_0,_0,_0.1)] p-4 flex justify-between items-center">
        <div className="text-xl font-semibold flex justify-center items-center">
          <span className="text-red-500 mr-2">৳1000</span>
          <span className="line-through text-gray-500">৳5000</span>
          <span className="bg-red-500 text-white text-sm ml-2 px-2 py-1 rounded">4000 ৳ ছাড়</span>
        </div>
        <button className="bg-green-500 text-white px-6 py-2 rounded-md">Enroll</button>
      </div>
    </div>
  );
}
