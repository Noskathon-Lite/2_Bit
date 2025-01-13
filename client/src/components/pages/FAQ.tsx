import React from "react";
import Header from "../Header";

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What is Campus Events?",
      answer:
        "Campus Events is a platform designed to connect students with a wide range of events happening on and off campus. From workshops to social gatherings, we make it easier for you to find and register for events.",
    },
    {
      question: "How do I register for an event?",
      answer:
        "To register for an event, navigate to the 'Events' section, select the event you're interested in, and click on the 'Register' button. Follow the on-screen instructions to complete your registration.",
    },
    {
      question: "Is there a fee to use Campus Events?",
      answer:
        "Campus Events is completely free to use for students. However, some events may have their own registration fees, which will be mentioned in the event details.",
    },
    {
      question: "How do I contact support?",
      answer:
        "You can contact our support team by visiting the 'Contact Us' page and filling out the form. We'll get back to you as soon as possible.",
    },
    {
      question: "Can I host my own event on Campus Events?",
      answer:
        "Yes! If you're interested in hosting your own event, please contact our team through the 'Contact Us' page with your event details, and we'll assist you in getting it listed. However, you will have to pay a small fee for hosting an event.",
    },
  ];

  return (
    <div>
        <Header showLoginButton={false} />
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h1>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="p-4 border border-gray-300 rounded-md shadow-sm hover:shadow-lg transition-shadow duration-200"
          >
            <h2 className="text-lg font-semibold text-green-700">
              {faq.question}
            </h2>
            <p className="text-gray-700 mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default FAQ;
