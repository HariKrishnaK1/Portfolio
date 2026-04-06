import { motion } from "framer-motion";
import Navbar from "./Navbar";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-black text-white text-center relative overflow-hidden"
    >
      {/* Navbar ONLY here */}
      <Navbar />

      {/* Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-500 rounded-full blur-3xl opacity-20"></div>

      {/* Animated Name */}
      <motion.h1
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-7xl font-bold z-10 tracking-wide"
      >
        Hari Krishna
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-xl text-gray-400 max-w-xl z-10"
      >
        Full Stack Developer specializing in MERN, Java, and scalable systems
      </motion.p>

      {/* Buttons */}
      <div className="mt-10 flex gap-6 z-10">
        <a href="#projects">
          <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl hover:scale-110 transition">
            View Projects
          </button>
        </a>

        <a href="/resume.pdf" download>
          <button className="px-6 py-3 border border-white rounded-xl hover:bg-white hover:text-black transition">
            Download Resume
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
