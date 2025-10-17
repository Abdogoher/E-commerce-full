"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { login } from "@/Redux/slices/userSlice"; 
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (typeof window === "undefined") return;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    // البحث عن المستخدم بالبريد
    const existingUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (existingUser) {
      // تسجيل الدخول
      dispatch(login(existingUser));
      setError("");
      router.push("/"); // بعد الدخول ممكن تغيرها لأي صفحة تانية
    } else {
      setError("البريد الإلكتروني أو كلمة المرور غير صحيحة");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-md rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          تسجيل الدخول
        </h2>

        {error && (
          <div className="mb-4 text-red-600 text-sm text-center">{error}</div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-600 mb-1">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-green-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">كلمة المرور</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-green-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
          >
            دخول
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          ليس لديك حساب بالفعل؟{" "}
          <Link href="/register" className="text-blue-500 hover:underline">
            تسجيل
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
