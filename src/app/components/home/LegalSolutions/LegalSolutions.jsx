import SolutionCard from "./SolutionCard";

export default function LegalSolutions() {
  return (
    <section className="relative bg-white px-0 lg:pl-12 pt-8 pb-8 lg:pt-24 lg:pb-36">
      

      <div className="w-full lg:mx-auto  lg:pl-12">

       <div className="relative bg-[#054A91] rounded-none lg:rounded-l-[40px] px-4 sm:px-6 lg:px-10 py-12 overflow-hidden">

          <div className="absolute -top-20 -left-20 h-40 w-40 bg-white rotate-45 hidden lg:block" />

          <h2 className="font-serif text-yellow-400 text-4xl lg:text-5xl">
            Legal Solutions
          </h2>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full px-2 py-2 bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
            <button className="px-5 py-2 rounded-full bg-yellow-400 text-blue-900 font-semibold shadow-md">
              Toxic Exposure
            </button>

            <button className="px-5 py-2 rounded-full text-white hover:bg-white/10 transition">
              Group Litigation
            </button>

            <button className="px-5 py-2 rounded-full text-white hover:bg-white/10 transition">
              Wound
            </button>
          </div>

          {/* Cards */}
          <div className="mt-10">

            <div className="flex gap-6 overflow-x-auto pb-4 lg:hidden">
              <div className="min-w-[85%]">
                <SolutionCard image="/images/img1.png" title="Pantac Cancer Lawsuit" />
              </div>
              <div className="min-w-[85%]">
                <SolutionCard image="/images/img2.png" title="Paraquat Lawsuit" />
              </div>
              <div className="min-w-[85%]">
                <SolutionCard image="/images/img3.png" title="Bernia Mesh Lawsuit" />
              </div>
              <div className="min-w-[85%]">
                <SolutionCard image="/images/img4.png" title="IVC Filter Lawsuit" />
              </div>
            </div>

            <div className="hidden lg:grid grid-cols-4 gap-6">
              <SolutionCard image="/images/img1.png" title="Pantac Cancer Lawsuit" />
              <SolutionCard image="/images/img2.png" title="Paraquat Lawsuit" />
              <SolutionCard image="/images/img3.png" title="Bernia Mesh Lawsuit" />
              <SolutionCard image="/images/img4.png" title="IVC Filter Lawsuit" />
            </div>
          </div>

          <div className="mt-10 flex justify-center gap-3 lg:hidden">
            <span className="h-2 w-8 rounded-full bg-yellow-400" />
            <span className="h-2 w-2 rounded-full bg-white/60" />
            <span className="h-2 w-2 rounded-full bg-white/60" />
            <span className="h-2 w-2 rounded-full bg-white/60" />
          </div>

        </div>
      </div>
    </section>
  );
}
