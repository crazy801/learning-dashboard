"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Rocket,
  Database,
  Sparkles,
} from "lucide-react";

interface Props {
  title: string;
  progress: number;
  icon_name: string;
}

export default function CourseCard({
  title,
  progress,
  icon_name,
}: Props) {

  const icons = {
    Code2,
    Rocket,
    Database,
    Sparkles,
  };

  const Icon =
    icons[icon_name as keyof typeof icons] || Code2;

  return (
    <motion.article
      whileHover={{
        scale: 1.03,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="
      rounded-3xl
      border border-zinc-800
      bg-zinc-900
      p-6
      transition-all
      duration-300
      hover:border-cyan-500/50
      hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
    "
    >
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">
          {title}
        </h2>

        <Icon
          size={24}
          className="text-cyan-400"
        />
      </div>

      <div className="mt-4 h-2 w-full rounded-full bg-zinc-800">
        <motion.div
          initial={{ width: 0 }}
          animate={{
            width: `${progress}%`,
          }}
          transition={{
            duration: 1,
          }}
          className="h-2 rounded-full bg-cyan-500"
        />
      </div>

      <p className="mt-3 text-zinc-400">
        {progress}% Complete
      </p>
    </motion.article>
  );
}