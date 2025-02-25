"use client"; // Adicione isso no topo

import { useState, useEffect, useRef } from "react";
import { FaRobot, FaTimes } from "react-icons/fa";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([
    { sender: "bot", text: "Olá! Como posso ajudar você hoje?" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    setInput("");

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });
    const data = await response.json();
    setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition"
        >
          <FaRobot size={24} />
        </button>
      ) : (
        <div className="bg-white w-80 h-96 rounded-lg shadow-lg flex flex-col">
          <div className="bg-blue-500 text-white p-3 rounded-t-lg flex justify-between items-center">
            <h2 className="text-lg font-semibold">Chatbot</h2>
            <button onClick={() => setIsOpen(false)}>
              <FaTimes />
            </button>
          </div>
          <div className="flex-1 p-3 overflow-y-auto">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`mb-2 ${
                  msg.sender === "bot" ? "text-left" : "text-right"
                }`}
              >
                <span
                  className={`inline-block p-2 rounded-lg ${
                    msg.sender === "bot" ? "bg-gray-200" : "bg-blue-500 text-white"
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-3 border-t">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Digite sua mensagem..."
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      )}
    </div>
  );
}