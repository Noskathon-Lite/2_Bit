import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Register from "./components/pages/Register";
import CreateEventForm from "./components/pages/CreateEvent";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/create-event" element={<CreateEventForm />} />
        <Route path="/register" element={<Register />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};


export default App;
