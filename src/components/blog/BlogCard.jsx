import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";
import { format } from "date-fns";

export default function BlogCard({ post }) {
  return (
    <Link to={`/blog/${post.slug}`}>
      <div className="bg-white overflow-hidden group hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
        <div className="relative h-56 overflow-hidden">
          <img
            src={post.image || "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600"}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3">
            <span className="bg-[#1a1a1a] text-white px-3 py-1 text-xs font-medium font-sans">
              {post.category}
            </span>
          </div>
        </div>
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3 group-hover:text-[#8ab4d5] transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-[#5a6a7a] leading-relaxed mb-4 line-clamp-3 font-sans text-sm flex-1">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-4 text-xs text-[#5a6a7a] mb-4 font-sans">
            <div className="flex items-center gap-1">
              <User className="w-3 h-3" />
              {post.author}
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {format(new Date(post.date), "MMM d, yyyy")}
            </div>
          </div>
          <div className="flex items-center gap-2 text-[#1a1a1a] text-sm font-medium group-hover:gap-4 transition-all font-sans">
            Read More
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}
