import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/constants";
import {
  ArrowRight,
  Check,
  Scale,
  Search,
  FileText,
  Users,
  Clock,
  Target,
} from "lucide-react";
import { CTA } from "@/components/sections/cta";
import { JsonLd } from "@/components/seo/json-ld";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Planning Appeals | Expert Appeal Preparation & Representation",
  description:
    "Expert guidance on challenging refused planning applications. We assess your case, prepare robust appeal statements, and manage the entire appeal process.",
  openGraph: {
    title: "Planning Appeals | Town Planning Support",
    description:
      "Expert guidance on challenging refused planning applications.",
  },
};

const service = SERVICES.find((s) => s.id === "appeals")!;

const appealProcess = [
  {
    title: "Case Assessment",
    description:
      "We analyse the refusal reasons and assess the realistic chances of success on appeal.",
    icon: Search,
  },
  {
    title: "Strategy Development",
    description:
      "We develop the strongest approach, whether that's an appeal or an amended application.",
    icon: Target,
  },
  {
    title: "Statement Preparation",
    description:
      "Preparation of comprehensive appeal statements addressing each refusal reason.",
    icon: FileText,
  },
  {
    title: "Professional Coordination",
    description:
      "We coordinate inputs from architects, heritage consultants, ecologists, and other specialists.",
    icon: Users,
  },
  {
    title: "Appeal Management",
    description:
      "Full management of the appeal process, handling all correspondence with the Planning Inspectorate.",
    icon: Scale,
  },
  {
    title: "Progress Updates",
    description:
      "Regular communication keeping you informed from submission through to decision.",
    icon: Clock,
  },
];

const appealTypes = [
  {
    title: "Written Representations",
    description:
      "The most common route, where the case is determined on written submissions without a hearing.",
  },
  {
    title: "Hearing",
    description:
      "An informal discussion led by an Inspector, suitable for more complex cases requiring oral explanation.",
  },
  {
    title: "Public Inquiry",
    description:
      "A formal procedure for more complex or contentious appeals, with evidence given under oath.",
  },
];

export default function AppealsPage() {
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
            <span className="text-slate-800">Appeals</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-navy-700 flex items-center justify-center mb-6 shadow-lg shadow-navy-700/25">
                <Scale className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
                Planning Appeals
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                {service.longDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" size="lg" className="group">
                  Discuss Your Appeal
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
            Our Appeals Process
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            From initial assessment to final decision, we guide you through every
            step of the appeal process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {appealProcess.map((step, index) => (
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
            Types of Appeal
          </h2>
          <p className="text-lg text-slate-600 text-center mb-10">
            We advise on and handle all types of planning appeal to the Planning
            Inspectorate.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {appealTypes.map((type) => (
              <Card key={type.title} className="bg-white border-slate-200">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">
                    {type.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {type.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto">
          <div className="bg-navy-700 rounded-2xl p-8 md:p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Should You Appeal or Resubmit?
            </h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Not every refusal should be appealed. Sometimes, a revised application
              addressing the refusal reasons offers a better route to success. We
              provide honest advice on the most appropriate approach for your
              specific situation.
            </p>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white hover:text-navy-700"
            >
              Get Expert Advice
            </Button>
          </div>
        </div>
      </Section>

      <CTA />
    </>
  );
}
