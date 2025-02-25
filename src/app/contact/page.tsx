"use client"

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
    <div className="max-w-md mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Contact Me</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            required
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Subject</label>
          <input
            required
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea
            required
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-blue-700"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      <div className="mt-8 text-center">
        <h3 className="mb-2 text-xl font-semibold mb-5">Or find me on</h3>
        <div className="flex justify-center space-x-6 text-2xl">
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black"
          >
            <AiFillGithub />
          </a>
        </div>
      </div>
    </div>
  )
}
