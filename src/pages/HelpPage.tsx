import React from 'react';
import { HelpCircle, Book, Video, MessageCircle, ExternalLink } from 'lucide-react';

const HelpPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-cyan-100 rounded-lg">
          <HelpCircle className="w-6 h-6 text-cyan-600" />
        </div>
        <h1 className="text-2xl font-bold">Help Center</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Book className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-lg font-semibold">Documentation</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Comprehensive guides and API references for all our services.
          </p>
          <button className="text-accent-600 hover:text-accent-700 font-medium inline-flex items-center gap-1">
            Browse Docs
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Video className="w-5 h-5 text-purple-600" />
            </div>
            <h2 className="text-lg font-semibold">Video Tutorials</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Step-by-step video guides for common tasks and features.
          </p>
          <button className="text-accent-600 hover:text-accent-700 font-medium inline-flex items-center gap-1">
            Watch Tutorials
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>

      <section className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
          <MessageCircle className="w-5 h-5" />
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {[
            {
              question: "How do I create a new service?",
              answer: "Navigate to the Services page and click the 'New Service' button. Follow the setup wizard to configure your service."
            },
            {
              question: "How do I manage team permissions?",
              answer: "Go to Settings > Team Management to add team members and configure their access levels."
            },
            {
              question: "How do I connect to the API?",
              answer: "Find your API keys in Settings > API Access. Use these keys to authenticate your API requests."
            }
          ].map((faq, index) => (
            <details
              key={index}
              className="group rounded-lg border border-gray-200 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-4 text-gray-900 hover:bg-gray-50">
                <h3 className="font-medium">
                  {faq.question}
                </h3>
                <svg
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <p className="px-4 pb-4 text-gray-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <div className="bg-accent-50 rounded-xl p-6 text-center">
        <h2 className="text-lg font-semibold mb-2">Still need help?</h2>
        <p className="text-gray-600 mb-4">
          Our support team is available 24/7 to assist you.
        </p>
        <button className="inline-flex items-center gap-2 px-6 py-3 bg-accent-gradient text-white font-medium rounded-xl hover:shadow-md transition-all duration-300">
          Contact Support
        </button>
      </div>
    </div>
  );
};

export default HelpPage;