export default function NavBar() {
  const handleNavClick = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="w-full sticky top-0 z-5 bg-opacity-80">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div></div>
        <ul className="flex space-x-6 text-black font-medium">
          <li>
            <button
              onClick={() => handleNavClick('landing')}
              className="hover:text-[#021963] cursor-pointer transition-colors duration-200"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavClick('about')}
              className="hover:text-[#021963] cursor-pointer transition-colors duration-200"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavClick('portfolio')}
              className="hover:text-[#021963] cursor-pointer transition-colors duration-200"
            >
              Portfolio
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavClick('contact')}
              className="hover:text-[#021963] cursor-pointer transition-colors duration-200"
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
