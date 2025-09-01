'use client';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  type Message = {
    role: string;
    content: string;
    error: boolean;
    whatsapp?: string | null;
  };

  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: '👋 Hello! Welcome to Refly. We help businesses grow with smart digital solutions 🚀. How can I assist you today?',
      error: false,
      whatsapp: null,
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { role: 'user', content: input, error: false };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();

      // 👇 Save assistant message with error + whatsapp link if available
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: data.reply,
          error: data.error || false,
          whatsapp: data.whatsapp || null,
        },
      ]);
    } catch (err) {
      // 👇 Fallback if API itself crashes
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: '⚠️ Unable to connect right now. Please contact us on WhatsApp:',
          error: true,
          whatsapp: 'https://wa.me/923356226026?text=Hi%20Refly%20Team%2C%20I%20need%20help!',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !loading) {
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="w-[90vw] sm:w-[400px] md:w-[450px] h-[70vh] sm:h-[550px] bg-gray-900 shadow-2xl rounded-2xl flex flex-col overflow-hidden border border-gray-800"
        >
          <div className="bg-blue-700 text-white px-4 py-3 flex justify-between items-center">
            <h2 className="font-semibold text-lg">Refly Chatbot</h2>
            <button onClick={() => setOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 p-4 space-y-3 overflow-y-auto text-sm">
            {messages.map((msg, i) => (
              <div key={i} className={`p-3 rounded-xl max-w-[80%] ${msg.role === 'user' ? 'bg-blue-600 text-white ml-auto' : 'bg-gray-800 text-gray-100'}`}>
                {msg.error ? (
                  <div className="flex flex-col items-start space-y-2">
                    <p>{msg.content}</p>
                    <a href={msg.whatsapp ?? undefined} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700">
                      Chat on WhatsApp
                    </a>
                  </div>
                ) : (
                  msg.content
                )}
              </div>
            ))}
            {loading && <div className="text-gray-400 text-xs">Thinking...</div>}
          </div>

          {/* Input */}
          <div className="border-t border-gray-800 p-2 bg-gray-900 flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
              className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-3 py-2 text-sm text-gray-100 placeholder-gray-400 focus:outline-none"
            />
            <button onClick={sendMessage} disabled={loading} className="bg-blue-700 px-3 py-2 rounded-xl text-sm hover:bg-blue-800 disabled:opacity-50">
              Send
            </button>
          </div>
        </motion.div>
      )}

      {/* Floating Button */}
      {!open && (
        <motion.button onClick={() => setOpen(true)} className="bg-blue-700 text-white p-4 rounded-full shadow-lg hover:bg-blue-800 border border-gray-800" whileTap={{ scale: 0.9 }}>
          <MessageCircle className="w-6 h-6" />
        </motion.button>
      )}
    </div>
  );
}
