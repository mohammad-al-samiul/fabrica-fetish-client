import React from "react";
import {
  FaTruck,
  FaDollarSign,
  FaHeadset,
  FaGift,
  FaShieldAlt,
  FaRegStar,
  FaGlobeAmericas,
  FaRecycle,
} from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section className="mt-5 bg-default-50 text-default-700 py-12  ">
      <div className="max-w-screen-lg mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Fast Delivery */}
          <div className="text-center">
            <FaTruck className="text-4xl mx-auto" />
            <h3 className="mt-4 text-xl font-bold">Fast Delivery</h3>
            <p className="mt-2">
              Get your orders delivered at your doorstep quickly and reliably,
              no matter where you are.
            </p>
          </div>

          {/* Affordable Prices */}
          <div className="text-center">
            <FaDollarSign className="text-4xl mx-auto" />
            <h3 className="mt-4 text-xl font-bold">Affordable Prices</h3>
            <p className="mt-2">
              We offer competitive pricing to make high-quality products
              accessible to everyone.
            </p>
          </div>

          {/* 24/7 Support */}
          <div className="text-center">
            <FaHeadset className="text-4xl mx-auto" />
            <h3 className="mt-4 text-xl font-bold">24/7 Support</h3>
            <p className="mt-2">
              Our customer support is available round the clock to answer your
              questions and resolve issues.
            </p>
          </div>

          {/* High-Quality Products */}
          <div className="text-center">
            <FaGift className="text-4xl mx-auto" />
            <h3 className="mt-4 text-xl font-bold">High-Quality Products</h3>
            <p className="mt-2">
              We offer top-tier products sourced from trusted manufacturers,
              ensuring longevity and quality.
            </p>
          </div>

          {/* Easy Returns */}
          <div className="text-center">
            <FaShieldAlt className="text-4xl mx-auto" />
            <h3 className="mt-4 text-xl font-bold">Easy Returns</h3>
            <p className="mt-2">
              If you're not satisfied, we provide an easy and hassle-free return
              process for a smooth experience.
            </p>
          </div>

          {/* Exclusive Offers */}
          <div className="text-center">
            <FaRegStar className="text-4xl mx-auto" />
            <h3 className="mt-4 text-xl font-bold">Exclusive Offers</h3>
            <p className="mt-2">
              Take advantage of exclusive deals, discounts, and promotions only
              available to our customers.
            </p>
          </div>

          {/* Loyalty Rewards */}
          <div className="text-center">
            <FaGift className="text-4xl mx-auto" />
            <h3 className="mt-4 text-xl font-bold">Loyalty Rewards</h3>
            <p className="mt-2">
              Earn points with every purchase and redeem them for discounts,
              free items, and more!
            </p>
          </div>

          {/* Global Shipping */}
          <div className="text-center">
            <FaGlobeAmericas className="text-4xl mx-auto" />
            <h3 className="mt-4 text-xl font-bold">Global Shipping</h3>
            <p className="mt-2">
              No matter where you are, we offer reliable shipping to all corners
              of the world.
            </p>
          </div>

          {/* Sustainability */}
          <div className="text-center">
            <FaRecycle className="text-4xl mx-auto" />
            <h3 className="mt-4 text-xl font-bold">Sustainability</h3>
            <p className="mt-2">
              We prioritize eco-friendly practices in sourcing and packaging to
              protect the environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
