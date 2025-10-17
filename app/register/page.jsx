"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "@/Redux/slices/userSlice";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);

  // ✅ نجيب المستخدمين من localStorage أول ما الصفحة تشتغل (في المتصفح فقط)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUsers = localStorage.getItem("users");
      if (storedUsers) {
        setUsers(JSON.parse(storedUsers));
      }
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !confirm) {
      return setError("من فضلك أدخل جميع البيانات");
    }

    if (password !== confirm) {
      return setError("كلمة السر غير متطابقة");
    }

    // ✅ تحقق إذا المستخدم موجود بالفعل
    const existingUser = users.find((u) => u.email === email);
    if (existingUser) {
      return setError("المستخدم موجود بالفعل");
    }

    // ✅ إنشاء المستخدم الجديد
    const newUser = { email, password };

    // حفظ المستخدم في localStorage
    const updatedUsers = [...users, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    // إرسال المستخدم للـ Redux store
    dispatch(register(newUser));

    // تحويل المستخدم للصفحة الرئيسية
    router.push("/");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-md rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          إنشاء حساب جديد
        </h2>

        {error && (
          <div className="mb-4 text-red-600 text-sm text-center">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-1">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">كلمة المرور</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">
              تأكيد كلمة المرور
            </label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
          >
            إنشاء الحساب
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          لديك حساب بالفعل؟{" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            تسجيل الدخول
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
