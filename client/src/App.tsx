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

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/event/:id" element={<EventDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/user-event-registration"
          element={<UserEventRegistration />}
        />

        {/* Private Routes */}
        <Route
          path="/create-event"
          element={
            // <PrivateRoute>
            <CreateEventForm />
            // </PrivateRoute>
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
      </Routes>
    </Router>
  );
};

export default App;
