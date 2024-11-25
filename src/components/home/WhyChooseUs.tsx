import React from "react";

export default function WhyChooseUs() {
  return (
    <section className="bg-blue-600 text-white py-12">
      <div className="max-w-screen-lg mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <i className="fas fa-truck text-4xl"></i>
            <h3 className="mt-4 text-xl font-bold">Fast Delivery</h3>
            <p className="mt-2">
              Get your orders delivered at your doorstep quickly.
            </p>
          </div>
          <div className="text-center">
            <i className="fas fa-dollar-sign text-4xl"></i>
            <h3 className="mt-4 text-xl font-bold">Affordable Prices</h3>
            <p className="mt-2">Competitive pricing for quality products.</p>
          </div>
          <div className="text-center">
            <i className="fas fa-headset text-4xl"></i>
            <h3 className="mt-4 text-xl font-bold">24/7 Support</h3>
            <p className="mt-2">
              Our customer support is here to assist you anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
