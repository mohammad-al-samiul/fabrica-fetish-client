import React from "react";
import {
  FaStore,
  FaHandsHelping,
  FaShippingFast,
  FaHeadset,
} from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
        <p className="text-lg text-gray-600 mt-4">
          Welcome to our online store, where passion meets quality! We aim to
          provide the best products at unbeatable prices, with an experience
          that’s as smooth as possible.
        </p>
      </section>

      {/* Our Mission */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-700">Our Mission</h2>
        <p className="text-lg text-gray-600 mt-4">
          At [Store Name], our mission is simple: to offer a wide variety of
          top-quality products with the convenience of online shopping. We are
          committed to delivering an exceptional shopping experience for every
          customer.
        </p>
      </section>

      {/* Our Values */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-700">Our Values</h2>
        <ul className="list-none mt-4 text-lg text-gray-600">
          <li className="flex items-center">
            <FaHandsHelping className="text-gray-600 mr-4" />
            <strong>Customer Focus:</strong> We are committed to putting our
            customers first in everything we do.
          </li>
          <li className="flex items-center mt-4">
            <FaShippingFast className="text-gray-600 mr-4" />
            <strong>Fast & Reliable Delivery:</strong> Get your products
            delivered quickly and securely.
          </li>
          <li className="flex items-center mt-4">
            <FaStore className="text-gray-600 mr-4" />
            <strong>Quality Products:</strong> We carefully select the best
            products to offer at the most competitive prices.
          </li>
          <li className="flex items-center mt-4">
            <FaHeadset className="text-gray-600 mr-4" />
            <strong>24/7 Support:</strong> Our customer service team is
            available around the clock to assist you.
          </li>
        </ul>
      </section>

      {/* Our Story */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-700">Our Story</h2>
        <p className="text-lg text-gray-600 mt-4">
          Founded in [Year], [Store Name] started with a simple vision: to
          provide customers with high-quality products at affordable prices. We
          have since grown into a trusted name in e-commerce, with thousands of
          satisfied customers around the world.
        </p>
      </section>

      {/* Social Media Links */}
      <section className="text-center mb-16">
        <h2 className="text-3xl font-semibold text-gray-700">Follow Us</h2>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://facebook.com"
            className="text-gray-600 hover:text-gray-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            className="text-gray-600 hover:text-gray-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            className="text-gray-600 hover:text-gray-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://linkedin.com"
            className="text-gray-600 hover:text-gray-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
