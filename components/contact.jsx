"use client";

import { useRef, useState } from "react";
import { useInView } from "../hooks/use-in-view";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Office",
    value: "Victoria Heights, Service Rd E, Islamabad, Pakistan",
  },
  {
    icon: Mail,
    label: "Email",
    value: "aqtcpk@gmail.com",
    href: "mailto:aqtcpk@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 321 5118939",
    href: "tel:+923215118939",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.1, once: true });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 text-white"
            style={{ background: "#0e98cd" }}
          >
            Contact Us
          </span>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-4 text-balance">
            Get Your Free{" "}
            <span className="brand-gradient-text">Consultation</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Reach out today. Our team responds within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Contact info */}
          <div
            className={`lg:col-span-2 flex flex-col gap-6 transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div
              className="rounded-3xl p-8 text-white"
              style={{
                background: "linear-gradient(135deg, #066787, #0e98cd)",
              }}
            >
              <h3 className="font-heading font-bold text-2xl mb-2">
                Talk to Our Experts
              </h3>
              <p className="text-white/70 text-sm mb-8">
                We are available Mon–Sat, 9 AM – 7 PM PKT.
              </p>

              <div className="flex flex-col gap-5">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-white/60 text-xs mb-0.5">
                        {label}
                      </div>
                      {href ? (
                        <a
                          href={href}
                          className="text-white font-medium text-sm hover:text-white/80 transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <span className="text-white font-medium text-sm">
                          {value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/923215118939?text=Hello%20Sir%2C%20I%20need%20tax%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-xl shadow-lg"
              style={{ background: "#25D366" }}
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
          </div>

          {/* Form */}
          <div
            className={`lg:col-span-3 transition-all duration-700  ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11726320.4300147!2d68.16429834514129!3d28.802897983430096!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfeacfe1e5a8dd%3A0x6419f6f1ade3b078!2sVictoria%20Heights!5e0!3m2!1sen!2s!4v1774903187197!5m2!1sen!2s"
              width="100%"
              height={420} // style="border:0;"
              loading="lazy"
              // referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
