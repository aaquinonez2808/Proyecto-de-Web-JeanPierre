import React from "react";
import { useForm } from "../../hooks/useForm";
import { login } from "../../services/AuthService";

export const LoginPage = () => {
  const { password, email, onInputChange } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password).then((data) => {
      localStorage.setItem("token", data);
        window.location.replace('/');
    });
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="bg-slate-800 w-1/3 p-4 rounded-lg grid place-items-center ">
        <h2 className="text-3xl text-white text-center">Inicio Sesion</h2>
        <form className="mt-4 w-full p-3" onSubmit={handleSubmit}>
          <div className="mb-4 w-full">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
