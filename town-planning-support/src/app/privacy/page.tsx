import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Town Planning Support Ltd.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="pt-32 pb-8 md:pt-40 md:pb-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-slate-600">Last updated: February 2026</p>
          </div>
        </div>
      </section>

      <Section className="py-12">
        <div className="max-w-3xl mx-auto prose-custom">
          <h2>Introduction</h2>
          <p>
            Town Planning Support Ltd (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to
            protecting your privacy. This Privacy Policy explains how we collect,
            use, and safeguard your personal information when you use our services
            or visit our website.
          </p>

          <h2>Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li>
              <strong>Contact Information:</strong> Name, email address, phone
              number, and postal address when you enquire about our services.
            </li>
            <li>
              <strong>Project Information:</strong> Details about your planning
              project, site location, and development proposals.
            </li>
            <li>
              <strong>Communication Records:</strong> Records of correspondence
              between us and you.
            </li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use your personal information to:</p>
          <ul>
            <li>Respond to your enquiries and provide our planning services</li>
            <li>Prepare and submit planning applications on your behalf</li>
            <li>Communicate with you about your project</li>
            <li>Comply with legal and regulatory requirements</li>
          </ul>

          <h2>Data Sharing</h2>
          <p>
            We may share your information with Local Planning Authorities and other
            relevant bodies as necessary to provide our services. We do not sell or
            rent your personal information to third parties for marketing purposes.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organisational measures to
            protect your personal information against unauthorised access, loss, or
            misuse.
          </p>

          <h2>Your Rights</h2>
          <p>Under UK data protection law, you have rights including:</p>
          <ul>
            <li>The right to access your personal information</li>
            <li>The right to rectification of inaccurate information</li>
            <li>The right to erasure in certain circumstances</li>
            <li>The right to restrict processing</li>
            <li>The right to data portability</li>
          </ul>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our data
            practices, please contact us at:{" "}
            <a href={`mailto:${COMPANY.email}`} className="text-navy-700 underline">
              {COMPANY.email}
            </a>
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be
            posted on this page with an updated revision date.
          </p>
        </div>
      </Section>
    </>
  );
}
