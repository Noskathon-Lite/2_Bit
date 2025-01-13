import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-6">
        <button
          onClick={() => window.history.back()}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-8"
        >
          Go Back
        </button>

        <h2 className="text-3xl font-bold text-center mb-8">Privacy Policy</h2>
        <p className="text-lg text-gray-700 mb-6">
          At Campus Events, your privacy is of paramount importance. This
          privacy policy document outlines the types of personal information
          that is collected and recorded by Campus Events and how we use it.
        </p>

        <h3 className="text-2xl font-semibold mb-4">Information We Collect</h3>
        <p className="text-lg text-gray-700 mb-4">
          We collect various types of information, including:
        </p>
        <ul className="list-disc pl-6">
          <li>
            Personal information such as your name, email, and contact
            information.
          </li>
          <li>
            Usage data such as IP addresses, browser information, and
            interactions with our site.
          </li>
        </ul>

        <h3 className="text-2xl font-semibold mb-4">
          How We Use Your Information
        </h3>
        <p className="text-lg text-gray-700 mb-4">
          Your information helps us to:
        </p>
        <ul className="list-disc pl-6">
          <li>Improve our website and services.</li>
          <li>Personalize user experience.</li>
          <li>Send updates or promotional material (if you have opted-in).</li>
        </ul>

        <h3 className="text-2xl font-semibold mb-4">Third-Party Links</h3>
        <p className="text-lg text-gray-700 mb-4">
          Our website may contain links to third-party websites. We are not
          responsible for the privacy practices of these external sites.
        </p>

        <h3 className="text-2xl font-semibold mb-4">Data Security</h3>
        <p className="text-lg text-gray-700 mb-4">
          We implement security measures to protect your data. However, no
          method of transmission over the internet is 100% secure.
        </p>

        <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
        <p className="text-lg text-gray-700 mb-4">
          If you have any questions or concerns regarding our privacy policy,
          feel free to contact us at:{" "}
          <a href="mailto:info@campusevents.com" className="text-green-500">
            info@campusevents.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
