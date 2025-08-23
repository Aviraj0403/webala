import React from "react";
import { CheckCircle2 } from "lucide-react"; // for feature check icons

const PricingSection = () => {
  const plans = [
    {
      name: "Basic",
      price: "₹16,999-19,999",
      oldPrice: "₹20,999",
      tagline: "Great for Small Business",
      features: [
        "Website Creation",
        "Domain & Hosting",
        "Free SSL Certificate",
        "User Friendly Design",
        "Language Converter",
        "Modern UI",
        "Admin Panel",
      ],
    },
    {
      name: "Professional",
      price: "₹38,000-44,999",
      oldPrice: "₹51,000",
      tagline: "Perfect for Growing Brands",
      popular: true,
      features: [
        "Website Creation",
        "Domain & Hosting",
        "Free SSL Certificate",
        "User Friendly Design",
        "Language Converter",
        "Modern UI",
        "Admin Panel",
        "Social Media Page Creation",
      ],
    },
    {
      name: "Premium",
      price: "₹74,999-79,999",
      oldPrice: "₹1,99,998",
      tagline: "For Enterprises & E-Commerce",
      features: [
        "E-Commerce Website",
        "Domain & Hosting",
        "Free SSL Certificate",
        "User Friendly Design",
        "Language Converter",
        "Modern UI",
        "Admin Panel",
        "Social Media Page Creation",
        "Advanced Features & Customization",
      ],
    },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-blue-50 via-white to-blue-100 py-20 px-6 font-playfair">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 leading-tight">
          Choose Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Perfect Plan
          </span>
        </h2>
        <p className="text-gray-600 text-lg">
          Pricing designed to match{" "}
          <span className="font-semibold text-gray-900">your business goals</span>
        </p>
      </div>

      {/* Plans */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative backdrop-blur-lg bg-white/70 border border-gray-200 rounded-2xl shadow-xl overflow-hidden transform transition duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-blue-400 ${
              plan.popular ? "scale-105 border-2 border-blue-600 shadow-2xl" : ""
            }`}
          >
            {/* Popular Tag */}
            {plan.popular && (
              <span className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                ⭐ Most Popular
              </span>
            )}

            {/* Card Content */}
            <div className="p-8 flex flex-col h-full">
              <h3 className="text-2xl font-bold text-gray-800">{plan.name}</h3>
              <p className="text-gray-500 mb-6 italic">{plan.tagline}</p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-extrabold text-blue-600">
                    {plan.price}
                  </span>
                </div>
                <p className="text-sm line-through text-gray-400">
                  {plan.oldPrice}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 text-gray-700 text-left flex-grow">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-base hover:text-blue-600 transition"
                  >
                    <CheckCircle2 className="text-green-600 w-5 h-5" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Buttons */}
              <div className="mt-8 space-y-4">
                {/* Main Choose Button */}
                <button
                  className={`w-full py-3 rounded-xl font-semibold text-white text-lg transition-all duration-500 shadow-lg ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-600 to-indigo-700 hover:scale-105"
                      : "bg-gradient-to-r from-blue-500 to-blue-700 hover:scale-105"
                  }`}
                >
                  🚀 Choose {plan.name}
                </button>

                {/* Sexy Negotiable Price Button */}
                <button className="relative w-full py-2 rounded-xl font-bold text-base overflow-hidden shadow-lg group animate-blink">
                  <span className="relative z-10 text-white">
                    💬 Price Negotiable
                  </span>
                  {/* Gradient Shine Effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 opacity-90 blur-md"></span>
                  <span className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 group-hover:opacity-100 animate-gradient-move"></span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sexy Button Animations */}
      <style jsx>{`
        @keyframes blink {
          0%, 100% {
            background: linear-gradient(90deg, #ec4899, #8b5cf6, #3b82f6);
            box-shadow: 0 0 20px rgba(236, 72, 153, 0.7),
                        0 0 40px rgba(139, 92, 246, 0.6);
          }
          50% {
            background: linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899);
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.8),
                        0 0 60px rgba(139, 92, 246, 0.7);
          }
        }
        .animate-blink {
          animation: blink 3s infinite ease-in-out;
        }

        @keyframes gradient-move {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradient-move 4s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default PricingSection;
