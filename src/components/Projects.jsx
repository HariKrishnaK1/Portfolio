import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function Projects() {
  const projects = [
    {
      title: "Chatify - Real-Time Chat App",
      desc: "A real-time chat application using MERN with authentication and messaging.",
      points: [
        "JWT authentication",
        "Socket.IO messaging",
        "Cloudinary images",
      ],
      images: ["/chatify1.png", "/chatify2.png", "/chatify3.png"],
      github: "https://github.com/HariKrishnaK1/chatify",
      live: "https://chatify-xhes.onrender.com",
      showLinks: true,
    },
    {
      title: "Portfolio Website",
      desc: "Modern portfolio with animations and responsive UI.",
      points: ["Responsive design", "Smooth animations"],
      images: [
        "/projectPhotos/pf1.png",
        "/projectPhotos/pf2.png",
        "/projectPhotos/pf3.png",
        "/projectPhotos/pf4.png",
      ],
      github: "https://github.com/HariKrishnaK1",
      live: "#",
      showLinks: true,
    },
    {
      title: "AI-Powered Adaptive Traffic System",
      desc: "Traffic system based on density and emergency priority.",
      points: ["IoT-based system", "Emergency priority"],
      image: "/projectPhotos/iot1.jpeg",
      showLinks: false,
    },
  ];

  const [chatifyIndex, setChatifyIndex] = useState(0);
  const [portfolioIndex, setPortfolioIndex] = useState(0);

  useEffect(() => {
    const i1 = setInterval(() => {
      setChatifyIndex((p) => (p + 1) % 3);
    }, 2500);

    const i2 = setInterval(() => {
      setPortfolioIndex((p) => (p + 1) % 4);
    }, 3000);

    return () => {
      clearInterval(i1);
      clearInterval(i2);
    };
  }, []);

  return (
    <section id="projects" className="bg-black text-white">
      <div className="sticky top-0 bg-black py-6 text-center z-40">
        <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
      </div>

      {projects.map((p, index) => (
        <section
          key={index}
          className="min-h-screen flex items-center px-4 md:px-10 snap-start relative"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
            {/* LEFT */}
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                {p.title}
              </h3>
              <p className="text-gray-300 mb-4 text-sm md:text-base">
                {p.desc}
              </p>

              <ul className="text-gray-400 space-y-2 mb-6 text-sm md:text-base">
                {p.points.map((pt, i) => (
                  <li key={i}>• {pt}</li>
                ))}
              </ul>

              {p.showLinks && (
                <div className="flex flex-wrap gap-3">
                  <a href={p.github} target="_blank">
                    <button className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition">
                      GitHub
                    </button>
                  </a>

                  <a href={p.live} target="_blank">
                    <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                      Live
                    </button>
                  </a>
                </div>
              )}
            </div>

            {/* RIGHT */}
            <div className="flex justify-center">
              <img
                src={
                  p.images
                    ? p.title.includes("Chatify")
                      ? p.images[chatifyIndex]
                      : p.images[portfolioIndex]
                    : p.image
                }
                alt="project"
                className="w-full max-w-md md:max-w-2xl h-[250px] md:h-[500px] object-contain rounded-3xl"
              />
            </div>
          </div>
        </section>
      ))}
    </section>
  );
}

export default Projects;
