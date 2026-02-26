import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { TEAM, COMPANY, SERVICES } from "@/lib/constants";
import { Phone, Mail, MapPin, Clock, Building2 } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
import { JsonLd } from "@/components/seo/json-ld";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact Us | Get Expert Planning Advice",
  description:
    "Contact Town Planning Support for expert planning advice. Speak directly with us about your planning appraisal, application, or appeal.",
  openGraph: {
    title: "Contact Us | Town Planning Support",
    description:
      "Get in touch for expert planning advice.",
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd type="localBusiness" />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-navy-700 mb-3">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6">
              Let&apos;s Discuss Your Project
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Whether you&apos;re exploring development options, preparing an
              application, or facing a refusal, we&apos;re here to help. Get in
              touch for a no-obligation conversation about your planning needs.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          <div className="lg:col-span-3">
            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Send Us a Message
                </h2>
                <ContactForm />
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">
                  Speak to Us Directly
                </h3>
                <div className="space-y-6">
                  {TEAM.map((member) => (
                    <div key={member.name} className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={48}
                          height={48}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-medium text-slate-800">{member.name}</p>
                          <p className="text-sm text-slate-500">
                            {member.qualifications}
                          </p>
                        </div>
                      </div>
                      <a
                        href={`tel:${member.phone.replace(/\s/g, "")}`}
                        className="flex items-center gap-3 text-slate-700 hover:text-navy-700 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-lg bg-navy-100 flex items-center justify-center">
                          <Phone className="w-5 h-5 text-navy-700" />
                        </div>
                        <span className="font-medium">{member.phone}</span>
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-3 text-slate-700 hover:text-navy-700 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-lg bg-navy-100 flex items-center justify-center">
                          <Mail className="w-5 h-5 text-navy-700" />
                        </div>
                        <span className="font-medium text-sm">{member.email}</span>
                      </a>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">
                  Location & Hours
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-navy-100 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-navy-700" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">
                        Based in Southern England
                      </p>
                      <p className="text-sm text-slate-600">
                        Serving clients across the region
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-navy-100 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-navy-700" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">
                        Monday - Friday
                      </p>
                      <p className="text-sm text-slate-600">9:00 AM - 5:30 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-navy-100 flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-5 h-5 text-navy-700" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">
                        Town Planning Support Ltd
                      </p>
                      <p className="text-sm text-slate-600">
                        Company No: {COMPANY.registeredCompany}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-navy-700 text-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">
                  What to Expect
                </h3>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-white/50 mt-1">•</span>
                    Quick response, usually within 24 hours
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white/50 mt-1">•</span>
                    Free initial consultation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white/50 mt-1">•</span>
                    Clear fee proposal before work begins
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white/50 mt-1">•</span>
                    Honest advice on your project&apos;s prospects
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      <Section background="muted">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            How Can We Help?
          </h2>
          <p className="text-lg text-slate-600 mb-10">
            We offer a range of planning services to suit your needs.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {SERVICES.map((service) => (
              <a
                key={service.id}
                href={service.href}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-navy-300 hover:shadow-md transition-all text-center group"
              >
                <h3 className="font-semibold text-slate-800 group-hover:text-navy-700">
                  {service.shortTitle}
                </h3>
                <p className="text-sm text-slate-600 mt-1">Learn more →</p>
              </a>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
