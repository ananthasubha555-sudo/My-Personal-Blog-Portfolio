import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaUserGraduate,
  FaCalendarAlt,
  FaUniversity,
  FaBriefcase,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiFirebase, SiPostman } from "react-icons/si";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen px-6 py-12 bg-gray-50">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-8 mt-6">About Me</h1>

        {/* Bio */}
        <motion.p
          className="text-lg text-gray-700 leading-relaxed mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Hi, I'm <span className="font-semibold">Subha</span>, a passionate Full Stack
          Developer with strong skills in building modern MERN applications and
          creating responsive, user-friendly web interfaces. I enjoy solving problems,
          learning new tools, and turning ideas into real working projects.
        </motion.p>

        {/* Skills Section */}
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>

        <div className="grid gap-6">
          {/* Frontend */}
          <SkillCategory
            title="Frontend"
            skills={[
              { icon: <FaHtml5 className="text-orange-600" />, name: "HTML" },
              { icon: <FaCss3Alt className="text-blue-600" />, name: "CSS" },
              { icon: <FaJsSquare className="text-yellow-500" />, name: "JavaScript" },
              { icon: <FaReact className="text-cyan-500" />, name: "React.js" },
            ]}
          />

          {/* Backend */}
          <SkillCategory
            title="Backend"
            skills={[
              { icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },
              { icon: <SiExpress />, name: "Express.js" },
              { icon: <SiMongodb className="text-green-700" />, name: "MongoDB" },
            ]}
          />

          {/* Tools */}
          <SkillCategory
            title="Tools"
            skills={[
              { icon: <FaGitAlt className="text-red-600" />, name: "Git & GitHub" },
              { icon: <SiFirebase className="text-yellow-500" />, name: "Firebase" },
              { icon: <SiPostman className="text-orange-600" />, name: "Postman" },
            ]}
          />
        </div>

        {/* Experience Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Experience</h2>

          <motion.div
            className="bg-gray-100 p-6 rounded-lg"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <FaBriefcase className="text-purple-600 text-xl" />
              <h3 className="text-lg font-bold">Production Associate</h3>
            </div>

            <p className="text-gray-700 mb-2">Dell Technologies</p>
            

            <div className="flex items-center gap-3 text-gray-600">
              <FaCalendarAlt className="text-green-600" />
              <span>4 Years Experience</span>
            </div>
              <p className="text-gray-700 text-sm leading-relaxed mt-2">
      Worked as a Production Associate at Dell Technologies, gaining hands-on
      experience in manufacturing operations, quality standards, teamwork,
      and process optimization. This role strengthened my problem-solving
      skills and attention to detail, which I now apply in software development.
    </p>
          </motion.div>
        </div>

        {/* ------------------- EDUCATION SECTION ------------------- */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Education</h2>

          <div className="space-y-6">

            {/* B.Sc Computer Science */}
            <motion.div
              className="bg-gray-100 p-6 rounded-lg"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <FaUserGraduate className="text-purple-600 text-xl" />
                <h3 className="text-lg font-bold">B.Sc. Computer Science</h3>
              </div>

              <div className="flex items-center gap-3 text-gray-700 mb-1">
                <FaUniversity className="text-blue-600" />
                <span>Manonmaniam Sundaranar University, Tirunelveli</span>
              </div>

              <div className="flex items-center gap-3 text-gray-600">
                <FaCalendarAlt className="text-green-600" />
                <span>Completed: 2021</span>
              </div>
            </motion.div>

            {/* Full Stack Developer Course */}
            <motion.div
              className="bg-gray-100 p-6 rounded-lg"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <FaUserGraduate className="text-purple-600 text-xl" />
                <h3 className="text-lg font-bold">Full Stack Developer</h3>
              </div>

              <div className="flex items-center gap-3 text-gray-700 mb-1">
                <FaUniversity className="text-blue-600" />
                <span>EMC Training Institute</span>
              </div>

              <div className="flex items-center gap-3 text-gray-600">
                <FaCalendarAlt className="text-green-600" />
                <span>2024 – 2025</span>
              </div>
            </motion.div>

          </div>
        </div>

      </motion.div>
    </section>
  );
}

/* ------------------- COMPONENT ------------------- */
function SkillCategory({ title, skills }) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((s) => (
          <motion.div
            key={s.name}
            className="flex items-center gap-3 bg-white px-4 py-2 rounded-lg shadow"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-2xl">{s.icon}</span>
            <span className="font-medium">{s.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
