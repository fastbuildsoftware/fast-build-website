import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Clock, Award, Users } from 'lucide-react';
import AnimatedSection from '../components/shared/AnimatedSection';
import SectionLabel from '../components/shared/SectionLabel';

import { images } from '@/lib/images';

const timeline = [
  {
    num: '01',
    title: 'Raw Site',
    description: 'Every great project starts with a vision and a piece of land. We evaluate the site, plan the foundation, and prepare for what\'s to come.',
  },
  {
    num: '02',
    title: 'Foundation & Framing',
    description: 'The skeleton of your building takes shape. Our expert framers work efficiently to bring the structure to life, always ahead of schedule.',
  },
  {
    num: '03',
    title: 'Systems & Enclosure',
    description: 'Electrical, plumbing, HVAC — all critical systems are installed by licensed professionals. The building is enclosed and weatherproofed.',
  },
  {
    num: '04',
    title: 'Finishing & Delivery',
    description: 'Interior finishes, fixtures, landscaping — every detail is perfected. We deliver a project you\'re proud to call yours.',
  },
];

const values = [
  { icon: Clock, title: 'Speed', desc: 'We don\'t just promise fast — we deliver it. Our crews work efficiently without cutting corners.' },
  { icon: Award, title: 'Quality', desc: 'Every nail, every joint, every finish meets the highest standards of craftsmanship.' },
  { icon: Users, title: 'Community', desc: 'We\'re not just building structures — we\'re building lasting relationships with every client we serve.' },
  { icon: MapPin, title: 'Regional Expertise', desc: 'Deep knowledge of codes, terrain, and conditions across the areas we serve gives us an edge on every project.' },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SectionLabel label="About Fast Build" />
            <h1 className="text-5xl lg:text-7xl font-display font-extrabold tracking-tight mb-6">
              Built on <span className="text-primary">trust</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              We're a general contractor serving New York and surrounding areas with residential and commercial construction that's fast, reliable, and built to last.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Image + Story */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative overflow-hidden aspect-[16/10]">
                <img src={images.aboutHero} alt="Fast Build craftsman at work" className="w-full h-full object-cover" />
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-5 py-3">
                  <p className="text-xs font-mono text-muted-foreground tracking-wider">SERVING NY & BEYOND</p>
                </div>
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-6">
                  Your trusted GC, doing everything <span className="text-primary">fast and great</span>
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Fast Build Inc. was founded on a simple principle: construction doesn't have to be slow to be good. We've built our reputation on delivering high-quality residential and commercial projects ahead of schedule for clients across New York and beyond.
                  </p>
                  <p>
                    We specialize in camp build-outs, custom homes, and large-scale commercial facilities throughout the region. Our experienced team handles every phase of construction with the same commitment to speed and excellence.
                  </p>
                  <p>
                    As a full-service general contractor, we manage every detail — from permits and planning to the final punch list. When you work with Fast Build, you get a partner who treats your project like their own.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <SectionLabel label="Our Values" />
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-16">
              What drives us
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className="bg-card p-8 border border-border h-full">
                  <div className="p-2.5 bg-primary/5 border border-primary/10 w-fit mb-5">
                    <v.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Build Timeline */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <SectionLabel label="The Build Process" />
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-20">
              From raw earth to <span className="text-primary">finished structure</span>
            </h2>
          </AnimatedSection>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-border hidden sm:block" />

            <div className="space-y-16">
              {timeline.map((step, i) => (
                <AnimatedSection key={step.num} delay={i * 0.1}>
                  <div className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 ${
                    i % 2 === 0 ? '' : 'lg:direction-rtl'
                  }`}>
                    {/* Dot on line */}
                    <div className="absolute left-8 lg:left-1/2 top-0 w-3 h-3 bg-primary -translate-x-1/2 hidden sm:block" />

                    <div className={i % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:order-2 lg:pl-16'}>
                      <span className="text-6xl font-display font-extrabold text-primary/10 block mb-2">
                        {step.num}
                      </span>
                      <h3 className="text-2xl font-display font-bold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                    <div className={i % 2 === 0 ? 'lg:pl-16' : 'lg:order-1 lg:pr-16'} />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={images.foundation} alt="Fast Build project site" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/85" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase font-mono">
                  SERVICE AREA
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-white tracking-tight mb-6">
                Proudly serving New York & beyond
              </h2>
              <p className="text-white/60 leading-relaxed mb-4">
                Fast Build works with residential and commercial clients across New York State and surrounding regions. We bring the same speed, quality, and personal attention to every project — whether it's a camp build-out, a custom home, or a commercial facility.
              </p>
              <p className="text-white/60 leading-relaxed mb-10">
                From camps and bungalow colonies to new residential developments and commercial facilities — we deliver results wherever you need us.
              </p>
              <address className="not-italic font-mono text-sm text-white/40 space-y-1">
                <p>78 Huschke Rd</p>
                <p>Hurleyville, NY 12747</p>
                <p>(845) 774-5616</p>
              </address>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-5xl font-display font-bold tracking-tight mb-6">
              Ready to start your <span className="text-primary">project</span>?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-10">
              Get in touch today for a free consultation and estimate.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 text-sm font-semibold tracking-wide hover:bg-primary/90 transition-all"
            >
              CONTACT US
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}