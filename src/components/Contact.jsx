import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  const contacts = [
    {
      title: "Email",
      value: "harikrishnak5053@gmail.com",
      link: "mailto:harikrishnak5053@gmail.com",
      icon: <FaEnvelope />,
    },
    {
      title: "LinkedIn",
      value: "hari-krishna",
      link: "https://www.linkedin.com/in/hari-krishna-89a4a6301",
      icon: <FaLinkedin />,
    },
    {
      title: "GitHub",
      value: "HariKrishnaK1",
      link: "https://github.com/HariKrishnaK1",
      icon: <FaGithub />,
    },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Let’s Connect</h2>

      <p className="text-gray-400 text-center mb-10 max-w-md">
        I’m open to opportunities and collaborations. Feel free to reach out.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {contacts.map((c, i) => (
          <a
            key={i}
            href={c.link}
            target="_blank"
            className="p-6 border rounded-xl text-center hover:border-purple-500"
          >
            <div className="text-purple-400 mb-3 text-xl">{c.icon}</div>
            <h3>{c.title}</h3>
            <p className="text-gray-400 text-sm">{c.value}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contact;
