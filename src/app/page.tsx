import { Header } from "@/components/shared/Header";
import { Hero } from "@/components/home/Hero";
import { ProofSection } from "@/components/home/ProofSection";
import { OurSolution } from "@/components/home/OurSolution";

export default function Home() {
  return (
    <>
      <Header />
      <main suppressHydrationWarning>
        <Hero />
        <ProofSection />
        <OurSolution />
      </main>
    </>
  );
}
