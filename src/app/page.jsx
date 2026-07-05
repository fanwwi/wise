import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero/Hero";
import Whyus from "@/components/sections/Whyus/Whyus";
// Остальное оставьте через dynamic

// Добавляем минимальную высоту, чтобы контент не «прыгал» при подгрузке
const LoadingFallback = () => <div className="h-[200px] w-full" />;
const History = dynamic(() => import("@/components/sections/History/History"), {
  loading: LoadingFallback,
});
const About = dynamic(() => import("@/components/Structure/About"), {
  loading: LoadingFallback,
});
const Services = dynamic(() => import("@/components/Structure/Services"), {
  loading: LoadingFallback,
});
const BottomSection = dynamic(
  () => import("@/components/Structure/BottomSection"),
  { loading: LoadingFallback },
);

export default function Home() {
  return (
    <main>
      <Hero />
      <Whyus />
      <About />
      <Services />
      <BottomSection />
    </main>
  );
}
