import { useAuthStore } from "@/store/useAuthStore";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const { register, isLoading, error } = useAuthStore()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",

  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const success = await register(formData)

    if (success) {
      alert("Registered successfully!")
      navigate("/login")
    }
  };

  return (
    <div className="auth-box">
      <h2>Register</h2>

      {error && (
        <div className="p-3 text-sm text-red-500 bg-red-50 rounded-md">
          {error}
        </div>
      )
      }

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" required placeholder="Name" value={formData.name} onChange={handleChange} />
        <input type="email" name="email" required placeholder="Email" value={formData.email} onChange={handleChange} />
        <input type="password" name="password" required placeholder="*****" value={formData.password} onChange={handleChange} />
        <button type="submit" disabled={isLoading}>Register</button>
      </form>

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}
