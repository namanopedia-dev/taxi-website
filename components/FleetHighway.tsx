import Image from "next/image";

/**
 * FleetHighway — Animated real-car photo parade in the Hero section.
 * Cars scroll continuously left→right on a styled road strip.
 */

const vehicles = [
  { src: "/fleet/dzire.avif",   alt: "Maruti Dzire Tour",        name: "Maruti Dzire" },
  { src: "/fleet/aura.avif",    alt: "Hyundai Aura",             name: "Hyundai Aura" },
  { src: "/fleet/amaze.webp",   alt: "Honda Amaze",              name: "Honda Amaze" },
  { src: "/fleet/rumion.png",   alt: "Toyota Rumion",            name: "Toyota Rumion" },
  { src: "/fleet/carens.avif",  alt: "Kia Carens",               name: "Kia Carens" },
  { src: "/fleet/innova.avif",  alt: "Toyota Innova Crysta",     name: "Innova Crysta" },
  { src: "/fleet/carnival.avif",alt: "Kia Carnival",             name: "Kia Carnival" },
  { src: "/fleet/tempo1.png",   alt: "Tempo Traveller",          name: "Tempo Traveller" },
  { src: "/fleet/tempo2.png",   alt: "Force Tempo Traveller",    name: "Force Traveller" },
  { src: "/fleet/tempo3.jpg",   alt: "Tempo Traveller 16 Seater",name: "Traveller 16S" },
];

// Triple the list for a gapless infinite loop
const track = [...vehicles, ...vehicles, ...vehicles];

export default function FleetHighway() {
  return (
    <div className="w-full overflow-hidden select-none" aria-hidden="true">

      {/* Road band */}
      <div className="relative bg-[#111827] border-t border-[#1f2937] overflow-hidden">

        {/* Top fade — blends into page cream */}
        <div
          className="absolute top-0 left-0 right-0 h-8 z-20 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, #F7F6F1, transparent)" }}
        />

        {/* Left edge mask */}
        <div
          className="absolute top-0 left-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #111827 0%, transparent 100%)" }}
        />
        {/* Right edge mask */}
        <div
          className="absolute top-0 right-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #111827 0%, transparent 100%)" }}
        />

        {/* Tarmac grain texture */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "5px 5px",
          }}
        />

        {/* Scrolling car strip */}
        <div className="animate-fleet-track py-3">
          {track.map((v, idx) => (
            <div
              key={`${v.src}-${idx}`}
              className="relative flex-shrink-0 mx-6 flex flex-col items-center justify-end"
              style={{ width: 200, height: 120 }}
            >
              {/* Drop shadow on tarmac */}
              <div
                className="absolute bottom-1 left-1/2 -translate-x-1/2 rounded-full"
                style={{
                  width: "80%",
                  height: 10,
                  background: "radial-gradient(ellipse, rgba(0,0,0,0.55) 0%, transparent 80%)",
                  filter: "blur(3px)",
                }}
              />

              {/* Car image — object-contain keeps full car visible */}
              <Image
                src={v.src}
                alt={v.alt}
                width={200}
                height={110}
                className="object-contain w-full h-full drop-shadow-xl"
                style={{ objectPosition: "bottom center" }}
                priority={idx < 10}
              />

              {/* Name label */}
              <span className="absolute -bottom-0 left-1/2 -translate-x-1/2 text-[9px] font-semibold text-[#C99A3E] tracking-widest uppercase whitespace-nowrap opacity-70">
                {v.name}
              </span>
            </div>
          ))}
        </div>

        {/* Animated road centre-line dashes */}
        <div className="absolute bottom-2 left-0 right-0 h-[2px] animated-road-dashes pointer-events-none" />
      </div>

      {/* Bottom fade back to page background */}
      <div
        className="h-4"
        style={{ background: "linear-gradient(to bottom, #111827, #F7F6F1)" }}
      />
    </div>
  );
}
