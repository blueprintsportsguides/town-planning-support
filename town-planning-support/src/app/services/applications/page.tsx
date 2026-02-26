import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/constants";
import {
  ArrowRight,
  Check,
  FileCheck,
  FileText,
  Send,
  MessageSquare,
  Clock,
  Shield,
} from "lucide-react";
import { CTA } from "@/components/sections/cta";
import { JsonLd } from "@/components/seo/json-ld";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Planning Applications | Submission & Management Service",
  description:
    "Expert preparation and submission of planning applications under the Town and Country Planning Act. Full application management ensuring maximum approval chances.",
  openGraph: {
    title: "Planning Applications | Town Planning Support",
    description:
      "Expert preparation and submission of planning applications.",
  },
};

const service = SERVICES.find((s) => s.id === "applications")!;

const applicationTypes = [
  "Full Planning Permission",
  "Outline Planning Permission",
  "Reserved Matters",
  "Householder Applications",
  "Listed Building Consent",
  "Conservation Area Consent",
  "Certificate of Lawfulness",
  "Prior Approval Applications",
  "Discharge of Conditions",
  "Non-Material Amendments",
  "Variation of Conditions (S73)",
  "Advertisement Consent",
];

const processSteps = [
  {
    title: "Initial Assessment",
    description: "We review your proposal and advise on the most appropriate application route.",
    icon: FileText,
  },
  {
    title: "Documentation",
    description: "Preparation of all required forms, statements, and supporting documents.",
    icon: FileCheck,
  },
  {
    title: "Submission",
    description: "Complete submission ensuring compliance with validation requirements.",
    icon: Send,
  },
  {
    title: "Case Management",
    description: "Active monitoring and liaison with the planning case officer.",
    icon: MessageSquare,
  },
  {
    title: "Progress Updates",
    description: "Regular communication keeping you informed throughout the process.",
    icon: Clock,
  },
  {
    title: "Quality Assurance",
    description: "Professional oversight at every stage to maximise approval chances.",
    icon: Shield,
  },
];

export default function ApplicationsPage() {
  return (
    <>
      <JsonLd
        type="service"
        data={{
          name: service.title,
          description: service.longDescription,
          url: `https://www.townplanningsupport.co.uk${service.href}`,
        }}
      />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-600 mb-6">
            <Link href="/" className="hover:text-navy-700 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-navy-700 transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-slate-800">Applications</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-navy-700 flex items-center justify-center mb-6 shadow-lg shadow-navy-700/25">
                <FileCheck className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
                Planning Applications
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                {service.longDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" size="lg" className="group">
                  Start Your Application
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button href="/services" variant="outline" size="lg">
                  View All Services
                </Button>
              </div>
            </div>
            <Card className="bg-white border-slate-200">
              <CardContent className="p-8">
                <h2 className="text-xl font-semibold text-slate-800 mb-6">
                  What&apos;s Included
                </h2>
                <ul className="space-y-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-navy-700 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Section>
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Application Process
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We handle every aspect of your planning application, from initial
            preparation through to determination.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, index) => (
            <Card key={step.title} className="bg-slate-50 border-slate-200 relative">
              <CardContent className="p-6">
                <span className="absolute top-4 right-4 text-4xl font-bold text-slate-200">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4 shadow-sm border border-slate-200">
                  <step.icon className="w-6 h-6 text-navy-700" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
            Application Types We Handle
          </h2>
          <p className="text-lg text-slate-600 text-center mb-10">
            We prepare and submit all types of applications under the Town and
            Country Planning Act 1990 (as amended).
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {applicationTypes.map((type) => (
              <div
                key={type}
                className="flex items-center gap-3 bg-white rounded-lg p-4 border border-slate-200"
              >
                <Check className="w-4 h-4 text-navy-700 flex-shrink-0" />
                <span className="text-slate-700 text-sm">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Who Benefits from Our Application Service?
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {service.idealFor.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-slate-50 rounded-xl p-4 border border-slate-200"
              >
                <div className="w-8 h-8 rounded-full bg-navy-700 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CTA />
    </>
  );
}
