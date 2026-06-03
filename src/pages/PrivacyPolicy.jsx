import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionLabel from '../components/shared/SectionLabel';
import { business, siteName, siteUrl } from '@/lib/seo.config';

const sections = [
  {
    title: 'Introduction',
    content: (
      <>
        <p>
          {siteName} (&quot;Fast Build,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates{' '}
          <a href={siteUrl} className="text-primary hover:underline">
            {siteUrl.replace(/^https?:\/\//, '')}
          </a>{' '}
          and related services. This Privacy Policy describes how we collect, use, disclose, and protect
          information when you visit our website, contact us, or communicate with us about construction services.
        </p>
        <p>
          By using our website or providing your information, you agree to this Privacy Policy. If you do not
          agree, please do not use our site or submit personal information.
        </p>
      </>
    ),
  },
  {
    title: 'Information we collect',
    content: (
      <>
        <p>We may collect the following types of information:</p>
        <ul className="list-disc pl-6 space-y-2 marker:text-primary">
          <li>
            <strong>Contact and identity information:</strong> name, email address, phone number, and any details
            you include in messages or project inquiries.
          </li>
          <li>
            <strong>Project information:</strong> project type, location, timelines, and other details you choose
            to share when requesting a quote or consultation.
          </li>
          <li>
            <strong>Communications preferences:</strong> whether you opt in to SMS or WhatsApp messages, and records
            of correspondence with our team.
          </li>
          <li>
            <strong>Technical information:</strong> browser type, device information, IP address, and general usage
            data collected through standard website technologies (such as cookies or similar tools) to operate and
            improve the site.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'How we use your information',
    content: (
      <>
        <p>We use the information we collect to:</p>
        <ul className="list-disc pl-6 space-y-2 marker:text-primary">
          <li>Respond to inquiries, provide estimates, and deliver construction services you request</li>
          <li>Schedule consultations, site visits, and project updates</li>
          <li>Send service-related communications by email, phone, SMS, or WhatsApp when you have consented</li>
          <li>Improve our website, services, and customer experience</li>
          <li>Comply with legal obligations and protect our rights, safety, and property</li>
        </ul>
      </>
    ),
  },
  {
    title: 'SMS and phone communications',
    content: (
      <>
        <p>
          If you provide a phone number and opt in (including via our contact form), we may use your number to
          contact you by voice call, SMS text message, or WhatsApp regarding your project, account, scheduling,
          and service notifications.
        </p>
        <p className="border-l-4 border-primary pl-4 bg-primary/5 py-3 text-foreground">
          By providing your phone number, you consent to receive SMS communications related to your account,
          scheduling updates, and service notifications. Message frequency varies. Message and data rates may
          apply.
        </p>
        <p>
          You may opt out of SMS messages at any time by replying <strong>STOP</strong>. For help, reply{' '}
          <strong>HELP</strong> or contact us using the information below. Opting out of SMS does not affect
          other communications you have authorized (such as email or phone calls about an active project), and
          your consent to SMS is not a condition of purchasing our services unless required for a specific
          service you request.
        </p>
      </>
    ),
  },
  {
    title: 'Sharing with third parties',
    content: (
      <>
        <p>
          We do not sell your personal information. We may share information only in these circumstances:
        </p>
        <ul className="list-disc pl-6 space-y-2 marker:text-primary">
          <li>
            <strong>Service providers:</strong> trusted vendors who help us operate our website, process contact
            form submissions (such as email delivery services), host our site, or support business operations —
            only as needed to perform those services and subject to appropriate confidentiality obligations.
          </li>
          <li>
            <strong>Legal requirements:</strong> when required by law, court order, or government request, or to
            protect the rights, property, or safety of Fast Build, our clients, or others.
          </li>
          <li>
            <strong>Business transfers:</strong> in connection with a merger, acquisition, or sale of assets, with
            notice where required by law.
          </li>
        </ul>
        <p>
          Third-party services linked from our website (for example, mapping or analytics tools) have their own
          privacy practices. We encourage you to review their policies.
        </p>
      </>
    ),
  },
  {
    title: 'Data retention and security',
    content: (
      <p>
        We retain personal information only as long as needed to fulfill the purposes described in this policy,
        meet legal requirements, or resolve disputes. We use reasonable administrative, technical, and physical
        safeguards to protect your information; however, no method of transmission over the Internet is 100%
        secure.
      </p>
    ),
  },
  {
    title: 'Your choices and rights',
    content: (
      <>
        <p>You may:</p>
        <ul className="list-disc pl-6 space-y-2 marker:text-primary">
          <li>Request access to, correction of, or deletion of personal information we hold about you</li>
          <li>Withdraw SMS consent by replying STOP or contacting us directly</li>
          <li>Opt out of marketing emails by using unsubscribe instructions or contacting us</li>
        </ul>
        <p>
          Residents of certain states may have additional privacy rights under applicable law. To exercise your
          rights, contact us using the details below.
        </p>
      </>
    ),
  },
  {
    title: "Children's privacy",
    content: (
      <p>
        Our website and services are not directed to individuals under 18. We do not knowingly collect personal
        information from children. If you believe we have collected information from a child, please contact us so
        we can delete it.
      </p>
    ),
  },
  {
    title: 'Changes to this policy',
    content: (
      <p>
        We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date at the top of this
        page will reflect the latest version. Continued use of our website after changes constitutes acceptance of
        the updated policy.
      </p>
    ),
  },
  {
    title: 'Contact us',
    content: (
      <>
        <p>For privacy questions or requests regarding your information:</p>
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

export default function PrivacyPolicy() {
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
            Privacy Policy
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
            <Link to="/terms-of-service" className="text-primary hover:underline">
              Terms of Service
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
