import NextLink from "next/link";

export default function NewsLetter() {
  return (
    <section className="bg-gray-100 text-default-700 py-12 px-6">
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="mb-6">
          Subscribe to our newsletter to get the latest deals, new product
          arrivals, exclusive offers, and insider tips directly to your inbox.
        </p>

        {/* Subscription Form */}
        <div className="flex justify-center items-center space-x-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 w-80 rounded-lg border border-gray-300"
          />
          <NextLink href="/contact">
            <button className="px-6 py-2 bg-default-800 text-white rounded-lg hover:bg-default-900">
              Subscribe
            </button>
          </NextLink>
        </div>

        {/* Extra Information */}
        <div className="mt-6 text-sm text-gray-600">
          <p>
            By subscribing, you agree to receive marketing emails and offers.
            You can unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
}
