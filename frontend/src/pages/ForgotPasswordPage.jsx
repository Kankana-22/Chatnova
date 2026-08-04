import { useState } from "react";
import { Link } from "react-router";
import { ShipWheelIcon } from "lucide-react";
import toast from "react-hot-toast";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Later we will connect this with backend API
    toast.success("Password reset link sent!");

    setEmail("");
  };

  return (
    <div
      className="h-screen flex items-center justify-center p-4"
      data-theme="synthwave"
    >
      <div className="w-full max-w-md bg-base-100 rounded-xl shadow-lg border border-primary/25 p-8">

        {/* Logo */}
        <div className="flex items-center gap-2 mb-6">
          <ShipWheelIcon className="size-9 text-primary" />

          <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Chatnova
          </span>
        </div>


        <h2 className="text-2xl font-semibold mb-2">
          Forgot Password?
        </h2>

        <p className="text-sm opacity-70 mb-6">
          Enter your email address and we will send you a password reset link.
        </p>


        <form onSubmit={handleSubmit}>

          <div className="form-control w-full space-y-2">

            <label className="label">
              <span className="label-text">
                Email
              </span>
            </label>

            <input
              type="email"
              placeholder="hello@gmail.com"
              className="input input-bordered w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

          </div>


          <button
            type="submit"
            className="btn btn-primary w-full mt-5"
          >
            Send Reset Link
          </button>


        </form>


        <div className="text-center mt-5">

          <Link
            to="/login"
            className="text-primary hover:underline text-sm"
          >
            Back to Login
          </Link>

        </div>


      </div>
    </div>
  );
};

export default ForgotPasswordPage;