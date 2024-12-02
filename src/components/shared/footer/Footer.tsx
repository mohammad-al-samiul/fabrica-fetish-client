import NextLink from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-700 text-gray-200 py-12 mt-10">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">Fabrica Fetish</h2>
          <p className="text-sm">
            Your one-stop shop for all your needs. Experience seamless shopping
            with unbeatable deals.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <NextLink href="/about" className="hover:text-white transition">
                About Us
              </NextLink>
            </li>
            <li>
              <NextLink href="/contact" className="hover:text-white transition">
                Contact Us
              </NextLink>
            </li>
            <li>
              <NextLink href="/faq" className="hover:text-white transition">
                FAQs
              </NextLink>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Our Services Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white transition">
                Shipping Information
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Return & Exchange Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Warranty Information
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Gift Cards
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com/alsamiul1996"
              aria-label="Facebook"
              target="_blank"
              className="text-gray-300 hover:text-white transition"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://x.com/al_samiul_404"
              aria-label="Twitter"
              target="_blank"
              className="text-gray-300 hover:text-white transition"
            >
              <FaTwitter size={24} />
            </a>
            <a
              target="_blank"
              href="#"
              aria-label="Instagram"
              className="text-gray-300 hover:text-white transition"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/al-samiul/"
              target="_blank"
              aria-label="LinkedIn"
              className="text-gray-300 hover:text-white transition"
            >
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Fabrica Fetish. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
