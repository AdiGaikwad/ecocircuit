"use client"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GradientBlob } from "@/components/ui/gradient-blob"
import { Button } from "@/components/ui/button"
import { Palette, Lightbulb, Users, School, Coins, ArrowRight, Image } from "lucide-react"
import Link from "next/link"

export default function EWasteArtPage() {
  return (
    <main className="min-h-screen">

      <div className="pt-24 pb-16 relative overflow-hidden">
        <GradientBlob
          className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"
          colors={["#8B5CF6", "#A78BFA", "#C4B5FD"]}
          size={600}
          opacity={0.1}
        />

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">"E-Waste to Art" Initiative</h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Transform e-waste into functional art or infrastructure, raising awareness and reducing landfill burden
              through creativity and innovation.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{opacity: 1, x: 0}}
                
                // whileInView={{ opacity: 1, x: 0 }}
                // viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Turning Waste Into Wonder</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our E-Waste to Art initiative transforms discarded electronics into beautiful, functional art pieces and
                infrastructure, giving new life to materials that would otherwise end up in landfills.
              </p>

              <div className="space-y-6 mt-8">
                <div className="flex items-start">
                  <div className="bg-purple-100 rounded-full p-3 mr-4">
                    <Lightbulb className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">AI Design Tools</h3>
                    <p className="text-gray-700">
                      Generate blueprints for upcycling e-waste into products like solar-powered streetlights or public
                      benches using our AI-powered design platform.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-100 rounded-full p-3 mr-4">
                    <School className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Local Workshops</h3>
                    <p className="text-gray-700">
                      Partner with artists and schools to host e-waste sculpting events, funded by corporate social
                      responsibility programs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-100 rounded-full p-3 mr-4">
                    <Coins className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">NFT Sales</h3>
                    <p className="text-gray-700">
                      Sell digital twins of e-waste art as NFTs, with proceeds funding recycling hubs and supporting
                      artists.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-100 rounded-full p-3 mr-4">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Community Initiatives</h3>
                    <p className="text-gray-700">
                      Engage local communities in collaborative art projects that beautify public spaces while raising
                      awareness about e-waste.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/contact">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                    Get Involved
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{opacity: 1, x: 0}}
                
                // whileInView={{ opacity: 1, x: 0 }}
                // viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                {
                  title: "Circuit Board Mural",
                  description: "Community art installation made from 500+ recycled circuit boards",
                  color: "from-purple-500 to-indigo-500",
                },
                {
                  title: "E-Waste Lamp",
                  description: "Functional lighting created from discarded computer parts",
                  color: "from-pink-500 to-rose-500",
                },
                {
                  title: "Keyboard Bench",
                  description: "Public seating made from recycled keyboards and monitors",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  title: "Phone Case Garden",
                  description: "Vertical garden using old smartphone cases as planters",
                  color: "from-green-500 to-emerald-500",
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="relative rounded-xl overflow-hidden aspect-square shadow-lg"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90`}></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                    <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                    <p className="text-sm opacity-90">{project.description}</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <Image className="h-5 w-5 text-white" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore some of the innovative e-waste art projects created through our initiative.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Solar-Powered E-Waste Streetlight",
                description:
                  "A functional streetlight created from discarded computer parts and solar panels, illuminating a community park.",
                location: "Green City Park",
                materials: "Computer cases, circuit boards, LED screens, solar panels",
                image: "streetlight",
              },
              {
                title: "Digital Waterfall",
                description:
                  "An interactive art installation that uses old smartphone screens to create a digital waterfall effect with changing patterns.",
                location: "Tech Museum",
                materials: "Smartphones, tablets, LED strips, motion sensors",
                image: "waterfall",
              },
              {
                title: "Circuit Board Cityscape",
                description:
                  "A large-scale wall mural depicting a futuristic cityscape made entirely from salvaged circuit boards and electronic components.",
                location: "Downtown Arts District",
                materials: "Circuit boards, computer chips, cables, keyboard keys",
                image: "cityscape",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-purple-600 to-indigo-600 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    <Palette className="h-12 w-12 opacity-50" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-gray-500">
                      <span className="font-medium text-gray-700">Location:</span> {project.location}
                    </p>
                    <p className="text-sm text-gray-500">
                      <span className="font-medium text-gray-700">Materials:</span> {project.materials}
                    </p>
                  </div>
                  <Button variant="outline" className="text-purple-600 border-purple-600 hover:bg-purple-50 w-full">
                    View Project Details
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
              <p className="text-lg opacity-90">
                There are many ways to participate in our E-Waste to Art initiative, whether you're an artist, educator,
                or community member.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "For Artists",
                  items: [
                    "Apply for our artist residency program",
                    "Submit proposals for e-waste art installations",
                    "Lead workshops in your community",
                    "Collaborate with tech companies on CSR projects",
                  ],
                },
                {
                  title: "For Educators",
                  items: [
                    "Integrate e-waste art into STEAM curriculum",
                    "Organize school collection drives",
                    "Host student design competitions",
                    "Arrange field trips to e-waste art exhibitions",
                  ],
                },
                {
                  title: "For Communities",
                  items: [
                    "Propose public spaces for e-waste art installations",
                    "Volunteer at community workshops",
                    "Donate e-waste materials for art projects",
                    "Advocate for e-waste art in public planning",
                  ],
                },
                {
                  title: "For Businesses",
                  items: [
                    "Sponsor e-waste art initiatives",
                    "Donate corporate e-waste for creative reuse",
                    "Commission e-waste art for office spaces",
                    "Engage employees in team-building art workshops",
                  ],
                },
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
                >
                  <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <ArrowRight className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link href="/contact">
                <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg">
                  Contact Us to Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

