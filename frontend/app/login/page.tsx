"use client"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { GradientBlob } from "@/components/ui/gradient-blob"
import Link from "next/link"
import { Mail, Lock, Facebook, Twitter, Github } from "lucide-react"
import axios from "axios"
import domains from "@/data/conf"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useAuth } from "@/context/AuthContext"

export default function LoginPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<String | boolean>(false)
  const [success, setSuccess] = useState<String | boolean>(false)
  const {setUser} = useAuth()

  const handleSubmit = (e:any) => {
    setLoading(true)
    e.preventDefault()
    console.log(e)
    const email = e.target[0].value
    const password = e.target[1].value

    if( email.length <= 0 || password.length <= 0 )  setError("Please check inputs")


    if( email && password ){
      const body = {
        email,
        password,
      }
      axios.post(`${domains.AUTH_HOST}/login`, body )
      .then((res)=>{
        console.log(res)
        if(res.data.success && res.data.token && res.data.user){
          setUser(res.data.user)
          setSuccess(res.data.message)
          window.localStorage.setItem("token", res.data.token)
          router.push("/profile")
        }
        else{
          setError("Unexpected Error occured please try again later")

        }
      })
      .catch((err)=>{
        console.log(err)
        if(err.response && err.response.data.message){
          setError(err.response.data.message)
        }
        else{
          setError("Unexpected Error occured please try again later")

        }
      })
    }


  };

  return (
    <main className="min-h-screen">

      <div className="pt-24 pb-16 relative overflow-hidden min-h-[calc(100vh-200px)] flex items-center">
        <GradientBlob
          className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"
          colors={["#8B5CF6", "#6366F1", "#EC4899"]}
          size={600}
          opacity={0.1}
        />

        <div className="container mx-auto px-4 z-10">
          <div className="max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
                  <p className="text-gray-600">Sign in to continue your e-waste recycling journey</p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="space-y-1">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="pl-10 border-gray-300 focus:border-purple-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between items-center">
                      <label htmlFor="password" className="text-sm font-medium text-gray-700">
                        Password
                      </label>
                      <Link href="/forgot-password" className="text-sm text-purple-600 hover:text-purple-700">
                        Forgot password?
                      </Link>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        className="pl-10 border-gray-300 focus:border-purple-500"
                      />
                    </div>
                  </div>

                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-6">Sign In</Button>
                </form>

                {/* <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">Or continue with</span>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-3">
                    <Button variant="outline" className="border-gray-300 hover:bg-gray-50">
                      <Facebook className="h-5 w-5 text-blue-600" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                    <Button variant="outline" className="border-gray-300 hover:bg-gray-50">
                      <Twitter className="h-5 w-5 text-blue-400" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                    <Button variant="outline" className="border-gray-300 hover:bg-gray-50">
                      <Github className="h-5 w-5 text-gray-900" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </div>
                </div> */}
                  <br />  
                  <span className="text-red-500">
                    {error && !success && error}
                  </span>
                  <br />
                  <span className="text-green-500">
                    {success && success}
                  </span>
                  <br />
                <div className="mt-8 text-center">
                  <p className="text-gray-600">
                    Don't have an account?{" "}
                    <Link href="/register" className="text-purple-600 hover:text-purple-700 font-medium">
                      Sign up
                    </Link>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

