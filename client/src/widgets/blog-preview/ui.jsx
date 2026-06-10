import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPosts } from "@/entities/post";
import { ScrollReveal, HeaderH2, HeaderLink, Icon } from "@/shared/ui";
import { PostCard } from "./ui/post-card";

// Utility function to get N random posts
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
        // Fetch 4 posts to ensure a symmetrical 2x2 grid on desktop
        setPosts(getRandomPosts(data, 4));
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                // Hide the 3rd and 4th skeleton on mobile to match final layout
                className={`aspect-video bg-muted-white/10 rounded-md animate-pulse ${
                  i >= 2 ? "hidden md:block" : ""
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || posts.length === 0) return null;

  return (
    <section id="blog" className="w-full py-10 px-3 bg-body">
      <div className="max-w-6xl mx-auto">
        <HeaderH2
          text="Technical articles"
          actionSlot={
            // Assuming HeaderLink needs to be updated internally to use react-router-dom <Link>
            // if it's meant for internal navigation, otherwise leave as is if it opens external links.
            <HeaderLink href="/blog" icon1Name="blog" icon2Name="arrow" />
          }
        />

        {/* Grid setup: 1 column on mobile, 2 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <ScrollReveal
              key={post.slug}
              direction="up"
              duration={600 + index * 100}
              // Hide posts index 2 and 3 on mobile to keep it to 2 rows maximum
              className={index >= 2 ? "hidden md:block" : ""}
            >
              <PostCard post={post} />
            </ScrollReveal>
          ))}
        </div>
      </div>
      {/* Interactive Bottom CTA for SPA routing */}
      <div className="mt-12 w-full flex justify-center ">
        <ScrollReveal direction="up" duration={300} fullWidth={false}>
          <Link
            to="/blog"
            aria-label="View all technical articles"
            className="group inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full border border-glass-white/10 bg-glass-white/5 backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:bg-accent/10 active:scale-95 w-fit mx-auto"
          >
            <span className="text-sm md:text-base font-bold tracking-wider text-muted-white group-hover:text-accent transition-colors duration-300">
              View all articles
            </span>
            <Icon
              name="arrow"
              className="w-4 h-4 text-muted-white group-hover:text-accent transition-all duration-300 group-hover:translate-x-1"
            />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
};
