import { useState } from 'react';
import { submitContactForm } from '@/api/contact';
import { useToast } from '@/components/ui/use-toast';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const projectTypes = [
  'Residential Construction',
  'Commercial Construction',
  'Camp Build-Out',
  'Renovation',
  'General Inquiry',
];

export default function ContactForm() {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
    smsConsent: false,
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await submitContactForm(form);
      setSent(true);
    } catch (error) {
      toast({
        title: 'Could not send message',
        description: error.message || 'Please try again or call us directly.',
        variant: 'destructive',
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {sent ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-card border border-border p-10 text-center"
        >
          <div className="mx-auto w-16 h-16 bg-primary/10 flex items-center justify-center mb-6">
            <CheckCircle2 className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-2xl font-display font-bold mb-2">Project Initialized</h3>
          <p className="text-muted-foreground mb-1">
            Your request has been received.
          </p>
          <p className="text-sm text-muted-foreground">
            We'll get back to you within 24 hours.
          </p>
          <div className="mt-8 h-1 bg-secondary overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 2, ease: 'easeOut' }}
            />
          </div>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          exit={{ opacity: 0, height: 0 }}
          onSubmit={handleSubmit}
          className="bg-card border border-border p-8 lg:p-10 space-y-6"
        >
          <div>
            <h3 className="text-xl font-display font-bold mb-1">Request a Build</h3>
            <p className="text-sm text-muted-foreground">Fill out the form and we'll be in touch.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-xs font-semibold tracking-wider uppercase">
                Full Name *
              </Label>
              <Input
                id="name"
                required
                placeholder="John Smith"
                value={form.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="border-border focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-xs font-semibold tracking-wider uppercase">
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                required
                placeholder="john@example.com"
                value={form.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="border-border focus:border-primary"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-xs font-semibold tracking-wider uppercase">
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="(845) 000-0000"
                value={form.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="border-border focus:border-primary font-mono"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-semibold tracking-wider uppercase">
                Project Type
              </Label>
              <Select value={form.projectType} onValueChange={(v) => handleChange('projectType', v)}>
                <SelectTrigger className="border-border">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  {projectTypes.map((t) => (
                    <SelectItem key={t} value={t}>{t}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-xs font-semibold tracking-wider uppercase">
              Project Details *
            </Label>
            <Textarea
              id="message"
              required
              placeholder="Tell us about your project, timeline, and any specific requirements..."
              rows={5}
              value={form.message}
              onChange={(e) => handleChange('message', e.target.value)}
              className="border-border focus:border-primary resize-none"
            />
          </div>

          {/* SMS/WhatsApp Consent */}
          <div className="bg-secondary/50 border border-border p-5 space-y-3">
            <div className="flex items-start gap-3">
              <Checkbox
                id="smsConsent"
                checked={form.smsConsent}
                onCheckedChange={(checked) => handleChange('smsConsent', checked)}
                className="mt-0.5"
              />
              <Label htmlFor="smsConsent" className="text-sm leading-relaxed cursor-pointer">
                I consent to receive project updates and communications via <strong>SMS and WhatsApp</strong> from Fast Build Inc. at the phone number provided.
              </Label>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed pl-7">
              Message and data rates may apply. Message frequency varies. Reply STOP to opt out at any time. Reply HELP for assistance. By checking this box, you agree to our messaging terms. Your consent is not a condition of purchase.
            </p>
          </div>

          <button
            type="submit"
            disabled={sending}
            className="group w-full flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold tracking-wide hover:bg-primary/90 transition-all duration-300 disabled:opacity-70"
          >
            {sending ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                SENDING...
              </>
            ) : (
              <>
                SUBMIT REQUEST
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}