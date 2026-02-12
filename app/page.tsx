import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import MissionVision from "@/components/MissionVision";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <WhyUs />
      <MissionVision />
    </main>
  );
}
