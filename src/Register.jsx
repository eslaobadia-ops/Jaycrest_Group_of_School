import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-blue-900">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Student Registration
        </h2>

        <form className="space-y-4">
          <input placeholder="Full Name" className="input" />
          <input placeholder="Email Address" className="input" />
          <input placeholder="Username" className="input" />
          <input type="password" placeholder="Password" className="input" />
          <input type="password" placeholder="Confirm Password" className="input" />

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
            Create Account
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link to="/" className="text-blue-600 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

