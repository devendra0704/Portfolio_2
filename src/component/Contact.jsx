import React, { useState } from "react";
import { FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email address";
    if (!formData.message) newErrors.message = "Message cannot be empty";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      alert("Message Sent Successfully! ✅");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section id="contact" className="flex flex-col items-center justify-center min-h-screen px-6 md:px-16 bg-[#121212] text-white -mb-20">
      <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300 mb-3 ">Get in Touch</h2>
      {/* <p className="text-gray-500 mb-8">Contact me</p> */}

      <div className="max-w-lg w-full  p-8 rounded-lg  backdrop-blur-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <Input
              type="text"
              placeholder="Your Name"
              className="w-full h-15 bg-gray-800 text-white border border-gray-500 focus:ring-2 focus:ring-orange-400"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <Input
              type="email"
              placeholder="Your Email"
              className="w-full h-15 bg-gray-800 text-white border border-gray-500 focus:ring-2 focus:ring-orange-400"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Message */}
          <div>
            <Textarea
              placeholder="Your Message"
              className="w-full h-30 bg-gray-800 text-white border border-gray-500 focus:ring-2 focus:ring-orange-400"
              rows="4"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full h-12 text-lg bg-orange-400 hover:bg-orange-300 text-[#1C093C] font-bold py-2 px-6 rounded-lg transition">
            Send Message
          </Button>
        </form>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 text-2xl mt-6">
          <a href="#" className="text-orange-400 hover:text-orange-300"><FaInstagram /></a>
          <a href="#" className="text-green-400 hover:text-green-300"><FaWhatsapp /></a>
          <a href="#" className="text-blue-400 hover:text-blue-300"><FaLinkedin /></a>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
