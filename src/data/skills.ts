export interface SkillItem {
  name: string;
  tagline: string;
  description: string;
  badge: string;
  iconName: string;
}

export interface SkillCategory {
  id: string;
  categoryLabel: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "creative-tools",
    categoryLabel: "CATEGORY A",
    title: "Creative Tools",
    description: "Visual communication tools utilized to design clear editorial and presentation assets.",
    skills: [
      {
        name: "Canva",
        tagline: "Creative visual communication and design",
        description: "Crafting structured posters, academic presentation slides, and visual concepts with an eye for harmony, typography, and clean layouts.",
        badge: "Design & Layout",
        iconName: "Palette"
      }
    ]
  },
  {
    id: "professional-skills",
    categoryLabel: "CATEGORY B",
    title: "Professional Skills",
    description: "Interpersonal and cognitive abilities essential for academic discourse and collaborative growth.",
    skills: [
      {
        name: "Communication",
        tagline: "Enjoys expressing ideas clearly and connecting with people",
        description: "Engaging in thoughtful, articulate dialogue to convey nuanced ideas and bridge scientific concepts with relatable perspectives.",
        badge: "Verbal & Written",
        iconName: "MessageSquareQuote"
      },
      {
        name: "Presentation",
        tagline: "Sharing ideas and communicating information effectively",
        description: "Structuring academic concepts with clear narrative progression, engaging visuals, and poise before an audience.",
        badge: "Public Speaking",
        iconName: "Presentation"
      },
      {
        name: "Problem-Solving",
        tagline: "Approaches situations by understanding context and exploring solutions",
        description: "Deconstructing challenges by observing root causes, considering multi-faceted approaches, and maintaining calm analytical focus.",
        badge: "Analytical Mindset",
        iconName: "BrainCircuit"
      }
    ]
  },
  {
    id: "personal-strengths",
    categoryLabel: "CATEGORY C",
    title: "Personal Strengths",
    description: "Inherent qualities that shape how Nishtha learns, creates, and interacts with the world.",
    skills: [
      {
        name: "Creativity",
        tagline: "Developing new ideas and exploring different ways of thinking",
        description: "Looking at everyday observations through an unconventional lens, discovering poetic patterns in biological processes.",
        badge: "Original Thought",
        iconName: "Sparkles"
      },
      {
        name: "Situational Understanding",
        tagline: "Intuitive perception of environments and human dynamics",
        description: "Quickly sensing context, emotional undercurrents, and unspoken requirements to adapt and respond with maturity.",
        badge: "Empathy & Insight",
        iconName: "Compass"
      },
      {
        name: "Exploring Opportunities",
        tagline: "Proactive eagerness to learn, participate, and evolve",
        description: "Embracing new academic avenues, workshops, competitions, and collaborative endeavors with an open and curious mind.",
        badge: "Curiosity Driven",
        iconName: "Compass"
      },
      {
        name: "Expressive Communication",
        tagline: "Translating authentic emotions and intellect into words",
        description: "Infusing declamations, written verses, and conversational dialogues with authenticity, depth, and genuine resonance.",
        badge: "Articulate Voice",
        iconName: "Volume2"
      }
    ]
  }
];
