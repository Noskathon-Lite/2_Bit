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
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    studentId: "",
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
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Common validation
    if (userType === "user") {
      if (
        !formData.email ||
        !formData.password ||
        !formData.confirmPassword ||
        !formData.firstName ||
        !formData.lastName ||
        !formData.studentId
      ) {
        setError("Please fill in all required fields");
        return;
      }
    } else if (userType === "organization") {
      if (
        !formData.orgName ||
        !formData.orgEmail ||
        !formData.orgPhone ||
        !formData.advisorName ||
        !formData.advisorEmail
      ) {
        setError("Please fill in all required fields");
        return;
      }
    }

    // Email validation
    const emailToCheck =
      userType === "user" ? formData.email : formData.orgEmail;
    if (!validateEmail(emailToCheck)) {
      setError("Please enter a valid email address");
      return;
    }

    if (userType === "user") {
      // Password validation
      if (formData.password.length < 8) {
        setError("Password must be at least 8 characters long");
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match");
        return;
      }
    }

    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // Here you would make your actual API call
      console.log("Registration attempted with:", { userType, formData });
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
            value={formData.firstName}
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
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="studentId">Address</Label>
        <Input
          id="studentId"
          value={formData.studentId}
          onChange={handleInputChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password *</Label>
        <Input
          id="password"
          type="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Confirm Password *</Label>
        <Input
          id="confirmPassword"
          type="password"
          value={formData.confirmPassword}
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
          value={formData.orgName}
          onChange={handleInputChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="orgDescription">Organization Description</Label>
        <Textarea
          id="orgDescription"
          value={formData.orgDescription}
          onChange={handleInputChange}
          placeholder="Tell us about your organization..."
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="orgEmail">Organization Email *</Label>
        <Input
          id="orgEmail"
          type="email"
          value={formData.orgEmail}
          onChange={handleInputChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="orgPhone">Organization Phone *</Label>
        <Input
          id="orgPhone"
          type="tel"
          value={formData.orgPhone}
          onChange={handleInputChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="advisorName">Faculty Advisor Name *</Label>
        <Input
          id="advisorName"
          value={formData.advisorName}
          onChange={handleInputChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="advisorEmail">Faculty Advisor Email *</Label>
        <Input
          id="advisorEmail"
          type="email"
          value={formData.advisorEmail}
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
          <Link to="/login" className="text-blue-600 hover:underline">
            Sign in
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default Register;
