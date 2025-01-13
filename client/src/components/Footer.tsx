import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-green-600 to-green-800 text-white p-8">
      <div className="container mx-auto">
        {/* Main Section */}
        <div className="flex flex-wrap md:flex-nowrap justify-between items-start space-y-8 md:space-y-0">
          {/* Campus Events Section */}
          <div className="md:w-1/4">
            <h2 className="text-2xl font-bold">Campus Events</h2>
            <p className="text-sm mt-2">Connecting students with events.</p>
          </div>
          {/* Other Sections */}
          <div className="flex justify-between w-full md:w-3/4">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg mb-4">About Us</h3>
              <a
                href="/aboutus#mission"
                className="block hover:underline hover:text-green-300 transition duration-200"
              >
                Our Mission
              </a>
              <a
                href="/aboutus#team"
                className="block hover:underline hover:text-green-300 transition duration-200"
              >
                Our Team
              </a>
              <a
                href="/aboutus#history"
                className="block hover:underline hover:text-green-300 transition duration-200"
              >
                History
              </a>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg mb-4">Events</h3>
              <a
                href="/upcoming-events"
                className="block hover:underline hover:text-green-300 transition duration-200"
              >
                Upcoming Events
              </a>
              <a
                href="/event-gallery"
                className="block hover:underline hover:text-green-300 transition duration-200"
              >
                Event Gallery
              </a>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg mb-4">Support</h3>
              <a
                href="/contact"
                className="block hover:underline hover:text-green-300 transition duration-200"
              >
                Contact Us
              </a>
              <a
                href="/faq"
                className="block hover:underline hover:text-green-300 transition duration-200"
              >
                FAQ
              </a>
              <a
                href="/contact"
                className="block hover:underline hover:text-green-300 transition duration-200"
              >
                Feedback
              </a>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg mb-4">Legal</h3>
              <a
                href="/privacy-policy"
                className="block hover:underline hover:text-green-300 transition duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-and-conditions"
                className="block hover:underline hover:text-green-300 transition duration-200"
              >
                Terms of Service
              </a>
              <a
                href="/cookie-policy"
                className="block hover:underline hover:text-green-300 transition duration-200"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="mt-8 text-center">
          <p className="text-sm mb-4">
            © 2025 Campus Events. All rights reserved.
          </p>
          <p className="text-sm">Follow us on social media:</p>
          <div className="flex justify-center space-x-6 mt-2">
            <a
              href="https://www.facebook.com/nosklub"
              className="hover:underline hover:text-green-300 transition duration-200"
            >
              Facebook
            </a>
            <a
              href="https://x.com/open_nosk"
              className="hover:underline hover:text-green-300 transition duration-200"
            >
              Twitter
            </a>
            <a
              href="https://www.instagram.com/officialnosk/"
              className="hover:underline hover:text-green-300 transition duration-200"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/officialnosk/posts/?feedView=all"
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
