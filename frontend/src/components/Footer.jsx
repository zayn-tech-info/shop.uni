import { ShoppingCart } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 bg-[#f5940b] text-white rounded flex items-center justify-center">
                <ShoppingCart />
              </div>
              <span className="text-lg font-bold">CampusMarket</span>
            </div>
            <p className="text-sm text-gray-500">
              The trusted marketplace for campus communities.
            </p>
          </div>
          {[
            {
              title: "Marketplace",
              links: [
                "Browse Items",
                "Sell Items",
                "Categories",
                "Popular Items",
              ],
            },
            {
              title: "Support",
              links: [
                "Help Center",
                "Safety Tips",
                "Contact Us",
                "Report Issue",
              ],
            },
            {
              title: "Company",
              links: [
                "About Us",
                "Privacy Policy",
                "Terms of Service",
                "Careers",
              ],
            },
          ].map((section, idx) => (
            <div key={idx}>
              <h3 className="text-base font-semibold mb-3">{section.title}</h3>
              <ul className="flex flex-col gap-2">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href="#"
                      className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-200 my-8" />
        <div className="text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} CampusMarket. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
