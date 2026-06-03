import { Link } from 'react-router-dom';
import { ArrowUpRight, Home, Building2, TreePine } from 'lucide-react';
import AnimatedSection from '../shared/AnimatedSection';
import SectionLabel from '../shared/SectionLabel';

import { images } from '@/lib/images';

const services = [
  {
    icon: Home,
    title: 'Residential Construction',
    description: 'Custom homes, renovations, and additions built with precision craftsmanship.',
    image: images.residential,
  },
  {
    icon: Building2,
    title: 'Commercial Construction',
    description: 'Large-scale commercial projects delivered on time and on budget.',
    image: images.commercialPreview,
  },
  {
    icon: TreePine,
    title: 'Camp Build-Outs',
    description: 'Specialized camp construction across the region — fast turnarounds, exceptional quality.',
    image: images.completed,
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <SectionLabel label="What We Do" />
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold tracking-tight">
              Building with
              <br />
              <span className="text-primary">purpose & speed</span>
            </h2>
            <Link
              to="/services"
              className="group flex items-center gap-2 text-sm font-semibold tracking-wide text-muted-foreground hover:text-foreground transition-colors"
            >
              VIEW ALL SERVICES
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.15}>
              <Link to="/services" className="group block">
                <div className="relative overflow-hidden aspect-[4/3] mb-6">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
                  {/* Corner frame effect on hover */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-white/0 group-hover:border-white/80 transition-all duration-500" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-white/0 group-hover:border-white/80 transition-all duration-500" />
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-primary/5 border border-primary/10">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}