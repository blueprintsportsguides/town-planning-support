"use client";

import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  "Add 'Chartered Town Planning Consultancy' to your client services",
  "Professional planning input for your applications",
  "Expert preparation of supporting statements",
  "Let architects design while we handle planning",
  "One-stop shop with public and private sector experience",
  "Competitive rates for ongoing partnerships",
];

export function ForProfessionals() {
  return (
    <Section background="muted">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-navy-700 mb-3">
            For Professional Clients
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6">
            Extend Your Services with Expert Planning Support
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            We work alongside architects, designers, and developers to provide
            professional planning consultancy support. Whether you need help with a
            single project or ongoing partnership, we integrate seamlessly with your
            team to deliver results for your clients.
          </p>
          <Button href="/contact" className="group">
            Partner With Us
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200"
        >
          <h3 className="text-xl font-semibold text-slate-800 mb-6">
            Benefits for Architects & Developers
          </h3>
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <motion.li
                key={benefit}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-navy-700 flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-slate-600">{benefit}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}
