import React from "react";
const howitworksArray = [
  {
    step: "01",
    title: "Sign Up",
    description:
      "Create your account using your student email to get verified instantly.",
  },
  {
    step: "02",
    title: "Browse or List",
    description:
      "Search for items you need or list something you want to sell with photos.",
  },
  {
    step: "03",
    title: "Meet & Exchange",
    description:
      "Connect with other students and arrange safe meetups on campus.",
  },
];
const Howitworks = () => {
  return (
    <div className="container py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-normal">
            Getting started is easy. Follow these simple steps to buy or sell on
            campus.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {howitworksArray.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-[#f5940b] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Howitworks;
