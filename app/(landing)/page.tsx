import AdminSection from "./components/home/admin";
import CategoriesSection from "./components/home/categories";
import FilosofiSection from "./components/home/Filosofi";
import HeroSection from "./components/home/hero";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CategoriesSection />
      <FilosofiSection />
      <AdminSection />
    </main>
  );
}
