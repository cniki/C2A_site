export default function HeroCard() {
  return (
    <div className="relative rounded-[40px] overflow-hidden bg-gradient-to-br from-[#0A4C9A] to-[#083B7A] p-8 lg:p-12 min-h-[10px] lg:h-[575px]">


      <div className="absolute inset-0">
        <div className="absolute -top-24 -right-24 w-[400px] h-[400px] bg-blue-500/20 rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-blue-800/30 rounded-full" />
      </div>

      <div className="relative z-10">
        <h1 className="text-yellow-400 text-4xl lg:text-6xl font-serif leading-tight">
          Empowering <br />
          Jusice, <br />
          Starting Now
        </h1>

        <p className="mt-6 max-w-md text-blue-100 text-base lg:text-lg">
          Free, confidential case reviews. Serving all 50 states. No fees
          unless you win.
        </p>

        <button className="mt-8 inline-flex items-center gap-3 bg-yellow-400 text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition">
          Check if you Qualify
          <span className="bg-blue-900 text-white w-8 h-8 rounded-full flex items-center justify-center">
            →
          </span>
        </button>
      </div>
    </div>
  );
}
