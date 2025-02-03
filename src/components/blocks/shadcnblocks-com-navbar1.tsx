import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
}

const Navbar1 = ({
  logo = {
    url: "/",
    src: "/images/logo_no_background.png",
    alt: "Rent Flow Capital",
    title: "Rent Flow Capital",
  },
}: Navbar1Props) => {
  const menuItems = [
    { title: "Loan Programs", url: "#loan-programs" },
    { title: "How It Works", url: "#how-it-works" },
    { title: "Success Stories", url: "#success-stories" },
    { title: "Contact", url: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto">
        <nav className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href={logo.url} className="flex items-center gap-2">
            <img src={logo.src} className="h-24 w-auto object-contain" alt={logo.alt} />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.url}
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                {item.title}
              </a>
            ))}
            <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700">
              <a href="#contact">Get Started</a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>
                    <img src={logo.src} className="h-24 w-auto object-contain" alt={logo.alt} />
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-8">
                  {menuItems.map((item) => (
                    <a
                      key={item.title}
                      href={item.url}
                      className="text-lg font-medium text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {item.title}
                    </a>
                  ))}
                  <Button asChild className="mt-4 bg-blue-600 hover:bg-blue-700">
                    <a href="#contact">Get Started</a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
};

export { Navbar1 }; 