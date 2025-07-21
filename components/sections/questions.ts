// components/sections/questions.ts

export const questions = [
  {
    question: "How do you usually start a new project?",
    options: [
      { text: "With a clean layout and structure", persona: "Strategic Maker" },
      { text: "With a burst of visuals and vibes", persona: "Bold Disruptor" },
    ],
  },
  {
    question: "Your design vibe:",
    options: [
      { text: "Balanced, functional, crisp", persona: "Visual Minimalist" },
      { text: "Bold, weird, expressive", persona: "Bold Disruptor" },
    ],
  },
  {
    question: "Choose a color palette:",
    options: [
      { text: "Black, white, slate", persona: "Visual Minimalist" },
      { text: "Neon pink, teal, yellow", persona: "Bold Disruptor" },
    ],
  },
  {
    question: "What kind of work excites you more?",
    options: [
      { text: "Designing a clean interface", persona: "Strategic Maker" },
      { text: "Editing a moody video or storytelling visually", persona: "Detail Dreamer" },
    ],
  },
  {
    question: "Which tool feels most like you?",
    options: [
      { text: "Canva", persona: "Bold Disruptor" },
      { text: "Photoshop", persona: "Detail Dreamer" },
      { text: "Illustrator", persona: "Strategic Maker" },
    ],
  },
  {
    question: "Your spirit font:",
    options: [
      { text: "Comic Sans", persona: "Bold Disruptor" },
      { text: "Times New Roman", persona: "Strategic Maker" },
      { text: "Cormorant", persona: "Detail Dreamer" },
      { text: "Helvetica", persona: "Visual Minimalist" },
    ],
  },
];

export const personaResults = {
  "Visual Minimalist": {
    title: "🎯 The Visual Minimalist",
    description:
      "You believe less is more. Your work is clean, intentional, and timeless. You speak Helvetica fluently.",
    color: "#1e293b", // Slate
    font: "Helvetica Neue",
    palette: ["#000000", "#ffffff", "#e5e5e5"],
  },
  "Bold Disruptor": {
    title: "🔥 The Bold Disruptor",
    description:
      "You break the rules and make your own. You love clashing colors, loud type, and unexpected layouts. Chaos is your design language.",
    color: "#ec4899", // Neon pink
    font: "Clash Display",
    palette: ["#ec4899", "#06b6d4", "#000000"],
  },
  "Detail Dreamer": {
    title: "🌙 The Detail Dreamer",
    description:
      "You live in the layers. Texture, depth, mood, and emotion matter to you. Your edits have edits.",
    color: "#f9a8d4", // Dusty rose
    font: "Cormorant",
    palette: ["#f9a8d4", "#a3e635", "#fef3c7"],
  },
  "Strategic Maker": {
    title: "📐 The Strategic Maker",
    description:
      "You’re a builder with taste. You think in systems, grids, and goal-driven design. Structure is your vibe.",
    color: "#0f172a", // Navy
    font: "DM Serif Display",
    palette: ["#0f172a", "#facc15", "#e2e8f0"],
  },
}; 