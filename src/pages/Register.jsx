import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { updateProfile } from "firebase/auth";

export default function Register() {
  const { register } = useAuth();

  const navigate = useNavigate();
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    setError("");

    try {
  const credential = await register(email, password);

  await updateProfile(credential.user, {
    displayName: name,
  });

  navigate("/dashboard");
} catch (err) {
  setError(err.message);
}
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-96"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">
          Register
        </h1>

        {error && (
          <p className="text-red-500 mb-4">{error}</p>
        )}
        <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-3 rounded mb-4"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded mb-6"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
        >
          Register
        </button>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link className="text-blue-600" to="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}