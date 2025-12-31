// import Link from "next/link"; // Removed: next/link is not supported in Vite

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
];

export default function Navbar() {
  return (
    <header className="w-full py-4">
      <nav className="sticky top-4 z-50 mx-auto max-w-5xl px-4 w-full">
        <div className="bg-surface-light backdrop-blur-md bg-opacity-80 border border-gray-200 rounded-full px-6 py-3 shadow-soft flex items-center justify-between">
          <div className="flex items-center gap-2">
            <a>
              <img src="KroweLogo.png" alt="Krowe Logo" width={100} height={100} />
            </a>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-text-muted-light">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="hidden md:block text-sm font-semibold hover:text-primary transition-colors text-text-light "
            >
              Sign in
            </a>
            <a
              href="#"
              className="bg-text-light text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
