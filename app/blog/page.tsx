import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding DSCR Loans: The Key to Growing Your Real Estate Portfolio",
      excerpt: "Learn how Debt Service Coverage Ratio loans are revolutionizing real estate investment by focusing on property performance instead of personal income.",
      date: "March 15, 2024",
      readTime: "5 min read",
      slug: "understanding-dscr-loans"
    },
    {
      id: 2,
      title: "From 2 to 20 Properties: A Real Estate Investor's Success Story",
      excerpt: "Discover how Sarah transformed her real estate portfolio using DSCR loans, breaking free from traditional lending limitations.",
      date: "March 14, 2024",
      readTime: "4 min read",
      slug: "investor-success-story"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a1060] mb-6">
              RentFlow Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights, success stories, and expert advice on DSCR loans and real estate investing
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8 mb-20">
            {blogPosts.map((post) => (
              <Link 
                key={post.id} 
                href={`/blog/${post.slug}`}
                className="block"
              >
                <article className="bg-white rounded-2xl shadow-lg p-8 transition-all hover:shadow-xl">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <time>{post.date}</time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-[#1a1060] mb-4 group-hover:text-indigo-700 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700">
                    Read More 
                    <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </article>
              </Link>
            ))}
          </div>

          <div className="bg-[#fff9e7] rounded-3xl p-12 mb-20">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-[#1a1060] mb-6">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Join thousands of successful real estate investors who are scaling their portfolios with DSCR loans.
              </p>
              <Link
                href="/#get-started"
                className="inline-block bg-[#1a1060] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#2a2070] transition-colors"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage; 