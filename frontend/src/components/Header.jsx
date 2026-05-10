import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import ConferenceLogo from './ConferenceLogo';
import SocialIcons from './SocialIcons';

// ---------------------------------------------------------------------------
// Navigation structure
// ---------------------------------------------------------------------------
// Top-level items are always visible in the desktop nav.
// Items with a `children` array render as dropdowns.
// Items marked `// commented out` below are hidden but kept for easy restore.
// ---------------------------------------------------------------------------

const navigation = [
  { name: 'Home', href: '/icci-26' },

  {
    name: 'About',
    // Groups everything that describes the conference itself
    children: [
      { name: 'About', href: '/about' },
      { name: 'Scope', href: '/scope' },
      { name: 'Speakers', href: '/speakers' },
      { name: 'Committees', href: '/committees' },
      { name: 'Gallery', href: '/gallery' },
    ],
  },

  {
    name: 'Program',
    // Groups everything about what attendees will experience
    children: [
      { name: 'Schedule', href: '/proceedings' },
      { name: 'Workshops', href: '/workshops' },
      { name: '3MT', href: '/3mt' },
      { name: 'Virtual Proceedings', href: '/virtual-proceedings' },
    ],
  },

  { name: 'Submissions', href: '/submissions' },
  { name: 'Dates', href: '/dates' },
  { name: 'Registration', href: '/registration' },

  { name: 'ICCI-25', href: '/icci-25' },

  { name: 'Contact', href: '/contact' },
];

// ---------------------------------------------------------------------------
// DropdownMenu — desktop flyout for a nav group
// ---------------------------------------------------------------------------
function DropdownMenu({ item, currentPath }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const isActive = item.children.some((c) => c.href === currentPath);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setOpen(true)}
        className={`flex items-center gap-1 text-sm font-medium transition-colors duration-300 ${
          isActive ? 'text-accent' : 'text-text-primary hover:text-accent'
        }`}
      >
        {item.name}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div
          onMouseLeave={() => setOpen(false)}
          className="absolute left-0 top-full mt-1 w-48 rounded-md bg-white shadow-lg ring-1 ring-black/5 z-50"
        >
          <div className="py-1">
            {item.children.map((child) => (
              <Link
                key={child.name}
                to={child.href}
                onClick={() => setOpen(false)}
                className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                  currentPath === child.href
                    ? 'text-accent bg-accent/10 font-medium'
                    : 'text-text-primary hover:text-accent hover:bg-gray-50'
                }`}
              >
                {child.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Header
// ---------------------------------------------------------------------------
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // Track which mobile accordion is open (group name or null)
  const [mobileOpenGroup, setMobileOpenGroup] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setMobileOpenGroup(null);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <Link to="/icci-26" className="flex items-center -ml-2">
            <ConferenceLogo size="xlarge" />
          </Link>

          {/* ── Desktop Navigation ── */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) =>
              item.children ? (
                <DropdownMenu
                  key={item.name}
                  item={item}
                  currentPath={location.pathname}
                />
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    location.pathname === item.href
                      ? 'text-accent'
                      : 'text-text-primary hover:text-accent'
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          {/* ── Mobile hamburger ── */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen((v) => !v)}
              className="text-text-primary hover:text-accent transition-colors duration-300"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* ── Mobile Navigation ── */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => {
                if (item.children) {
                  // Accordion group for mobile
                  const isGroupOpen = mobileOpenGroup === item.name;
                  const isGroupActive = item.children.some(
                    (c) => c.href === location.pathname
                  );

                  return (
                    <div key={item.name}>
                      <button
                        onClick={() =>
                          setMobileOpenGroup(isGroupOpen ? null : item.name)
                        }
                        className={`w-full flex items-center justify-between px-3 py-2 text-base font-medium transition-colors duration-300 rounded-md ${
                          isGroupActive
                            ? 'text-accent bg-accent/10'
                            : 'text-text-primary hover:text-accent hover:bg-gray-50'
                        }`}
                      >
                        {item.name}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            isGroupOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {isGroupOpen && (
                        <div className="ml-4 mt-1 space-y-1 border-l-2 border-accent/20 pl-3">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              onClick={() => setIsMenuOpen(false)}
                              className={`block px-3 py-2 text-sm font-medium transition-colors duration-300 rounded-md ${
                                location.pathname === child.href
                                  ? 'text-accent bg-accent/10'
                                  : 'text-text-primary hover:text-accent hover:bg-gray-50'
                              }`}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                // Plain link
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 py-2 text-base font-medium transition-colors duration-300 rounded-md ${
                      location.pathname === item.href
                        ? 'text-accent bg-accent/10'
                        : 'text-text-primary hover:text-accent hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}

              {/* Social Icons */}
              <div className="px-3 py-4 border-t border-gray-200 mt-2">
                <SocialIcons className="justify-center" iconSize="h-6 w-6" />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}