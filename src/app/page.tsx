"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "../../public/logofor.png";
import Image from "next/image";
import log from "../../public/Computer login-amico.svg";
export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    if (email && password) {
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      {/* Login Form Section */}
      <div className="w-full md:w-1/2 bg-white h-screen flex justify-center items-center py-8 md:py-16 px-4">
        <div className="w-full max-w-md ">
          {/* Logo */}
          <div className="mb-6 md:mb-8">
            <Image
              src={Logo}
              alt="logo"
              className="w-32 md:w-40 h-auto"
              priority
            />
          </div>

          {/* Heading */}
          <div className="mb-6 md:mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black">
              Log in
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              Welcome back, Please enter your details.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-gray-600 text-sm mb-1">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-gray-600"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-gray-600 text-sm mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full p-2 border rounded border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-gray-600"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 transition-colors text-white p-2 rounded font-medium"
            >
              Login
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <span
                className="text-blue-500 cursor-pointer hover:underline"
                onClick={() => router.push("/auth/register")}
              >
                Sign Up
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Image Section - Hidden on mobile */}
      <div className="hidden md:block w-1/2 bg-blue-100">
        <div className="h-full flex items-center justify-center text-white text-xl">
          <Image src={log} alt="login" className="w-[90%] h-[90%]" priority />
        </div>
      </div>
    </div>
  );
}
