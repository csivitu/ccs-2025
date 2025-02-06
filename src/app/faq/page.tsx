"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import faq from "../data/faq";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <div className="flex justify-center items-center flex-col px-4 py-12">
        <h1 className="text-6xl font-bold my-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#A2FACF] to-[#64ACFF]">
          CSI's Frequently Asked <br /> Questions
        </h1>
        <button className="bg-white text-black py-2 px-6 rounded-xl text-xl font-bold mb-8">
          Contact Us
        </button>
        <div className="w-full max-w-4xl">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-gray-700">
              <button
                className="w-full py-4 px-6 flex items-center text-xl font-semibold focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}>
                  <span className="gradient-icon">
                    {openIndex === index ? "-": "+"}
                  </span>
                </span>
                <span className="flex items-center">
                  <span className="text-2xl ml-4">
                    {item.question}
                  </span>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-screen" : "max-h-0"}`}
              >
                <p className="px-6 pb-4 text-lg text-[#76C3F1] ml-12">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;