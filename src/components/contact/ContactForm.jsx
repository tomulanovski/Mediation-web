import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [formState, setFormState] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setFormState("submitting");

    const formData = new FormData(e.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setFormState("success");
        e.target.reset();
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  if (formState === "success") {
    return (
      <div className="bg-[#faf9f6] p-10 text-center">
        <CheckCircle className="w-16 h-16 text-[#8ab4d5] mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-3">
          Thank You!
        </h3>
        <p className="text-[#5a6a7a] font-sans mb-6">
          We've received your message and will respond within 24 hours.
        </p>
        <Button
          onClick={() => setFormState("idle")}
          className="bg-[#1a1a1a] hover:bg-[#333333] text-white font-sans"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-[#faf9f6] p-8 lg:p-10">
      <h2 className="text-2xl font-semibold text-[#1a1a1a] mb-2">
        Send Us a Message
      </h2>
      <p className="text-[#5a6a7a] mb-8 font-sans text-sm">
        Fill out the form below and we'll get back to you within 24 hours.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Honeypot */}
        <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="font-sans">Full Name *</Label>
            <Input
              id="name"
              name="name"
              required
              placeholder="Your full name"
              className="border-gray-200 bg-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="font-sans">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="your@email.com"
              className="border-gray-200 bg-white"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="phone" className="font-sans">Phone</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="(555) 000-0000"
              className="border-gray-200 bg-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject" className="font-sans">Subject *</Label>
            <select
              id="subject"
              name="subject"
              required
              className="flex h-9 w-full border border-gray-200 bg-white px-3 py-1 text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm font-sans"
            >
              <option value="">Select a subject</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Divorce Mediation">Divorce Mediation</option>
              <option value="Child Custody">Child Custody</option>
              <option value="Property Division">Property Division</option>
              <option value="Schedule Consultation">Schedule Consultation</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="font-sans">Message *</Label>
          <Textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us about your situation..."
            className="border-gray-200 bg-white"
          />
        </div>

        {formState === "error" && (
          <div className="flex items-center gap-2 text-red-600 text-sm font-sans">
            <AlertCircle className="w-4 h-4" />
            Something went wrong. Please try again or contact us directly.
          </div>
        )}

        <Button
          type="submit"
          disabled={formState === "submitting"}
          className="bg-[#1a1a1a] hover:bg-[#333333] text-white px-8 py-6 text-base font-sans w-full sm:w-auto"
        >
          {formState === "submitting" ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
