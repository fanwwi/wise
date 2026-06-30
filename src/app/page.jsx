import { Hero } from "@/components/sections/Hero/Hero";
import { TrustBar } from "@/components/sections/TrustBar/TrustBar";
import Whyus from "@/components/sections/Whyus/Whyus";
import Partners from "@/components/ui/Partners/Partners";

// ОБЯЗАТЕЛЬНО должен быть export default
export default function Home() {
  return (
    <main>
      <Hero />
      <Whyus />
      <Partners />
      <TrustBar />
    </main>
  );
}
