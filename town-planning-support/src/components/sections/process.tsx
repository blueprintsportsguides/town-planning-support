"use client";

import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { motion } from "framer-motion";
import { MessageSquare, Search, FileText, Send, Clock, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "We discuss your project, understand your goals, and assess how we can help. This initial conversation is free and without obligation.",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "Site & Policy Review",
    description:
      "We analyse your site, review relevant planning policies, constraints, and opportunities to provide a comprehensive appraisal.",
    icon: Search,
  },
  {
    number: "03",
    title: "Strategy & Documentation",
    description:
      "We develop the optimal approach and prepare all necessary supporting statements, ensuring your application presents the strongest case.",
    icon: FileText,
  },
  {
    number: "04",
    title: "Submission & Management",
    description:
      "We submit your application and actively manage it through determination, liaising with officers and addressing any queries.",
    icon: Send,
  },
  {
    number: "05",
    title: "Progress Updates",
    description:
      "You receive regular updates throughout, so you always know exactly where your application stands and what to expect next.",
    icon: Clock,
  },
  {
    number: "06",
    title: "Successful Outcome",
    description:
      "We work tirelessly to achieve approval. If needed, we can also advise on conditions or guide you through the appeals process.",
    icon: CheckCircle,
  },
];

export function Process() {
  return (
    <Section>
      <SectionHeader
        label="Our Process"
        title="How We Work With You"
        description="A clear, structured approach that keeps you informed and your project moving forward."
        centered
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 relative">
                <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-navy-700" />
                </div>
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-navy-700 text-white text-xs font-bold flex items-center justify-center">
                  {step.number.replace("0", "")}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
