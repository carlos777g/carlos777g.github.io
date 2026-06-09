import { Link } from "react-router-dom";

export const PostCard = ({ post }) => {
  return (
    <article className="group flex flex-col rounded-md overflow-hidden bg-transparent">
      <Link
        to={`/blog/${post.slug}`}
        className="group/image relative w-full aspect-video overflow-hidden block cursor-pointer"
      >
        {post.cover_image ? (
          <img
            src={post.cover_image}
            alt={`Cover of ${post.title}`}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-200 group-hover/image:scale-103"
          />
        ) : (
          <div className="w-full h-full bg-dark-gray flex items-center justify-center">
            <span className="text-muted-white/40 text-sm font-mono">no cover</span>
          </div>
        )}

        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm opacity-0 group-hover/image:opacity-90 transition-all duration-200 flex items-center justify-center">
          <span className="flex items-center gap-2 font-itim font-bold text-2xl opacity-0 translate-y-4 group-hover/image:opacity-100 group-hover/image:translate-y-0 transition-all duration-200 delay-75">
            Read Post
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h14v-7h2v7q0 .825-.587 1.413T19 21zm4.7-5.3l-1.4-1.4L17.6 5H14V3h7v7h-2V6.4z"
              />
            </svg>
          </span>
        </div>
      </Link>

      <div className="flex flex-col grow">
        <div className="flex justify-between items-start gap-4 my-3">
          <h3 className="text-md font-extrabold tracking-tight text-accent capitalize">
            {post.title}
          </h3>
          <span className="text-xs font-mono text-muted-white/60 shrink-0">
            {post.date
              ? new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })
              : null}
          </span>
        </div>

        {post.description && (
          <p className="text-glass-white/70 text-sm leading-relaxed mb-4 grow">
            {post.description}
          </p>
        )}

        <ul className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <li
              key={tag}
              className="px-3 py-1 text-xs font-extralight bg-muted-white/10 text-glass-white rounded-xl"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};