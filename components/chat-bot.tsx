'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

export default function Chatbot() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          className="w-80 h-96 bg-gray-900 shadow-2xl rounded-2xl flex flex-col overflow-hidden border border-gray-800"
        >
          <div className="bg-blue-700 text-white px-4 py-3 flex justify-between items-center">
            <h2 className="font-semibold text-lg">Refly Chatbot</h2>
            <button onClick={() => setOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 p-4 space-y-3 overflow-y-auto text-sm">
            <div className="bg-gray-800 text-gray-100 p-3 rounded-xl max-w-[80%]">
              👋 Hello! Welcome to <b>Refly</b>. We help businesses grow with smart digital solutions 🚀. How can I assist you today?
            </div>
          </div>

          <div className="border-t border-gray-800 p-2 bg-gray-900">
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-3 py-2 text-sm text-gray-100 placeholder-gray-400 focus:outline-none"
              disabled
            />
          </div>
        </motion.div>
      )}

      {!open && (
        <motion.button onClick={() => setOpen(true)} className="bg-blue-700 text-white p-4 rounded-full shadow-lg hover:bg-blue-800 border border-gray-800" whileTap={{ scale: 0.9 }}>
          <MessageCircle className="w-6 h-6" />
        </motion.button>
      )}
    </div>
  );
}
