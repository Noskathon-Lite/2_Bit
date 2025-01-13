import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SuccessPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="text-center p-6 bg-white shadow-md rounded-lg max-w-sm w-full">
        <h1 className="text-2xl font-bold text-green-500 mb-4">
          You have successfully verified.
        </h1>
        <p className="text-gray-600 mb-6">
          Please login to continue.
        </p>
        <Link to="/login">
          <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
