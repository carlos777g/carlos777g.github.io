import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPosts } from "@/entities/post";
import { ScrollReveal } from "@/shared/ui/scroll-reveal";
import { HeaderH2 } from "@/shared/ui/header-h2";
import { PostCard } from "./ui/post-card";

const getRandomPosts = (posts, count) => {
  const shuffled = [...posts].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

export const BlogPreview = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPosts()
      .then((data) => {
        setPosts(getRandomPosts(data, 3));
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load posts");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="w-full py-10 px-3 bg-body">
        <div className="max-w-6xl mx-auto">
          <div className="h-8 w-48 bg-muted-white/10 rounded animate-pulse mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="aspect-video bg-muted-white/10 rounded-md animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || posts.length === 0) return null;

  return (
    <section className="w-full py-10 px-3 bg-body">
      <div className="max-w-6xl mx-auto">
        <HeaderH2
          text="Technical articles"
          actionSlot={
            <Link
              to="/blog"
              className="flex items-center gap-2 text-sm text-muted-white/60 hover:text-accent transition-colors duration-200 font-mono"
            >
              ver todos
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 15 15">
                <path
                  fill="currentColor"
                  d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"
                />
              </svg>
            </Link>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <ScrollReveal
              key={post.slug}
              direction="up"
              duration={600 + index * 150}
            >
              <PostCard post={post} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};