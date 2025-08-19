// components/ui/MyButton.tsx
"use client";

import { motion } from "framer-motion";

type MyButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function MyButton({ children, onClick }: MyButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.1, boxShadow: "0 0 20px #3b82f6" }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="px-6 py-3 rounded-2xl bg-blue-600 text-white shadow-lg"
    >
      {children}
    </motion.button>
  );
}
