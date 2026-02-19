import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, User, ArrowLeft, ArrowRight } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import BlogContent from "@/components/blog/BlogContent";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { blogPosts } from "@/data/blogPosts";

export default function BlogPost() {
  const { slug } = useParams();

  const post = blogPosts.find((p) => p.slug === slug && !p.hidden);
  const visiblePosts = blogPosts.filter((p) => !p.hidden);
  const currentIndex = visiblePosts.findIndex((p) => p.slug === slug);
  const nextPost = currentIndex < visiblePosts.length - 1 ? visiblePosts[currentIndex + 1] : null;
  const prevPost = currentIndex > 0 ? visiblePosts[currentIndex - 1] : null;

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Cavanaugh Mediation`;
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-[#1a1a1a] mb-4">Article Not Found</h1>
          <p className="text-[#5a6a7a] mb-6 font-sans">The article you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button className="bg-[#1a1a1a] hover:bg-[#333333] text-white font-sans">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Image */}
      <section className="relative h-[50vh] lg:h-[60vh] overflow-hidden">
        <img
          src={post.image || "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600"}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/50 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 pb-12 lg:pb-16">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors font-sans text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
              <span className="inline-block bg-[#8ab4d5] text-white px-4 py-1 text-sm font-medium uppercase tracking-wider mb-4 font-sans">
                {post.category}
              </span>
              <h1 className="text-3xl lg:text-5xl font-semibold text-white leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center gap-6 text-white/80 mt-6 font-sans text-sm">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {post.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {format(new Date(post.date), "MMMM d, yyyy")}
                </div>
                {post.readTime && <span>{post.readTime}</span>}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <BlogContent content={post.content} />
          </motion.article>
        </div>
      </section>

      {/* Navigation to Next/Previous Posts */}
      {(prevPost || nextPost) && (
        <section className="py-12 bg-[#faf9f6] border-t">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {prevPost && (
                <Link to={`/blog/${prevPost.slug}`} className="group">
                  <div className="flex items-center gap-4 p-6 bg-white hover:shadow-lg transition-shadow">
                    <ArrowLeft className="w-6 h-6 text-[#8ab4d5] flex-shrink-0" />
                    <div>
                      <p className="text-xs text-[#5a6a7a] uppercase mb-1 font-sans">Previous Article</p>
                      <h3 className="font-semibold text-[#1a1a1a] group-hover:text-[#8ab4d5] transition-colors line-clamp-2">
                        {prevPost.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              )}
              {nextPost && (
                <Link to={`/blog/${nextPost.slug}`} className="group">
                  <div className="flex items-center gap-4 p-6 bg-white hover:shadow-lg transition-shadow md:ml-auto">
                    <div className="text-right">
                      <p className="text-xs text-[#5a6a7a] uppercase mb-1 font-sans">Next Article</p>
                      <h3 className="font-semibold text-[#1a1a1a] group-hover:text-[#8ab4d5] transition-colors line-clamp-2">
                        {nextPost.title}
                      </h3>
                    </div>
                    <ArrowRight className="w-6 h-6 text-[#8ab4d5] flex-shrink-0" />
                  </div>
                </Link>
              )}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-[#1a1a1a]">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-light text-white mb-6">
              Ready to Start Your <span className="font-semibold">Journey?</span>
            </h2>
            <p className="text-[#a8b8c8] text-lg leading-relaxed mb-10 font-sans">
              Schedule a free consultation to discuss how mediation can help your family.
            </p>
            <Link to="/contact">
              <Button className="bg-[#8ab4d5] hover:bg-[#7aa3c4] text-[#1a1a1a] px-10 py-6 text-base font-sans">
                Schedule Consultation
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
