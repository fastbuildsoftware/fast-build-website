import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionLabel from '../components/shared/SectionLabel';
import { business, siteName, siteUrl } from '@/lib/seo.config';

const sections = [
  {
    title: 'Agreement to these terms',
    content: (
      <>
        <p>
          These Terms of Service (&quot;Terms&quot;) govern your use of the website operated by {siteName}{' '}
          (&quot;Fast Build,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) at{' '}
          <a href={siteUrl} className="text-primary hover:underline">
            {siteUrl.replace(/^https?:\/\//, '')}
          </a>{' '}
          and your communications with us regarding construction services.
        </p>
        <p>
          By accessing our website, submitting a contact form, calling us, or opting in to SMS communications,
          you agree to these Terms. If you do not agree, do not use our website or services. A separate written
          contract may apply to specific construction projects and will control in the event of any conflict with
          these Terms regarding that project.
        </p>
      </>
    ),
  },
  {
    title: 'Service description',
    content: (
      <>
        <p>
          Fast Build Inc. is a licensed general contractor providing construction-related services across New York
          and surrounding areas, including but not limited to:
        </p>
        <ul className="list-disc pl-6 space-y-2 marker:text-primary">
          {business.services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
        <p>
          Services may include consultation, estimates, project planning, construction, renovations, and related
          coordination. Scope, schedule, pricing, and deliverables for any project are defined in a proposal,
          estimate, or signed agreement between you and Fast Build—not solely by information on this website.
        </p>
        <p>
          Information on our website is for general purposes only and does not constitute a binding offer. We
          reserve the right to decline projects, modify service availability, or update site content without notice.
        </p>
      </>
    ),
  },
  {
    title: 'User responsibilities',
    content: (
      <>
        <p>When using our website or engaging with our team, you agree to:</p>
        <ul className="list-disc pl-6 space-y-2 marker:text-primary">
          <li>Provide accurate and complete contact and project information</li>
          <li>
            Use the website only for lawful purposes and not to transmit harmful, misleading, or unauthorized content
          </li>
          <li>
            Respect intellectual property on the site (text, images, branding) and not copy or redistribute it
            without permission
          </li>
          <li>
            Cooperate in good faith during estimates and active projects, including timely access to job sites,
            decisions, and permits where applicable
          </li>
          <li>
            Comply with applicable laws and obtain any permissions required for your property or project
          </li>
          <li>
            Maintain the confidentiality of any login credentials or private project communications we provide, if
            applicable
          </li>
        </ul>
        <p>
          You are responsible for reviewing and approving project plans, change orders, and invoices. Delays or
          additional costs resulting from incomplete information, site conditions, code requirements, or third-party
          delays may affect schedule and price as outlined in your project agreement.
        </p>
      </>
    ),
  },
  {
    title: 'SMS and messaging terms',
    content: (
      <>
        <p>
          If you provide a mobile phone number and opt in to receive text messages or WhatsApp communications from
          Fast Build, the following terms apply in addition to our{' '}
          <Link to="/privacy-policy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
          :
        </p>
        <p className="border-l-4 border-primary pl-4 bg-primary/5 py-3 text-foreground">
          By providing your phone number, you consent to receive SMS communications related to your account,
          scheduling updates, and service notifications. Message frequency varies. Message and data rates may
          apply.
        </p>
        <ul className="list-disc pl-6 space-y-2 marker:text-primary">
          <li>
            Messages may include project updates, scheduling reminders, site coordination, and service notifications
          </li>
          <li>
            Reply <strong>STOP</strong> to cancel SMS messages. Reply <strong>HELP</strong> for assistance
          </li>
          <li>Carriers are not liable for delayed or undelivered messages</li>
          <li>
            Consent to SMS is not required as a condition of purchasing construction services unless expressly
            stated for a specific program you choose to join
          </li>
          <li>
            You represent that you are the account holder or have permission to use the phone number you provide
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Estimates, payments, and warranties',
    content: (
      <p>
        Quotes and estimates are non-binding until accepted in a signed agreement. Payment terms, warranties, and
        dispute resolution for construction work are set forth in your project contract. Website content does not
        extend or modify those terms unless explicitly stated in writing by an authorized Fast Build representative.
      </p>
    ),
  },
  {
    title: 'Disclaimer and limitation of liability',
    content: (
      <>
        <p>
          Our website and general communications are provided &quot;as is&quot; without warranties of any kind,
          express or implied. To the fullest extent permitted by law, Fast Build is not liable for indirect,
          incidental, or consequential damages arising from use of the website or reliance on general site content.
        </p>
        <p>
          Nothing in these Terms limits liability that cannot be limited under applicable law, including liability
          for gross negligence or willful misconduct where prohibited.
        </p>
      </>
    ),
  },
  {
    title: 'Indemnification',
    content: (
      <p>
        You agree to indemnify and hold harmless Fast Build Inc. and its officers, employees, and agents from claims
        arising from your misuse of the website, violation of these Terms, or inaccurate information you provide,
        except to the extent caused by our negligence or misconduct.
      </p>
    ),
  },
  {
    title: 'Governing law',
    content: (
      <p>
        These Terms are governed by the laws of the State of New York, without regard to conflict-of-law principles.
        Disputes relating to these Terms or website use shall be brought in courts located in New York, unless
        otherwise required by law.
      </p>
    ),
  },
  {
    title: 'Changes',
    content: (
      <p>
        We may update these Terms at any time. The &quot;Last updated&quot; date below indicates the current version.
        Continued use of the website after changes constitutes acceptance of the revised Terms.
      </p>
    ),
  },
  {
    title: 'Contact',
    content: (
      <>
        <p>Questions about these Terms:</p>
        <address className="not-italic space-y-1 text-foreground">
          <p className="font-semibold">{business.legalName}</p>
          <p>
            {business.address.street}, {business.address.city}, {business.address.region}{' '}
            {business.address.postalCode}
          </p>
          <p>
            Phone:{' '}
            <a href="tel:8457745616" className="text-primary hover:underline font-mono">
              (845) 774-5616
            </a>
          </p>
          <p>
            Email:{' '}
            <a href={`mailto:${business.email}`} className="text-primary hover:underline">
              {business.email}
            </a>
          </p>
        </address>
      </>
    ),
  },
];

export default function TermsOfService() {
  const lastUpdated = 'June 3, 2026';

  return (
    <article className="pt-32 pb-24 bg-background">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel label="Legal" />
          <h1 className="text-4xl lg:text-5xl font-display font-extrabold tracking-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-muted-foreground mb-12">Last updated: {lastUpdated}</p>

          <div className="prose prose-slate max-w-none space-y-10 text-muted-foreground leading-relaxed [&_p]:mb-4 [&_strong]:text-foreground">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-display font-bold text-foreground mb-4">{section.title}</h2>
                {section.content}
              </section>
            ))}
          </div>

          <p className="mt-12 pt-8 border-t border-border text-sm text-muted-foreground">
            <Link to="/privacy-policy" className="text-primary hover:underline">
              Privacy Policy
            </Link>{' '}
            ·{' '}
            <Link to="/contact" className="text-primary hover:underline">
              Contact us
            </Link>{' '}
            ·{' '}
            <Link to="/" className="text-primary hover:underline">
              Back to home
            </Link>
          </p>
        </motion.div>
      </div>
    </article>
  );
}
