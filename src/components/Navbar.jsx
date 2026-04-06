function Navbar() {
  return (
    <nav className="absolute top-16 md:top-0 left-0 w-full flex justify-center items-center gap-3 md:gap-10 py-4 px-2 text-white z-40 overflow-x-auto">
      <a
        href="#about"
        className="hover:text-purple-400 transition text-xs sm:text-sm md:text-base whitespace-nowrap"
      >
        About
      </a>

      <a
        href="#skills"
        className="hover:text-purple-400 transition text-xs sm:text-sm md:text-base whitespace-nowrap"
      >
        Skills
      </a>

      <a
        href="#projects"
        className="hover:text-purple-400 transition text-xs sm:text-sm md:text-base whitespace-nowrap"
      >
        Projects
      </a>

      <a
        href="#achievements"
        className="hover:text-purple-400 transition text-xs sm:text-sm md:text-base whitespace-nowrap"
      >
        Achievements
      </a>

      <a
        href="#contact"
        className="hover:text-purple-400 transition text-xs sm:text-sm md:text-base whitespace-nowrap"
      >
        Contact
      </a>
    </nav>
  );
}

export default Navbar;
