"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, ThumbsUp, ThumbsDown, Flag, Reply } from 'lucide-react';
import Link from "next/link";

interface ForumPostProps {
  post: {
    id: string;
    title: string;
    content: string;
    date: string;
    user: {
      id: string;
      name: string;
      avatar?: string;
      role?: string;
    };
    likes: number;
    dislikes: number;
    replies: {
      id: string;
      content: string;
      date: string;
      user: {
        id: string;
        name: string;
        avatar?: string;
        role?: string;
      };
      likes: number;
      dislikes: number;
    }[];
    tags: string[];
    isLiked?: boolean;
    isDisliked?: boolean;
  };
}

export function ForumPost({ post }: ForumPostProps) {
  const [isReplying, setIsReplying] = useState(false);
  const [replyContent, setReplyContent] = useState("");
  const [showAllReplies, setShowAllReplies] = useState(false);
  const [likedStatus, setLikedStatus] = useState<'liked' | 'disliked' | null>(
    post.isLiked ? 'liked' : post.isDisliked ? 'disliked' : null
  );
  const [replyLikedStatus, setReplyLikedStatus] = useState<Record<string, 'liked' | 'disliked' | null>>({});
  
  const handleLike = () => {
    setLikedStatus(prev => prev === 'liked' ? null : 'liked');
  };
  
  const handleDislike = () => {
    setLikedStatus(prev => prev === 'disliked' ? null : 'disliked');
  };
  
  const handleReplyLike = (replyId: string) => {
    setReplyLikedStatus(prev => ({
      ...prev,
      [replyId]: prev[replyId] === 'liked' ? null : 'liked'
    }));
  };
  
  const handleReplyDislike = (replyId: string) => {
    setReplyLikedStatus(prev => ({
      ...prev,
      [replyId]: prev[replyId] === 'disliked' ? null : 'disliked'
    }));
  };
  
  const handleSubmitReply = () => {
    if (!replyContent.trim()) return;
    
    // In a real app, submit the reply to the server
    console.log({
      postId: post.id,
      content: replyContent
    });
    
    // Reset form
    setReplyContent("");
    setIsReplying(false);
  };
  
  const displayedReplies = showAllReplies ? post.replies : post.replies.slice(0, 2);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden">
        <CardContent className="p-6">
          <div className="flex items-start">
            <Avatar className="h-10 w-10 mr-3">
              {post.user.avatar ? (
                <AvatarImage src={post.user.avatar} alt={post.user.name} />
              ) : (
                <AvatarFallback className="bg-purple-100 text-purple-600">
                  {post.user.name.charAt(0)}
                </AvatarFallback>
              )}
            </Avatar>
            <div className="flex-grow">
              <div className="flex items-center">
                <Link href={`/marketplace/community/user/${post.user.id}`} className="font-medium hover:underline">
                  {post.user.name}
                </Link>
                {post.user.role && (
                  <Badge className="ml-2 bg-purple-100 text-purple-800">
                    {post.user.role}
                  </Badge>
                )}
                <span className="text-xs text-gray-500 ml-2">• {post.date}</span>
              </div>
              
              <h3 className="font-semibold text-lg mt-2">{post.title}</h3>
              <div className="mt-2 text-gray-700">
                <p>{post.content}</p>
              </div>
              
              {post.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="bg-gray-100">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <div className="mt-6 flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className={`h-8 ${likedStatus === 'liked' ? 'text-green-600' : 'text-gray-500'}`}
              onClick={handleLike}
            >
              <ThumbsUp className={`mr-1 h-4 w-4 ${likedStatus === 'liked' ? 'fill-green-600' : ''}`} />
              {post.likes + (likedStatus === 'liked' ? 1 : 0)}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={`h-8 ${likedStatus === 'disliked' ? 'text-red-600' : 'text-gray-500'}`}
              onClick={handleDislike}
            >
              <ThumbsDown className={`mr-1 h-4 w-4 ${likedStatus === 'disliked' ? 'fill-red-600' : ''}`} />
              {post.dislikes + (likedStatus === 'disliked' ? 1 : 0)}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 text-gray-500"
              onClick={() => setIsReplying(!isReplying)}
            >
              <Reply className="mr-1 h-4 w-4" />
              Reply
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 text-gray-500"
            >
              <Flag className="mr-1 h-4 w-4" />
              Report
            </Button>
          </div>
          
          {isReplying && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4"
            >
              <Textarea
                placeholder="Write your reply..."
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
                className="min-h-[100px]"
              />
              <div className="flex justify-end mt-2 space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsReplying(false)}
                >
                  Cancel
                </Button>
                <Button
                  size="sm"
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                  onClick={handleSubmitReply}
                  disabled={!replyContent.trim()}
                >
                  Post Reply
                </Button>
              </div>
            </motion.div>
          )}
          
          {post.replies.length > 0 && (
            <div className="mt-6 space-y-4">
              <div className="flex items-center">
                <div className="h-px bg-gray-200 flex-grow"></div>
                <span className="px-2 text-sm text-gray-500 flex items-center">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  Replies ({post.replies.length})
                </span>
                <div className="h-px bg-gray-200 flex-grow"></div>
              </div>
              
              <div className="space-y-4 pl-12">
                {displayedReplies.map((reply) => (
                  <div key={reply.id} className="border-l-2 border-gray-200 pl-4">
                    <div className="flex items-start">
                      <Avatar className="h-8 w-8 mr-2">
                        {reply.user.avatar ? (
                          <AvatarImage src={reply.user.avatar} alt={reply.user.name} />
                        ) : (
                          <AvatarFallback className="bg-purple-100 text-purple-600 text-xs">
                            {reply.user.name.charAt(0)}
                          </AvatarFallback>
                        )}
                      </Avatar>
                      <div className="flex-grow">
                        <div className="flex items-center">
                          <Link href={`/marketplace/community/user/${reply.user.id}`} className="font-medium text-sm hover:underline">
                            {reply.user.name}
                          </Link>
                          {reply.user.role && (
                            <Badge className="ml-2 bg-purple-100 text-purple-800 text-xs">
                              {reply.user.role}
                            </Badge>
                          )}
                          <span className="text-xs text-gray-500 ml-2">• {reply.date}</span>
                        </div>
                        
                        <div className="mt-1 text-gray-700 text-sm">
                          <p>{reply.content}</p>
                        </div>
                        
                        <div className="mt-2 flex items-center space-x-4">
                          <Button
                            variant="ghost"
                            size="sm"
                            className={`h-6 text-xs ${replyLikedStatus[reply.id] === 'liked' ? 'text-green-600' : 'text-gray-500'}`}
                            onClick={() => handleReplyLike(reply.id)}
                          >
                            <ThumbsUp className={`mr-1 h-3 w-3 ${replyLikedStatus[reply.id] === 'liked' ? 'fill-green-600' : ''}`} />
                            {reply.likes + (replyLikedStatus[reply.id] === 'liked' ? 1 : 0)}
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className={`h-6 text-xs ${replyLikedStatus[reply.id] === 'disliked' ? 'text-red-600' : 'text-gray-500'}`}
                            onClick={() => handleReplyDislike(reply.id)}
                          >
                            <ThumbsDown className={`mr-1 h-3 w-3 ${replyLikedStatus[reply.id] === 'disliked' ? 'fill-red-600' : ''}`} />
                            {reply.dislikes + (replyLikedStatus[reply.id] === 'disliked' ? 1 : 0)}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {post.replies.length > 2 && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="ml-12 text-purple-600"
                  onClick={() => setShowAllReplies(!showAllReplies)}
                >
                  {showAllReplies ? "Show Less" : `Show All ${post.replies.length} Replies`}
                </Button>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
