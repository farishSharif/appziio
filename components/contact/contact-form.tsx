"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2, Check, Sparkles } from "lucide-react";
import { toast } from "sonner";

const projectTypes = [
  "SaaS Development",
  "E-Commerce Platform",
  "Android App (Flutter)",
  "Website Development",
  "Full Stack Custom Solution",
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
      toast.success("Message sent! We'll get back to you within 24 hours.");
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
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-foreground/10">
        <span className="inline-flex items-center gap-2.5 text-sm font-mono text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Send a Project Message
        </span>
        <span className="text-xs font-mono text-muted-foreground">Quick Response</span>
      </div>

      {isSubmitted ? (
        <div className="py-16 text-center rounded-2xl border border-foreground/10 p-10 bg-foreground/[0.02] animate-in fade-in zoom-in-95 duration-500">
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl border border-foreground/20 flex items-center justify-center bg-foreground text-background shadow-lg">
            <Check className="w-8 h-8" />
          </div>
          <h3 className="text-3xl font-display mb-3">Message Received.</h3>
          <p className="text-muted-foreground max-w-sm mx-auto leading-relaxed text-sm">
            Thank you! We&apos;ll review your project details and get back to{" "}
            <span className="text-foreground font-medium underline">{formState.email}</span> within 24 hours.
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
              placeholder="Your name or company"
              value={formState.name}
              onChange={(e) =>
                setFormState({ ...formState, name: e.target.value })
              }
              className="h-12 rounded-xl border-foreground/15 bg-background/50 focus-visible:border-foreground focus-visible:ring-foreground/10 transition-all"
              aria-invalid={!!errors.name}
            />
            {errors.name && (
              <p className="text-xs font-mono text-red-600 mt-1.5">{errors.name}</p>
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
              className="h-12 rounded-xl border-foreground/15 bg-background/50 focus-visible:border-foreground focus-visible:ring-foreground/10 transition-all"
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <p className="text-xs font-mono text-red-600 mt-1.5">{errors.email}</p>
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
              className="h-12 w-full rounded-xl border border-foreground/15 bg-background/50 px-3.5 text-base outline-none focus:border-foreground focus:ring-[3px] focus:ring-foreground/10 transition-all md:text-sm cursor-pointer"
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
              <p className="text-xs font-mono text-red-600 mt-1.5">{errors.projectType}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message & Scope
            </label>
            <Textarea
              id="message"
              placeholder="Tell us what you're building, target timeline, or tech preferences..."
              value={formState.message}
              onChange={(e) =>
                setFormState({ ...formState, message: e.target.value })
              }
              className="min-h-[140px] rounded-xl border-foreground/15 bg-background/50 focus-visible:border-foreground focus-visible:ring-foreground/10 transition-all"
              aria-invalid={!!errors.message}
            />
            {errors.message && (
              <p className="text-xs font-mono text-red-600 mt-1.5">{errors.message}</p>
            )}
          </div>

          {/* Submit */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-14 bg-foreground text-background hover:bg-foreground/90 text-base rounded-full group button-shine shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Sending message...
              </>
            ) : (
              <>
                <span>Send message</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </Button>
        </form>
      )}
    </div>
  );
}
