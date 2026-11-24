export interface CreativePillar {
  number: string;
  title: string;
  headline: string;
  body: string;
  keywords: string[];
  editorialNote: string;
}

export const creativePillars: CreativePillar[] = [
  {
    number: "01",
    title: "POETRY",
    headline: "Finding expression through words, emotions and imagination.",
    body: "Finding expression through words, emotions and imagination. Poetry provides a creative space to explore ideas, reflect on observations, and articulate feelings with rhythm and nuance.",
    keywords: ["Poetry", "Imagination", "Expression", "Reflection"],
    editorialNote: "Creative expression & reflective verses"
  },
  {
    number: "02",
    title: "READING",
    headline: "Discovering new perspectives through books and stories.",
    body: "Discovering new perspectives through books and stories. Reading nurtures curiosity, broadens horizons, and offers fresh viewpoints on how individuals think and how societies evolve.",
    keywords: ["Books", "Perspectives", "Curiosity", "Knowledge"],
    editorialNote: "Books, ideas & lifelong reading"
  },
  {
    number: "03",
    title: "DANCE",
    headline: "Expressing energy, emotion and creativity through movement.",
    body: "Expressing energy, emotion and creativity through movement. Dance is an active medium of artistic storytelling, coordination, and physical discipline that brings energy and balance.",
    keywords: ["Movement", "Rhythm", "Creativity", "Discipline"],
    editorialNote: "Choreography & expressive movement"
  },
  {
    number: "04",
    title: "CONVERSATION",
    headline: "Believing that meaningful communication begins with understanding.",
    body: "Believing that meaningful communication begins with understanding. Engaging in thoughtful dialogues allows ideas to be exchanged clearly and fosters genuine connection with people.",
    keywords: ["Communication", "Understanding", "Dialogue", "Empathy"],
    editorialNote: "Thoughtful discourse & interpersonal connection"
  }
];
