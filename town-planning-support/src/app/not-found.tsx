import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <Section className="min-h-[70vh] flex items-center">
      <div className="max-w-xl mx-auto text-center">
        <div className="text-8xl font-bold text-slate-200 mb-4">404</div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-slate-600 mb-8">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been
          moved. Let us help you find your way.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" className="group">
            <Home className="w-4 h-4" />
            Back to Home
          </Button>
          <Button href="/contact" variant="outline">
            Contact Us
          </Button>
        </div>
      </div>
    </Section>
  );
}
