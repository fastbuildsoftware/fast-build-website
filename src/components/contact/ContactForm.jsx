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
import SmsOptInDisclosure from '@/components/contact/SmsOptInDisclosure';

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
    setForm((prev) => {
      const next = { ...prev, [field]: value };
      if (field === 'phone' && !String(value).trim()) {
        next.smsConsent = false;
      }
      return next;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.smsConsent && !form.phone.trim()) {
      toast({
        title: 'Phone number required',
        description: 'Enter a phone number to opt in to SMS messages, or uncheck SMS consent.',
        variant: 'destructive',
      });
      return;
    }
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

          <div className="space-y-3">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-xs font-semibold tracking-wider uppercase">
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                autoComplete="tel"
                placeholder="(845) 000-0000"
                value={form.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                aria-describedby="sms-opt-in-disclosure"
                className="border-border focus:border-primary font-mono"
              />
              <p className="text-xs text-muted-foreground">
                Optional. Required only if you wish to receive SMS updates (see disclosure below).
              </p>
            </div>
            <SmsOptInDisclosure />
            <div className="flex items-start gap-3 pt-1">
              <Checkbox
                id="smsConsent"
                checked={form.smsConsent}
                onCheckedChange={(checked) => handleChange('smsConsent', checked)}
                className="mt-0.5"
                disabled={!form.phone.trim()}
              />
              <Label
                htmlFor="smsConsent"
                className={`text-sm leading-relaxed ${form.phone.trim() ? 'cursor-pointer' : 'cursor-not-allowed opacity-70'}`}
              >
                I agree to receive SMS messages from Fast Build Inc. at the phone number above. I have read the
                SMS opt-in disclosure above, including message types, frequency, rates, and STOP/HELP
                instructions.
              </Label>
            </div>
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

          <p className="text-xs text-muted-foreground leading-relaxed">
            By submitting this form, you request contact from Fast Build Inc. about your project. SMS messages
            are sent only if you enter a phone number and check the SMS consent box above. Your consent is not
            a condition of purchase.
          </p>

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