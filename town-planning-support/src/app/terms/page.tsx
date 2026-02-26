import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Town Planning Support Ltd.",
};

export default function TermsPage() {
  return (
    <>
      <section className="pt-32 pb-8 md:pt-40 md:pb-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
              Terms of Service
            </h1>
            <p className="text-slate-600">Last updated: February 2026</p>
          </div>
        </div>
      </section>

      <Section className="py-12">
        <div className="max-w-3xl mx-auto prose-custom">
          <h2>Agreement to Terms</h2>
          <p>
            By engaging Town Planning Support Ltd (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) to
            provide planning consultancy services, you agree to be bound by these
            Terms of Service.
          </p>

          <h2>Our Services</h2>
          <p>
            We provide professional town planning consultancy services including
            planning appraisals, preparation and submission of planning
            applications, and planning appeals support. The specific scope of work
            will be agreed in writing before we commence any paid work.
          </p>

          <h2>Professional Standards</h2>
          <p>
            We are Members of the Royal Town Planning Institute (MRTPI) and are
            bound by the RTPI Code of Professional Conduct. We maintain professional
            indemnity insurance appropriate to the services we provide.
          </p>

          <h2>Fees and Payment</h2>
          <p>
            Our fees will be agreed in writing before work commences. Unless
            otherwise agreed, fees are payable within 30 days of invoice. We reserve
            the right to suspend work if invoices remain unpaid.
          </p>

          <h2>Client Responsibilities</h2>
          <p>You agree to:</p>
          <ul>
            <li>
              Provide accurate and complete information about your site and project
            </li>
            <li>Respond promptly to requests for information or decisions</li>
            <li>Pay our fees in accordance with agreed terms</li>
            <li>
              Inform us of any changes to your project that may affect our work
            </li>
          </ul>

          <h2>Limitations</h2>
          <p>
            While we provide expert advice and professional support, we cannot
            guarantee the outcome of any planning application or appeal. Planning
            decisions are made by Local Planning Authorities and the Planning
            Inspectorate based on planning policy and material considerations.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            Copyright in documents we prepare remains with us until full payment is
            received, at which point it transfers to you for the purposes of the
            project.
          </p>

          <h2>Confidentiality</h2>
          <p>
            We treat all client information as confidential and will not disclose it
            to third parties without your consent, except where required by law or
            necessary to provide our services.
          </p>

          <h2>Termination</h2>
          <p>
            Either party may terminate our engagement by giving written notice. You
            will be liable for fees for work completed up to the date of
            termination.
          </p>

          <h2>Governing Law</h2>
          <p>
            These terms are governed by English law and any disputes will be subject
            to the exclusive jurisdiction of the English courts.
          </p>

          <h2>Contact</h2>
          <p>
            If you have any questions about these Terms of Service, please contact
            us at:{" "}
            <a href={`mailto:${COMPANY.email}`} className="text-navy-700 underline">
              {COMPANY.email}
            </a>
          </p>
        </div>
      </Section>
    </>
  );
}
