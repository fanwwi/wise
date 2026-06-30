import Countries from "@/components/sections/Countries/Countries";
import { Hero } from "@/components/sections/Hero/Hero";
import Roadmap from "@/components/sections/Roadmap/Roadmap";
import { TrustBar } from "@/components/sections/TrustBar/TrustBar";
import Value from "@/components/sections/Value/Value";
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
      <Value />
      <Roadmap />
      <Countries />
    </main>
  );
}
