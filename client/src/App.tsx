import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Register from "./components/pages/Register";
import CreateEventForm from "./components/pages/CreateEvent";
import { Landing } from "./components/pages/Landing";
import AboutUs from "./components/pages/AboutUs";
import Contact from "./components/pages/Contact";
import EventDetail from "./components/EventDetail";
import PrivateRoute from "./PrivateRoute";
import UserEventRegistration from "./components/pages/UserEventRegistration";
import FAQ from "./components/pages/FAQ";
import UserDashboard from "./components/pages/UserDashboard";
import EventGallery from "./components/pages/EventGallery";
import UpcomingEvents from "./components/pages/UpcomingEvents";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import TermsAndConditions from "./components/pages/TermsAndCondition";
import CookiePolicy from "./components/pages/CookiePolicy";
import SuccessPage from "./components/pages/SuccessPage";
import UserProfile from "./components/pages/UserProfile";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/event" element={<EventDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/validate/:id" element={<SuccessPage />} />
        <Route
          path="/user-event-registration"
          element={<UserEventRegistration />}
        />

        {/* Private Routes */}
        <Route
          path="/create-event"
          element={
            <PrivateRoute>
              <CreateEventForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/event-gallery" element={<EventGallery />} />
        <Route path="/upcoming-events" element={<UpcomingEvents />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/user-profile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
};

export default App;
