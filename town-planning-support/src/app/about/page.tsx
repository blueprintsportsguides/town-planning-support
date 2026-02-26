import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TEAM, WHY_CHOOSE_US } from "@/lib/constants";
import { Icon } from "@/components/ui/icon";
import {
  Briefcase,
  Building,
  Phone,
  Mail,
  Award,
  MapPin,
} from "lucide-react";
import { CTA } from "@/components/sections/cta";
import { JsonLd } from "@/components/seo/json-ld";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Meet Rob & Tony - Chartered Planning Consultants",
  description:
    "Meet Rob McLennan and Tony Franklin, MRTPI qualified Chartered Town Planning Consultants with over 35 years of combined experience in Southern England.",
  openGraph: {
    title: "About Us | Town Planning Support",
    description:
      "Meet Rob and Tony, MRTPI qualified Chartered Town Planning Consultants.",
  },
};

const timeline = [
  {
    year: "1980s",
    title: "University Days",
    description:
      "Rob and Tony meet at Nottingham Trent University while studying for their BA (Hons) degrees in Town & Country Planning.",
  },
  {
    year: "1990s",
    title: "Building Expertise",
    description:
      "Both gain extensive experience working in private consultancy with architects and developers, developing deep knowledge of planning applications.",
  },
  {
    year: "2000s",
    title: "Local Government Experience",
    description:
      "Senior development control management positions within Local Planning Authorities provide invaluable insight into how planning decisions are made.",
  },
  {
    year: "Present",
    title: "Town Planning Support",
    description:
      "Combining decades of public and private sector experience to provide expert planning consultancy services across Southern England.",
  },
];

const expertise = [
  "Residential developments",
  "Commercial & retail schemes",
  "Change of use applications",
  "Listed building consents",
  "Conservation area works",
  "Agricultural developments",
  "Householder extensions",
  "New build developments",
];

export default function AboutPage() {
  return (
    <>
      <JsonLd type="organization" />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-navy-700 mb-3">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6">
              Two Experts, Decades of Experience
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Since the 1980s, Rob and Tony have dedicated their careers to town
              planning. Their friendship, forged at university, has evolved into a
              professional partnership built on shared values and complementary
              expertise.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-10">
          {TEAM.map((member) => (
            <Card key={member.name} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-navy-700 p-8 text-white">
                  <div className="flex items-center gap-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="w-24 h-24 rounded-full object-cover border-4 border-white/20"
                    />
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-1">
                        {member.name}
                      </h2>
                      <p className="text-white/70 mb-2">{member.role}</p>
                      <div className="flex items-center gap-2 text-white/80">
                        <Award className="w-4 h-4" />
                        <span>{member.qualifications}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {member.bio}
                  </p>
                  <div className="space-y-3">
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
                      <span className="font-medium break-all">{member.email}</span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Our Journey
          </h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-navy-200 md:-translate-x-1/2" />
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-start gap-6 md:gap-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="hidden md:block flex-1" />
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2 bg-navy-700 rounded-full flex items-center justify-center z-10">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>
                  <div className="flex-1 ml-12 md:ml-0 bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                    <span className="inline-block px-3 py-1 bg-navy-100 rounded-full text-sm font-semibold text-navy-700 mb-3">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Areas of Expertise
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Over the years, we have gained experience across a wide range of
              development types and planning matters. Our work spans the full
              spectrum of planning applications, from small householder extensions
              to larger residential and commercial schemes.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {expertise.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-slate-700"
                >
                  <div className="w-2 h-2 rounded-full bg-navy-700" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <Image
                src="/rtpi.webp"
                alt="Royal Town Planning Institute"
                width={40}
                height={40}
                className="w-10 h-10 mb-4"
              />
              <div className="text-3xl font-bold text-slate-900 mb-1">MRTPI</div>
              <div className="text-sm text-slate-600">Qualified Consultants</div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <Briefcase className="w-10 h-10 text-navy-700 mb-4" />
              <div className="text-3xl font-bold text-slate-900 mb-1">35+</div>
              <div className="text-sm text-slate-600">Years Each</div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <Building className="w-10 h-10 text-navy-700 mb-4" />
              <div className="text-3xl font-bold text-slate-900 mb-1">20+</div>
              <div className="text-sm text-slate-600">Local Authorities</div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <MapPin className="w-10 h-10 text-navy-700 mb-4" />
              <div className="text-3xl font-bold text-slate-900 mb-1">South</div>
              <div className="text-sm text-slate-600">England Based</div>
            </div>
          </div>
        </div>
      </Section>

      <Section background="gradient">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our Professional Network
          </h2>
          <p className="text-lg text-white/80 leading-relaxed mb-8">
            Over the years, we have built strong relationships with professionals
            across related disciplines. When your project requires additional
            expertise, we can connect you with trusted specialists in architecture,
            arboriculture, ecology, heritage, and more.
          </p>
          <Button
            href="/contact"
            variant="outline"
            size="lg"
            className="border-white/30 text-white hover:bg-white hover:text-navy-700"
          >
            Work With Us
          </Button>
        </div>
      </Section>

      <CTA />
    </>
  );
}
