import { COMPANY, TEAM, SERVICES, FAQS } from "@/lib/constants";

interface JsonLdProps {
  type: "organization" | "service" | "faq" | "localBusiness" | "breadcrumb";
  data?: Record<string, unknown>;
}

export function JsonLd({ type, data }: JsonLdProps) {
  let jsonLd: Record<string, unknown> = {};

  switch (type) {
    case "organization":
      jsonLd = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: COMPANY.name,
        description: COMPANY.description,
        url: "https://www.townplanningsupport.co.uk",
        telephone: COMPANY.phone,
        email: COMPANY.email,
        areaServed: {
          "@type": "Place",
          name: "Southern England, United Kingdom",
        },
        serviceType: [
          "Town Planning Consultancy",
          "Planning Applications",
          "Planning Appeals",
          "Planning Appraisals",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Planning Services",
          itemListElement: SERVICES.map((service, index) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.description,
            },
            position: index + 1,
          })),
        },
        employee: TEAM.map((member) => ({
          "@type": "Person",
          name: member.name,
          jobTitle: member.role,
          telephone: member.phone,
          email: member.email,
          hasCredential: {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "Professional Certification",
            name: member.qualifications,
          },
        })),
        sameAs: [],
        priceRange: "$$",
      };
      break;

    case "localBusiness":
      jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: COMPANY.name,
        description: COMPANY.description,
        url: "https://www.townplanningsupport.co.uk",
        telephone: COMPANY.phone,
        address: {
          "@type": "PostalAddress",
          addressRegion: "Southern England",
          addressCountry: "GB",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "51.0",
          longitude: "-1.0",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "17:30",
        },
      };
      break;

    case "service":
      if (data) {
        jsonLd = {
          "@context": "https://schema.org",
          "@type": "Service",
          ...data,
          provider: {
            "@type": "ProfessionalService",
            name: COMPANY.name,
            url: "https://www.townplanningsupport.co.uk",
          },
        };
      }
      break;

    case "faq":
      jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      };
      break;

    case "breadcrumb":
      if (data?.items) {
        jsonLd = {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: (data.items as Array<{ name: string; url: string }>).map(
            (item, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: item.name,
              item: item.url,
            })
          ),
        };
      }
      break;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
