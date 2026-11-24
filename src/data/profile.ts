export interface ProfileData {
  name: string;
  brandName: string;
  monogram: string;
  tagline: string;
  supportingStatement: string;
  professionalIdentity: string;
  academicIdentity: {
    student: string;
    university: string;
    stage: string;
    background: string;
  };
  coreConcept: {
    title: string;
    pillars: {
      key: string;
      title: string;
      subtitle: string;
      description: string;
      points: string[];
    }[];
  };
  contact: {
    email: string;
    linkedIn: string;
    location: string;
  };
}

export const profileData: ProfileData = {
  name: "Nishtha Walia",
  brandName: "NISH THA.",
  monogram: "NW",
  tagline: "Curiosity in mind. Creativity in soul. Science in pursuit.",
  supportingStatement: "Exploring the extraordinary connections between life, science and imagination.",
  professionalIdentity: "Aspiring Biotechnology Professional | Genetics & Genetic Engineering Enthusiast",
  academicIdentity: {
    student: "Biotechnology Student",
    university: "Lovely Professional University",
    stage: "First Semester",
    background: "Class XII – Physics, Chemistry and Biology (PCB)",
  },
  coreConcept: {
    title: "THE ART OF SCIENCE",
    pillars: [
      {
        key: "scientist",
        title: "The Scientist",
        subtitle: "Inquiry & Genetic Systems",
        description: "A deep-seated curiosity about biological systems, genetic architecture, and the transformative potential of modern biotechnology.",
        points: [
          "Fascination with heredity & molecular genetics",
          "Interest in gene editing & biotechnology innovations",
          "Curiosity about biological systems and living organisms",
          "Scientific exploration of molecular foundations"
        ]
      },
      {
        key: "creator",
        title: "The Creator",
        subtitle: "Aesthetics & Verbal Art",
        description: "Artistic sensibility channeled through poetry, rhythmic dance, reading books, and expressive declamation.",
        points: [
          "Poetry writing & reflective expression",
          "Dancing & choreographic movement",
          "Declamation & articulate communication",
          "Creative visual communication with Canva"
        ]
      },
      {
        key: "individual",
        title: "The Individual",
        subtitle: "Insight & Active Growth",
        description: "Understanding different situations, thoughtful problem-solving, expressive communication, and exploring new opportunities.",
        points: [
          "Understanding situations & active perspective",
          "Clear, thoughtful communication",
          "Context-aware problem-solving approach",
          "Continuous drive for personal & academic development"
        ]
      }
    ]
  },
  contact: {
    email: "nishthawalia8@gmail.com",
    linkedIn: "https://www.linkedin.com/in/nishtha-walia-527b35372/",
    location: "Lovely Professional University, Punjab, India",
  }
};
