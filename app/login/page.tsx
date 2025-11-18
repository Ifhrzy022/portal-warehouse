// app/login/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DEMO_USER = {
  email: "karyawan@warehouse.com",
  password: "warehouse123",
  name: "Karyawan Baru",
  role: "staff",
};

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState(DEMO_USER.email);
  const [password, setPassword] = useState(DEMO_USER.password);
  const [error, setError] = useState("");

  // kalau sudah login, langsung lempar ke dashboard
  useEffect(() => {
    if (typeof window !== "undefined") {
      const raw = window.localStorage.getItem("wp_user");
      if (raw) {
        router.replace("/");
      }
    }
  }, [router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (email === DEMO_USER.email && password === DEMO_USER.password) {
      if (typeof window !== "undefined") {
        window.localStorage.setItem(
          "wp_user",
          JSON.stringify({
            name: DEMO_USER.name,
            email: DEMO_USER.email,
            role: DEMO_USER.role,
          })
        );
      }
      router.replace("/");
    } else {
      setError("Email atau password tidak sesuai.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="bg-white shadow-xl rounded-2xl max-w-md w-full p-8">
        <div className="mb-6 text-center">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
            🏭
          </div>
          <h1 className="mt-4 text-2xl font-bold text-gray-800">
            Portal Informasi Warehouse
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Login untuk mengakses materi pembelajaran dan progress Anda.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
            <p className="text-xs text-gray-500 mt-1">
              Demo: <span className="font-mono">{DEMO_USER.email}</span>
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <p className="text-xs text-gray-500 mt-1">
              Demo: <span className="font-mono">{DEMO_USER.password}</span>
            </p>
          </div>

          {error && (
            <div className="rounded-lg bg-red-50 border border-red-200 px-3 py-2 text-xs text-red-700">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 text-white py-2.5 text-sm font-semibold hover:bg-blue-700 transition-colors"
          >
            Masuk ke Portal
          </button>
        </form>

        <div className="mt-6 text-xs text-gray-500 text-center">
          Akun ini hanya untuk keperluan demo & skripsi (tanpa backend).
        </div>
      </div>
    </div>
  );
}
