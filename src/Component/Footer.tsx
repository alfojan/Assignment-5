import React from "react";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import logo from "../assets/logo-text.png";

const Footer: React.FC = () => {
  return (
    <footer
      id="about"
      className="border-t border-gray-100 bg-gray-50 text-gray-600"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img
              src={logo}
              alt="Dev Stack Logo"
              className="h-8 object-contain mb-4"
            />

            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Curated technologies and development tools to help you build a
              modern and effective development stack.
            </p>

            <div id="contact" className="flex items-center gap-4 mt-5">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-gray-500 hover:text-gray-900 transition-colors"
              >
                <FiGithub size={19} />
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="text-gray-500 hover:text-gray-900 transition-colors"
              >
                <FiTwitter size={19} />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-gray-500 hover:text-gray-900 transition-colors"
              >
                <FiLinkedin size={19} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-bold text-gray-900 text-sm mb-4">Product</h3>

            <ul className="space-y-3 text-sm">
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
          <div>
            <h3 className="font-bold text-gray-900 text-sm mb-4">Company</h3>

            <ul className="space-y-3 text-sm">
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
          <div>
            <h3 className="font-bold text-gray-900 text-sm mb-4">Legal</h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a href="#privacy" className="hover:text-gray-900">
                  Privacy
                </a>
              </li>

              <li>
                <a href="#terms" className="hover:text-gray-900">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-4">
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
