import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

import { images } from '@/lib/images';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <img
            src={images.hero}
            alt="Modern residential construction in progress"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-10 h-px bg-primary" />
            <span className="text-xs font-semibold tracking-[0.25em] text-primary font-mono">
              GENERAL CONTRACTOR — NY & SURROUNDING AREAS
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-extrabold leading-[0.95] tracking-tight text-foreground"
          >
            BUILT AT
            <br />
            THE SPEED
            <br />
            <span className="text-primary">OF LIFE.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-lg"
          >
            Residential and commercial construction done fast, done right.
            From camp build-outs to full-scale projects — we deliver
            excellence on every timeline.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row items-start gap-4"
          >
            <Link
              to="/contact"
              className="group flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold tracking-wide hover:bg-primary/90 transition-all duration-300"
            >
              START YOUR PROJECT
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:8457745616"
              className="flex items-center gap-3 px-8 py-4 text-sm font-semibold tracking-wide border border-foreground/20 hover:border-foreground/40 transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              <span className="font-mono">(845) 774-5616</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative structural lines */}
      <div className="absolute right-0 top-0 bottom-0 w-px bg-border/30 hidden lg:block" style={{ right: '25%' }} />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-border/20 hidden lg:block" style={{ right: '50%' }} />
    </section>
  );
}