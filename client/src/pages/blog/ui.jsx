// src/pages/blog/ui.jsx
import { useState, useEffect } from "react";
import { getPosts } from "@/entities/post";
import { ScrollReveal, HeaderH2 } from "@/shared/ui";
import { PostCard } from "@/widgets/blog-preview/ui/post-card";
import { TopNavbar } from "@/widgets/top-navbar";
import { Footer } from "@/widgets/footer";

export const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [selectedTag, setSelectedTag] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts()
      .then((data) => {
        const sorted = [...data].sort((a, b) => new Date(b.date) - new Date(a.date));
        setPosts(sorted);
      })
      .catch((err) => console.error("Error fetching blog posts:", err))
      .finally(() => setLoading(false));
  }, []);

  const tags = ["all", ...new Set(posts.flatMap((post) => post.tags).filter(Boolean))];

  const filteredPosts =
    selectedTag === "all"
      ? posts
      : posts.filter((post) => post.tags.includes(selectedTag));

  if (loading) {
    return (
      <div className="relative min-h-screen pt-20">
        <TopNavbar />
        <div className="w-full min-h-screen bg-body pt-24 px-6 pb-20">
          <div className="max-w-6xl mx-auto h-20 bg-muted-white/5 rounded animate-pulse" />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen pt-20">
      <TopNavbar />
      
      <main className="w-full min-h-screen bg-body pt-28 pb-16 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">

          <div className="text-center mb-10">
            <ScrollReveal direction="up">
              <HeaderH2 text="The Technical Logbook" />
              <p className="text-glass-white/60 text-xs md:text-sm max-w-md mx-auto mt-3 font-mono">
                Short-form notes, systems architecture breakdowns, and environment configurations.
              </p>
            </ScrollReveal>
          </div>

          {tags.length > 1 && (
            <ScrollReveal direction="up" duration={500}>
              <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider border transition-all duration-300 cursor-pointer ${
                      selectedTag === tag
                        ? "bg-accent/10 border-accent text-accent shadow-sm shadow-accent/10"
                        : "bg-body border-glass-white/10 text-glass-white/60 hover:border-glass-white/30 hover:text-muted-white"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </ScrollReveal>
          )}

          {filteredPosts.length === 0 ? (
            <div className="text-center py-20 text-glass-white/40 font-mono text-sm">
              No articles found under this tag.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post, index) => (
                <ScrollReveal
                  key={post.slug}
                  direction="up"
                  duration={400 + (index % 2) * 150}
                >
                  <PostCard post={post} />
                </ScrollReveal>
              ))}
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
};