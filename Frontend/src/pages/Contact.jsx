import React, { useState } from "react";
import axios from "axios";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaInstagram,
  FaDownload,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/contact", {
        name,
        email,
        message,
      });

      alert("Message sent successfully ✅");

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      alert("Failed to send message ❌");
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center mt-6 px-6 py-12 bg-gray-50 mt-2">

      <motion.form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow w-full max-w-md"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-center mt-3">Contact Me</h2>

        <input
          type="text"
          placeholder="Name"
          className="w-full border p-2 mb-3 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-3 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <textarea
          placeholder="Message"
          className="w-full border p-2 mb-3 rounded"
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button className="bg-black text-white w-full py-2 rounded hover:bg-gray-800 transition">
          Send Message
        </button>
      </motion.form>

      {/* Resume Button */}
      <motion.a
        href="/resume/Subha-Resume.pdf"
        download
        className="mt-6 bg-blue-600 text-white px-6 py-2 rounded flex items-center gap-2 hover:bg-blue-700"
        whileHover={{ scale: 1.05 }}
      >
        <FaDownload /> Download Resume
      </motion.a>

      {/* Social Icons */}
      <div className="mt-6 flex gap-6 text-3xl">
        <a href="https://www.linkedin.com/in/subha-mariappan-043251386/" className="hover:text-blue-600"><FaLinkedin /></a>
        <a href="https://github.com/ananthasubha555-sudo" className="hover:text-gray-800"><FaGithub /></a>
        <a href="ananthasubha555@gmail.com" className="hover:text-red-600"><FaEnvelope /></a>
        <a href="https://www.instagram.com/subha_555_mira/" className="hover:text-pink-500"><FaInstagram /></a>
      </div>
    </section>
  );
}
