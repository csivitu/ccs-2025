"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

interface FAQ {
  question: string;
  answer: string;
}

const faqData: FAQ[] = [
  { question: "What is your return policy?", answer: "You can return items within 30 days of purchase with a valid receipt." },
  { question: "Do you offer international shipping?", answer: "Yes, we ship to over 50 countries worldwide." },
  { question: "How can I reset my password?", answer: "Click on 'Forgot Password' on the login page and follow the instructions." },
  { question: "Do you have a mobile app?", answer: "Yes, our app is available on both iOS and Android." },
  { question: "Can I track my order?", answer: "Yes, you will receive a tracking number once your order is shipped." },
  { question: "What payment methods do you accept?", answer: "We accept credit/debit cards, PayPal, and UPI payments." },
  { question: "Do you offer discounts for bulk orders?", answer: "Yes, we provide special pricing for bulk purchases. Contact our sales team for more details." },
  { question: "How do I contact customer support?", answer: "You can reach us via email, phone, or live chat on our website." },
  { question: "What are your business hours?", answer: "Our support team is available from 9 AM to 6 PM, Monday to Friday." },
  { question: "Do you provide warranty on your products?", answer: "Yes, all our products come with a 1-year warranty against manufacturing defects." }
];

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
                className="w-full py-4 px-6 flex items-center text-xl font-semibold"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-2xl mr-8 bg-clip-text text-transparent bg-gradient-to-r from-[#A2FACF] to-[#64ACFF]">{openIndex === index ? "−" : "+"}</span>
                {item.question}
              </button>
              <div
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${openIndex === index ? "max-h-screen" : "max-h-0"}`}
              >
                <p className="px-6 pb-4 bg-clip-text text-[#76C3F1] ml-12">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default FAQ;