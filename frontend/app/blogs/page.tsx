"use client"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, User, Search } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"

const blogPosts = [
  {
    id: 1,
    title: "The Growing E-Waste Crisis: Facts and Figures",
    excerpt:
      "Learn about the alarming statistics behind the global e-waste problem and why immediate action is necessary.",
    author: "Emma Rodriguez",
    date: "April 15, 2025",
    category: "Education",
    readTime: "5 min read",
    image: "e-waste-crisis",
  },
  {
    id: 2,
    title: "How AR Technology is Revolutionizing E-Waste Collection",
    excerpt:
      "Discover how augmented reality is making e-waste recycling more accessible and engaging for communities worldwide.",
    author: "Michael Chen",
    date: "April 10, 2025",
    category: "Technology",
    readTime: "8 min read",
    image: "ar-technology",
  },
  {
    id: 3,
    title: "From Trash to Treasure: The Art of E-Waste Upcycling",
    excerpt: "Explore creative projects that transform discarded electronics into beautiful and functional art pieces.",
    author: "Sophia Williams",
    date: "April 5, 2025",
    category: "Art & Design",
    readTime: "6 min read",
    image: "e-waste-art",
  },
  {
    id: 4,
    title: "Corporate Sustainability: Why E-Waste Management Matters",
    excerpt:
      "How leading companies are incorporating e-waste initiatives into their ESG strategies and seeing real benefits.",
    author: "James Peterson",
    date: "March 28, 2025",
    category: "Business",
    readTime: "7 min read",
    image: "corporate-sustainability",
  },
  {
    id: 5,
    title: "The Psychology of Rewards: Motivating Sustainable Behavior",
    excerpt:
      "Understanding how personalized incentives can drive long-term changes in recycling habits and environmental consciousness.",
    author: "Dr. Aisha Johnson",
    date: "March 22, 2025",
    category: "Psychology",
    readTime: "9 min read",
    image: "psychology-rewards",
  },
  {
    id: 6,
    title: "E-Waste Legislation Around the World: A Comparative Study",
    excerpt: "Analyzing how different countries are addressing the e-waste challenge through policy and regulation.",
    author: "Thomas Garcia",
    date: "March 15, 2025",
    category: "Policy",
    readTime: "10 min read",
    image: "e-waste-legislation",
  },
]

const categories = ["All Categories", "Education", "Technology", "Art & Design", "Business", "Psychology", "Policy"]

export default function BlogsPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Stay informed about e-waste management, sustainability innovations, and our latest initiatives.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input placeholder="Search articles..." className="pl-10 border-gray-300 focus:border-purple-500" />
              </div>
              <div className="flex overflow-x-auto md:overflow-visible py-2 md:py-0 -mx-4 px-4 md:px-0 md:mx-0 space-x-2 md:space-x-4">
                {categories.map((category, index) => (
                  <Button
                    key={index}
                    variant={index === 0 ? "default" : "outline"}
                    className={
                      index === 0
                        ? "bg-purple-600 hover:bg-purple-700 text-white whitespace-nowrap"
                        : "border-gray-300 text-gray-700 hover:border-purple-500 hover:text-purple-600 whitespace-nowrap"
                    }
                    size="sm"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-purple-600 to-indigo-600 relative">
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-3 hover:text-purple-600 transition-colors">
                    <Link href={`/blogs/${post.id}`}>{post.title}</Link>
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <div className="flex items-center mr-4">
                      <User className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <Link href={`/blogs/${post.id}`}>
                    <Button variant="ghost" className="text-purple-600 hover:text-purple-700 hover:bg-purple-50 p-0">
                      Read more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
              Load More Articles
            </Button>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Subscribe to Our Newsletter</h2>
            <p className="text-lg text-gray-600 mb-8">
              Stay updated with the latest articles, e-waste management tips, and sustainability news.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input type="email" placeholder="Enter your email" className="border-gray-300 focus:border-purple-500" />
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

