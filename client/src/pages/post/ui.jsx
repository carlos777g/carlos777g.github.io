// src/pages/post/ui.jsx
import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import mermaid from "mermaid"; // Fixed: Utilizing official core module directly
import { getPostBySlug } from "@/entities/post";
import { TopNavbar } from "@/widgets/top-navbar";
import { Footer } from "@/widgets/footer";
import { ScrollReveal } from "@/shared/ui";

// Initialize the core library outside the rendering cycle
mermaid.initialize({
  startOnLoad: false,
  theme: "dark",
  securityLevel: "loose",
  background: "transparent",
});

/**
 * NativeMermaid
 * Pure wrapper executing compiler graphics inside a safe single-react dispatcher box.
 */
const NativeMermaid = ({ chart }) => {
  const elementRef = useRef(null);
  const [svg, setSvg] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    // Generate a unique non-colliding ID for the SVG parser session
    const uniqueId = `mermaid-${Math.floor(Math.random() * 1000000)}`;

    const renderDiagram = async () => {
      try {
        // Run core parse engine string conversion mapping
        const { svg: renderedSvg } = await mermaid.render(uniqueId, chart);
        if (isMounted) {
          setSvg(renderedSvg);
        }
      } catch (err) {
        console.error("Mermaid syntax parsing failure:", err);
        if (isMounted) {
          setError(true);
        }
        // Clear bad state logs in DOM
        const badElement = document.getElementById(uniqueId);
        if (badElement) badElement.remove();
      }
    };

    renderDiagram();

    return () => {
      isMounted = false;
    };
  }, [chart]);

  if (error) {
    return (
      <div className="p-4 my-4 rounded border border-red-500/20 bg-red-500/5 font-mono text-xs text-red-400">
        [Mermaid syntax rendering error]
      </div>
    );
  }

  return (
    <div 
      ref={elementRef} 
      className="flex justify-center w-full my-6 bg-glass-white/5 p-6 rounded-md border border-glass-white/10 overflow-x-auto"
      dangerouslySetInnerHTML={{ __html: svg || '<div className="animate-pulse font-mono text-xs text-glass-white/40">Compiling chart...</div>' }}
    />
  );
};

const CodeBlock = ({ language, codeContent }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeContent).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="relative group my-4">
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-2 py-1 rounded text-xs font-mono bg-muted-white/10 text-glass-white/50 hover:bg-muted-white/20 hover:text-glass-white transition-all duration-200 opacity-0 group-hover:opacity-100"
      >
        {copied ? (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
              <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z" />
            </svg>
            copied
          </>
        ) : (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
              <path fill="currentColor" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z" />
            </svg>
            copy
          </>
        )}
      </button>
      <SyntaxHighlighter
        style={oneDark}
        language={language}
        PreTag="div"
        className="rounded-md text-sm"
      >
        {codeContent}
      </SyntaxHighlighter>
    </div>
  );
};

const MarkdownComponents = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    const codeContent = String(children).replace(/\n$/, "");

    if (!inline && match?.[1] === "mermaid") {
      // Swapped the broken wrapper package for our native pure custom wrapper element
      return <NativeMermaid chart={codeContent} />;
    }

    return !inline && match ? (
      <CodeBlock language={match[1]} codeContent={codeContent} />
    ) : (
      <code
        className="bg-muted-white/10 text-accent px-1.5 py-0.5 rounded text-sm font-mono"
        {...props}
      >
        {children}
      </code>
    );
  },
  img({ src, alt }) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full rounded-md my-6 object-cover"
      />
    );
  },
  a({ href, children }) {
    const isWikilink = href?.startsWith("[[");
    if (isWikilink) {
      return <span className="text-accent/60 font-mono text-sm">{children}</span>;
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent underline underline-offset-4 hover:brightness-110 transition-all"
      >
        {children}
      </a>
    );
  },
  h1({ children }) {
    return <h1 className="text-3xl md:text-4xl font-itim tracking-tighter mt-10 mb-4">{children}</h1>;
  },
  h2({ children }) {
    return <h2 className="text-2xl md:text-3xl font-itim tracking-tighter mt-8 mb-3 text-accent">{children}</h2>;
  },
  h3({ children }) {
    return <h3 className="text-xl font-bold mt-6 mb-2 text-glass-white">{children}</h3>;
  },
  p({ children }) {
    return <p className="text-glass-white/80 leading-relaxed mb-4 text-sm md:text-base">{children}</p>;
  },
  ul({ children }) {
    return <ul className="list-disc list-inside space-y-2 mb-4 text-glass-white/80 text-sm md:text-base">{children}</ul>;
  },
  ol({ children }) {
    return <ol className="list-decimal list-inside space-y-2 mb-4 text-glass-white/80 text-sm md:text-base">{children}</ol>;
  },
  li({ children }) {
    return <li className="leading-relaxed">{children}</li>;
  },
  blockquote({ children }) {
    return (
      <blockquote className="border-l-2 border-accent pl-4 my-4 text-glass-white/60 italic text-sm">
        {children}
      </blockquote>
    );
  },
  hr() {
    return <hr className="border-glass-white/10 my-8" />;
  },
  table({ children }) {
    return (
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm text-left border-collapse">
          {children}
        </table>
      </div>
    );
  },
  thead({ children }) {
    return <thead className="border-b border-glass-white/10">{children}</thead>;
  },
  tbody({ children }) {
    return <tbody>{children}</tbody>;
  },
  tr({ children }) {
    return <tr className="border-b border-glass-white/5 hover:bg-muted-white/5 transition-colors">{children}</tr>;
  },
  th({ children }) {
    return <th className="px-4 py-2 font-mono text-xs uppercase tracking-wider text-accent">{children}</th>;
  },
  td({ children }) {
    return <td className="px-4 py-2 text-glass-white/70">{children}</td>;
  },
};

export const PostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPostBySlug(slug)
      .then(setPost)
      .catch(() => setError("Post not found"))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="relative min-h-screen pt-20">
        <TopNavbar />
        <div className="max-w-3xl mx-auto px-6 pt-28 pb-20">
          <div className="h-10 w-2/3 bg-muted-white/10 rounded animate-pulse mb-4" />
          <div className="h-4 w-1/3 bg-muted-white/5 rounded animate-pulse mb-8" />
          <div className="aspect-video w-full bg-muted-white/5 rounded animate-pulse" />
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="relative min-h-screen pt-20">
        <TopNavbar />
        <div className="max-w-3xl mx-auto px-6 pt-28 pb-20 text-center">
          <p className="text-glass-white/40 font-mono text-sm">
            {error ?? "Post not found"}
          </p>
          <Link
            to="/blog"
            className="text-accent text-sm mt-4 inline-block hover:brightness-110"
          >
            Back to blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen pt-20">
      <TopNavbar />

      <main className="w-full bg-body pb-12">
        {post.coverImage && (
          <div className="w-full aspect-video max-h-[420px] overflow-hidden">
            <img
              src={post.coverImage}
              alt={`Cover of ${post.title}`}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="max-w-3xl mx-auto px-6 pt-10">
          <ScrollReveal direction="up" duration={400}>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-xs font-mono text-muted-white/50 hover:text-accent transition-colors mb-8"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 15 15">
                <path fill="currentColor" d="M6.707 2.293a1 1 0 0 0-1.414 0l-4.5 4.5a1 1 0 0 0 0 1.414l4.5 4.5a1 1 0 0 0 1.414-1.414L3.414 8.5H13.5a1 1 0 0 0 0-2H3.414l3.293-3.293a1 1 0 0 0 0-1.414" />
              </svg>
              Back to blog
            </Link>

            <h1 className="text-3xl md:text-5xl font-itim tracking-tighter capitalize mb-4">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 mb-6 text-xs font-mono text-muted-white/50">
              {post.date && (
                <span>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              )}
              {post.tags.length > 0 && (
                <div className="flex items-center gap-2">
                  <span className="text-glass-white/40 uppercase tracking-wider text-[10px]">Tags:</span>
                  <ul className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <li key={tag} className="px-2 py-0.5 bg-muted-white/10 text-glass-white/60 rounded-xl">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {post.tools.length > 0 && (
                <div className="flex items-center gap-2">
                  <span className="text-accent/40 uppercase tracking-wider text-[10px]">Tools:</span>
                  <ul className="flex flex-wrap gap-2">
                    {post.tools.map((tool) => (
                      <li key={tool} className="px-2 py-0.5 bg-accent/10 text-accent/70 rounded-xl">
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {post.description && (
              <p className="text-glass-white/50 text-sm leading-relaxed mb-10 border-l-2 border-accent/30 pl-4 italic">
                {post.description}
              </p>
            )}

            <hr className="border-glass-white/10 mb-10" />

            <div className="prose-custom">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={MarkdownComponents}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </ScrollReveal>
        </div>
      </main>

      <Footer />
    </div>
  );
};