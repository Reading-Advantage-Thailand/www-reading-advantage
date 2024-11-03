"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { productLinks } from "@/config/navigation"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    product: "",
    company: "",
    role: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const subject = `Contact Form: ${formData.product || 'General Inquiry'}`
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Product: ${formData.product}
Company: ${formData.company}
Role: ${formData.role}

Message:
${formData.message}
    `.trim()

    window.location.href = `mailto:contact@readingadvantage.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium mb-2">
            Company/Organization
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-medium mb-2">
            Role
          </label>
          <input
            type="text"
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md"
            placeholder="e.g. Teacher, Administrator, Parent"
          />
        </div>

        <div>
          <label htmlFor="product" className="block text-sm font-medium mb-2">
            Product of Interest
          </label>
          <select
            id="product"
            name="product"
            value={formData.product}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="">Select a product</option>
            {productLinks.map(product => (
              <option key={product.href} value={product.label}>
                {product.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </Card>
  )
}
