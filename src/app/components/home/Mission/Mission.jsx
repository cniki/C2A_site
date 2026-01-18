export default function OurMission() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute top-0 left-0 w-full h-[580px] sm:h-[480px] md:h-[360px] lg:h-[480px]
             bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/Mission/missionBg.png')",
        }}
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 " />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 lg:py-24">
        {/* Content container */}
        <div className="relative rounded-l-[48px] rounded-r-none px-6 lg:px-0 py-10 lg:py-0">

        
          {/* Text content */}
          <div className="max-w-xl">
            <h2 className="font-serif text-[#0A4C9A] text-4xl lg:text-5xl">
              Our Mission
            </h2>

            <p className="mt-6 text-[#3A6FB0] text-base lg:text-lg leading-relaxed">
              Free, confidential case reviews. Serving all 35 states. No fees
              unless you win. Your Path To Justice Starts Here. C2P connects
              victims with the legal support they need. We provide tailored
              connections, empower client voices, and transform legal
              challenges into clear paths toward resolution.
            </p>

            {/* CTA */}
            <button className="mt-10 lg:mt-24 inline-flex items-center gap-4 bg-[#FDB515] px-12 py-4 rounded-[28px] text-[#0A4C9A] font-semibold shadow-lg hover:brightness-95 transition">
              About Us
              <span className="bg-[#0A4C9A] text-white w-10 h-10 rounded-xl flex items-center justify-center">
                ↗
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
