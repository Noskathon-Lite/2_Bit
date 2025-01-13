import React from "react";
import Header from "../Header";

const AboutUs: React.FC = () => {
  return (
    <div>
      <Header showLoginButton={false} />

      {/* Image Section */}
      <section className="w-full">
        <img
          src="/campus.jpg"
          alt="About Us Banner"
          className="w-full h-[50vh] object-cover"
        />
      </section>

      {/* Mission Section */}
      <section className="container mx-auto p-8 mb-0" id="mission">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="mb-4">
          Our mission is to connect students with the exciting events happening
          in different campuses, making it easier for them to discover and
          participate in activities that interest them. We also try to make it
          easier for the organizers to reach out to a larger audience.
        </p>
      </section>

      {/* Vision Section */}
      <section className="container mx-auto p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
        <p className="mb-4">
          We envision a campus where every student is actively engaged in the
          events that shape their college experience, enriching their time at
          university.
        </p>
      </section>

      {/* Team Section */}
      <section className="container mx-auto p-8 mb-8" id="team">
        <h2 className="text-2xl font-bold mb-4">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <img
              src="/Sujit.jpeg"
              alt="Team Member 1"
              className="rounded-full w-32 h-32 mx-auto mb-4"
            />
            <h3 className="font-semibold">Sujit Bhattarai</h3>
          </div>
          <div className="text-center">
            <img
              src="/Adarsha.jpeg"
              alt="Team Member 2"
              className="rounded-full w-32 h-32 mx-auto mb-4"
            />
            <h3 className="font-semibold">Adarsha Pokharel</h3>
          </div>
          <div className="text-center">
            <img
              src="/Devendra.png"
              alt="Team Member 3"
              className="rounded-full w-32 h-32 mx-auto mb-4"
            />
            <h3 className="font-semibold">Devendra Khatri</h3>
          </div>
          <div className="text-center">
            <img
              src="/Aakriti.jpeg"
              alt="Team Member 4"
              className="rounded-full w-32 h-32 mx-auto mb-4"
            />
            <h3 className="font-semibold">Aakriti Dahal</h3>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="container mx-auto p-8 mb-8" id="history">
        <h2 className="text-2xl font-bold mb-4">Our Journey</h2>
        <ul className="space-y-4">
          <li className="flex items-center">
            <span className="w-4 h-4 rounded-full bg-green-500 mr-2"></span>{" "}
            Launched in 2025
          </li>
          <li className="flex items-center">
            <span className="w-4 h-4 rounded-full bg-green-500 mr-2"></span>{" "}
            Created in Noskathon-Lite
          </li>
          <li className="flex items-center">
            <span className="w-4 h-4 rounded-full bg-green-500 mr-2"></span>{" "}
            Open Source Project
          </li>
        </ul>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4">What Our Users Say</h2>
        <div className="space-y-4">
          <blockquote className="italic">
            "Campus Events helped me find so many fun activities from different
            campus!"
          </blockquote>
          <cite>- Sitashma, Student</cite>
          <blockquote className="italic">
            "We have been getting more participants for our events since we
            started using Campus Events."
          </blockquote>
          <cite>- IT Club of Balkumari</cite>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto p-8 text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Join Us Today!</h2>
        <p className="mb-4">
          Stay updated and participate in exciting campus events. Become a part
          of our community.
        </p>
        <a
          href="/register"
          className="inline-block bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200"
        >
          Get Started
        </a>
      </section>
    </div>
  );
};

export default AboutUs;
