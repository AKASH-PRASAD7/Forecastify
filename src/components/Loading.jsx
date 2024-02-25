import React from "react";

const LoadingGlassCard = () => {
  return (
    <section>
      <div className="w-[22rem] text-white glassCard flex flex-col mb-4 p-4 animate-pulse">
        {/* Weather Icon Skeleton */}
        <div className="w-16 h-16 bg-gray-300 mb-4 rounded-full self-center"></div>

        {/* Temperature Skeleton */}
        <div className="w-1/2 h-8 bg-gray-300 mb-4 self-center"></div>

        {/* Feels Like Skeleton */}
        <div className="w-1/2 h-4 bg-gray-300 mb-4 self-center"></div>

        {/* Place Skeleton */}
        <div className="w-3/4 h-4 bg-gray-300 mb-4 self-center"></div>

        {/* Date Skeleton */}
        <div className="w-1/2 h-4 bg-gray-300 mb-4 self-center"></div>

        {/* Wind and Humidity Skeleton */}
        <div className="flex justify-evenly items-center mt-2 gap-4">
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          <div className="w-1/4 h-4 bg-gray-300"></div>
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          <div className="w-1/4 h-4 bg-gray-300"></div>
        </div>

        {/* Min and Max Temperature Skeleton */}
        <div className="flex justify-evenly items-center">
          <div className="w-full p-3 mt-4 flex flex-col justify-between items-center">
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            <div className="w-1/2 h-4 bg-gray-300"></div>
          </div>
          <div className="w-full p-3 mt-4 flex flex-col justify-between items-center">
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            <div className="w-1/2 h-4 bg-gray-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoadingGlassCard;
