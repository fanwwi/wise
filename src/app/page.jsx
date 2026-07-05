import dynamic from "next/dynamic";

// 1. Убираем фигурные скобки для Hero, раз там export default
import Hero from "@/components/sections/Hero/Hero";

// 2. Для динамических компонентов убираем .then(), если они все export default
const Whyus = dynamic(() => import("@/components/sections/Whyus/Whyus"));
const History = dynamic(() => import("@/components/sections/History/History"));
const Mission = dynamic(() => import("@/components/sections/Mission/Mission"));
const TrustBar = dynamic(
  () => import("@/components/sections/TrustBar/TrustBar"),
);
const Value = dynamic(() => import("@/components/sections/Value/Value"));
const Roadmap = dynamic(() => import("@/components/sections/Roadmap/Roadmap"));
const Compare = dynamic(() => import("@/components/sections/Compare/Compare"));
const Countries = dynamic(
  () => import("@/components/sections/Countries/Countries"),
);
const Stories = dynamic(() => import("@/components/sections/Stories/Stories"));
const CaseQuiz = dynamic(
  () => import("@/components/sections/CaseQuiz/CaseQuiz"),
);
const Partners = dynamic(() => import("@/components/ui/Partners/Partners"));
const FinalQuoteBlock = dynamic(
  () => import("@/components/sections/FinalQuoteBlock/FinalQuoteBlock"),
);

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
