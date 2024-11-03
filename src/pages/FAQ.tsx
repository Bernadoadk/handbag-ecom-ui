import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. All transactions are processed securely through our payment gateway.',
  },
  {
    question: 'What is your return policy?',
    answer: 'We offer a 30-day return policy for all unused items in their original condition with tags attached. Returns are free for customers within the United States.',
  },
  {
    question: 'How long does shipping take?',
    answer: 'Domestic orders typically arrive within 3-5 business days. International shipping can take 7-14 business days depending on the destination.',
  },
  {
    question: 'Are your products authentic?',
    answer: 'Yes, all our products are 100% authentic and come with a certificate of authenticity. We work directly with manufacturers and authorized distributors.',
  },
  {
    question: 'Do you offer warranty?',
    answer: 'All our bags come with a 1-year warranty against manufacturing defects. This covers issues with stitching, hardware, and materials under normal use.',
  },
  {
    question: 'Can I track my order?',
    answer: 'Yes, once your order ships, you will receive a confirmation email with tracking information. You can also track your order through your account dashboard.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="pt-16">
      <PageHeader
        title="Frequently Asked Questions"
        description="Find answers to common questions about our products and services"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-gray-50 border-t">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}