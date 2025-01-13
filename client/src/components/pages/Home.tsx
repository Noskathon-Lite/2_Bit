import React from "react";
import Header from "../Header";
import UserDashboard from "./UserDashboard";
import OrgDashboard from "./OrgDashboard";
import { useState } from "react";

const Home = () => {
  const [userType, setUserType] = useState(false);
  return <div>{userType ? <UserDashboard /> : <OrgDashboard />}</div>;
};

export default Home;
