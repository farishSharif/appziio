"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2, Check } from "lucide-react";
import { toast } from "sonner";

const projectTypes = [
  "SaaS Development",
  "E-Commerce Platform",
  "Android App",
  "Website Development",
  "Other",
];

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const newErrors: Record<string, string> = {};
    if (!formState.name.trim()) newErrors.name = "Name is required";
    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formState.projectType) newErrors.projectType = "Please select a project type";
    if (!formState.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setIsSubmitted(true);
      toast.success("Message sent! We'll get back to you soon.");
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : "Failed to send message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div>
      <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
        <span className="w-8 h-px bg-foreground/30" />
        Send a message
      </span>

      {isSubmitted ? (
        <div className="py-16 text-center border border-foreground/10 p-12">
          <div className="w-16 h-16 mx-auto mb-6 border border-foreground/10 flex items-center justify-center">
            <Check className="w-8 h-8 text-foreground" />
          </div>
          <h3 className="text-2xl font-display mb-4">Message sent.</h3>
          <p className="text-muted-foreground">
            We&apos;ll get back to you at{" "}
            <span className="text-foreground">{formState.email}</span> within 24 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <Input
              id="name"
              placeholder="Your name"
              value={formState.name}
              onChange={(e) =>
                setFormState({ ...formState, name: e.target.value })
              }
              className="h-12 border-foreground/15 bg-transparent focus-visible:border-foreground focus-visible:ring-foreground/10"
              aria-invalid={!!errors.name}
            />
            {errors.name && (
              <p className="text-sm text-red-600 mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="you@company.com"
              value={formState.email}
              onChange={(e) =>
                setFormState({ ...formState, email: e.target.value })
              }
              className="h-12 border-foreground/15 bg-transparent focus-visible:border-foreground focus-visible:ring-foreground/10"
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <p className="text-sm text-red-600 mt-1">{errors.email}</p>
            )}
          </div>

          {/* Project Type */}
          <div>
            <label htmlFor="projectType" className="block text-sm font-medium mb-2">
              Project type
            </label>
            <select
              id="projectType"
              value={formState.projectType}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  projectType: e.target.value,
                })
              }
              className="h-12 w-full border border-foreground/15 bg-transparent px-3 text-base rounded-md outline-none focus:border-foreground focus:ring-[3px] focus:ring-foreground/10 transition-[color,box-shadow] md:text-sm"
              aria-invalid={!!errors.projectType}
            >
              <option value="" disabled>
                Select a project type
              </option>
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {errors.projectType && (
              <p className="text-sm text-red-600 mt-1">{errors.projectType}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <Textarea
              id="message"
              placeholder="Tell us about your project..."
              value={formState.message}
              onChange={(e) =>
                setFormState({ ...formState, message: e.target.value })
              }
              className="min-h-[160px] border-foreground/15 bg-transparent focus-visible:border-foreground focus-visible:ring-foreground/10"
              aria-invalid={!!errors.message}
            />
            {errors.message && (
              <p className="text-sm text-red-600 mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-14 bg-foreground text-background hover:bg-foreground/90 text-base rounded-full group"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send message
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </Button>
        </form>
      )}
    </div>
  );
}
