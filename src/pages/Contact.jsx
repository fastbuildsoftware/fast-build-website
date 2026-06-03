import { motion } from 'framer-motion';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';
import AnimatedSection from '../components/shared/AnimatedSection';
import SectionLabel from '../components/shared/SectionLabel';
import ContactForm from '../components/contact/ContactForm';
import { businessHours } from '@/lib/business';

export default function Contact() {
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
            <SectionLabel label="Get In Touch" />
            <h1 className="text-5xl lg:text-7xl font-display font-extrabold tracking-tight mb-6">
              Let's <span className="text-primary">talk</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Ready to start your next construction project? Reach out for a free consultation and estimate. We respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left — Contact Info */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <div className="space-y-10">
                  {/* Phone */}
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-primary/5 border border-primary/10">
                        <Phone className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">Phone</span>
                    </div>
                    <a href="tel:8457745616" className="text-2xl lg:text-3xl font-display font-bold hover:text-primary transition-colors font-mono">
                      (845) 774-5616
                    </a>
                  </div>

                  {/* Email */}
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-primary/5 border border-primary/10">
                        <Mail className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">Email</span>
                    </div>
                    <a href="mailto:software@fastbuildinc.com" className="text-lg font-semibold hover:text-primary transition-colors break-all">
                      software@fastbuildinc.com
                    </a>
                  </div>

                  {/* Address */}
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-primary/5 border border-primary/10">
                        <MapPin className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">Office</span>
                    </div>
                    <address className="not-italic">
                      <p className="text-2xl lg:text-3xl font-display font-bold font-mono leading-snug">
                        78 Huschke Rd
                      </p>
                      <p className="text-2xl lg:text-3xl font-display font-bold font-mono leading-snug">
                        Hurleyville, NY
                      </p>
                      <p className="text-lg font-mono text-muted-foreground mt-1">12747</p>
                    </address>
                  </div>

                  {/* Hours */}
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-primary/5 border border-primary/10">
                        <Clock className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">Hours</span>
                    </div>
                    <div className="space-y-1 font-mono text-sm">
                      {businessHours.map(({ days, hours }) => (
                        <div key={days} className="flex justify-between max-w-xs gap-4">
                          <span className="text-muted-foreground">{days}</span>
                          <span className="font-semibold">{hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right — Form */}
            <div className="lg:col-span-3">
              <AnimatedSection delay={0.2}>
                <ContactForm />
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}