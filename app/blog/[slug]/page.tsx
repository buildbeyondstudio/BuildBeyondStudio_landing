import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import Header from '@/components/header';
import Footer from '@/components/footer';
import blogs from '@/data/blogs.json';

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  description: string;
  date: string;
  featuredImage: string;
  keywords: string[];
  content: string;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug) as BlogPost | undefined;

  if (!blog) {
    return {
      title: 'Blog Post Not Found',
      description: 'The blog post you are looking for does not exist.',
    };
  }

  const canonicalUrl = `https://buildbeyondstudio.com/blog/${blog.slug}`;

  return {
    title: blog.title,
    description: blog.description,
    keywords: blog.keywords.join(', '),
    authors: [
      {
        name: 'Build Beyond Studio',
        url: 'https://buildbeyondstudio.com',
      },
    ],
    openGraph: {
      title: blog.title,
      description: blog.description,
      type: 'article',
      url: canonicalUrl,
      images: [
        {
          url: blog.featuredImage,
          width: 1200,
          height: 600,
          alt: blog.title,
        },
      ],
      publishedTime: blog.date,
      authors: ['Build Beyond Studio'],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.description,
      images: [blog.featuredImage],
    },
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug) as BlogPost | undefined;

  if (!blog) {
    notFound();
  }

  // Generate BlogPosting schema
  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.title,
    description: blog.description,
    image: blog.featuredImage,
    datePublished: blog.date,
    author: {
      '@type': 'Organization',
      name: 'Build Beyond Studio',
      url: 'https://buildbeyondstudio.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Build Beyond Studio',
      logo: {
        '@type': 'ImageObject',
        url: 'https://buildbeyondstudio.com/logo.ico',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://buildbeyondstudio.com/blog/${blog.slug}`,
    },
  };

  return (
    <>
      <Header />
      <Script
        id="blog-posting-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostingSchema),
        }}
      />

      {/* Blog Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm mb-6"
          >
            <span>←</span> Back to Blog
          </Link>
        </div>
      </div>
      <article className="bg-white">
        {/* Featured Image */}
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full bg-gray-200">
          <Image
            src={blog.featuredImage}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Blog Content */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          {/* Meta Info */}
          <div className="mb-8 pb-8 border-b border-gray-200">
            <time className="text-sm text-gray-500">
              {formatDate(blog.date)}
            </time>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mt-4 mb-4">
              {blog.title}
            </h1>
            <p className="text-lg text-gray-600">{blog.description}</p>
          </div>

          {/* Keywords Tags */}
          <div className="mb-8 flex flex-wrap gap-2">
            {blog.keywords.slice(0, 5).map((keyword, idx) => (
              <span
                key={idx}
                className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full"
              >
                {keyword}
              </span>
            ))}
          </div>

          {/* Blog Content */}
          <div className="prose prose-blue prose-lg max-w-none mb-12">
            <div
              className="text-gray-700 leading-relaxed [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-black [&_h2]:mt-8 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-black [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:mb-4 [&_strong]:font-semibold [&_a]:text-blue-600 [&_a]:hover:text-blue-700 [&_a]:underline"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>

          {/* Author Info */}
          <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-2xl p-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-linear-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                B
              </div>
              <div>
                <h3 className="font-bold text-black">Build Beyond Studio</h3>
                <p className="text-gray-600 text-sm mt-1">
                  Web development agency specializing in MERN stack applications, DevOps, and white-label solutions for ambitious founders and modern agencies.
                </p>
                <Link
                  href="/"
                  className="inline-block mt-3 text-blue-600 hover:text-blue-700 font-semibold text-sm"
                >
                  Learn more about us →
                </Link>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-6">Read Next</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {blogs
                .filter((b) => b.slug !== blog.slug)
                .slice(0, 2)
                .map((relatedBlog) => (
                  <Link
                    key={relatedBlog.id}
                    href={`/blog/${relatedBlog.slug}`}
                    className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-lg transition-all duration-300"
                  >
                    <h3 className="font-bold text-black group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                      {relatedBlog.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                      {relatedBlog.description}
                    </p>
                    <span className="text-blue-600 group-hover:text-blue-700 font-semibold text-sm">
                      Read More →
                    </span>
                  </Link>
                ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-linear-to-r from-blue-600 to-blue-500 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Build Beyond?
            </h2>
            <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
              These insights are most powerful when applied to a real, production-ready web application. Let's turn strategy into competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services/web-applications"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Explore Web Development
              </Link>
              <a
                href="https://wa.me/919301579493?text=Hi%21%20I%20would%20like%20to%20discuss%20my%20project%20with%20Build%20Beyond%20Studio."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
