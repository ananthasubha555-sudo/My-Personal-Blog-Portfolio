import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section className="min-h-screen px-6 py-12 bg-gray-50">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >

        {/* Heading */}
        <motion.h1
          className="text-4xl font-bold text-center mb-4 mt-6"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h1>

        {/* Summary */}
        <p className="text-center text-gray-600 mb-10">
          I have completed <span className="font-semibold">14+ projects</span> using
          React,Tailwind,JavaScript, and the MERN stack. Below are my key featured projects.
        </p>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="MERN E-Commerce Website"
            tagline="Full-stack shopping platform with authentication, cart, checkout, orders."
            tech={["React", "Node.js", "Express.js", "MongoDB", "Tailwind"]}
            github="https://github.com/your/ecommerce"
            live="https://your-ecommerce-live.com"
          />

          <ProjectCard
            title="Personal Portfolio Website"
            tagline="Responsive personal portfolio to showcase skills and projects."
            tech={["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Firebase"]}
            github="https://github.com/your/portfolio"
            live="https://your-portfolio-live.com"
          />

          <ProjectCard
            title="Task Management App"
            tagline="simple and user-friendly web application designed to help users create, update, view, and delete tasks efficiently. This project helps users stay organized by keeping track of their tasks."
            tech={["React", "Tailwind","JavaScript"]}
            github="https://ananthasubha555-sudo.github.io/task-management-app/"
            live="https://task-management-app1-gold.vercel.app/"
          />

          <ProjectCard
            title="Bulk Email Sender"
            tagline="The Bulk Mail App is a web application that allows users to send multiple emails at once using an Excel file of recipients."
            tech={["React", "Node.js", "Nodemailer","MongoDB","Multer"]}
            github="https://github.com/ananthasubha555-sudo/BulkMail-app"
            live="https://bulk-mail-app-three.vercel.app/"
          />

          <ProjectCard
            title="Weather Application"
            tagline="The Weather Forecast App is a modern React-based application that allows users to check real-time weather information for any city in the world. Real-time weather using Puplic-API."
            tech={["React", "Weather-API", "Tailwind-CSS","Axios"]}
            github="https://github.com/ananthasubha555-sudo/weather-app"
            live=" https://weather-app1-seven-amber.vercel.app/"
          />

          <ProjectCard
            title="Movie Application"
            tagline="A dynamic and responsive Movie App built using React.js, Tailwind CSS, and JavaScript, leveraging external APIs to fetch real-time movie data. The app allows users to browse, search, and view details of movies, including ratings, genres, and release dates.."
            tech={["React", "External-API", "JavaScript","Tailwind-CSS"]}
            github="https://github.com/ananthasubha555-sudo/movie_app1"
            live="https://movieapp1-rust.vercel.app/"
          />
        </div>

        {/* Other Projects */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Other Projects
          </h2>
          <p className="font-semibold text-center mb-5">Belows are my Remaining Projects. Build with Basic HTML and CSS, React, Tailwind-CSS and Node </p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "Apple Website Clone", link: "https://my-react-app-omega-seven-93.vercel.app/" },
              { name: "Netflix Login UI", link: "https://netflix-login-page-phi.vercel.app/ " },
              { name: "Nostra E-Commerce", link: "https://ananthasubha555-sudo.github.io/nostra-website/ " },
              { name: "Greenden Project", link: "https://ananthasubha555-sudo.github.io/greenden-tailwind/" },
              { name: "STextarea with Real-Time Character Counter", link: "https://ananthasubha555-sudo.github.io/simple-textarea/" },
              { name: "Registration Form with Validation", link: "https://ananthasubha555-sudo.github.io/simple-Registrationform/" },
              { name: "Udemy Page Simple-Clone", link:"https://ananthasubha555-sudo.github.io/udemy_clone-simple_website/"},
              { name: "Trip Advisor Simple-Clone", link:"https://ananthasubha555-sudo.github.io/tripadvisor/"},
            ].map((p) => (
              <motion.a
                key={p.name}
                href={p.link}
                target="_blank"
                className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-300"
                whileHover={{ scale: 1.1 }}
              >
                <FaCode /> {p.name}
              </motion.a>
            ))}
          </div>
        </div>

      </motion.div>
    </section>
  );
}

function ProjectCard({ title, tagline, tech, github, live }) {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-bold mb-1">{title}</h2>
      <p className="text-sm text-gray-600 mb-3">{tagline}</p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item) => (
          <span key={item} className="text-xs bg-gray-100 px-2 py-1 rounded">
            {item}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <a href={github} target="_blank" className="flex items-center gap-2 text-black font-medium">
          <FaGithub /> GitHub
        </a>

        <a href={live} target="_blank" className="flex items-center gap-2 text-blue-600 font-medium">
          <FaExternalLinkAlt /> Live
        </a>
      </div>
    </motion.div>
  );
}
