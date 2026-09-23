import React from "react";
import logo from "../assets/logo-text.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 text-gray-600 text-xs py-12">
      <div className="max-w-7xl mx-auto px-8">
        {/* Top Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Info & Social Links */}
          <div className="space-y-4">
            <img
              src={logo}
              alt="Dev Stack Logo"
              className="h-7 object-contain"
            />
            <p className="text-gray-400 max-w-xs leading-relaxed">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="flex items-center gap-4 text-gray-700 font-medium">
              <a
                href="#github"
                className="hover:text-gray-900 transition-colors"
              >
                GitHub
              </a>
              <a
                href="#twitter"
                className="hover:text-gray-900 transition-colors"
              >
                Twitter
              </a>
              <a
                href="#linkedin"
                className="hover:text-gray-900 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-3">
            <h4 className="font-bold text-gray-900 tracking-wider uppercase text-[11px]">
              PRODUCT
            </h4>
            <ul className="space-y-2 text-gray-500">
              <li>
                <a href="#home" className="hover:text-gray-900">
                  Home
                </a>
              </li>
              <li>
                <a href="#technologies" className="hover:text-gray-900">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-gray-900">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h4 className="font-bold text-gray-900 tracking-wider uppercase text-[11px]">
              COMPANY
            </h4>
            <ul className="space-y-2 text-gray-500">
              <li>
                <a href="#about" className="hover:text-gray-900">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-900">
                  Contact
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-gray-900">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h4 className="font-bold text-gray-900 tracking-wider uppercase text-[11px]">
              LEGAL
            </h4>
            <ul className="space-y-2 text-gray-500">
              <li>
                <a href="#privacy" className="hover:text-gray-900">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-gray-900">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Bottom Copyright */}
        <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between text-gray-400 gap-4">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-gray-600">
              Privacy
            </a>
            <a href="#terms" className="hover:text-gray-600">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
