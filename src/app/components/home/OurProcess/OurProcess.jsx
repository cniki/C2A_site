export default function OurProcess() {
  return (
    <section className="bg-white px-4 lg:px-12 py-6 lg:py-16">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <h2 className="font-serif text-4xl lg:text-5xl text-blue-900">
              Our Process
            </h2>
            <p className="mt-4 text-lg text-[#004E97] max-w-2xl">
              Get your free, no-obligation case review today. We serve all states,
              and you pay only if you win.
            </p>
          </div>

          <button className="self-start lg:self-auto flex items-center gap-4 bg-yellow-400 text-blue-900 px-8 py-5 rounded-2xl font-semibold shadow-lg hover:bg-yellow-300 transition">
            Start My Free Case Review
            <span className="w-10 h-10 rounded-xl bg-[#004E97] text-white flex items-center justify-center">
              ↗
            </span>
          </button>
        </div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-[#004E97] text-white rounded-2xl p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-yellow-400 text-blue-900 flex items-center justify-center font-bold">
              01
            </div>
            <div>
              <h3 className="text-lg font-semibold">Start Here</h3>
              <p className="text-blue-100 text-sm">Quick and easy.</p>
            </div>
          </div>

          <img
            src="/images/ProcessImg1.jpg"
            className="rounded-2xl w-full h-full object-cover"
            alt=""
          />

          <img
            src="/images/ProcessImg2.jpg"
            className="hidden lg:block rounded-2xl w-full h-full object-cover"
            alt=""
          />

          <img
            src="/images/ProcessImg3.png"
            className="rounded-2xl w-full h-full object-cover"
            alt=""
          />

          <div className="bg-[#004E97] text-white rounded-2xl p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-yellow-400 text-blue-900 flex items-center justify-center font-bold">
              02
            </div>
            <div>
              <h3 className="text-lg font-semibold">Expert Attorney</h3>
              <p className="text-blue-100 text-sm">
                A specialist in your type of claim.
              </p>
            </div>
          </div>

          <img
            src="/images/ProcessImg4.png"
            className="hidden lg:block rounded-2xl w-full h-full object-cover"
            alt=""
          />

          <div className="bg-[#004E97] text-white rounded-2xl p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-yellow-400 text-blue-900 flex items-center justify-center font-bold">
              03
            </div>
            <div>
              <h3 className="text-lg font-semibold">File Your Claim</h3>
              <p className="text-blue-100 text-sm">
                You only pay if you win.
              </p>
            </div>
          </div>

          <img
            src="/images/ProcessImg5.png"
            className="rounded-2xl w-full h-full object-cover"
            alt=""
          />

          <img
            src="/images/ProcessImg6.png"
            className="hidden lg:block rounded-2xl w-full h-full object-cover"
            alt=""
          />

        </div>
      </div>
    </section>
  );
}
