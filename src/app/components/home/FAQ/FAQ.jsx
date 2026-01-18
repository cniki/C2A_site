"use client";

import FAQItem from "./FAQItems";

const faqData = [
  {
    question: "What are the upfront costs?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nunc at placerat tincidunt, libero sapien malesuada erat.",
  },
  {
    question: "Who will be working on my case?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
  },
  {
    question: "Will my information be safe?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
  },
  {
    question: "How long will it take to resolve?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis ipsum. Praesent mauris.",
  },
  {
    question: "What cases do you handle?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec tellus sed augue semper porta.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-white py-6 lg:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative bg-[#054A91] rounded-[32px] lg:rounded-[48px] px-6 lg:px-12 py-12">

          {/* Heading */}
          <h2 className="font-serif text-white text-3xl lg:text-5xl mb-10">
            Questions? Contact Us
          </h2>

          {/* FAQ Items */}
          <div className="space-y-6">
            {faqData.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
