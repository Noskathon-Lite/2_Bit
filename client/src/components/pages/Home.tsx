import React from "react";
import Header from "../Header";

const Home = () => {
  const [userType, setUserType] = useState(true);
  return <div>{userType ? <UserDashboard /> : <OrgDashboard />}</div>;
};

export default Home;
