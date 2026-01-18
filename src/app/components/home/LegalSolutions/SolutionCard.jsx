// components/home/LegalSolutions/SolutionCard.jsx

import Image from "next/image";

export default function SolutionCard({ image, title }) {
  return (
    <div className="relative group rounded-[28px] overflow-hidden bg-blue-900 h-[320px]">

      {/* Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
      />

      {/* Dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* Title */}
      <div className="absolute bottom-5 left-5 right-5">
        <h3 className="text-white font-serif text-xl leading-snug">
          {title}
        </h3>
      </div>

      {/* Arrow */}
      <div className="absolute top-4 right-4 h-12 w-12 rounded-full bg-blue-800/80 flex items-center justify-center text-yellow-400 text-xl group-hover:bg-blue-700 transition">
        ↗
      </div>
    </div>
  );
}
