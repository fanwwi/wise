import { CaseQuiz } from "@/components/sections/CaseQuiz/CaseQuiz";
import Compare from "@/components/sections/Compare/Compare";
import Countries from "@/components/sections/Countries/Countries";
import FinalQuoteBlock from "@/components/sections/FinalQuoteBlock/FinalQuoteBlock";
import { Hero } from "@/components/sections/Hero/Hero";
import History from "@/components/sections/History/History";
import Mission from "@/components/sections/Mission/Mission";
import Roadmap from "@/components/sections/Roadmap/Roadmap";
import Stories from "@/components/sections/Stories/Stories";
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
      <History />
      <Mission />
      <TrustBar />
      <Value />
      <Roadmap />
      <Compare />
      <Countries />
      <Stories />
      <CaseQuiz />
      <Partners />
      <FinalQuoteBlock />
    </main>
  );
}
