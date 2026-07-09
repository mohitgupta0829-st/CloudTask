import Button from "../components/Button/Button";
import Input from "../components/Input/Input";

function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--background)] px-6">

      <div className="w-full max-w-lg rounded-3xl bg-white p-10 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">

        <div className="mb-10">

      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--primary)] text-2xl font-bold text-white">
        C
      </div>
      <h1 className="text-3xl font-bold text-[var(--text)]">
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
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Password
            </label>

            <Input
              type="password"
              placeholder="••••••••"
            />
          </div>
          <div className="flex items-center justify-between text-sm">

            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" />
                Remember me
            </label>
            <button className="text-[var(--primary)] hover:underline">
              Forgot Password?
            </button>
          </div>

          <Button>
            Sign In
          </Button>

        </div>
      </div>

    </div>
  );
}

export default Login;