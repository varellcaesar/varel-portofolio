import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

type Post = {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
};

const PostCard: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <motion.div
      className="group border-b border-zinc-200 dark:border-zinc-700 pb-6 transition-all duration-300 ease-in-out"
      whileHover={{ scale: 1.01 }}
    >
      <Link href={`/${post.slug}`}>
        <h2 className="text-2xl font-bold group-hover:underline transition-all duration-200">
          {post.title}
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">{post.date}</p>
        <p className="text-base text-zinc-700 dark:text-zinc-300">
          {post.excerpt}
        </p>
      </Link>
    </motion.div>
  );
};

export default PostCard;
