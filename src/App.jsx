import React from "react";
import Button from "./components/Elements/Button";

function App() {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold text-blue-600 mb-2">Login</h1>
        <p className="font-medium text-slate-500">
          Welcome, Please enter your credentials!
        </p>
        <form action="">
          <div className="mb-6">
            <label 
              htmlFor="email"
              className="block text-slate-700 text-sm font-bold mb-2 mt-5">
              Email
            </label>
            <input 
              type="text"
              className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-40"
              placeholder="example@mail.com"
            />
          </div>
          <div className="className">
            <label 
              htmlFor="password"
              className="block text-slate-700 text-sm font-bold mb-2">
              Password
            </label>
            <input 
              type="password"
              className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-40"
              placeholder="************"
            />
          </div>
          <Button classname="bg-blue-600 w-full mt-5">Login</Button>
        </form>
      </div>
    </div>
  );
}

export default App
