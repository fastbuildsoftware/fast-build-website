import AnimatedSection from '../shared/AnimatedSection';
import { motion } from 'framer-motion';

const stats = [
  { value: '15+', label: 'Years of Experience' },
  { value: '200+', label: 'Projects Completed' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Project Support' },
];

export default function StatsSection() {
  return (
    <section className="py-24 bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                  className="text-4xl lg:text-5xl font-display font-extrabold text-primary mb-2"
                >
                  {stat.value}
                </motion.div>
                <p className="text-sm text-white/50 font-mono tracking-wider uppercase">
                  {stat.label}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}