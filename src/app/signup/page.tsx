"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [business, setBusiness] = useState("");

  const handleSignUp = () => {
    console.log("Cadastro:", { name, email, password, business });
    alert("Cadastro simulado!");
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gray-800 p-8 rounded-xl shadow-2xl max-w-md w-full border border-gray-700"
      >
        <h1 className="text-3xl font-bold text-white mb-6 text-center">Junte-se ao GrowBot</h1>
        <div className="space-y-6">
          <div>
            <label className="block text-gray-300 font-medium mb-2">Nome</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="João Silva"
            />
          </div>
          <div>
            <label className="block text-gray-300 font-medium mb-2">E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="seu@email.com"
            />
          </div>
          <div>
            <label className="block text-gray-300 font-medium mb-2">Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div>
          <div>
            <label className="block text-gray-300 font-medium mb-2">Nome do Negócio</label>
            <input
              type="text"
              value={business}
              onChange={(e) => setBusiness(e.target.value)}
              className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Sabor Brasileiro"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSignUp}
            className="w-full bg-blue-500 text-white py-3 rounded-full font-semibold hover:bg-blue-600 transition"
          >
            Cadastrar
          </motion.button>
        </div>
        <p className="text-center text-gray-400 mt-4">
          Já tem conta? <Link href="/login" className="text-blue-400 hover:underline">Login</Link>
        </p>
      </motion.div>
    </div>
  );
}