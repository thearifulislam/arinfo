import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.email || !formData.password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simulate authentication
    try {
      // In a real app, you would call an authentication API here
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // For demo purposes, we'll accept specific credentials
      if (
        formData.email === "admin@example.com" &&
        formData.password === "password123"
      ) {
        toast({
          title: "Success!",
          description: "You have successfully logged in.",
        });

        // Redirect to dashboard
        navigate("/dashboard");
      } else {
        toast({
          title: "Authentication Failed",
          description: "Invalid email or password",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Failed to authenticate. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-dark min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full glass-card rounded-2xl p-8 md:p-10">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <h1 className="text-2xl font-bold text-white">
              Ari<span className="text-neon">ful</span>
            </h1>
          </Link>
          <h2 className="text-2xl font-bold mt-6 mb-2">Welcome Back</h2>
          <p className="text-white/60 text-sm">Sign in to your dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-white/40" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-dark pl-10 p-3 rounded-lg border border-white/10 focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon text-white"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <a href="#" className="text-neon text-xs hover:underline">
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-white/40" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-dark pl-10 p-3 rounded-lg border border-white/10 focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon text-white"
                placeholder="••••••••••"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={togglePasswordVisibility}
                tabIndex={-1}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-white/40" />
                ) : (
                  <Eye className="h-5 w-5 text-white/40" />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="primary-button w-full justify-center py-3"
          >
            {isLoading ? (
              <span className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-dark"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Signing in...
              </span>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-white/60 text-sm">
            Don't have an account?{" "}
            <Link to="/signup" className="text-neon hover:underline">
              Sign up
            </Link>
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <Link
            to="/"
            className="text-white/60 text-sm hover:text-white transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
