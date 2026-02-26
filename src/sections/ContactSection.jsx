import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setFormStatus({
      isSubmitting: true,
      isSuccess: false,
      isError: false,
      message: "",
    });

    try {
      const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS environment variables are missing.");
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          name: formData.name,
          email: formData.email,
        },
        { publicKey }
      );

      setFormStatus({
        isSubmitting: false,
        isSuccess: true,
        isError: false,
        message: "Thank you for your message! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => {
        setFormStatus({
          isSubmitting: false,
          isSuccess: false,
          isError: false,
          message: "",
        });
      }, 5000);
    } catch (error) {
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again later.",
      });
    }
  };

  return (
    <section id="contact" className="section-block">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <h2 className="section-title text-center">Get In Touch</h2>
        <p className="text-center text-slate-300 mb-10">
          Islamabad, Pakistan | Email: zaynbu269@gmail.com | LinkedIn:
          {" "}
          <a
            href="https://www.linkedin.com/in/zain-ul-abideen-429735231/"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            zain-ul-abideen-429735231
          </a>
        </p>

        <div className="grid lg:grid-cols-[2fr_1fr] gap-8">
          <div className="card-surface p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-slate-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-slate-900 text-white rounded-lg border transition-colors ${
                    errors.name
                      ? "border-red-500 focus:border-red-500"
                      : "border-slate-700 focus:border-cyan-400"
                  } focus:outline-none`}
                  placeholder="Your Name"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-slate-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-slate-900 text-white rounded-lg border transition-colors ${
                    errors.email
                      ? "border-red-500 focus:border-red-500"
                      : "border-slate-700 focus:border-cyan-400"
                  } focus:outline-none`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-slate-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full px-4 py-3 bg-slate-900 text-white rounded-lg border transition-colors resize-none ${
                    errors.message
                      ? "border-red-500 focus:border-red-500"
                      : "border-slate-700 focus:border-cyan-400"
                  } focus:outline-none`}
                  placeholder="Your message here..."
                ></textarea>
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={formStatus.isSubmitting}
                className={`w-full py-3 text-white font-semibold rounded-lg transition-all duration-300 ${
                  formStatus.isSubmitting
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-cyan-500 hover:bg-cyan-400 text-slate-950"
                }`}
              >
                {formStatus.isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {formStatus.isSuccess && (
                <div className="p-4 bg-green-500/10 border border-green-500 rounded-lg">
                  <p className="text-green-400 text-sm">{formStatus.message}</p>
                </div>
              )}

              {formStatus.isError && (
                <div className="p-4 bg-red-500/20 border border-red-500 rounded-lg">
                  <p className="text-red-400 text-sm">{formStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          <div className="card-surface p-6">
            <h3 className="text-white text-2xl font-semibold mb-4">
              Direct Links
            </h3>
            <p className="text-slate-300 mb-5">
              If you prefer, contact me directly instead of the form.
            </p>
            <div className="flex flex-col gap-3">
              <a className="btn-secondary text-center" href="mailto:zaynbu269@gmail.com">
                Email
              </a>
              <a
                className="btn-secondary text-center"
                href="https://github.com/ZAYNINFINITY"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="btn-secondary text-center"
                href="https://www.linkedin.com/in/zain-ul-abideen-429735231/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
