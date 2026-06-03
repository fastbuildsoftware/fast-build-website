import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../shared/AnimatedSection';

import { images } from '@/lib/images';

export default function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={images.foundation} alt="Construction site aerial view" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/80" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-white tracking-tight mb-6">
            Ready to build<span className="text-primary">?</span>
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto mb-10">
            Let's discuss your next project. Whether residential, commercial, or camp construction — we'll get it done fast and right.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-5 text-sm font-semibold tracking-wide hover:bg-primary/90 transition-all duration-300"
          >
            REQUEST A FREE QUOTE
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}