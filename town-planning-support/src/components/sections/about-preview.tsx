"use client";

import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { TEAM } from "@/lib/constants";
import { Briefcase, Building, Users } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { label: "Years Combined Experience", value: "70+", icon: Briefcase },
  { label: "MRTPI Qualified", value: "2", icon: null, image: "/rtpi.webp" },
  { label: "Local Authorities Worked With", value: "20+", icon: Building },
  { label: "Satisfied Clients", value: "100s", icon: Users },
];

export function AboutPreview() {
  return (
    <Section background="gradient">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-white/70 mb-3">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
            Two Experts, One Goal: Your Planning Success
          </h2>
          <p className="text-lg text-white/80 leading-relaxed mb-6">
            Rob and Tony first met at Nottingham Trent University in the 1980s while
            studying Town & Country Planning. Since then, they&apos;ve built careers
            spanning private consultancy, architectural practices, development projects,
            and senior local government positions.
          </p>
          <div className="flex items-center gap-4 mb-8">
            {TEAM.map((member) => (
              <div key={member.name} className="flex items-center gap-3">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white/30"
                />
                <div>
                  <p className="font-medium text-white text-sm">{member.name.split(" ")[0]}</p>
                  <p className="text-white/60 text-xs">{member.qualifications}</p>
                </div>
              </div>
            ))}
          </div>
          <Button
            href="/about"
            variant="outline"
            size="lg"
            className="border-white/30 text-white hover:bg-white hover:text-navy-700"
          >
            Meet the Team
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 gap-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              {stat.icon ? (
                <stat.icon className="w-8 h-8 text-white/70 mb-3" />
              ) : stat.image ? (
                <Image
                  src={stat.image}
                  alt="RTPI"
                  width={32}
                  height={32}
                  className="w-8 h-8 mb-3"
                />
              ) : null}
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-white/70">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
