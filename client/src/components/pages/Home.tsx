import React from "react";
import Header from "../Header";
import UserDashboard from "./UserDashboard";
import OrgDashboard from "./OrgDashboard";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

const Home = () => {
  const { user, userType } = useAuth();
  console.log({ home: user });

  return <div>{userType ? <UserDashboard /> : <OrgDashboard />}</div>;
};

export default Home;
