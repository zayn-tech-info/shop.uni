import React from "react";

const Calltoaction = () => {
  return (
    <div className="py-16">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl text-[#f5940b] sm:text-4xl font-bold mb-2">
          Ready to Start Trading?
        </h2>
        <p className="text-lg text-gray-600 mb-6 font-normal">
          Join thousands of students already saving money and decluttering their
          dorms.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="inline-flex items-center justify-center bg-[#f5940b] text-white text-lg font-medium py-3 px-6 rounded hover:bg-[#f5940b] transition">
            Sign Up Now
            <svg
              className="ml-2"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
          <button className="inline-flex items-center justify-center border border-[#f5940b] text-[#f5940b] bg-white text-lg font-medium py-3 px-6 rounded hover:bg-blue-50 transition">
            Download App
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calltoaction;
