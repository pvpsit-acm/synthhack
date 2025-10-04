import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: "Who can participate in SYNTHHACK 2K25?",
      answer: "The hackathon is open to all students, professionals, and tech enthusiasts. Teams can have 2-4 members, and we welcome participants of all skill levels."
    },
    {
      question: "What should I bring to the hackathon?",
      answer: "Bring your laptop, charger, any hardware you might need, and lots of enthusiasm! We'll provide meals, snacks, Wi-Fi, and workspace. Don't forget your student ID for verification."
    },
    {
      question: "Do I need to have a team before registering?",
      answer: "No! You can register individually and we'll help you find teammates during the team formation session. Alternatively, you can register as a complete team if you already have one."
    },
    {
      question: "What technologies can we use?",
      answer: "You're free to use any programming languages, frameworks, APIs, and tools you're comfortable with. We encourage innovation and creativity in your technology choices."
    },
    {
      question: "Is there any registration fee?",
      answer: "No, SYNTHHACK 2K25 is completely free to participate. This includes meals, workspace, mentorship, and all event activities."
    },
    {
      question: "Can we start working on our project before the hackathon?",
      answer: "No, all projects must be built from scratch during the 48-hour event period. However, you can research ideas, prepare designs, and plan your approach beforehand."
    },
    {
      question: "What happens if I can't finish my project in time?",
      answer: "That's perfectly fine! The goal is to learn, network, and have fun. Judges will evaluate based on your progress, innovation, and presentation, not just completion."
    }
  ];

  return (
    <section id="faq" className="section-spacing relative">
      {/* Parallax Question Mark Elements */}
      <div className="absolute top-20 right-20 text-6xl text-purple-500/10 font-bold transform rotate-12 animate-pulse">?</div>
      <div className="absolute bottom-20 left-20 text-4xl text-cyan-500/10 font-bold transform -rotate-12 animate-pulse" style={{animationDelay: '1s'}}>?</div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-1 text-lime-400 neon-glow mb-6">
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