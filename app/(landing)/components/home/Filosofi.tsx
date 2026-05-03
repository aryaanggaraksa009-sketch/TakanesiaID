"use client";

import { useState, useEffect } from "react";

const images = [
  "/images/filosofi-1.jpg",
  "/images/filosofi-2.jpg",
  "/images/filosofi-3.jpg",
];

const FilosofiSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setIsAnimating(false);
      }, 500); 
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setIsAnimating(false);
    }, 1500);
  };

  const nextSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setIsAnimating(false);
    }, 1500);
  };

  return (
    <section id="filosofi" className=" rounded-lg container mx-auto relative">
        <div className="text-center mb-10">
        <h1 className="text-2xl font-bold">Filosofi takanesia</h1>
      </div>
      <div className="flex items-center justify-center relative">
        <img
            src={images[currentIndex]}
            alt={`slide-${currentIndex}`}
            className={`w-[80%] h-[80%] object-cover transition-all duration-[500ms] 
                mx-auto border-8 border-white rounded-xl shadow-sm shadow-gray-400
                ${isAnimating ? "blur-md opacity-50" : "blur-0 opacity-100"}`}
        />
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded cursor-pointer"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded cursor-pointer"
      >
        ▶
      </button>
    </section>
  );
};

export default FilosofiSection;