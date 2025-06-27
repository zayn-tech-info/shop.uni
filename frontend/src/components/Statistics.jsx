import React from "react";

const Statistics = () => {
  return (
    <div>
      <div className="py-16 bg-[#f5940b] my-20 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "5,000+", label: "Active Students" },
              { number: "15,000+", label: "Items Sold" },
              { number: "50+", label: "Campus Partners" },
              { number: "4.9/5", label: "Average Rating" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-base opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
