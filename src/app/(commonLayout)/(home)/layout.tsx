import FAQ from "@/components/home/FAQ";
import NewsLetter from "@/components/home/NewsLetter";
import Testimonial from "@/components/home/Testimonial";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Products from "../products/page";

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
      <Products />
      <WhyChooseUs />
      <Testimonial />
      <NewsLetter />
      <FAQ />
    </>
  );
}
