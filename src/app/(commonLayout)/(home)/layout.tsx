import CategoryProduct from "@/components/home/CategoryProduct";
import FAQ from "@/components/home/FAQ";
import NewsLetter from "@/components/home/NewsLetter";
import Testimonial from "@/components/home/Testimonial";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function layout({
  children,
  recentProducts,
}: {
  children: React.ReactNode;
  recentProducts: React.ReactNode;
}) {
  return (
    <>
      {children}
      {recentProducts}
      <CategoryProduct />
      <WhyChooseUs />
      <Testimonial />
      <NewsLetter />
      <FAQ />
    </>
  );
}
