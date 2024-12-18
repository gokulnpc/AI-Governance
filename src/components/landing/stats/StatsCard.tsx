import React from "react";
import { AnimatedCounter } from "./AnimatedCounter";
import { motion } from "framer-motion";

interface StatsCardProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  color?: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({
  value,
  label,
  prefix = "",
  suffix = "",
  color = "blue",
}) => {
  return (
    <motion.div
      className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`text-4xl font-bold mb-2 text-${color}-600`}>
        <AnimatedCounter end={value} prefix={prefix} suffix={suffix} />
      </div>
      <div className="text-gray-600">{label}</div>
    </motion.div>
  );
};
