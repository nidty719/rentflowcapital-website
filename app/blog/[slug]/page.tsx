import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: { [key: string]: string | string[] | undefined };
}

const blogPosts = {
  'understanding-dscr-loans': {
    title: "Understanding DSCR Loans: The Key to Growing Your Real Estate Portfolio",
    date: "March 15, 2024",
    readTime: "5 min read",
    content: `
      DSCR (Debt Service Coverage Ratio) loans are revolutionizing how real estate investors grow their portfolios. Unlike traditional mortgages that focus on personal income, DSCR loans evaluate a property's ability to generate rental income to cover its debt obligations.

      What Makes DSCR Loans Different?
      
      Traditional mortgages rely heavily on personal income, tax returns, and employment history. This can limit investors who may have excellent properties but don't show enough personal income on paper. DSCR loans solve this problem by focusing on what really matters: the property's performance.

      Key Benefits of DSCR Loans:
      • No personal income verification required
      • Qualify based on property's rental income
      • Close deals faster with simplified documentation
      • Scale your portfolio without DTI constraints
      • Purchase through LLC for better asset protection

      Understanding the DSCR Calculation:
      The DSCR ratio is calculated by dividing the property's monthly rental income by its monthly debt obligations (PITIA - Principal, Interest, Taxes, Insurance, and Association dues).

      Target DSCR Ratios:
      • 1.25 or higher: Best loan terms available
      • 1.0 to 1.24: Standard approval
      • 0.75 to 0.99: May qualify with additional down payment

      The Future of Real Estate Investment:
      DSCR loans represent a shift in real estate financing, focusing on the investment property's fundamentals rather than the investor's personal finances. This approach allows investors to scale their portfolios based on performance rather than personal income limitations.
    `
  },
  'investor-success-story': {
    title: "From 2 to 20 Properties: A Real Estate Investor's Success Story",
    date: "March 14, 2024",
    readTime: "4 min read",
    content: `
      Sarah's journey from owning two rental properties to managing a portfolio of twenty properties showcases the transformative power of DSCR loans. Her story demonstrates how breaking free from traditional lending constraints can accelerate portfolio growth.

      The Initial Challenge:
      Despite having two successful rental properties, Sarah's debt-to-income ratio prevented her from qualifying for additional conventional mortgages. Her properties were performing well, but her personal income wasn't high enough to satisfy traditional lenders.

      Discovering DSCR Loans:
      When Sarah learned about DSCR loans, she realized she could leverage her properties' performance rather than her personal income. This opened up new possibilities for expansion.

      Key Milestones in Sarah's Journey:
      • Started with 2 properties under conventional financing
      • First DSCR loan allowed purchase of 2 additional properties
      • Scaled to 10 properties within 12 months
      • Reached 20 properties by year two
      • Currently generating significant passive income

      Strategy for Success:
      1. Focus on properties with strong rental demand
      2. Maintain DSCR ratios above 1.25 for best terms
      3. Reinvest profits into down payments
      4. Use LLC structure for asset protection
      5. Partner with experienced property managers

      Lessons Learned:
      • Property performance matters more than personal income
      • Scale is achievable with the right financing strategy
      • Professional property management is crucial for growth
      • Market research is essential for success
      • Building relationships with lenders pays off

      Looking Forward:
      Sarah continues to expand her portfolio, focusing on markets with strong rental demand and appreciation potential. Her success story demonstrates that with the right financing tools and strategy, significant portfolio growth is achievable.
    `
  }
};

export default async function BlogPost({ params, searchParams }: Props) {
  const resolvedParams = await params;
  const post = blogPosts[resolvedParams.slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="pt-24">
          <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16">
            <h1 className="text-3xl font-bold text-[#1a1060]">Post not found</h1>
            <Link href="/blog" className="text-indigo-600 hover:text-indigo-700">
              Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24">
        <article className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16">
          <Link 
            href="/blog"
            className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700 mb-8"
          >
            <svg className="mr-2 w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            Back to Blog
          </Link>

          <div className="mb-8">
            <h1 className="text-4xl font-bold text-[#1a1060] mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <time>{post.date}</time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="prose max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-16 bg-[#fff9e7] rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-[#1a1060] mb-4">
              Ready to Start Your Investment Journey?
            </h2>
            <p className="text-gray-700 mb-6">
              Learn how DSCR loans can help you achieve your real estate investment goals.
            </p>
            <Link
              href="/#get-started"
              className="inline-block bg-[#1a1060] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2a2070] transition-colors"
            >
              Get Started Today
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
} 