import { Footer } from "@/components/footer";
import { LandingPageHeader } from "@/components/landing-page-header";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingPageHeader
        items={[
          { title: "Home", href: "/" },
          { title: "Features", href: "/#features" },
          { title: "How It Works", href: "/#how-it-works" },
          { title: "FAQ", href: "/#faq" },
        ]}
      />
      <main className="flex-1">{props.children}</main>
      <Footer
        builtBy="Rent Flow Capital"
        builtByLink="/"
        linkedinLink="https://linkedin.com/company/rent-flow-capital"
      />
    </div>
  );
}
