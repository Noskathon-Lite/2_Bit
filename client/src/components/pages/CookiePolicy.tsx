import React from "react";

const CookiePolicy: React.FC = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-6">
        <button
          onClick={() => window.history.back()}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-8"
        >
          Go Back
        </button>

        <h2 className="text-3xl font-bold text-center mb-8">Cookie Policy</h2>
        <p className="text-lg text-gray-700 mb-6">
          This cookie policy explains how we use cookies on Campus Events. By
          using our website, you consent to our use of cookies in accordance
          with this policy.
        </p>

        <h3 className="text-2xl font-semibold mb-4">What Are Cookies?</h3>
        <p className="text-lg text-gray-700 mb-4">
          Cookies are small text files stored on your device when you visit
          websites. They help us enhance your browsing experience.
        </p>

        <h3 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h3>
        <ul className="list-disc pl-6">
          <li>
            <strong>Essential Cookies:</strong> These are necessary for the
            website to function properly.
          </li>
          <li>
            <strong>Performance Cookies:</strong> These help us analyze website
            traffic and user behavior.
          </li>
          <li>
            <strong>Advertising Cookies:</strong> These are used to track users
            across websites for targeted advertising.
          </li>
        </ul>

        <h3 className="text-2xl font-semibold mb-4">Managing Cookies</h3>
        <p className="text-lg text-gray-700 mb-4">
          You can manage your cookie preferences by adjusting your browser
          settings. However, please note that disabling cookies may affect your
          website experience.
        </p>

        <h3 className="text-2xl font-semibold mb-4">Changes to This Policy</h3>
        <p className="text-lg text-gray-700 mb-4">
          We may update this cookie policy from time to time. We encourage you
          to review this page periodically for any changes.
        </p>

        <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
        <p className="text-lg text-gray-700 mb-4">
          If you have any questions about our cookie policy, please contact us
          at:{" "}
          <a href="mailto:info@campusevents.com" className="text-green-500">
            info@campusevents.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default CookiePolicy;
