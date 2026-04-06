import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  const contacts = [
    {
      title: "Email",
      value: "harikrishnak5053@gmail.com",
      link: "mailto:harikrishnak5053@gmail.com?subject=Opportunity&body=Hi Hari Krishna,",
      icon: <FaEnvelope size={24} />,
    },
    {
      title: "LinkedIn",
      value: "hari-krishna",
      link: "https://www.linkedin.com/in/hari-krishna-89a4a6301",
      icon: <FaLinkedin size={24} />,
    },
    {
      title: "GitHub",
      value: "HariKrishnaK1",
      link: "https://github.com/HariKrishnaK1",
      icon: <FaGithub size={24} />,
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-6 relative"
    >
      {/* Glow Background */}
      <div className="absolute w-[400px] h-[400px] bg-purple-500 opacity-20 blur-3xl rounded-full"></div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-6 z-10"
      >
        Let’s Connect
      </motion.h2>

      {/* Message */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-400 text-center max-w-xl mb-12 z-10"
      >
        I’m open to opportunities and collaborations. Feel free to reach out.
      </motion.p>

      {/* Contact Cards */}
      <div className="grid md:grid-cols-3 gap-8 w-full max-w-5xl z-10">
        {contacts.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="group p-6 rounded-3xl backdrop-blur-lg bg-white/5 border border-white/10 hover:border-purple-500 transition duration-300 shadow-lg hover:shadow-purple-500/30"
          >
            {/* Icon */}
            <div className="mb-4 text-purple-400 group-hover:scale-110 transition">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

            {/* Value */}
            <p className="text-gray-400 text-sm">{item.value}</p>
          </motion.a>
        ))}
      </div>

      {/* CTA Button */}
      <motion.a
        href="mailto:harikrishnak5053@gmail.com?subject=Opportunity&body=Hi Hari Krishna,"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-12 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl hover:scale-110 transition shadow-lg hover:shadow-purple-500/40 z-10"
      >
        Send Email
      </motion.a>
    </section>
  );
}

export default Contact;
