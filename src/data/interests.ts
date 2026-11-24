export interface ScientificInterest {
  id: string;
  code: string;
  title: string;
  tagline: string;
  description: string;
  keyQuestions: string[];
  molecularConcept: string;
  badge: string;
}

export const scientificInterests: ScientificInterest[] = [
  {
    id: "genetics",
    code: "BIO-01 // GEN",
    title: "Genetics",
    tagline: "Exploring the science of heredity, genes and the biological information that shapes living organisms.",
    description: "Fascinated by how nucleotides store the ancient yet evolving operating code of living things. Studying the mechanisms of inheritance, variation, and genomic expression provides a foundational understanding of nature's most intricate architecture.",
    keyQuestions: [
      "How do simple nucleotide sequences translate into the vast complexity of organic life?",
      "What regulatory switches govern gene expression across developmental stages?",
      "How does natural genetic variation inform our understanding of biological resilience?"
    ],
    molecularConcept: "Nucleotide pairing & Chromosomal inheritance",
    badge: "Foundational Curiosity"
  },
  {
    id: "genetic-engineering",
    code: "BIO-02 // GENG",
    title: "Genetic Engineering",
    tagline: "Interested in understanding how genetic information can be studied and modified to explore new scientific possibilities.",
    description: "Drawn to the profound questions and possibilities surrounding molecular editing tools, recombinant DNA, and gene modulation. Looking forward to mastering the scientific and ethical frameworks that guide modern molecular intervention.",
    keyQuestions: [
      "How can recombinant techniques be applied responsibly to address agricultural and ecological challenges?",
      "What are the molecular principles underpinning targeted gene insertion and deletion?",
      "How do ethical considerations harmonize with breakthrough biotechnological advances?"
    ],
    molecularConcept: "Recombinant DNA & Precision Modification",
    badge: "Frontier Fascination"
  },
  {
    id: "biotechnology",
    code: "BIO-03 // BIOTECH",
    title: "Biotechnology",
    tagline: "Discovering how biology and technology come together to create meaningful innovations.",
    description: "Inspired by the synthesis of biological principles and technological innovation. From biocatalysts and microbial fermentation to biopharmaceuticals, biotechnology represents the bridge where scientific curiosity solves real-world human needs.",
    keyQuestions: [
      "How can cellular systems be harnessed for sustainable bio-manufacturing?",
      "What role will bioinformatics play in interpreting complex biological datasets?",
      "How does biotechnology transform diagnostic precision in healthcare?"
    ],
    molecularConcept: "Cellular Bio-systems & Applied Innovation",
    badge: "Academic Pathway"
  }
];
