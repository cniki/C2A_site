export default function FooterSection() {
  return (
    <section className="relative w-full">

      <div className="relative w-full bg-white">
        <img
          src="/images/footer/footerBg.png"
          alt="Footer Illustration"
          className="w-full object-cover"
        />
      </div>

      <div className="absolute top-[5%] lg:top-[25%] left-1/2 -translate-x-1/2 z-10 w-full px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#F5F6F6] rounded-[36px] overflow-hidden grid grid-cols-1 lg:grid-cols-2">

            {/* LEFT */}
            <div className="p-10 lg:p-14">
              <h2 className="text-[32px] lg:text-[40px] font-serif text-[#0A4C9A] leading-tight">
                Want To Know <br /> More?
              </h2>

              <button className="mt-8 bg-[#FDB515] text-[#0A4C9A] px-8 py-4 rounded-full font-semibold">
                Reach out to us
              </button>
            </div>

            {/* RIGHT */}
            <div className="hidden lg:block">
              <img
                src="/images/footer/knowMore.png"
                alt="Know More"
                className="h-full w-full object-cover"
              />
            </div>

          </div>
        </div>
      </div>

      <footer className="relative bg-[#0A4C9A] pt-[280px] pb-12 text-white">

        <div className="max-w-7xl mx-auto px-6">

  <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-14">

    <div>
      <p className="text-sm text-white/80 leading-relaxed">
        We link those harmed with premier U.S. attorneys specializing in mass tort,
        class action, and injury claims for redress.
      </p>
    </div>

    <div className="space-y-10">


      <div className="grid grid-cols-[180px_1fr] items-start gap-x-10">
        <h4 className="text-[#FDB515] font-semibold">EXPLORE MORE</h4>
        <ul className="flex flex-wrap gap-x-10 gap-y-3 text-sm">
          <li>Homepage</li>
          <li>Company Info</li>
          <li>Reach Out</li>
          <li>Toxic Exposure</li>
          <li>Group Litigation</li>
          <li>Wound and Accident</li>
        </ul>
      </div>

      {/* EXPOSURE */}
      <div className="grid grid-cols-[180px_1fr] items-start gap-x-10">
        <h4 className="text-[#FDB515] font-semibold">EXPOSURE</h4>
        <ul className="flex flex-wrap gap-x-10 gap-y-3 text-sm">
          <li>Semaglutide Info</li>
          <li>Asbestos Cancer</li>
          <li>Glyphosate Cases</li>
          <li>Baby Powder Claim</li>
          <li>Birth Control Harm</li>
        </ul>
      </div>

      {/* LITIGATION */}
      <div className="grid grid-cols-[180px_1fr] items-start gap-x-10">
        <h4 className="text-[#FDB515] font-semibold">LITIGATION</h4>
        <ul className="flex flex-wrap gap-x-10 gap-y-3 text-sm">
          <li>Taxi Assault Cases</li>
          <li>Pelvic Mesh Complications</li>
          <li>Digital Overuse Harm</li>
          <li>Gaming Disorder Help</li>
        </ul>
      </div>

      {/* WOUND AND ACCIDENT */}
      <div className="grid grid-cols-[180px_1fr] items-start gap-x-10">
        <h4 className="text-[#FDB515] font-semibold">
          WOUND AND ACCIDENT
        </h4>
        <ul className="flex flex-wrap gap-x-10 gap-y-3 text-sm">
          <li>Abuse and Assault</li>
          <li>Vehicle Collisions</li>
          <li>Premises Liability</li>
          <li>Trucking Accidents</li>
        </ul>
      </div>

    </div>
  </div>

  {/* FOOTER BOTTOM */}
  <div className="mt-16 border-t border-white/30 pt-6 flex flex-col md:flex-row justify-between gap-4 text-sm text-white/80">
    <p>© 2025 Connect2Attorney. All Rights Reserved.</p>
    <div className="flex gap-6">
      <span>Privacy Policy</span>
      <span>Disclaimer</span>
      <span>Sitemap</span>
    </div>
  </div>

</div>

      </footer>

    </section>
  );
}
