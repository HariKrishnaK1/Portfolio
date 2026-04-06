import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen pt-20 flex items-center justify-center bg-gray-900 text-white px-6"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE - TEXT */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-6"
          >
            About Me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-300 mb-4"
          >
            I'm a passionate developer focused on building scalable and efficient web applications.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-300 mb-4"
          >
            Skilled in Java, Data Structures & Algorithms, and the MERN stack, I enjoy solving complex problems and creating impactful solutions.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-gray-300"
          >
            Currently preparing for placements and aiming to become a top software engineer.
          </motion.p>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/profile.jpeg"
            alt="profile"
            className="w-80 h-[500px] object-cover rounded-xl shadow-2xl hover:scale-105 transition duration-300"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default About;