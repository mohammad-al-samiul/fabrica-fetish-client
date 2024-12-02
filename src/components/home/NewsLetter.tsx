import NextLink from "next/link";
export default function NewsLetter() {
  return (
    <section className="bg-default-700 text-white py-12 px-6">
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="mb-6">
          Subscribe to our newsletter for the latest deals and updates.
        </p>
        <div className="flex justify-center">
          <NextLink href="/contact">
            <button className="px-6 py-2 bg-default-800 text-white rounded-lg hover:bg-default-900">
              Subscribe
            </button>
          </NextLink>
        </div>
      </div>
    </section>
  );
}
