import React from "react";

const TermsAndConditions: React.FC = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-6">
        <button
          onClick={() => window.history.back()}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-8"
        >
          Go Back
        </button>

        <h2 className="text-3xl font-bold text-center mb-8">
          Terms and Conditions
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Welcome to Campus Events! By using our website, you agree to comply
          with the following terms and conditions. Please read them carefully.
        </p>

        <h3 className="text-2xl font-semibold mb-4">Usage License</h3>
        <p className="text-lg text-gray-700 mb-4">
          We grant you a non-exclusive, non-transferable license to access and
          use our website for personal, non-commercial purposes.
        </p>

        <h3 className="text-2xl font-semibold mb-4">Prohibited Activities</h3>
        <p className="text-lg text-gray-700 mb-4">You are prohibited from:</p>
        <ul className="list-disc pl-6">
          <li>Engaging in unlawful activities on our site.</li>
          <li>Posting harmful, defamatory, or inappropriate content.</li>
          <li>Disrupting the website's functionality or security.</li>
        </ul>

        <h3 className="text-2xl font-semibold mb-4">Disclaimer</h3>
        <p className="text-lg text-gray-700 mb-4">
          The content provided on this website is for informational purposes
          only. We do not guarantee the accuracy or completeness of any
          information provided.
        </p>

        <h3 className="text-2xl font-semibold mb-4">Limitation of Liability</h3>
        <p className="text-lg text-gray-700 mb-4">
          We are not responsible for any direct or indirect damages resulting
          from the use of our website or services.
        </p>

        <h3 className="text-2xl font-semibold mb-4">Governing Law</h3>
        <p className="text-lg text-gray-700 mb-4">
          These terms and conditions are governed by and construed in accordance
          with the laws of the jurisdiction in which we operate.
        </p>

        <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
        <p className="text-lg text-gray-700 mb-4">
          If you have any questions about our terms and conditions, contact us
          at:{" "}
          <a href="mailto:info@campusevents.com" className="text-green-500">
            info@campusevents.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
