import { motion } from "framer-motion";

function Skills() {
  const skills = [
    "Java",
    "DSA",
    "React",
    "Node.js",
    "MongoDB",
    "SQL",
    "JavaScript",
    "HTML",
    "CSS",
  ];

  return (
    <section
      id="skills"
      className="min-h-screen pt-20 flex flex-col justify-center items-center bg-black text-white text-center px-6"
    >
      <h2 className="text-4xl font-bold mb-12">Skills</h2>

      <div className="flex flex-wrap gap-6 justify-center max-w-4xl">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: index * 0.1,
              type: "spring",
              stiffness: 120,
            }}
            whileHover={{
              scale: 1.2,
              boxShadow: "0px 0px 20px rgba(168, 85, 247, 0.8)",
            }}
            className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl backdrop-blur-lg cursor-pointer"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;