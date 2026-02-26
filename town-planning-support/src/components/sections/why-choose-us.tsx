"use client";

import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Icon } from "@/components/ui/icon";
import { WHY_CHOOSE_US } from "@/lib/constants";
import { motion } from "framer-motion";

export function WhyChooseUs() {
  return (
    <Section>
      <SectionHeader
        label="Why Choose Us"
        title="Planning Expertise That Delivers"
        description="With decades of experience in both public and private sectors, we bring unmatched insight to every project."
        centered
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {WHY_CHOOSE_US.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-navy-700 flex items-center justify-center shadow-lg shadow-navy-700/25 group-hover:scale-105 transition-transform">
                  <Icon name={item.icon} className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
