import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Home, Building2, TreePine, Hammer, HardHat, Ruler, ClipboardCheck, Wrench, ShieldCheck } from 'lucide-react';
import AnimatedSection from '../components/shared/AnimatedSection';
import SectionLabel from '../components/shared/SectionLabel';

import { images } from '@/lib/images';

const mainServices = [
  {
    num: '01',
    title: 'Residential Construction',
    description: 'From custom homes to complete renovations, we build living spaces that stand the test of time. Our residential team handles framing, roofing, siding, interior finishes, and everything in between — all on an accelerated timeline without cutting corners.',
    features: ['Custom Home Builds', 'Additions & Extensions', 'Full Renovations', 'Kitchen & Bath Remodels'],
    image: images.residential,
    icon: Home,
  },
  {
    num: '02',
    title: 'Commercial Construction',
    description: 'Large-scale commercial projects demand precision engineering and relentless project management. We deliver commercial spaces that meet code, exceed expectations, and open on schedule.',
    features: ['Office Build-Outs', 'Retail Spaces', 'Warehouses', 'Multi-Use Facilities'],
    image: images.commercial,
    icon: Building2,
  },
  {
    num: '03',
    title: 'Camp Build-Outs',
    description: 'We specialize in camp build-outs across New York and surrounding regions. From bunk houses to dining halls, recreation centers to staff quarters — we understand the unique demands of camp construction and deliver exceptional results fast.',
    features: ['Bunk Houses', 'Dining Halls', 'Recreation Centers', 'Infrastructure'],
    image: images.completed,
    icon: TreePine,
  },
];

const additionalServices = [
  { icon: Hammer, title: 'Framing', desc: 'Structural framing for all building types' },
  { icon: Ruler, title: 'Site Planning', desc: 'Complete site preparation and planning' },
  { icon: ClipboardCheck, title: 'Project Management', desc: 'End-to-end project oversight and coordination' },
  { icon: Wrench, title: 'Renovations', desc: 'Modernize and upgrade existing structures' },
  { icon: HardHat, title: 'General Contracting', desc: 'Full GC services from permits to punch list' },
  { icon: ShieldCheck, title: 'Code Compliance', desc: 'Ensuring all work meets local building codes' },
];

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SectionLabel label="Our Services" />
            <h1 className="text-5xl lg:text-7xl font-display font-extrabold tracking-tight mb-6">
              What we <span className="text-primary">build</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              As a licensed general contractor, we handle every aspect of your construction project — residential, commercial, or specialized camp build-outs. Fast, right, and built to last.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-32">
          {mainServices.map((service, i) => (
            <AnimatedSection key={service.num}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                i % 2 === 1 ? 'lg:direction-rtl' : ''
              }`}>
                {/* Image */}
                <div className={`relative group ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Framing hover */}
                    <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-white/0 group-hover:border-primary transition-all duration-500" />
                    <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-white/0 group-hover:border-primary transition-all duration-500" />
                  </div>
                  <div className="absolute -top-4 -left-4 text-8xl font-display font-extrabold text-primary/10 select-none pointer-events-none">
                    {service.num}
                  </div>
                </div>

                {/* Content */}
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/5 border border-primary/10">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground tracking-wider">{service.num}</span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {service.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary flex-shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    GET A QUOTE
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Additional Services Grid */}
      <section className="py-24 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <SectionLabel label="Full-Service GC" />
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-16">
              Everything under one roof
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.08}>
                <div className="bg-card p-8 border border-border hover:border-primary/20 transition-all duration-500 group">
                  <div className="p-2.5 bg-primary/5 border border-primary/10 w-fit mb-5 group-hover:bg-primary/10 transition-colors">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <SectionLabel label="Our Process" />
                <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-8">
                  From blueprint to <span className="text-primary">build</span>
                </h2>
                <div className="space-y-8">
                  {[
                    { num: '01', title: 'Consultation', desc: 'We meet with you to understand your vision, requirements, and timeline.' },
                    { num: '02', title: 'Planning & Permits', desc: 'Our team handles all planning, engineering, and permit acquisition.' },
                    { num: '03', title: 'Construction', desc: 'Work begins with our experienced crews delivering on the accelerated schedule.' },
                    { num: '04', title: 'Final Walkthrough', desc: 'A thorough inspection ensuring everything meets our high standards.' },
                  ].map((step) => (
                    <div key={step.num} className="flex gap-5">
                      <span className="text-2xl font-display font-bold text-primary/30 font-mono">{step.num}</span>
                      <div>
                        <h3 className="font-semibold mb-1">{step.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative overflow-hidden aspect-[4/3]">
                <img src={images.planning} alt="Construction planning" className="w-full h-full object-cover" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-foreground">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-white tracking-tight mb-6">
              Let's build something <span className="text-primary">great</span>
            </h2>
            <p className="text-white/50 max-w-lg mx-auto mb-10">
              Contact us today for a free consultation and project estimate.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 text-sm font-semibold tracking-wide hover:bg-primary/90 transition-all"
            >
              GET STARTED
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}