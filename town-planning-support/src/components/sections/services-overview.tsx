"use client";

import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { SERVICES } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function ServicesOverview() {
  return (
    <Section background="muted">
      <SectionHeader
        label="Our Services"
        title="Comprehensive Planning Support"
        description="From initial site appraisals through to appeals, we provide expert guidance at every stage of the planning process."
        centered
      />

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-navy-700 flex items-center justify-center mb-4">
                  <Icon name={service.icon} className="w-7 h-7 text-white" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <CardDescription className="mb-6">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.slice(0, 3).map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <Icon
                        name="Check"
                        className="w-4 h-4 text-navy-700 mt-0.5 flex-shrink-0"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <div className="mt-6 pt-4 border-t border-slate-200">
                <Button
                  href={service.href}
                  variant="ghost"
                  className="w-full justify-between group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button href="/services" variant="outline" size="lg">
          View All Services
        </Button>
      </div>
    </Section>
  );
}
