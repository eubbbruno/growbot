"use client";

import { useState } from "react";
import Link from "next/link";
import { FaCog, FaChartBar, FaSignOutAlt, FaRobot } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("config");
  const [faqs, setFaqs] = useState("");
  const [menu, setMenu] = useState("");
  const [tone, setTone] = useState("Amigável");

  const handleSave = () => {
    const config = { faqs, menu, tone };
    console.log("Config:", config);
    alert("Salvo com sucesso!");
  };

  return (
    <div className="min-h-screen bg-gray-900 flex text-white">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -250 }}
        animate={{ x: 0 }}
        className="w-64 bg-gray-800 p-6 flex flex-col justify-between border-r border-gray-700"
      >
        <div>
          <h2 className="text-2xl font-bold mb-8">GrowBot</h2>
          <nav className="space-y-4">
            <button
              onClick={() => setActiveTab("config")}
              className={`flex items-center w-full p-3 rounded-lg ${activeTab === "config" ? "bg-blue-600" : "hover:bg-gray-700"}`}
            >
              <FaCog className="mr-2" /> Configurações
            </button>
            <button
              onClick={() => setActiveTab("analytics")}
              className={`flex items-center w-full p-3 rounded-lg ${activeTab === "analytics" ? "bg-blue-600" : "hover:bg-gray-700"}`}
            >
              <FaChartBar className="mr-2" /> Analytics
            </button>
            <button
              onClick={() => setActiveTab("preview")}
              className={`flex items-center w-full p-3 rounded-lg ${activeTab === "preview" ? "bg-blue-600" : "hover:bg-gray-700"}`}
            >
              <FaRobot className="mr-2" /> Preview
            </button>
          </nav>
        </div>
        <Link href="/login" className="flex items-center text-gray-400 hover:text-red-500">
          <FaSignOutAlt className="mr-2" /> Sair
        </Link>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {activeTab === "config" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg max-w-3xl"
          >
            <h2 className="text-2xl font-bold mb-6">Configurações</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-gray-300 font-medium mb-2">FAQs</label>
                <textarea
                  value={faqs}
                  onChange={(e) => setFaqs(e.target.value)}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ex.: 'Aceita Pix? Sim!'"
                  rows={4}
                />
              </div>
              <div>
                <label className="block text-gray-300 font-medium mb-2">Menu</label>
                <textarea
                  value={menu}
                  onChange={(e) => setMenu(e.target.value)}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ex.: Feijoada - R$ 25"
                  rows={4}
                />
              </div>
              <div>
                <label className="block text-gray-300 font-medium mb-2">Tom de Voz</label>
                <select
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Amigável</option>
                  <option>Formal</option>
                  <option>Divertido</option>
                </select>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSave}
                className="w-full bg-blue-500 text-white py-3 rounded-full font-semibold hover:bg-blue-600 transition"
              >
                Salvar
              </motion.button>
            </div>
          </motion.div>
        )}
        {activeTab === "analytics" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg max-w-3xl"
          >
            <h2 className="text-2xl font-bold mb-6">Analytics</h2>
            <p className="text-gray-400">Interações: 120 (últimos 7 dias)</p>
            <p className="text-gray-400">Horário de Pico: 18h-20h</p>
            {/* Backend adicionará dados reais depois */}
          </motion.div>
        )}
        {activeTab === "preview" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg max-w-3xl"
          >
            <h2 className="text-2xl font-bold mb-6">Preview do Bot</h2>
            <div className="bg-gray-900 p-4 rounded-lg">
              <p className="text-gray-300">Cliente: Olá!</p>
              <p className="text-blue-400">GrowBot: Oi! Como posso ajudar você hoje?</p>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
}