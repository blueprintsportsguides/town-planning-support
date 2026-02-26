import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { FAQS, SERVICES } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import { FAQAccordion } from "@/components/faq/faq-accordion";
import { CTA } from "@/components/sections/cta";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Planning Advice & Guidance",
  description:
    "Get answers to common questions about town planning applications, appraisals, and appeals. Expert guidance from MRTPI qualified consultants.",
  openGraph: {
    title: "FAQ | Town Planning Support",
    description:
      "Answers to common questions about town planning applications, appraisals, and appeals.",
  },
};

const additionalFAQs = [
  {
    question: "What is the difference between outline and full planning permission?",
    answer:
      "Outline planning permission establishes whether a development is acceptable in principle, without finalising all details. It's often used for larger sites where the developer wants to test the water before committing to detailed designs. Full planning permission provides consent for a specific, detailed development proposal. Reserved matters (such as appearance, landscaping, layout, scale, and access) can be submitted later following outline approval.",
  },
  {
    question: "Do I need planning permission for a home extension?",
    answer:
      "It depends on the size, type, and location of your extension. Many small extensions fall under 'permitted development rights' and don't require planning permission. However, if you live in a Conservation Area, a Listed Building, or your permitted development rights have been removed, you may need to apply. We can advise whether your specific proposal requires permission.",
  },
  {
    question: "How long is planning permission valid for?",
    answer:
      "Standard planning permissions are typically valid for three years from the date of approval. This means you must commence development within three years, or the permission expires. Outline permissions usually require reserved matters to be submitted within three years, and work to begin within two years of the reserved matters approval. Some permissions may have different time limits specified in the conditions.",
  },
  {
    question: "What are planning conditions and can they be changed?",
    answer:
      "Planning conditions are requirements attached to a planning permission that must be satisfied. They may require certain works to be completed before occupation, materials to be approved, or landscaping to be implemented. Conditions can be varied or removed through a Section 73 application, which we can prepare and submit on your behalf.",
  },
  {
    question: "What is a Certificate of Lawfulness?",
    answer:
      "A Certificate of Lawfulness confirms that an existing use, development, or proposed development is lawful for planning purposes. This might be because it has planning permission, falls within permitted development rights, or has been in place long enough to become immune from enforcement action. It provides certainty and can be useful when selling a property.",
  },
];

const allFAQs = [...FAQS, ...additionalFAQs];

export default function FAQPage() {
  return (
    <>
      <JsonLd type="faq" />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-navy-700 mb-3">
              FAQ
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Find answers to common questions about the planning process,
              applications, and appeals. Can&apos;t find what you&apos;re looking
              for? Get in touch and we&apos;ll be happy to help.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="max-w-3xl mx-auto">
          <FAQAccordion faqs={allFAQs} />
        </div>
      </Section>

      <Section background="muted">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Still Have Questions?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Every planning situation is unique. If you couldn&apos;t find the
            answer you were looking for, or if you&apos;d like to discuss your
            specific project, we&apos;re here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" className="group">
              Contact Us
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button href="/services" variant="outline">
              View Our Services
            </Button>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
            Explore Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <a
                key={service.id}
                href={service.href}
                className="group bg-white rounded-xl p-6 border border-slate-200 hover:border-navy-300 hover:shadow-lg transition-all"
              >
                <h3 className="font-semibold text-slate-800 mb-2 group-hover:text-navy-700">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  {service.description}
                </p>
                <span className="text-sm font-medium text-navy-700 flex items-center gap-1">
                  Learn more
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </Section>

      <CTA />
    </>
  );
}
