// components/ProtectedLayout.tsx
"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const PUBLIC_PATHS = ["/login"]; // halaman yang boleh diakses tanpa login

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    // halaman login tidak perlu dicek
    if (PUBLIC_PATHS.includes(pathname)) {
      setChecking(false);
      return;
    }

    if (typeof window !== "undefined") {
      const raw = window.localStorage.getItem("wp_user");

      // kalau belum login, lempar ke /login
      if (!raw) {
        router.replace("/login");
        return;
      }

      // kalau nanti mau cek role admin, bisa parse di sini
      // const user = JSON.parse(raw);

      setChecking(false);
    }
  }, [pathname, router]);

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white shadow px-4 py-2 rounded-lg text-sm text-gray-600">
          Memuat portal, mohon tunggu...
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
