import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuthStore } from "@/store/useAuthStore";

const Login = () => {
  const navigate = useNavigate();
  const { login, loading, error } = useAuthStore()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const success = await login({ email: formData.email, password: formData.password });

    if (success) {
      navigate("/");
    }
  };

  return (
    <div className="auth-box">
      <h2>Login</h2>

      {error && (
        <div className="p-3 text-sm text-red-500 bg-red-50 rounded-md">
          {error}
        </div>
      )
      }


      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="*****"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={loading} onClick={handleSubmit}>
          {loading ? "Yuklanmoqda..." : "Kirish"}
        </button>
      </form>


      <p>
        Don’t have an account? <Link to="/register" className="text-blue-600 hover:underline">Register</Link>
      </p>
    </div>
  );
}

export default Login;