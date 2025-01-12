import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import EventList from "./components/EventList";
import Footer from "./components/Footer";
import AboutUs from "./components/pages/AboutUs";
import Contact from "./components/pages/Contact";
import EventDetail from "./components/EventDetail"; // Import Event Detail page
import "./index.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
        <Routes>
          <Route path="/" element={<EventList />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events/:eventId" element={<EventDetail />} />{" "}
          {/* Add Event Detail route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
