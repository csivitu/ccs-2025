'use client'
import React, { useState } from 'react'
import faq from '../../../data/faq'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="flex justify-center items-center flex-col px-4 py-12">
      <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-6xl font-bold my-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#A2FACF] to-[#64ACFF] font-sans code">
        CSI's Frequently Asked <br /> Questions
      </h1>
      <div className="mt-1 w-full max-w-4xl">
        {faq.map((item, index) => (
          <div key={item.question} className="border-b border-gray-700">
            <button
              className="w-full py-4 px-6 flex items-center text-sm sm:text-base md:text-lg lg:text-xl font-semibold focus:outline-none"
              onClick={() => toggleFAQ(index)}
              type="button"
            >
              <span
                className={`transform transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              >
                <span className="gradient-icon">
                  {openIndex === index ? '-' : '+'}
                </span>
              </span>
              <span className="flex items-center">
                <span className="text-xs sm:text-sm md:text-lg ml-4 font-sans code">
                  {item.question}
                </span>
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? 'max-h-screen' : 'max-h-0'
              }`}
            >
              <p className="px-6 pb-4 text-xs sm:text-sm md:text-lg text-[#76C3F1] ml-6">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ
