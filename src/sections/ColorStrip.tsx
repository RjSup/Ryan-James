import { useState } from "react";

const originalColors = [
  "#A8DADC", // pastel teal
  "#F5AC9F", // pastel peach
  "#FFC8DD", // pastel pink
  "#B5EAEA", // pastel cyan
  "#FFDAC1", // apricot
  "#A9BEC7", // gray
  "#9FD1AE", // green
  "#AB9C9B", // brown
];

// Utility to shuffle an array
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function LeftColorStrip() {
  const [colors, setColors] = useState(originalColors);

  const handleMouseEnter = () => {
    setColors(shuffleArray(originalColors));
  };

  const handleMouseLeave = () => {
    setColors(originalColors);
  };

  return (
    <div
      className="fixed top-0 left-0 h-full w-10 flex flex-col"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {colors.map((color, index) => (
        <div
          key={index}
          style={{ backgroundColor: color }}
          className="flex-1 transition-all duration-500"
        />
      ))}
    </div>
  );
}
