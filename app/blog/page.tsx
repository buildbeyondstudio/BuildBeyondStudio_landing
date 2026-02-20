import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/header';
import Footer from '@/components/footer';
import blogs from '@/data/blogs.json';

export const metadata: Metadata = {
  title: 'Insights & Growth Strategies | Build Beyond Studio',
  description: 'Read expert insights on branding, web development, SEO strategies, and startup growth. Discover practical strategies for your business.',
  keywords: 'blog, insights, growth strategies, SEO, web development, branding, startup tips',
  openGraph: {
    title: 'Insights & Growth Strategies | Build Beyond Studio',
    description: 'Expert insights on branding, web development, and startup growth strategies.',
    type: 'website',
    url: 'https://buildbeyondstudio.com/blog',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Build Beyond Studio Blog',
      },
    ],
  },
  alternates: {
    canonical: 'https://buildbeyondstudio.com/blog',
  },
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPage() {
  // Sort blogs by date, newest first
  const sortedBlogs = [...blogs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <Header />
      <section className="bg-linear-to-br from-white via-blue-50/40 to-white pt-0 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 relative overflow-hidden min-h-[60vh] flex items-center justify-center">
        {/* Decorative Elements */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-blue-400/35 to-blue-200/15 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-linear-to-tr from-blue-300/25 to-blue-100/15 rounded-full blur-3xl"></div>

        {/* Content */}
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Insights & Growth Strategies
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Expert insights on branding, web development, SEO, and startup growth. Practical strategies to accelerate your business.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedBlogs.map((blog) => (
              <Link
                key={blog.id}
                href={`/blog/${blog.slug}`}
                className="group h-full flex flex-col"
              >
                <article className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-400 transition-all duration-300 h-full flex flex-col hover:shadow-lg">
                  {/* Featured Image */}
                  <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-200 group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src={blog.featuredImage}
                      alt={blog.title}
                      fill
                      className="object-cover"
                      priority={false}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8 flex flex-col grow">
                    {/* Date */}
                    <time className="text-sm text-gray-500 mb-3">
                      {formatDate(blog.date)}
                    </time>

                    {/* Title */}
                    <h2 className="text-xl sm:text-2xl font-bold text-black mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {blog.title}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 grow line-clamp-3">
                      {blog.description}
                    </p>

                    {/* Read More Button */}
                    <div className="flex items-center text-blue-600 group-hover:text-blue-700 font-semibold text-sm">
                      Read Article
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-linear-to-r from-blue-600 to-blue-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            These insights are more powerful when paired with a premium digital product. Let's build something that converts.
          </p>
          <Link
            href="/services/web-applications"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Explore Our Services
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
