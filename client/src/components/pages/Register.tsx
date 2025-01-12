import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";

const Register = () => {
  const [userType, setUserType] = useState("");
  const [studentData, setStudentData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    studentId: "",
  });
  const [orgData, setOrgData] = useState({
    orgName: "",
    orgDescription: "",
    orgEmail: "",
    orgPhone: "",
    advisorName: "",
    advisorEmail: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (userType === "user") {
      setStudentData((prev) => ({
        ...prev,
        [id]: value,
      }));
    } else if (userType === "organization") {
      setOrgData((prev) => ({
        ...prev,
        [id]: value,
      }));
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleStudentSubmit = async () => {
    if (
      !studentData.email ||
      !studentData.password ||
      !studentData.confirmPassword ||
      !studentData.firstName ||
      !studentData.lastName ||
      !studentData.studentId
    ) {
      setError("Please fill in all required fields");
      return false;
    }

    if (!validateEmail(studentData.email)) {
      setError("Please enter a valid email address");
      return false;
    }

    if (studentData.password.length < 8) {
      setError("Password must be at least 8 characters long");
      return false;
    }

    if (studentData.password !== studentData.confirmPassword) {
      setError("Passwords do not match");
      return false;
    }

    return true;
  };

  const handleOrgSubmit = async () => {
    if (
      !orgData.orgName ||
      !orgData.orgEmail ||
      !orgData.orgPhone ||
      !orgData.advisorName ||
      !orgData.advisorEmail
    ) {
      setError("Please fill in all required fields");
      return false;
    }

    if (!validateEmail(orgData.orgEmail)) {
      setError("Please enter a valid email address");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    let isValid = false;
    setLoading(true);

    if (userType === "user") {
      isValid = await handleStudentSubmit();
    } else if (userType === "organization") {
      isValid = await handleOrgSubmit();
    }

    if (!isValid) {
      setLoading(false);
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
      console.log("Registration attempted with:", {
        userType,
        data: userType === "user" ? studentData : orgData,
      });
    } catch (err) {
      setError("An error occurred during registration");
    } finally {
      setLoading(false);
    }
  };

  const UserForm = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">Name *</Label>
          <Input
            id="firstName"
            value={studentData.firstName}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email"> Email *</Label>
        <Input
          id="email"
          type="email"
          placeholder="you@university.edu"
          value={studentData.email}
          onChange={handleInputChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="studentId">Address</Label>
        <Input
          id="studentId"
          value={studentData.studentId}
          onChange={handleInputChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password *</Label>
        <Input
          id="password"
          type="password"
          value={studentData.password}
          onChange={handleInputChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Confirm Password *</Label>
        <Input
          id="confirmPassword"
          type="password"
          value={studentData.confirmPassword}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );

  const OrganizationForm = () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="orgName">Organization Name *</Label>
        <Input
          id="orgName"
          value={orgData.orgName}
          onChange={handleInputChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="orgDescription">Organization Description</Label>
        <Textarea
          id="orgDescription"
          value={orgData.orgDescription}
          onChange={handleInputChange}
          placeholder="Tell us about your organization..."
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="orgEmail">Organization Email *</Label>
        <Input
          id="orgEmail"
          type="email"
          value={orgData.orgEmail}
          onChange={handleInputChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="orgPhone">Organization Phone *</Label>
        <Input
          id="orgPhone"
          type="tel"
          value={orgData.orgPhone}
          onChange={handleInputChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="advisorName">Faculty Advisor Name *</Label>
        <Input
          id="advisorName"
          value={orgData.advisorName}
          onChange={handleInputChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="advisorEmail">Faculty Advisor Email *</Label>
        <Input
          id="advisorEmail"
          type="email"
          value={orgData.advisorEmail}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );

  return (
    <Card className="w-full max-w-2xl mx-auto mt-20">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Create Account
        </CardTitle>
        <CardDescription className="text-center">
          Join our campus events platform
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-4">
            <Label>I want to register as:</Label>
            <RadioGroup
              value={userType}
              onValueChange={setUserType}
              className="flex flex-col space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="user" id="user" />
                <Label htmlFor="user">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="organization" id="organization" />
                <Label htmlFor="organization">Campus Organization</Label>
              </div>
            </RadioGroup>
          </div>

          {userType === "user" && <UserForm />}
          {userType === "organization" && <OrganizationForm />}

          {userType && (
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Creating Account..." : "Create Account"}
            </Button>
          )}
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-primary hover:underline">
            Login
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default Register;
