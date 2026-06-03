import { Link } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';

/** Carrier-compliant SMS opt-in disclosure — show wherever users enter a phone number. */
export default function SmsOptInDisclosure({ id = 'sms-opt-in-disclosure', className = '' }) {
  return (
    <div
      id={id}
      role="region"
      aria-label="SMS opt-in disclosure"
      className={`rounded-sm border border-border bg-secondary/40 p-4 space-y-3 text-sm ${className}`}
    >
      <div className="flex items-center gap-2 text-foreground">
        <MessageSquare className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
        <p className="text-xs font-semibold tracking-wider uppercase">SMS opt-in disclosure</p>
      </div>

      <div className="space-y-2 text-muted-foreground leading-relaxed">
        <p className="font-medium text-foreground">If you opt in below, you may receive:</p>
        <ul className="list-disc pl-5 space-y-1 marker:text-primary">
          <li>Project updates and status notifications</li>
          <li>Scheduling confirmations, reminders, and site visit coordination</li>
          <li>Service-related alerts about your construction inquiry or active project</li>
        </ul>
        <p>
          <strong className="text-foreground">Message frequency:</strong> varies based on your project
          activity (typically a few messages per month during an active project; fewer when idle).
        </p>
        <p>
          <strong className="text-foreground">Message and data rates may apply.</strong> Carriers are not
          liable for delayed or undelivered messages.
        </p>
        <p>
          <strong className="text-foreground">Opt out / help:</strong> Reply <strong>STOP</strong> to cancel
          SMS messages at any time. Reply <strong>HELP</strong> for assistance or call (845) 774-5616.
        </p>
      </div>

      <p className="text-xs text-foreground/90 leading-relaxed border-l-4 border-primary pl-3 py-1 bg-primary/5">
        By submitting this form and checking the SMS consent box, you agree to receive SMS messages from Fast
        Build Inc. regarding project updates and scheduling notifications. Message frequency varies. Message
        and data rates may apply. Reply STOP to opt out and HELP for assistance.
      </p>

      <p className="text-xs text-muted-foreground">
        SMS consent is optional and not required to submit a quote request. See our{' '}
        <Link to="/privacy-policy" className="text-primary hover:underline">
          Privacy Policy
        </Link>{' '}
        and{' '}
        <Link to="/terms-of-service" className="text-primary hover:underline">
          Terms of Service
        </Link>
        .
      </p>
    </div>
  );
}
