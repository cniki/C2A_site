// components/home/Hero/Hero.jsx

import HeroCard from "./HeroCard";

export default function Hero() {
  return (
    <section className="relative bg-white px-4 lg:px-12 pt-30 pb-10">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 items-start">

        {/* LEFT BLUE CARD */}
        <HeroCard />

        {/* RIGHT GREY CARD */}
        <div className="relative bg-[#F3F6F9] rounded-[32px] p-6 lg:p-8 shadow-sm">

          <div className="bg-white rounded-xl px-4 py-3 flex items-center justify-between shadow-sm">
            <span className="font-medium text-blue-900">
              Asbestos Exposure Claims
            </span>
            <span className="bg-yellow-400 p-2 rounded-lg">⌄</span>
          </div>


          <div className="mt-6 bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h4 className="text-blue-900 font-semibold">
                Settlement Success:
              </h4>
              <span className="text-2xl font-bold text-blue-900">
                2,45,200
              </span>
            </div>

            <div className="mt-6 flex items-end gap-10 h-40">
              <div className="w-12 bg-gray-200 rounded-lg h-20" />
              <div className="w-12 bg-gray-400 rounded-lg h-28" />
              <div className="w-12 bg-blue-900 rounded-lg h-36" />
            </div>

            <div className="mt-3 flex justify-between text-sm text-blue-700">
              <span>Apr</span>
              <span>Jul</span>
              <span>Sept</span>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Average Settlement", value: "$100K – $1M" },
              { title: "Time to Receive", value: "18–30 Months" },
              { title: "Time in Court", value: "4–5 Weeks" },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-4 shadow-sm"
              >
                <p className="text-sm text-gray-500">{item.title}</p>
                <p className="mt-1 font-semibold text-blue-900">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

         

        </div>
      </div>
    </section>
  );
}
