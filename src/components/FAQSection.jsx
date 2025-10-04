import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: "Who can participate in SYNTHHACK 2K25?",
      answer: "The hackathon is open to all students. Teams must have 5 members, and we welcome participants of all skill levels."
    },
    {
      question: "How do I register in Hackathon?",
      answer: "To register for SYNTHHACK 2K25, visit our UnStop Event Site and fill out the registration form. Make sure to have your team details ready!"
    },
    {
      question: "What are the themes that we can work on?",
      answer: "You can work listed themes: Productivity & Education, Social Innovation, Health & Wellness, FinTech & Digital Economy, Agriculture & Food Security, and Security & Trust. Feel free to innovate within these domains!"
    },
    {
      question: "What should I bring to the hackathon?",
      answer: "Bring your laptop, charger, any hardware you might need, and lots of enthusiasm! We'll provide meals, snacks, Wi-Fi, and workspace. Don't forget your Student ID and a Government ID for verification."
    },
    {
      question: "What technologies can we use?",
      answer: "You're free to use any programming languages, frameworks, APIs, and tools you're comfortable with. We encourage innovation and creativity in your technology choices."
    },
    {
      question: "Is there any registration fee?",
      answer: "Participation in SYNTHHACK 2K25 is free, but the shortlisted 25 teams will have to pay 250 INR per member for food and accommodation."
    },
    {
      question: "Can we start working on our project before the hackathon?",
      answer: "No, all projects must be built from scratch during the 24-hour event period. However, you can research ideas, prepare implementation approaches, and plan your project structure beforehand."
    },
    {
      question: "What happens if I can't finish my project in time?",
      answer: "That's perfectly fine! The goal is to learn, network, and have fun. Judges will evaluate based on your progress, innovation, and presentation, not just completion."
    }
  ];

  return (
    <section id="faq" className="section-spacing relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-1 text-lime-400   mb-6">
            Frequently Asked Questions
          </h2>
          <p className="body-large max-w-3xl mx-auto text-gray-300">
            Got questions? We've got answers. Find everything you need to know 
            about participating in SYNTHHACK 2K25.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-card p-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-purple-500/20">
                  <AccordionTrigger className="text-left text-white hover:text-lime-400 transition-colors duration-200 py-4">
                    <span className="text-lg font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pb-4">
                    <p className="body-medium leading-relaxed">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <div className="space-card max-w-2xl mx-auto">
            <h3 className="heading-2 text-cyan-400 mb-4">
              Still have questions?
            </h3>
            <p className="body-medium text-gray-300 mb-4">
              Can't find what you're looking for? Reach out to our team through 
              the contact section below or join our WhatsApp community for instant support.
            </p>
            <button 
              className="btn-secondary"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;