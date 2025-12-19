import { Eye, EyeOff } from "lucide-react";
import { useState, type JSX } from "react";
import { useNavigate } from "react-router-dom";
import type { LoginDto } from "../../interfaces/auth.interface";
import { login as loginService } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";

export default function Login(): JSX.Element {
  const navigate = useNavigate();
  const { login: authLogin } = useAuth();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [form, setForm] = useState<LoginDto>({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await loginService(form);

      // Stockage du token uniquement
      authLogin(res.data.accessToken);

      navigate("/layout"); // redirection après login
    } catch (err: any) {
      setError(
        err.response?.data?.message || "Email ou mot de passe incorrect"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950 text-white px-4">
      <div className="w-full max-w-sm space-y-6 px-6">

        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-neutral-900 p-6 rounded-2xl shadow-lg"
        >
          {/* Title */}
          <div className="flex flex-col items-center space-y-3">
            <h1 className="font-bold text-4xl text-lime-400">Login</h1>
          </div>

          {/* Error message */}
          {error && (
            <p className="text-red-400 text-sm text-center">{error}</p>
          )}

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full rounded-xl bg-neutral-900 border border-neutral-800 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lime-400"
          />

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full rounded-xl bg-neutral-900 border border-neutral-800 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lime-400"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white transition cursor-pointer"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-lime-400 py-3 font-semibold text-black hover:bg-lime-300 transition disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed flex items-center justify-center"
          >
            {loading ? "Connexion..." : "Log in"}
          </button>

          {/* Footer */}
          <div className="text-sm text-center">
            <p className="text-neutral-400 hover:text-white cursor-pointer">
              Forgot password?
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
