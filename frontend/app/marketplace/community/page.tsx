"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ForumPost } from "@/components/marketplace/forum-post";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { GradientBlob } from "@/components/ui/gradient-blob";
import { Search, MessageSquare, Plus, Tag, ArrowRight } from 'lucide-react';
import Link from "next/link";

// Mock forum posts
const forumPosts = [
  {
    id: "post1",
    title: "Creative ideas for upcycling old laptop parts?",
    content: "I have a few old laptops that are beyond repair, but I'd like to repurpose the parts into something creative. Has anyone made anything interesting with laptop keyboards, screens, or other components? Looking for inspiration!",
    date: "2 hours ago",
    user: {
      id: "user1",
      name: "Priya Sharma",
      avatar: "",
      role: "Eco Enthusiast"
    },
    likes: 24,
    dislikes: 2,
    replies: [
      {
        id: "reply1",
        content: "I turned an old laptop keyboard into a wall-mounted key holder! I removed the keys, attached small hooks to the back of some of them, and mounted the keyboard on my wall near the entrance. Now I hang my keys on the 'Home' key. It's both functional and a great conversation starter!",
        date: "1 hour ago",
        user: {
          id: "user2",
          name: "Rahul Patel",
          avatar: "",
          role: "Upcycling Artist"
        },
        likes: 15,
        dislikes: 0
      },
      {
        id: "reply2",
        content: "Laptop screens can be repurposed as digital photo frames with a bit of technical know-how. There are tutorials online that show you how to connect the screen to a Raspberry Pi. I've done this with a couple of old laptops and now have digital art displays around my house.",
        date: "45 minutes ago",
        user: {
          id: "user3",
          name: "Amit Desai",
          avatar: "",
          role: "Tech Recycler"
        },
        likes: 8,
        dislikes: 1
      }
    ],
    tags: ["Upcycling Ideas", "Laptops", "DIY"]
  },
  {
    id: "post2",
    title: "How to safely extract components from old circuit boards?",
    content: "I'm new to e-waste upcycling and want to create some jewelry using components from old circuit boards. What's the safest way to remove components without damaging them or exposing myself to harmful chemicals? Any specific tools or precautions I should be aware of?",
    date: "1 day ago",
    user: {
      id: "user4",
      name: "Neha Gupta",
      avatar: "",
    },
    likes: 18,
    dislikes: 0,
    replies: [
      {
        id: "reply3",
        content: "Safety first! Always wear gloves and eye protection when working with circuit boards. I recommend using a heat gun on low setting to loosen solder, then gently remove components with tweezers. Work in a well-ventilated area and avoid breathing in any fumes. Some older boards may contain lead solder, so be extra cautious with those.",
        date: "20 hours ago",
        user: {
          id: "user5",
          name: "Vikram Singh",
          avatar: "",
          role: "Certified Recycler"
        },
        likes: 12,
        dislikes: 0
      }
    ],
    tags: ["Safety", "Circuit Boards", "Components", "Beginners"]
  },
  {
    id: "post3",
    title: "Showcase: My hard drive clock project",
    content: "Just finished my latest project - a wall clock made from an old hard drive platter! I polished the platter to a mirror finish, added clock hands and a mechanism from a kit, and mounted it in a custom wooden frame. Really happy with how it turned out and wanted to share with the community. Has anyone else made something similar?",
    date: "3 days ago",
    user: {
      id: "user6",
      name: "Arjun Mehta",
      avatar: "",
    },
    likes: 42,
    dislikes: 1,
    replies: [
      {
        id: "reply4",
        content: "This looks amazing! I made something similar last year but used the actuator arm as the hour hand for a more industrial look. Would love to see more photos of your project!",
        date: "2 days ago",
        user: {
          id: "user7",
          name: "Sanya Kapoor",
          avatar: "",
        },
        likes: 7,
        dislikes: 0
      },
      {
        id: "reply5",
        content: "Beautiful work! Did you seal the platter with anything to prevent tarnishing over time?",
        date: "2 days ago",
        user: {
          id: "user8",
          name: "Rohan Joshi",
          avatar: "",
        },
        likes: 5,
        dislikes: 0
      },
      {
        id: "reply6",
        content: "I've been collecting old hard drives for a project like this. Would you mind sharing what type of clock mechanism you used? Did you have to modify the platter much to accommodate it?",
        date: "1 day ago",
        user: {
          id: "user9",
          name: "Divya Sharma",
          avatar: "",
        },
        likes: 3,
        dislikes: 0
      }
    ],
    tags: ["Showcase", "Hard Drive", "Clock", "DIY"]
  }
];

// Mock popular tags
const popularTags = [
  { id: "tag1", name: "Upcycling Ideas", count: 42 },
  { id: "tag2", name: "Circuit Boards", count: 38 },
  { id: "tag3", name: "DIY", count: 35 },
  { id: "tag4", name: "Beginners", count: 27 },
  { id: "tag5", name: "Showcase", count: 24 },
  { id: "tag6", name: "Safety", count: 19 },
  { id: "tag7", name: "Jewelry", count: 15 },
  { id: "tag8", name: "LED Projects", count: 12 }
];

export default function CommunityPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("latest");
  const [showNewPostForm, setShowNewPostForm] = useState(false);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostContent, setNewPostContent] = useState("");
  const [newPostTags, setNewPostTags] = useState("");
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would search the forum posts
    console.log("Searching for:", searchQuery);
  };
  
  const handleSubmitPost = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit the new post
    console.log({
      title: newPostTitle,
      content: newPostContent,
      tags: newPostTags.split(",").map(tag => tag.trim())
    });
    
    // Reset form
    setNewPostTitle("");
    setNewPostContent("");
    setNewPostTags("");
    setShowNewPostForm(false);
  };
  
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16 relative overflow-hidden">
        <GradientBlob
          className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 opacity-10"
          colors={["#8B5CF6", "#6366F1", "#EC4899"]}
          size={600}
        />
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Community Forum
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-700 leading-relaxed mb-8"
            >
              Connect with other upcycling enthusiasts, share ideas, and get inspired
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                <Tabs defaultValue="latest" value={activeTab} onValueChange={setActiveTab}>
                  <TabsList>
                    <TabsTrigger value="latest">Latest</TabsTrigger>
                    <TabsTrigger value="popular">Popular</TabsTrigger>
                    <TabsTrigger value="unanswered">Unanswered</TabsTrigger>
                  </TabsList>
                </Tabs>
                
                <Button
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                  onClick={() => setShowNewPostForm(true)}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  New Post
                </Button>
              </div>
              
              {showNewPostForm && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white p-6 rounded-lg shadow-md mb-6"
                >
                  <h2 className="text-xl font-semibold mb-4">Create New Post</h2>
                  
                  <form onSubmit={handleSubmitPost} className="space-y-4">
                    <div>
                      <label htmlFor="post-title" className="block text-sm font-medium mb-1">
                        Title
                      </label>
                      <Input
                        id="post-title"
                        value={newPostTitle}
                        onChange={(e) => setNewPostTitle(e.target.value)}
                        placeholder="Enter a descriptive title"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="post-content" className="block text-sm font-medium mb-1">
                        Content
                      </label>
                      <Textarea
                        id="post-content"
                        value={newPostContent}
                        onChange={(e) => setNewPostContent(e.target.value)}
                        placeholder="Share your thoughts, questions, or ideas..."
                        className="min-h-[150px]"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="post-tags" className="block text-sm font-medium mb-1">
                        Tags
                      </label>
                      <Input
                        id="post-tags"
                        value={newPostTags}
                        onChange={(e) => setNewPostTags(e.target.value)}
                        placeholder="Enter tags separated by commas (e.g. DIY, Upcycling, Beginners)"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Tags help others find your post. Add up to 5 relevant tags.
                      </p>
                    </div>
                    
                    <div className="flex justify-end gap-2">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setShowNewPostForm(false)}
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        className="bg-purple-600 hover:bg-purple-700 text-white"
                      >
                        Post
                      </Button>
                    </div>
                  </form>
                </motion.div>
              )}
              
              <div className="space-y-6">
                {forumPosts
                  .filter(post => {
                    if (activeTab === "latest") return true;
                    if (activeTab === "popular") return post.likes > 20;
                    if (activeTab === "unanswered") return post.replies.length === 0;
                    return true;
                  })
                  .map(post => (
                    <ForumPost key={post.id} post={post} />
                  ))}
              </div>
              
              <div className="mt-8 text-center">
                <Button variant="outline">
                  Load More Posts
                </Button>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="font-semibold mb-4">Search</h3>
                    <form onSubmit={handleSearch} className="space-y-4">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                          placeholder="Search discussions..."
                          className="pl-9"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                      <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                        Search
                      </Button>
                    </form>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="font-semibold mb-4">Popular Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {popularTags.map(tag => (
                        <Link key={tag.id} href={`/marketplace/community/tag/${tag.id}`}>
                          <Badge variant="outline" className="bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer">
                            <Tag className="h-3 w-3 mr-1" />
                            {tag.name}
                            <span className="ml-1 text-gray-500">({tag.count})</span>
                          </Badge>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="font-semibold mb-4">Community Guidelines</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>Be respectful and constructive in your interactions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>Share knowledge and help others with their upcycling projects</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>Give credit when sharing ideas inspired by others</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>Focus on safety when discussing e-waste handling</span>
                      </li>
                    </ul>
                    <div className="mt-4">
                      <Link href="/marketplace/community/guidelines">
                        <Button variant="link" className="text-purple-600 p-0">
                          Read Full Guidelines
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl shadow-md overflow-hidden">
                  <div className="p-6 text-white">
                    <div className="flex items-center mb-4">
                      <MessageSquare className="h-5 w-5 mr-2" />
                      <h3 className="font-semibold">Join the Discussion</h3>
                    </div>
                    <p className="text-white/90 text-sm mb-4">
                      Share your upcycling projects, ask questions, and connect with other eco-conscious creators.
                    </p>
                    <Button
                      className="w-full bg-white text-purple-600 hover:bg-gray-100"
                      onClick={() => setShowNewPostForm(true)}
                    >
                      Start a New Thread
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
