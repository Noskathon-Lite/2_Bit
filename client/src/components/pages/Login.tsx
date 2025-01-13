// src/components/LoginForm.js
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { login } from "@/services/authService";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(""); // Clear any existing errors before validation

    // // Basic validation for email and password
    // if (!email || !password) {
    //   setError("Please fill in all fields"); // If either email or password is empty
    //   return;
    // }

    // // Validate email format
    // if (!validateEmail(email)) {
    //   setError("Please enter a valid email address"); // If email is not valid
    //   return;
    // }

    // // Check password length
    // if (password.length < 6) {
    //   setError("Password must be at least 6 characters long"); // If password is too short
    //   return;
    // }

    // // Set loading state while waiting for the API call
    // setLoading(true);

    // Simulate API call
    try {
      
      await login({ email, password }); // Attempt to log in
      console.log(email, password);
      // Handle success if needed (e.g., redirect to dashboard)
    } catch (err) {
      setError("An error occurred during login"); // Catch any error during login
    } finally {
      setLoading(false); // Set loading to false once the process completes
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto mt-20">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Campus Events Login
        </CardTitle>
        <CardDescription className="text-center">
          Access exclusive campus events and activities
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@university.edu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full"
            />
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2 text-sm text-center">
        {/* <a href="#" className="text-blue-600 hover:underline">
          Forgot password?
        </a> */}
        <p>
          Don't have an account?{" "}
          <a href="/register" className="text-primary hover:underline">
            Sign up
          </a>
        </p>
      </CardFooter>
    </Card>
  );
};

export default Login;
