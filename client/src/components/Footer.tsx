import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-green-600 to-green-800 text-white p-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-12">
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold">Campus Events</h2>
          <p className="text-sm mt-2">Connecting students with events.</p>
        </div>
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12">
          <div>
            <h3 className="font-semibold text-lg mb-4">About Us</h3>
            <a
              href="#mission"
              className="block hover:underline hover:text-green-300 transition duration-200"
            >
              Our Mission
            </a>
            <a
              href="#team"
              className="block hover:underline hover:text-green-300 transition duration-200"
            >
              Our Team
            </a>
            <a
              href="#history"
              className="block hover:underline hover:text-green-300 transition duration-200"
            >
              History
            </a>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Events</h3>
            <a
              href="#upcoming"
              className="block hover:underline hover:text-green-300 transition duration-200"
            >
              Upcoming Events
            </a>
            <a
              href="#past"
              className="block hover:underline hover:text-green-300 transition duration-200"
            >
              Past Events
            </a>
            <a
              href="#gallery"
              className="block hover:underline hover:text-green-300 transition duration-200"
            >
              Event Gallery
            </a>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <a
              href="#contact"
              className="block hover:underline hover:text-green-300 transition duration-200"
            >
              Contact Us
            </a>
            <a
              href="#faq"
              className="block hover:underline hover:text-green-300 transition duration-200"
            >
              FAQ
            </a>
            <a
              href="#feedback"
              className="block hover:underline hover:text-green-300 transition duration-200"
            >
              Feedback
            </a>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <a
              href="#privacy"
              className="block hover:underline hover:text-green-300 transition duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="block hover:underline hover:text-green-300 transition duration-200"
            >
              Terms of Service
            </a>
            <a
              href="#cookies"
              className="block hover:underline hover:text-green-300 transition duration-200"
            >
              Cookie Policy
            </a>
          </div>
        </div>
        <div className="mt-6 md:mt-0">
          <p className="text-sm mb-4">
            © 2025 Campus Events. All rights reserved.
          </p>
          <p className="text-sm">Follow us on social media:</p>
          <div className="flex space-x-6 mt-2">
            <a
              href="#facebook"
              className="hover:underline hover:text-green-300 transition duration-200"
            >
              Facebook
            </a>
            <a
              href="#twitter"
              className="hover:underline hover:text-green-300 transition duration-200"
            >
              Twitter
            </a>
            <a
              href="#instagram"
              className="hover:underline hover:text-green-300 transition duration-200"
            >
              Instagram
            </a>
            <a
              href="#linkedin"
              className="hover:underline hover:text-green-300 transition duration-200"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
