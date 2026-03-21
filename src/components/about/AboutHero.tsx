import Image from "next/image";

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-primary-container">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary-container z-0" />
      <div className="absolute top-0 right-0 w-full h-[500px] bg-[url('/noise.png')] opacity-10 mix-blend-overlay z-0 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="col-span-1 lg:col-span-7 flex flex-col gap-6">
          <div className="inline-flex px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white font-medium text-sm w-fit uppercase tracking-widest">
            About The Leader
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
            Who is <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
              Bijender Yadav?
            </span>
          </h1>
          <p className="text-xl text-white/80 max-w-xl font-medium leading-relaxed">
            A grassroots leader, former INC District President, and a dedicated son of Moradabad, working relentlessly for the prosperity of the brass city.
          </p>
        </div>

        <div className="col-span-1 lg:col-span-5 relative">
          <div className="relative w-full aspect-[4/5] max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/10 -rotate-2 hover:rotate-0 transition-transform duration-500">
            <Image
              src="/images/about.jpg"
              alt="Bijender Yadav in Moradabad"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 500px"
              priority
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-primary-accent w-24 h-24 rounded-full flex items-center justify-center text-white font-display font-bold text-2xl shadow-xl -z-10" />
        </div>
      </div>
    </section>
  );
}
