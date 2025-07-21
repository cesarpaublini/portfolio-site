// components/sections/ResultCard.tsx
import React from 'react';

interface ResultCardProps {
  personaKey: string;
  personaResult: {
    title: string;
    description: string;
    color: string;
    font: string;
    palette: string[];
  };
  onRetake: () => void;
}

const ResultCard: React.FC<ResultCardProps> = ({ personaKey, personaResult, onRetake }) => {
  return (
    <div className="w-full max-w-2xl mx-auto bg-zinc-900 dark:bg-zinc-900 rounded-xl shadow-lg p-8 mb-8 flex flex-col items-center">
      <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white" style={{ fontFamily: personaResult.font }}>{personaResult.title}</h3>
      <p className="text-base md:text-lg text-gray-300 mb-6 text-center max-w-xl">{personaResult.description}</p>
      <div className="flex items-center gap-2 mb-4">
        {personaResult.palette.map((color, idx) => (
          <span
            key={color + idx}
            className="w-7 h-7 rounded-full border border-zinc-700"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
      <div className="text-sm text-gray-400 mb-8">Font: <span className="font-semibold text-gray-200">{personaResult.font}</span></div>
      <button
        onClick={onRetake}
        className="bg-black text-white border border-gray-400 font-semibold px-6 py-2 rounded-md hover:bg-violet-700 hover:border-violet-600 transition-colors"
      >
        Retake Quiz
      </button>
    </div>
  );
};

export default ResultCard; 