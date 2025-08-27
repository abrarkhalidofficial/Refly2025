"use client";
import { useState } from "react";

export default function ContactForm() {
  const [selected, setSelected] = useState<string | null>("UI/UX design");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    attachment: null as File | null,
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const services = ["UI/UX design", "Website", "Branding", "Video Editing"];

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please tell us about your project";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, attachment: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const submissionData = new FormData();
      submissionData.append("service", selected || "");
      submissionData.append("name", formData.name);
      submissionData.append("email", formData.email);
      submissionData.append("message", formData.message);
      if (formData.attachment) {
        submissionData.append("attachment", formData.attachment);
      }

      const response = await fetch("https://formspree.io/f/xzzablzl", {
        method: "POST",
        body: submissionData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitStatus("success");
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row p-4  pt-8 md:p-15 fontBody">
      <div
        className="w-full flex flex-col md:flex-row p-4  pt-8 md:p-15"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1706720094778-5156e8b656e2?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex-1 flex flex-col justify-center items-start px-4 md:px-16 text-white bg-cover bg-center relative pb-4">
          <div className="relative z-10">
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold leading-snug">
              Have a project? <br /> We would love to help.
            </h1>
            <p className="mt-4 sm:mt-6 text-xs sm:text-sm md:text-base">
              reflyagency@gmail.com
            </p>
          </div>
        </div>

        <div className="bg-black text-white px-4 sm:px-8 md:px-16 py-8 sm:py-12 w-full md:w-[600px] rounded-[20px] md:rounded-none">
          <div className="flex justify-end gap-4 sm:gap-8 mb-8 sm:mb-12 text-gray-400 text-xs sm:text-sm font-medium">
            <a href="#" className="hover:text-white">
              Works
            </a>
            <a href="#" className="hover:text-white">
              About
            </a>
            <a href="#" className="text-white border-b border-white pb-1">
              Contacts
            </a>
          </div>

          {submitStatus === "success" && (
            <div className="mb-6 p-4 bg-green-900/30 border border-green-600 rounded-md text-xs sm:text-sm">
              Thank you for your message! We'll get back to you soon.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mb-6 p-4 bg-red-900/30 border border-red-600 rounded-md text-xs sm:text-sm">
              Sorry, there was an error sending your message. Please try again
              or email us directly.
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-6 sm:space-y-8"
          >
            <div>
              <p className="text-xs sm:text-sm mb-2 sm:mb-3 text-gray-400">
                I'm interested in...
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {services.map((service) => (
                  <button
                    type="button"
                    key={service}
                    onClick={() => setSelected(service)}
                    className={`px-3 sm:px-4 py-1 sm:py-2 border rounded-md text-xs sm:text-sm ${
                      selected === service
                        ? "bg-white text-black"
                        : "border-gray-600 text-gray-300 hover:border-white"
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-transparent border-b border-gray-600 focus:border-white focus:outline-none py-2 text-xs sm:text-sm"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-transparent border-b border-gray-600 focus:border-white focus:outline-none py-2 text-xs sm:text-sm"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Tell us about your project"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full bg-transparent border-b border-gray-600 focus:border-white focus:outline-none py-2 text-xs sm:text-sm resize-none"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
              <label
                htmlFor="attachment"
                className="flex items-center gap-2 cursor-pointer hover:text-white"
              >
                <span className="text-lg">📎</span>
                <span>Add attachment</span>
                <input
                  type="file"
                  id="attachment"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
              {formData.attachment && (
                <span className="text-xs ml-2 text-gray-500">
                  {formData.attachment.name}
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-white text-black font-medium py-2 sm:py-3 rounded-md hover:bg-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-base"
            >
              {isSubmitting ? "Sending..." : "Send request"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
