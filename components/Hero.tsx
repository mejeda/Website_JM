import Image from "next/image";

export default function Hero() {
  return (
    <section className="container-custom pt-24 pb-32">
      <h1 className="text-6xl md:text-8xl mb-16">
        Jérôme Meinlschmidt
      </h1>

      <div className="relative w-full">
        <Image
          src="/hero.jpg"
          alt="Hero Artwork"
          width={2000}
          height={1400}
          className="w-full h-auto"
          priority
        />
      </div>
    </section>
  );
}