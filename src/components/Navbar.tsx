import { MouseEvent } from 'react';

const NAV_LINKS = [
 // { label: "Home", href: "#home" },
  { label: "How it Works", href: "#features" },
  { label: "Benefits", href: "#benefits" },
  { label: "FAQ", href: "#faq" },
];

interface NavbarProps {
  onJoinWaitlist?: () => void
}

export default function Navbar({ onJoinWaitlist }: NavbarProps) {
  const handleScroll = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      // Adjust this value to change the scroll offset
      let offset = 100;

      // Custom offset specifically for Benefits
      if (targetId === 'benefits') {
        offset = 20;
      }
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="w-full py-4 fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <nav className="mx-auto max-w-5xl px-4 w-full pointer-events-auto">
        <div className="bg-surface-light backdrop-blur-md bg-opacity-80 border border-gray-200 rounded-full px-6 py-3 shadow-soft flex items-center justify-between">
          <div className="flex items-center gap-2">
            <a href="#home" onClick={(e) => handleScroll(e, '#home')} className="cursor-pointer">
              <img src="KroweLogo.png" alt="Krowe Logo" width={100} height={100} />
            </a>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-text-muted-light">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="hover:text-primary transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>
          <button
            className="flex items-center gap-4"
            type="button"
            onClick={() => onJoinWaitlist?.()}
          >
            <a
              href="#"
              className="bg-text-light text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer"
            >
              Join Waitlist
            </a>
          </button>
        </div>
      </nav>
    </header>
  );
}
