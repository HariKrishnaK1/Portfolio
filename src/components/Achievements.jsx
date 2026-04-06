import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function Achievements() {
  const images = [
    "/achievementPhotos/a1.jpeg",
    "/achievementPhotos/a2.jpeg",
    "/achievementPhotos/a3.jpeg",
    "/achievementPhotos/a4.jpeg",
    "/achievementPhotos/a5.jpeg",
  ];

  const [current, setCurrent] = useState(0);

  // Auto slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="achievements"
      className="min-h-screen pt-20 flex items-center justify-center bg-gray-900 text-white px-6"
    >
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl font-bold mb-6">Achievements</h2>

          <p className="text-lg text-gray-300 mb-4">
            I was awarded{" "}
            <span className="text-purple-400 font-semibold">
              Academic Excellence
            </span>{" "}
            for securing top performance in my branch.
          </p>

          <p className="text-lg text-gray-300 mb-4">
            I achieved this recognition in both my{" "}
            <span className="text-purple-400">1st year</span> and{" "}
            <span className="text-purple-400">2nd year</span>, demonstrating
            consistent academic performance.
          </p>

          <p className="text-lg text-gray-300">
            These achievements reflect my dedication, discipline, and commitment
            towards continuous improvement.
          </p>
        </div>

        {/* RIGHT SIDE - PREMIUM IMAGE */}
        <div className="flex justify-center">
          <motion.img
            key={current}
            src={images[current]}
            alt="achievement"
            className="w-full max-w-2xl h-[550px] object-contain rounded-[40px] shadow-[0px_20px_60px_rgba(0,0,0,0.5)] hover:scale-105 transition duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </div>
    </section>
  );
}

export default Achievements;
