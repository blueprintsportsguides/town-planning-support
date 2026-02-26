import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/constants";
import {
  ArrowRight,
  Check,
  Search,
  FileText,
  MapPin,
  Scale,
  Building2,
  ClipboardList,
} from "lucide-react";
import { CTA } from "@/components/sections/cta";
import { JsonLd } from "@/components/seo/json-ld";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Planning Appraisals | Site Assessment & Policy Review",
  description:
    "Expert planning appraisals assessing your site's development potential. We review policies, constraints, and opportunities to maximise your chances of success.",
  openGraph: {
    title: "Planning Appraisals | Town Planning Support",
    description:
      "Expert planning appraisals assessing your site's development potential.",
  },
};

const service = SERVICES.find((s) => s.id === "appraisals")!;

const whatWeAssess = [
  {
    title: "Local & National Policy",
    description:
      "Comprehensive review of relevant development plan policies and national planning guidance.",
    icon: FileText,
  },
  {
    title: "Site Constraints",
    description:
      "Assessment of physical, environmental, and planning constraints affecting your site.",
    icon: MapPin,
  },
  {
    title: "Development Potential",
    description:
      "Analysis of what type and scale of development your site could realistically accommodate.",
    icon: Building2,
  },
  {
    title: "Material Considerations",
    description:
      "Evaluation of all factors that could influence a planning decision on your proposal.",
    icon: Scale,
  },
  {
    title: "Supporting Requirements",
    description:
      "Outline of additional surveys, assessments, or professional input that may be needed.",
    icon: ClipboardList,
  },
  {
    title: "Likelihood of Success",
    description:
      "Clear indication of the prospects for securing planning permission.",
    icon: Search,
  },
];

export default function AppraisalsPage() {
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
            <span className="text-slate-800">Appraisals</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-navy-700 flex items-center justify-center mb-6 shadow-lg shadow-navy-700/25">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
                Planning Appraisals
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                {service.longDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" size="lg" className="group">
                  Request an Appraisal
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
            What We Assess
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We provide a thorough, professional assessment of your proposed
            development against all relevant planning considerations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whatWeAssess.map((item) => (
            <Card key={item.title} className="bg-slate-50 border-slate-200">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4 shadow-sm border border-slate-200">
                  <item.icon className="w-6 h-6 text-navy-700" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="muted">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
            Who Benefits from a Planning Appraisal?
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {service.idealFor.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-white rounded-xl p-4 border border-slate-200"
              >
                <div className="w-8 h-8 rounded-full bg-navy-100 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-navy-700" />
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
