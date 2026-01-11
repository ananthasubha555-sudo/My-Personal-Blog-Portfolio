import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="min-h-screen px-6 py-12 flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-100 to-white">

      {/* Profile Image */}
      <motion.img
        src="/images/profile.jpg"
        alt="Profile"
        className="w-48 h-50 rounded-full shadow-xl mb-6 object-cover border-4 border-white"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        Hi, I'm Subha Mariappan 👋
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-lg md:text-xl mt-4 text-gray-700 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Full Stack Developer | React • Node.js • MongoDB  
        <br />
        I  build a modern, fast, and responsive web applications.
      </motion.p>

      {/* Animated Buttons */}
      <motion.div
        className="mt-8 flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
      >
        <a
          href="/Subha-Resume.pdf"
          download
          className="px-5 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition shadow"
        >
          Download Resume
        </a>

        <a
          href="/projects"
          className="px-5 py-2 rounded-lg border border-black hover:bg-black hover:text-white transition shadow"
        >
          View Projects
        </a>
      </motion.div>

    </section>
  );
}
