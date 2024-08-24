import React from 'react';
import { FiClipboard } from 'react-icons/fi';

const LoginInfo = () => {
  const adminEmail = "admin@gmail.com";
  const adminPassword = "admin";
  const userEmail = "user@gmail.com";
  const userPassword = "user";

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
      <section>
        <h1 className="text-2xl font-bold mb-4">Login Example Account</h1>
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Admin account</h2>
          <div className="flex items-center justify-between mt-2">
            <span>Email: {adminEmail}</span>
            <button
              className="text-blue-500 hover:text-blue-700"
              onClick={() => copyToClipboard(adminEmail)}
            >
              <FiClipboard className="inline" /> Copy Email
            </button>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span>Password: {adminPassword}</span>
            <button
              className="text-blue-500 hover:text-blue-700"
              onClick={() => copyToClipboard(adminPassword)}
            >
              <FiClipboard className="inline" /> Copy Password
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold">User account</h2>
          <div className="flex items-center justify-between mt-2">
            <span>Email: {userEmail}</span>
            <button
              className="text-blue-500 hover:text-blue-700"
              onClick={() => copyToClipboard(userEmail)}
            >
              <FiClipboard className="inline" /> Copy Email
            </button>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span>Password: {userPassword}</span>
            <button
              className="text-blue-500 hover:text-blue-700"
              onClick={() => copyToClipboard(userPassword)}
            >
              <FiClipboard className="inline" /> Copy Password
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginInfo;
