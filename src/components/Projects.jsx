import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function Projects() {
  const projects = [
    {
      title: "Chatify - Real-Time Chat App",
      desc: "A real-time chat application built using the MERN stack with secure authentication and instant messaging.",
      points: [
        "JWT authentication with HttpOnly cookies",
        "Real-time messaging using Socket.IO",
        "Online user presence tracking",
        "Cloudinary integration for profile images",
        "Deployed on Render",
      ],
      images: ["/chatify1.png", "/chatify2.png", "/chatify3.png"],
      github: "https://github.com/HariKrishnaK1/chatify",
      live: "https://chatify-xhes.onrender.com",
      showLinks: true,
    },
    {
      title: "Portfolio Website",
      desc: "Modern animated portfolio using React, Tailwind CSS and Framer Motion.",
      points: [
        "Full-screen responsive design",
        "Smooth animations",
        "Modern UI design",
      ],
      images: [
        "/projectPhotos/pf1.png",
        "/projectPhotos/pf2.png",
        "/projectPhotos/pf3.png",
        "/projectPhotos/pf4.png",
      ],
      github: "https://github.com/yourusername",
      live: "#",
      showLinks: true,
    },
    {
      title: "AI-Powered Adaptive Traffic System",
      desc: "Smart traffic system based on density and emergency priority.",
      points: [
        "Four-way traffic control",
        "Emergency vehicle priority",
        "IoT-based implementation",
        "Team of 5 collaboration",
      ],
      image: "/projectPhotos/iot1.jpeg", // ✅ YOUR IMAGE
      showLinks: false,
    },
  ];

  const [chatifyIndex, setChatifyIndex] = useState(0);
  const [portfolioIndex, setPortfolioIndex] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setChatifyIndex((prev) => (prev + 1) % 3);
    }, 2500);

    const interval2 = setInterval(() => {
      setPortfolioIndex((prev) => (prev + 1) % 4);
    }, 3000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

  return (
    <section id="projects" className="bg-black text-white">
      {/* Sticky Heading */}
      <div className="sticky top-0 z-40 bg-black py-6 text-center">
        <h2 className="text-4xl font-bold">Projects</h2>
      </div>

      {projects.map((p, index) => (
        <section
          key={index}
          className="min-h-screen flex items-center px-10 snap-start relative"
        >
          {/* Number Circle */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="absolute top-24 left-10 w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold shadow-lg"
          >
            {index + 1}/{projects.length}
          </motion.div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center w-full">
            {/* LEFT */}
            <div>
              <h3 className="text-3xl font-semibold mb-4">{p.title}</h3>
              <p className="text-gray-300 mb-4">{p.desc}</p>

              <ul className="text-gray-400 space-y-2 mb-6">
                {p.points.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>

              {p.showLinks && (
                <div className="flex gap-4">
                  <a
                    href={p.github}
                    target="_blank"
                    className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition"
                  >
                    GitHub
                  </a>

                  <a
                    href={p.live}
                    target="_blank"
                    className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:scale-105 transition"
                  >
                    Live Demo
                  </a>
                </div>
              )}
            </div>

            {/* RIGHT */}
            <div className="flex justify-center">
              {p.title.includes("Chatify") ? (
                <motion.img
                  key={chatifyIndex}
                  src={p.images[chatifyIndex]}
                  alt="chatify"
                  className="w-full max-w-2xl h-[500px] object-contain rounded-[40px] shadow-[0px_20px_60px_rgba(0,0,0,0.5)]"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                />
              ) : p.title.includes("Portfolio") ? (
                <motion.img
                  key={portfolioIndex}
                  src={p.images[portfolioIndex]}
                  alt="portfolio"
                  className="w-full max-w-2xl h-[500px] object-contain rounded-[40px] shadow-[0px_20px_60px_rgba(0,0,0,0.5)]"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                />
              ) : (
                <motion.img
                  src={p.image}
                  alt="iot"
                  className="w-full max-w-2xl h-[500px] object-contain rounded-[40px] shadow-[0px_20px_60px_rgba(0,0,0,0.5)]"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                />
              )}
            </div>
          </div>
        </section>
      ))}
    </section>
  );
}

export default Projects;
