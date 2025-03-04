"use client"

import "../styles/contact.css"
import React, { useState } from "react"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { toast } from "react-toastify"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast.success("Message sent! Thanks for reaching out.")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        toast.error("Error sending message. Please try again.")
      }
    } catch (error) {
      console.error(error)
      toast.error("Error sending message. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
      <>
        <div className="form-container">
          <h1 className="text-2xl font-bold mb-4 text-yellow-500">Contact Me</h1>
          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <input
                required
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="input"
              />
              <input
                required
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="input"
              />
              <textarea
                required
                name="message"
                rows={5}
                placeholder="Enter your message..."
                value={formData.message}
                onChange={handleChange}
                className="textarea"
              />
              <button type="submit" className="form-submit-btn" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
  
        <div className="mt-8 text-center">
          <h3 className="mb-5 text-xl font-semibold text-yellow-500">
            &lt; Or find me on /&gt;
          </h3>
          <div className="flex justify-center space-x-6 text-2xl">
            <a
              href="https://www.linkedin.com/in/joakim-%C3%A5str%C3%B6m-863a49299/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border-2
                border-yellow-600
                text-white
                hover:text-yellow-600
                transition-colors
                duration-200
                ease-in-out
              "
            >
              <AiFillLinkedin className="text-xl" />
            </a>
            <a
              href="https://github.com/Juicy-Juicyman"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border-2
                border-yellow-600
                text-white
                hover:text-yellow-600
                transition-colors
                duration-200
                ease-in-out
              "
            >
              <AiFillGithub className="text-xl" />
            </a>
          </div>
        </div>
      </>
  );
}
