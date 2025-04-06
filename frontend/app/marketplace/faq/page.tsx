"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { GradientBlob } from "@/components/ui/gradient-blob";
import { Search, ShoppingBag, Truck, CreditCard, Recycle, MessageCircle, Shield } from 'lucide-react';
import Link from "next/link";

const FAQPage = () => {
  // FAQ categories and questions
  const faqCategories = [
    {
      id: "general",
      label: "General",
      icon: ShoppingBag,
      questions: [
        {
          id: "what-is-ecocircuit",
          question: "What is EcoCircuit Marketplace?",
          answer:
            "EcoCircuit Marketplace is a platform where users can buy, sell, and trade upcycled e-waste products and components. Our marketplace features a diverse range of items, including art pieces, functional products, and raw materials derived from recycled electronics. We aim to promote sustainability by giving new life to electronic waste through creative repurposing.",
        },
        {
          id: "who-can-sell",
          question: "Who can sell on EcoCircuit Marketplace?",
          answer:
            "Anyone with a verified EcoCircuit account can sell on our marketplace. Whether you're an individual creator, an artist, or a business specializing in upcycled products, you're welcome to join our community of sellers. To start selling, you'll need to complete our seller verification process, which helps ensure the quality and authenticity of products on our platform.",
        },
        {
          id: "blockchain-tracking",
          question: "How does the blockchain tracking system work?",
          answer:
            "Our blockchain-based tracking system creates a transparent and immutable record of each product's lifecycle. For products made from recycled electronics, the system tracks the source of components, previous usage, and the upcycling process. This provides buyers with verified information about the product's sustainability impact and authenticity. Each product receives a unique digital passport that can be accessed through our platform.",
        },
        {
          id: "sustainability-impact",
          question: "How is the sustainability impact calculated?",
          answer:
            "We calculate sustainability impact based on several factors, including the weight of e-waste diverted from landfills, estimated CO₂ emissions saved compared to virgin material production, and water conservation. These calculations use industry-standard metrics and are verified through our blockchain system. Each product listing displays its specific environmental impact to help buyers make informed decisions.",
        },
      ],
    },
    {
      id: "buying",
      label: "Buying",
      icon: ShoppingBag,
      questions: [
        {
          id: "how-to-buy",
          question: "How do I purchase items on the marketplace?",
          answer:
            "Purchasing items on EcoCircuit Marketplace is simple. Browse the listings, select the item you want to buy, and click 'Add to Cart' or 'Buy Now.' You can then proceed to checkout, where you'll enter your shipping and payment information. Once your order is confirmed, you'll receive updates on your purchase status via email and in your account dashboard.",
        },
        {
          id: "payment-methods",
          question: "What payment methods are accepted?",
          answer:
            "We accept various payment methods including credit/debit cards, UPI payments, and cash on delivery (for eligible locations). All online payments are processed through secure payment gateways to ensure your financial information remains protected. You can save your payment information securely for faster checkout in the future.",
        },
        {
          id: "product-authenticity",
          question: "How can I verify the authenticity of products?",
          answer:
            "All products on EcoCircuit Marketplace undergo verification through our blockchain tracking system. Products with a 'Verified' badge have been authenticated and their component sources confirmed. You can view the detailed blockchain record for any verified product by",
        },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <GradientBlob
          className="top-0 left-0 md:top-[-10%] md:left-[10%] lg:top-[-20%] lg:left-[20%]"
          size={400}
        />
        <GradientBlob
          className="bottom-0 right-0 md:bottom-[-10%] md:right-[10%] lg:bottom-[-20%] lg:right-[20%]"
          size={400}
        />
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl px-4 py-8 md:px-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Frequently Asked Questions
          </h1>

          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
              {faqCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {faqCategories.map((category) => (
              <div key={category.id}>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((question) => (
                    <AccordionItem key={question.id} value={question.id}>
                      <AccordionTrigger>{question.question}</AccordionTrigger>
                      <AccordionContent>{question.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </Tabs>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default FAQPage;



