"use client";

import React from "react";
interface ColorfulTextProps {
  text: string;
}

const colors = ["yellow", "black"];

export default function ColorfulText({ text }: ColorfulTextProps) {
  const characters = Array.from(text);

  return (
    <p className="mb-8 text-xl text-gray-700 sm:text-2xl">
      {characters.map((char, index) => {
        const color = colors[index % colors.length];
        return (
          <span key={index} style={{ color }}>
            {char}
          </span>
        );
      })}
    </p>
  );
}
