import OrgDashboard from "./OrgDashboard";
import UserDashboard from "./UserDashboard";
import { useState } from "react";

const Home = () => {
  const [userType, setUserType] = useState(true);
  return <div>{userType ? <UserDashboard /> : <OrgDashboard />}</div>;
};

export default Home;
