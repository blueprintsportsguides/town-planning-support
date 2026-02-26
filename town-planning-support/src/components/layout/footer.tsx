import { Container } from "@/components/ui/container";
import { COMPANY, NAV_LINKS, SERVICES, TEAM } from "@/lib/constants";
import { MapPin, Phone, Mail, Building2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-700 text-white">
      <Container className="py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo.png"
                alt="Town Planning Support"
                width={180}
                height={60}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Chartered Town Planning Consultants providing expert advice on
              planning appraisals, applications, and appeals across Southern
              England.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/60 mb-4">
              <Building2 className="w-4 h-4 flex-shrink-0" />
              <span>Company No: {COMPANY.registeredCompany}</span>
            </div>
            <div className="bg-white rounded-lg p-2">
              <Image
                src="/rtpi.webp"
                alt="Royal Town Planning Institute - MRTPI Qualified"
                width={56}
                height={56}
                className="h-14 w-auto object-contain"
              />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-4">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/80 hover:text-white transition-colors py-1"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-4">
              Services
            </h3>
            <nav className="flex flex-col gap-2">
              {SERVICES.map((service) => (
                <Link
                  key={service.id}
                  href={service.href}
                  className="text-white/80 hover:text-white transition-colors py-1"
                >
                  {service.shortTitle}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-4">
              Contact Us
            </h3>
            <div className="space-y-4">
              {TEAM.map((member) => (
                <div key={member.name} className="space-y-1">
                  <p className="font-medium text-white text-sm">{member.name}</p>
                  <a
                    href={`tel:${member.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    {member.phone}
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm break-all"
                  >
                    <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="truncate">{member.email}</span>
                  </a>
                </div>
              ))}
              <div className="flex items-start gap-2 text-white/70 text-sm pt-2">
                <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                <span>Based in Southern England</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              &copy; {currentYear} Town Planning Support Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-white/60 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-white/60 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
