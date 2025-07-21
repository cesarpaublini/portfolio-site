// components/sections/QuestionCard.tsx
import React from 'react';

interface Option {
  text: string;
  persona: string;
}

interface QuestionCardProps {
  question: string;
  options: Option[];
  onSelect: (option: Option) => void;
  selectedOption: Option | null;
  disabled?: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, options, onSelect, selectedOption, disabled }) => {
  return (
    <div className="w-full max-w-2xl mx-auto bg-zinc-900 dark:bg-zinc-900 rounded-xl shadow-lg p-8 mb-8">
      <h3 className="text-xl md:text-2xl font-semibold mb-6 text-white">{question}</h3>
      <div className="flex flex-col gap-4">
        {options.map((option) => (
          <button
            key={option.text}
            onClick={() => onSelect(option)}
            disabled={disabled}
            className={`w-full text-left px-6 py-3 rounded-lg border transition-colors duration-200 font-medium text-base md:text-lg
              ${selectedOption?.text === option.text
                ? 'bg-violet-600/90 text-white border-violet-600 shadow-md'
                : 'bg-zinc-800 border-zinc-700 text-gray-200 hover:bg-violet-700/80 hover:text-white hover:border-violet-600'}
              ${disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard; 