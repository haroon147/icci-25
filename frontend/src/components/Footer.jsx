import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { IconConferenceLogo } from './ConferenceLogo';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-white relative">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="mb-4">
                <IconConferenceLogo className="text-white" />
              </div>
              <p className="text-small text-white/80 leading-relaxed">
                 International Conference on Computing & Innovation - Bringing together 
                researchers, practitioners, and students in computing and innovation from around the world.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-subheading font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-small text-white/80 hover:text-accent transition-colors duration-300">
                  About Conference
                </Link>
              </li>
              <li>
                <Link to="/scope" className="text-small text-white/80 hover:text-accent transition-colors duration-300">
                  Scope & Topics
                </Link>
              </li>
              <li>
                <Link to="/submissions" className="text-small text-white/80 hover:text-accent transition-colors duration-300">
                  Paper Submissions
                </Link>
              </li>
              <li>
                <Link to="/registration" className="text-small text-white/80 hover:text-accent transition-colors duration-300">
                  Registration
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-small text-white/80 hover:text-accent transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-subheading font-medium mb-6">Important Dates</h3>
            <ul className="space-y-3">
              <li className="text-small text-white/80">
                <span className="font-medium">Paper Submission:</span><br />
                November 15, 2025
              </li>
              <li className="text-small text-white/80">
                <span className="font-medium">Acceptance Notification:</span><br />
                November 25, 2025
              </li>
              <li className="text-small text-white/80">
                <span className="font-medium">Camera-Ready:</span><br />
                November 30, 2025
              </li>
              <li className="text-small text-white/80">
                <span className="font-medium">Conference:</span><br />
                December 8-9, 2025
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-subheading font-medium mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-small text-white/80">
                  Riphah International University<br />
                  Raiwind Road, Lahore, Pakistan
                </span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-accent flex-shrink-0" />
                <a href="mailto:icci@riphah.edu.pk" className="text-small text-white/80 hover:text-accent transition-colors duration-300">
                  icci@riphah.edu.pk
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-accent flex-shrink-0" />
                <span className="text-small text-white/80">+92335546844</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-small text-white/60 mb-4 md:mb-0">
            &copy; 2025 International Conference on Computing & Innovation. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-small text-white/60 hover:text-accent transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-small text-white/60 hover:text-accent transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-accent text-primary p-3 rounded-full shadow-lg hover:bg-accent-dark transition-all duration-300 z-40"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </footer>
  );
}
