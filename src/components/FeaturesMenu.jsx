import React, { useState } from "react";
import { motion } from "framer-motion";

const FeaturesMenu = ({ items }) => {
  const [focusedIndex, setFocusedIndex] = useState(0);

  return (
    <motion.div
      className="flex items-center justify-between bg-black-100 rounded-t-4xl p-4"
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.5 }}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className={`flex items-center gap-2 cursor-pointer transition-transform duration-300 ${
            index === focusedIndex ? "scale-110 text-orange-500" : "text-gray-400"
          }`}
          onMouseEnter={() => setFocusedIndex(index)}
        >
          {/* Image */}
          <div className="w-12 h-12 flex items-center justify-center overflow-scroll">
            {index === focusedIndex && (
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          {/* Title */}
          <p className="text-sm font-bold">{item.title}</p>

          {/* Indicator Dot */}
          {index === focusedIndex && (
            <span className="w-2.5 h-2.5 bg-green-400 rounded-full"></span>
          )}
        </div>
      ))}
    </motion.div>
  );
};

export default FeaturesMenu;
