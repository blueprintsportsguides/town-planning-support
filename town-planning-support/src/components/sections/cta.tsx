"use client";

import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { TEAM } from "@/lib/constants";
import { Phone, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function CTA() {
  return (
    <Section background="muted">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-6">
          Ready to Discuss Your Project?
        </h2>
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto">
          Whether you&apos;re exploring development options, preparing an application,
          or facing a refusal, we&apos;re here to help. Get in touch for a no-obligation
          conversation about your planning needs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button href="/contact" size="lg" className="group">
            Get in Touch
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            href={`tel:${TEAM[0].phone.replace(/\s/g, "")}`}
            variant="outline"
            size="lg"
          >
            <Phone className="w-4 h-4" />
            Call Us Now
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {TEAM.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-200"
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={56}
                  height={56}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div className="text-left">
                  <h3 className="font-semibold text-slate-800">{member.name}</h3>
                  <p className="text-sm text-slate-500">{member.qualifications}</p>
                </div>
              </div>
              <div className="space-y-2">
                <a
                  href={`tel:${member.phone.replace(/\s/g, "")}`}
                  className="flex items-center justify-center gap-2 text-sm text-slate-600 hover:text-navy-700 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {member.phone}
                </a>
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center justify-center gap-2 text-sm text-slate-600 hover:text-navy-700 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="truncate">{member.email}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
