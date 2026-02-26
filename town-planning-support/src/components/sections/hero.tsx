"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const highlights = [
  "MRTPI Chartered Consultants",
  "35+ Years Experience",
  "Southern England Coverage",
];

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-navy-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-navy-50 rounded-full blur-3xl opacity-80" />
      </div>

      <Container className="relative z-10 py-32 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="flex flex-wrap gap-3 mb-6">
            {highlights.map((highlight, index) => (
              <motion.span
                key={highlight}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-navy-50 rounded-full text-sm font-medium text-navy-700 border border-navy-200"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-navy-700" />
                {highlight}
              </motion.span>
            ))}
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight mb-6"
          >
            Expert Planning
            <span className="block text-navy-700">Guidance You Can Trust</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl"
          >
            Navigating the UK planning system can be complex. We provide clear,
            expert guidance on appraisals, applications, and appeals to help you
            achieve successful outcomes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <Button href="/contact" size="lg" className="group">
              Discuss Your Project
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button href="/services" variant="outline" size="lg">
              Explore Our Services
            </Button>
            <div className="flex items-center gap-2 sm:ml-2">
              <Image
                src="/rtpi.webp"
                alt="Royal Town Planning Institute"
                width={36}
                height={36}
                className="w-9 h-auto object-contain"
              />
              <span className="text-xs text-slate-500">MRTPI<br />Qualified</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 pt-8 border-t border-slate-200"
          >
            <p className="text-sm text-slate-500 mb-3">Trusted by</p>
            <div className="flex flex-wrap gap-6 text-slate-600">
              <span className="text-sm font-medium">Architects</span>
              <span className="text-slate-300">|</span>
              <span className="text-sm font-medium">Developers</span>
              <span className="text-slate-300">|</span>
              <span className="text-sm font-medium">Private Clients</span>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
