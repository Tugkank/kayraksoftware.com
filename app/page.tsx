import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />

      {/* Placeholder sections for navigation scrolling */}
      <section id="hizmetlerimiz" className="w-full min-h-screen bg-white dark:bg-zinc-900 flex items-center justify-center">
        <h2 className="text-3xl font-bold">Hizmetlerimiz</h2>
      </section>

      <section id="hakkimizda" className="w-full min-h-screen bg-gray-100 dark:bg-zinc-800 flex items-center justify-center">
        <h2 className="text-3xl font-bold">Hakkımızda</h2>
      </section>

      <section id="iletisim" className="w-full min-h-screen bg-white dark:bg-zinc-900 flex items-center justify-center">
        <h2 className="text-3xl font-bold">İletişim</h2>
      </section>
    </main>
  );
}
