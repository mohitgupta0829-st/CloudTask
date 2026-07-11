import { useState } from "react";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      console.log(response.data);

      localStorage.setItem("token", response.data.token);
      console.log(response.data.token);
      navigate("/dashboard");
      
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--background)] px-6">

      <div className="w-full max-w-lg rounded-3xl bg-white p-10 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">

        <div className="mb-10">

          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--primary)] text-2xl font-bold text-white">
            C
          </div>

          <h1 className="text-3xl font-bold">
            CloudTask
          </h1>

          <p className="mt-2 text-gray-500">
            Plan. Track. Complete.
          </p>

        </div>

        <div className="space-y-6">

          <div>
            <label className="mb-2 block text-sm font-medium">
              Email
            </label>

            <Input
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Password
            </label>

            <Input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between text-sm">

          <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" />
            Remember me
          </label>

          <button
            type="button"
            className="text-[var(--primary)] hover:underline"
          >
            Forgot Password?
          </button>

          </div>

          <Button onClick={handleLogin}>
            Sign In
          </Button>
          <p className="mt-6 text-center text-sm text-gray-500">
              Don't have an account?{" "}
          <button
              type="button"
              className="font-medium text-[var(--primary)] hover:underline"
            >
              Register
          </button>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;