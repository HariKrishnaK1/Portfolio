function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full flex justify-center gap-10 py-6 text-white z-40">
      <a href="#about" className="hover:text-purple-400 transition">
        About
      </a>
      <a href="#skills" className="hover:text-purple-400 transition">
        Skills
      </a>
      <a href="#projects" className="hover:text-purple-400 transition">
        Projects
      </a>
      <a href="#achievements" className="hover:text-purple-400 transition">
        Achievements
      </a>
      <a href="#contact" className="hover:text-purple-400 transition">
        Contact
      </a>
    </nav>
  );
}

export default Navbar;
