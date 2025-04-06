"use client"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, MessageSquare, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen">

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Have questions about our e-waste solutions? Want to get involved? We'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
                  <p className="opacity-90">Fill out the form and our team will get back to you as soon as possible.</p>
                </div>

                <div className="p-6">
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" className="border-gray-300 focus:border-purple-500" />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        className="border-gray-300 focus:border-purple-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        placeholder="What is this regarding?"
                        className="border-gray-300 focus:border-purple-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Your message"
                        className="min-h-[150px] border-gray-300 focus:border-purple-500"
                      />
                    </div>

                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden h-full">
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

                  <div className="space-y-6 mb-8">
                    <div className="flex items-start">
                      <div className="bg-purple-100 rounded-full p-3 mr-4">
                        <MapPin className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Our Location</h3>
                        <p className="text-gray-600">
                          123 Eco Street, Green City
                          <br />
                          Earth 54321
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-purple-100 rounded-full p-3 mr-4">
                        <Mail className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                        <p className="text-gray-600">
                          info@ecocircuit.com
                          <br />
                          support@ecocircuit.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-purple-100 rounded-full p-3 mr-4">
                        <Phone className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                        <p className="text-gray-600">
                          +1 (555) 123-4567
                          <br />
                          +1 (555) 987-6543
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-purple-100 rounded-full p-3 mr-4">
                        <MessageSquare className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Support Hours</h3>
                        <p className="text-gray-600">
                          Monday - Friday: 9am - 6pm
                          <br />
                          Saturday: 10am - 4pm
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                    <p className="text-gray-600 mb-4">
                      Follow us on social media for updates, tips, and inspiration for sustainable e-waste management.
                    </p>
                    <div className="flex space-x-4">
                      {["facebook", "twitter", "instagram", "linkedin"].map((platform) => (
                        <a
                          key={platform}
                          href="#"
                          className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                        >
                          <span className="sr-only">{platform}</span>
                          <div className="w-5 h-5 bg-purple-600 rounded-full"></div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>

            <div className="space-y-6">
              {[
                {
                  question: "How can I participate in the E-Waste to Art initiative?",
                  answer:
                    "You can participate by attending our workshops, submitting art proposals, or donating e-waste materials. Visit our E-Waste to Art page for more details and upcoming events.",
                },
                {
                  question: "Do you offer corporate e-waste collection services?",
                  answer:
                    "Yes, we provide specialized e-waste collection and recycling services for businesses. We can also help you organize corporate challenges to engage your employees in sustainability efforts.",
                },
                {
                  question: "How does the AR collection point system work?",
                  answer:
                    "Our AR system uses your smartphone's camera to guide you to the nearest e-waste collection points. Once there, you can scan a QR code to log your contribution and earn rewards.",
                },
                {
                  question: "Can I suggest a location for a new collection point?",
                  answer:
                    "We're always looking to expand our network. Please use our contact form to suggest new locations, and our team will evaluate the feasibility.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-md"
                >
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

