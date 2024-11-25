export default function NewsLetter() {
  return (
    <section className="bg-gray-800 text-white py-12 px-6">
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="mb-6">
          Subscribe to our newsletter for the latest deals and updates.
        </p>
        <form className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-l-lg bg-white text-gray-800 focus:outline-none"
          />
          <button className="px-6 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-500">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
