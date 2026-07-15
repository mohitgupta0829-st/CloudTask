import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import api from "../services/api";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await api.post("/auth/register", {
        name,
        email,
        password,
      });

      alert(response.data.message);
      navigate("/");

    } catch (error) {
      alert(error.response?.data?.message || "Registration Failed");
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
            Create Account
          </h1>

          <p className="mt-2 text-gray-500">
            Join CloudTask and start managing your work.
          </p>

        </div>

        <div className="space-y-6">

          <div>
            <label className="mb-2 block text-sm font-medium">
              Full Name
            </label>

            <Input
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

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

          <Button onClick={handleRegister}>
            Create Account
          </Button>

          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/")}
              className="font-medium text-[var(--primary)] hover:underline"
            >
              Login
            </button>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;