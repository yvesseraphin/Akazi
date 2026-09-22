import { Header } from "@/components/shared/Header";
import { Hero } from "@/components/home/Hero";
import { ProofSection } from "@/components/home/ProofSection";
import { WhyRwanda } from "@/components/home/WhyRwanda";
import { OurSolution } from "@/components/home/OurSolution";

export default function Home() {
  return (
    <>
      <Header />
      <main suppressHydrationWarning>
        <Hero />
        <ProofSection />
        <WhyRwanda />
        <OurSolution />
      </main>
    </>
  );
}
