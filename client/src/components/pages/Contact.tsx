import React from "react";
import Header from "../Header";

const Contact: React.FC = () => {
  return (
    <div>
      <Header showLoginButton={false} />
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="mb-4">
          We would love to hear from you! If you have any questions,
          suggestions, or feedback, please reach out to us.
        </p>
        <form className="space-y-4">
          <div>
            <label className="block mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="border rounded-lg p-2 w-full"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border rounded-lg p-2 w-full"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              className="border rounded-lg p-2 w-full"
              rows={4}
              placeholder="Your Message"
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
