"use client";

import { useState } from "react";

export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`transition-all duration-300 rounded-2xl ${
        open ? "bg-[#07366E]" : "bg-[#07366E]"
      }`}
    >
      {/* Question Row */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 lg:px-8 py-6 text-left"
      >
        <span className="font-serif text-white text-lg lg:text-xl">
          {question}
        </span>

        {/* Plus / Minus Button */}
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFAE00] text-[#054A91] text-2xl font-bold shrink-0">
          {open ? "−" : "+"}
        </span>
      </button>

      {/* Answer */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-6 lg:px-8 pb-6 text-white/90 text-base leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}
