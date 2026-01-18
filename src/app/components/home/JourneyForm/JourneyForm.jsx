export default function BeginJourney() {
  return (
    <section className="w-full bg-white py-6 lg:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          
          {/* LEFT IMAGE*/}
          <div className="hidden lg:flex justify-center relative">
            <div className="relative rounded-[32px] overflow-hidden">
              <img
                src="/images/agent.png"
                alt="Support agent"
                className="w-[420px] h-auto object-cover"
              />

              {/* Badge */}
              <div className="absolute top-6 left-6 bg-yellow-400 text-blue-900 font-semibold px-5 py-4 rounded-2xl text-sm shadow-md">
                No Win,<br />No Fees
              </div>

              <div className="absolute -bottom-6 right-6 bg-yellow-400 p-4 rounded-full shadow-lg">
                icon
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="w-full">
            <h2 className="text-[40px] leading-tight font-serif font-bold text-blue-900 mb-10">
              Begin Your Journey
            </h2>

            <form className="space-y-6">
 
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="input"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input"
                />
              </div>


              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="email"
                  placeholder="Email"
                  className="input"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="input"
                />
              </div>

              <textarea
                placeholder="How can we help?"
                rows={5}
                className="input resize-none"
              />

              <button
                type="submit"
                className="w-full mt-4 bg-blue-800 hover:bg-blue-900 transition text-white text-lg font-medium py-5 rounded-full"
              >
                Get started
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
