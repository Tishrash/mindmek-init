import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}
function FaqItem({
  question,
  answer,
  isOpen,
  toggleOpen
}: FaqItemProps) {
  return <div className="border-b border-gray-800 last:border-b-0">
      <button className="flex justify-between items-center w-full py-5 px-4 text-left focus:outline-none" onClick={toggleOpen}>
        <h3 className={`text-lg font-medium ${isOpen ? 'text-[#00AEEF]' : 'text-white'}`}>
          {question}
        </h3>
        <span>
          {isOpen ? <ChevronUpIcon className="w-5 h-5 text-[#00AEEF]" /> : <ChevronDownIcon className="w-5 h-5 text-gray-400" />}
        </span>
      </button>
      {isOpen && <div className="pb-5 px-4">
          <p className="text-gray-400">{answer}</p>
        </div>}
    </div>;
}
export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const faqs = [{
    question: 'What is MindMek?',
    answer: "MindMek is a pioneering company at the intersection of neuroscience and technology. We're developing advanced brain-computer interfaces and cognitive enhancement solutions that aim to expand human potential through neural integration and AI-powered systems."
  }, {
    question: 'How does the technology work?',
    answer: 'Our technology uses non-invasive sensors to read neural activity patterns, which are then processed by our proprietary AI algorithms. These algorithms identify optimization opportunities and provide feedback to enhance cognitive performance through targeted neural stimulation and personalized training protocols.'
  }, {
    question: "Is MindMek's technology safe?",
    answer: 'Safety is our top priority. All our technologies undergo rigorous testing and comply with the highest safety standards in the industry. Our non-invasive approach minimizes risks, and we maintain transparent communication about all aspects of our technology development.'
  }, {
    question: 'When will MindMek products be available?',
    answer: "We're currently in the final stages of development and testing. Our first consumer product is expected to launch within the next 12 months. Join our waitlist to be among the first to experience this revolutionary technology."
  }, {
    question: 'Will MindMek technology be affordable?',
    answer: "We're committed to making our technology accessible. While our initial products will be premium offerings, we have a clear roadmap to develop more affordable options as the technology matures. We're also exploring partnerships with healthcare providers and insurance companies."
  }, {
    question: 'Do I need technical knowledge to use MindMek products?',
    answer: "Not at all. We've designed our products with user-friendliness in mind. The interface is intuitive, and the system adapts to your specific needs without requiring technical expertise. Our goal is to make advanced neural technology accessible to everyone."
  }];
  return <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
        <span className="text-[#00AEEF]">Frequently Asked</span>{' '}
        <span className="text-gray-300">Questions</span>
      </h2>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
        Find answers to the most common questions about MindMek and our
        technology
      </p>
      <div className="bg-gray-900/30 rounded-lg overflow-hidden">
        {faqs.map((faq, index) => <FaqItem key={index} question={faq.question} answer={faq.answer} isOpen={openIndex === index} toggleOpen={() => setOpenIndex(openIndex === index ? -1 : index)} />)}
      </div>
      <div className="mt-12 text-center">
        <p className="text-gray-400 mb-4">Still have questions?</p>
        <a href="#" className="inline-flex items-center px-6 py-3 bg-[#00AEEF] hover:bg-[#009ad3] text-white rounded-md transition-colors">
          Contact Us
        </a>
      </div>
    </div>;
}