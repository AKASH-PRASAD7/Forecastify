import React from "react";

const LoadingGlassCard = () => {
  return (
    <section>
      <div className="glassCard p-4 flex flex-col animate-pulse">
        {/* Date Skeleton */}
        <div className="w-1/4 h-4 bg-gray-300 mb-4"></div>

        {/* Weather Icon Skeleton */}
        <div className="w-full h-16 bg-gray-300 mb-4"></div>

        {/* Temperature Skeleton */}
        <div className="w-1/2 h-8 bg-gray-300 mb-4"></div>

        {/* Min and Max Temperature Skeleton */}
        <div className="flex justify-between">
          <div className="w-1/4 h-4 bg-gray-300"></div>
          <div className="w-1/4 h-4 bg-gray-300"></div>
        </div>
      </div>
    </section>
  );
};

export default LoadingGlassCard;
