'use client';

import React, { useState, useEffect } from 'react';
import { questions, personaResults } from './questions';
import QuestionCard from './QuestionCard';
import ResultCard from './ResultCard';

const CreativeQuizSection: React.FC = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [analytics, setAnalytics] = useState<Record<string, number>>({});

  // Load analytics from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('creativeQuizAnalytics');
      if (stored) setAnalytics(JSON.parse(stored));
      else setAnalytics({
        'Visual Minimalist': 0,
        'Bold Disruptor': 0,
        'Detail Dreamer': 0,
        'Strategic Maker': 0,
      });
    }
  }, []);

  // Update analytics in localStorage after result
  useEffect(() => {
    if (showResult) {
      const scoreMap: Record<string, number> = {};
      let maxScore = 0;
      let firstMaxPersona = '';
      answers.forEach((persona) => {
        scoreMap[persona] = (scoreMap[persona] || 0) + 1;
        if (
          scoreMap[persona] > maxScore ||
          (scoreMap[persona] === maxScore && !firstMaxPersona)
        ) {
          maxScore = scoreMap[persona];
          firstMaxPersona = persona;
        }
      });
      const resultPersona = firstMaxPersona as keyof typeof personaResults;
      setAnalytics((prev) => {
        const updated = { ...prev, [resultPersona]: (prev[resultPersona] || 0) + 1 };
        localStorage.setItem('creativeQuizAnalytics', JSON.stringify(updated));
        return updated;
      });
    }
  }, [showResult]);

  const handleSelect = (option: { text: string; persona: string }) => {
    setAnswers((prev) => [...prev, option.persona]);
    setTimeout(() => {
      if (step < questions.length - 1) {
        setStep((s) => s + 1);
      } else {
        setShowResult(true);
      }
    }, 250);
  };

  const handleBack = () => {
    if (step > 0) {
      setStep((s) => s - 1);
      setAnswers((prev) => prev.slice(0, -1));
    }
  };

  const handleRetake = () => {
    setStep(0);
    setAnswers([]);
    setShowResult(false);
    setShowQuiz(false);
  };

  let resultPersona: keyof typeof personaResults = 'Visual Minimalist';
  if (showResult) {
    const scoreMap: Record<string, number> = {};
    let maxScore = 0;
    let firstMaxPersona = '';
    answers.forEach((persona) => {
      scoreMap[persona] = (scoreMap[persona] || 0) + 1;
      if (
        scoreMap[persona] > maxScore ||
        (scoreMap[persona] === maxScore && !firstMaxPersona)
      ) {
        maxScore = scoreMap[persona];
        firstMaxPersona = persona;
      }
    });
    resultPersona = firstMaxPersona as keyof typeof personaResults;
  }

  // Progress bar
  const progress = showResult ? 100 : Math.round((step / questions.length) * 100);

  return (
    <section className="w-full py-20 px-6 sm:px-12 bg-black dark:bg-zinc-900">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-12" />
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-white text-center mx-auto">What Kind of Creative Are You?</h2>
        <p className="text-base text-gray-400 mb-8 text-center mx-auto">
          Take this quick quiz and discover your creative persona.
        </p>
        {/* Progress Bar */}
        {showQuiz && !showResult && (
          <div className="w-full max-w-2xl mx-auto mb-8">
            <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
              <div
                className="h-2 bg-violet-600 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-400 mt-2">
              <span>Step {step + 1} of {questions.length}</span>
              <span>{progress}%</span>
            </div>
          </div>
        )}
        <div className="flex flex-col items-center">
          {!showQuiz ? (
            <button
              className="bg-black text-white border border-gray-400 font-semibold px-8 py-3 rounded-md hover:bg-violet-700 hover:border-violet-600 transition-colors text-lg mt-8"
              onClick={() => setShowQuiz(true)}
            >
              Start Quiz
            </button>
          ) : !showResult ? (
            <>
              <QuestionCard
                question={questions[step].question}
                options={questions[step].options}
                onSelect={handleSelect}
                selectedOption={answers[step] ? questions[step].options.find(o => o.persona === answers[step]) || null : null}
                disabled={!!answers[step]}
              />
              {/* Back Button */}
              {step > 0 && (
                <button
                  className="mt-2 text-sm text-gray-400 hover:text-violet-400 transition-colors underline"
                  onClick={handleBack}
                >
                  ← Back
                </button>
              )}
            </>
          ) : (
            <>
              <ResultCard
                personaKey={resultPersona}
                personaResult={personaResults[resultPersona]}
                onRetake={handleRetake}
              />
              {/* Result Analytics */}
              <div className="w-full max-w-2xl mx-auto mt-8 bg-zinc-800 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-white mb-4 text-center">Result Analytics</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {Object.entries(personaResults).map(([key, val]) => (
                    <div key={key} className="flex items-center justify-between bg-zinc-900 rounded-md p-4">
                      <span className="text-lg sm:text-xl text-white truncate flex-1">{val.title}</span>
                      <span className="text-sm sm:text-base text-gray-300 font-semibold whitespace-nowrap ml-4">{analytics[key] || 0} users</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default CreativeQuizSection; 