import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { SERVICES, WHY_CHOOSE_US } from "@/lib/constants";
import { ArrowRight, Check } from "lucide-react";
import { CTA } from "@/components/sections/cta";
import { JsonLd } from "@/components/seo/json-ld";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Planning Services | Appraisals, Applications & Appeals",
  description:
    "Comprehensive town planning services including site appraisals, planning applications, and appeals. Expert guidance from MRTPI qualified consultants.",
  openGraph: {
    title: "Planning Services | Town Planning Support",
    description:
      "Comprehensive town planning services including site appraisals, planning applications, and appeals.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd type="organization" />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-navy-700 mb-3">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6">
              Planning Expertise at Every Stage
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              From initial site appraisals to navigating appeals, we provide
              comprehensive support throughout the planning process.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="space-y-16 lg:space-y-24">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="w-16 h-16 rounded-2xl bg-navy-700 flex items-center justify-center mb-6 shadow-lg shadow-navy-700/25">
                  <Icon name={service.icon} className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  {service.longDescription}
                </p>
                <Button href={service.href} className="group">
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <Card className="bg-slate-50 border-slate-200">
                  <CardHeader>
                    <CardTitle as="h3" className="text-lg">
                      What&apos;s Included
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
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
                  <div className="mt-6 pt-4 border-t border-slate-200">
                    <h4 className="text-sm font-semibold text-slate-800 mb-3">
                      Ideal For
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.idealFor.map((item) => (
                        <span
                          key={item}
                          className="inline-block px-3 py-1 bg-white rounded-full text-sm text-slate-600 border border-slate-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section background="muted">
        <SectionHeader
          label="Why Choose Us"
          title="The Town Planning Support Difference"
          centered
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl p-6 border border-slate-200"
            >
              <div className="w-12 h-12 rounded-xl bg-navy-700 flex items-center justify-center mb-4">
                <Icon name={item.icon} className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
