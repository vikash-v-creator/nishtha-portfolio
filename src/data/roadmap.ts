export interface RoadmapMonth {
  monthNumber: string;
  monthLabel: string;
  title: string;
  focus: string;
  theme: string;
  learningObjectives: string[];
  keyTopics: string[];
  intendedOutcomes: string[];
  suggestedActivities: string[];
  academicRubricNote: string;
  status: "Current Semester Focus" | "Upcoming Academic Milestone";
}

export const roadmapData: RoadmapMonth[] = [
  {
    monthNumber: "01",
    monthLabel: "Month 01",
    title: "Biotechnology Foundations",
    focus: "Strengthen understanding of biotechnology fundamentals and basic biological concepts.",
    theme: "Core Principles & Cellular Architecture",
    learningObjectives: [
      "Master the fundamental cellular pathways and biomolecular structures",
      "Consolidate foundational biochemistry concepts bridging Class XII PCB to collegiate biotechnology",
      "Develop scientific literature reading habits through university library resources"
    ],
    keyTopics: [
      "Prokaryotic vs. Eukaryotic cell physiology",
      "Biomolecules: Proteins, Carbohydrates, Lipids, and Nucleic acids",
      "Thermodynamics in biological systems & enzymatic kinetics"
    ],
    intendedOutcomes: [
      "Solid theoretical grounding for advanced second-semester coursework",
      "Annotated review summary of foundational textbook chapters",
      "Confidence in academic terminology and scientific nomenclature"
    ],
    suggestedActivities: [
      "Interactive 3D cell structure modeling",
      "Group study sessions analyzing landmark papers in cell biology",
      "Building conceptual mindmaps for molecular pathways"
    ],
    academicRubricNote: "Foundational conceptual framework (LPU Semester 1 syllabus alignment)",
    status: "Current Semester Focus"
  },
  {
    monthNumber: "02",
    monthLabel: "Month 02",
    title: "Genetics and Molecular Biology",
    focus: "Explore fundamental concepts related to heredity, genes and molecular biology.",
    theme: "The Operating Code of Life",
    learningObjectives: [
      "Understand the Central Dogma: DNA replication, transcription, and translation",
      "Examine Mendelian inheritance patterns alongside modern epigenetic insights",
      "Investigate gene regulation mechanisms in bacterial and eukaryotic organisms"
    ],
    keyTopics: [
      "DNA double helix geometry & supercoiling dynamics",
      "Polymerases, transcription factors, and ribosome functionality",
      "Mutations, repair systems, and genetic polymorphisms"
    ],
    intendedOutcomes: [
      "Clear conceptual understanding of genetic coding principles",
      "Ability to solve complex genetic cross-problems and pedigree charts",
      "Appreciation of the molecular drivers behind hereditary diseases"
    ],
    suggestedActivities: [
      "Simulate genetic recombination using online molecular models",
      "Draft a student monograph on CRISPR-Cas9 mechanism fundamentals",
      "Participate in university biology club genetics quizzes"
    ],
    academicRubricNote: "Direct pathway alignment with genetics specialization goals",
    status: "Upcoming Academic Milestone"
  },
  {
    monthNumber: "03",
    monthLabel: "Month 03",
    title: "Introduction to Bioinformatics",
    focus: "Discover the relationship between biological information and computational tools.",
    theme: "In Silico Biological Exploration",
    learningObjectives: [
      "Familiarize with international sequence databases (NCBI, UniProt, PDB)",
      "Understand the basics of pairwise sequence alignment (BLAST, FASTA)",
      "Explore how digital tools visualize protein 3D structures"
    ],
    keyTopics: [
      "Primary, secondary, and tertiary biological databases",
      "Sequence similarity searching & E-value interpretation",
      "PyMOL & ChimeraX for macromolecular visualization"
    ],
    intendedOutcomes: [
      "Hands-on comfort querying NCBI GenBank and downloading FASTA files",
      "Basic computational literacy for future genomic data analysis",
      "First rendered structural images of key proteins (e.g., hemoglobin, GFP)"
    ],
    suggestedActivities: [
      "Complete introductory online modules on NCBI BLAST fundamentals",
      "Render and annotate a selected protein crystal structure from PDB",
      "Document a comparative alignment between homologous genes"
    ],
    academicRubricNote: "Modern interdisciplinary skill expansion: Computational Biology",
    status: "Upcoming Academic Milestone"
  },
  {
    monthNumber: "04",
    monthLabel: "Month 04",
    title: "Scientific Learning & Lab Concepts",
    focus: "Explore laboratory concepts, scientific methods and research fundamentals.",
    theme: "Empirical Rigor & Laboratory Protocols",
    learningObjectives: [
      "Master standard laboratory safety, sterile techniques, and solution preparation",
      "Understand fundamental wet-lab techniques: spectrophotometry, chromatography, gel electrophoresis",
      "Cultivate systematic experimental documentation in laboratory notebooks"
    ],
    keyTopics: [
      "GLP (Good Laboratory Practice) & Biosafety level classifications",
      "Buffer preparation, pH titration, and molarity calculations",
      "Agarose gel electrophoresis & SDS-PAGE principles"
    ],
    intendedOutcomes: [
      "Thorough understanding of laboratory protocol design and error analysis",
      "Preparedness for hands-on departmental laboratory practicals",
      "Methodological rigor in recording observations and control groups"
    ],
    suggestedActivities: [
      "Virtual wet-lab simulation practice for DNA extraction and quantification",
      "Seminar attendance on laboratory safety and waste neutralization",
      "Assisting senior student demonstrations during open departmental workshops"
    ],
    academicRubricNote: "Practical methodology & experimental foundation",
    status: "Upcoming Academic Milestone"
  },
  {
    monthNumber: "05",
    monthLabel: "Month 05",
    title: "Practical Exploration Project",
    focus: "Identify and develop a small educational biotechnology project.",
    theme: "Applied Academic Synthesis",
    learningObjectives: [
      "Synthesize literature into a focused academic review topic or educational project",
      "Formulate a clear scientific hypothesis under faculty mentorship",
      "Create an academic poster summarizing key theoretical findings"
    ],
    keyTopics: [
      "Project topic selection in agricultural or medical biotechnology",
      "Literature curation, referencing standards (APA/Vancouver), and ethical appraisal",
      "Poster visual communication using Canva and scientific charts"
    ],
    intendedOutcomes: [
      "A completed educational mini-project dossier",
      "A professionally designed academic poster ready for student exhibition",
      "Actionable feedback from academic mentors and peers"
    ],
    suggestedActivities: [
      "Design an educational poster on 'Engineered Drought-Resistant Crops'",
      "Present initial findings in a student-led seminar session",
      "Archive project artifacts for portfolio documentation"
    ],
    academicRubricNote: "Academic project evidence framework (satisfies 5-mark project criteria)",
    status: "Upcoming Academic Milestone"
  },
  {
    monthNumber: "06",
    monthLabel: "Month 06",
    title: "Professional Development & Horizons",
    focus: "Explore relevant certifications, build a professional profile and identify future opportunities.",
    theme: "Career Strategy & Community Engagement",
    learningObjectives: [
      "Evaluate verified online certification pathways (NPTEL, Coursera, EdX in Biotech)",
      "Refine professional LinkedIn presence to connect with biotechnology researchers",
      "Map out summer internship and laboratory observation opportunities for Year 2"
    ],
    keyTopics: [
      "Bio-entrepreneurship & industry landscape in India and abroad",
      "Building a competitive academic CV highlighting PCB strengths and coursework",
      "Identifying national student scientific societies and conferences"
    ],
    intendedOutcomes: [
      "Enrollment in a recognized foundational certification course",
      "Polished LinkedIn network with connections in university and research groups",
      "Structured application roadmap for second-year summer training"
    ],
    suggestedActivities: [
      "Audit an introductory NPTEL/SWAYAM course on Cell Biology or Genomics",
      "Engage with biotechnology alumni for mentorship conversations",
      "Update portfolio with first-year reflections and semester achievements"
    ],
    academicRubricNote: "Long-term career alignment & continuous professional readiness",
    status: "Upcoming Academic Milestone"
  }
];
