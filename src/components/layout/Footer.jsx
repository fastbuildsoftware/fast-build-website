import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Clock, ArrowUpRight } from 'lucide-react';

import Logo from '@/components/brand/Logo';
import { businessHours } from '@/lib/business';

export default function Footer() {
  return (
    <footer className="bg-foreground text-white/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo size="sm" onDark className="mb-6" />
            <p className="text-white/50 text-sm leading-relaxed">
              Your trusted general contractor for residential and commercial construction across New York and surrounding areas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider mb-6">NAVIGATE</h4>
            <div className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'Services', path: '/services' },
                { label: 'About Us', path: '/about' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="flex items-center gap-1 text-sm text-white/50 hover:text-white transition-colors group"
                >
                  {link.label}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider mb-6">SERVICES</h4>
            <div className="space-y-3">
              {['Residential Construction', 'Commercial Construction', 'Camp Build-Outs', 'Renovations', 'Project Management'].map((s) => (
                <Link key={s} to="/services" className="block text-sm text-white/50 hover:text-white transition-colors">
                  {s}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider mb-6">CONTACT</h4>
            <address className="not-italic space-y-4">
              <a href="tel:8457745616" className="flex items-start gap-3 text-sm text-white/50 hover:text-white transition-colors">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="font-mono">(845) 774-5616</span>
              </a>
              <a href="mailto:software@fastbuildinc.com" className="flex items-start gap-3 text-sm text-white/50 hover:text-white transition-colors">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                software@fastbuildinc.com
              </a>
              <div className="flex items-start gap-3 text-sm text-white/50">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="font-mono">78 Huschke Rd<br />Hurleyville, NY 12747</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-white/50">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="font-mono space-y-1 block">
                  {businessHours.map(({ days, hours }) => (
                    <span key={days} className="block">
                      {days}: {hours}
                    </span>
                  ))}
                </span>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Fast Build Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-white/30">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="hidden sm:inline" aria-hidden="true">
              ·
            </span>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <span className="hidden sm:inline" aria-hidden="true">
              ·
            </span>
            <span>Licensed General Contractor — New York</span>
          </div>
        </div>
      </div>
    </footer>
  );
}