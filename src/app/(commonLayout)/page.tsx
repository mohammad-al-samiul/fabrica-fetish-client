import Banner from "@/components/home/Banner";
import CategoryProduct from "@/components/home/CategoryProduct";
import FAQ from "@/components/home/FAQ";
import Feature from "@/components/home/Feature";
import NewsLetter from "@/components/home/NewsLetter";
import Testimonial from "@/components/home/Testimonial";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Banner />
      <Feature />
      <CategoryProduct />
      <WhyChooseUs />
      <Testimonial />
      <NewsLetter />
      <FAQ />
    </div>
  );
}
