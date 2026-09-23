import logo from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-12 py-4 bg-white shadow-sm">
      {/* Logo Image */}
      <div>
        <img src={logo} alt="Dev Stack Logo" className="h-9 object-contain" />
      </div>

      {/* Menu Links */}
      <div>
        <ul className="flex items-center gap-8 font-medium">
          <li className="text-[#e91e63] cursor-pointer">Home</li>
          <li className="text-gray-700 hover:text-gray-900 cursor-pointer">
            Technologies
          </li>
          <li className="text-gray-700 hover:text-gray-900 cursor-pointer">
            Projects
          </li>
          <li className="text-gray-700 hover:text-gray-900 cursor-pointer">
            About
          </li>
          <li className="text-gray-700 hover:text-gray-900 cursor-pointer">
            Contact
          </li>
        </ul>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-5">
        <button className="text-gray-700 hover:text-gray-900 font-medium">
          Sign In
        </button>
        <button className="px-6 py-2 bg-[#e91e63] text-white rounded-full font-medium hover:bg-[#d81b60] transition-colors">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
