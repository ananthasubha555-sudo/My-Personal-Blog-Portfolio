import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6">

        {/* NAME / BRAND */}
        <h2 className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent">
          Subha Mariappan
        </h2>

        {/* SOCIAL ICONS */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/ananthasubha555-sudo"
            target="_blank"
            className="hover:text-yellow-400 transition transform hover:scale-110"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/subha-mariappan-043251386/"
            target="_blank"
            className="hover:text-blue-400 transition transform hover:scale-110"
          >
            <FaLinkedin />
          </a>

          <a
            href="ananthasubha555@gmail.com"
            className="hover:text-red-400 transition transform hover:scale-110"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://www.instagram.com/subha_555_mira/"
            target="_blank"
            className="hover:text-pink-400 transition transform hover:scale-110"
          >
            <FaInstagram />
          </a>
        </div>

        {/* COPYRIGHT */}
        <p className="text-sm text-gray-400 text-center leading-relaxed">
          © {new Date().getFullYear()} <span className="font-semibold">Subha Mariappan</span>.  
          Built with React, Express.js, and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
