export interface ActivityItem {
  id: string;
  number: string;
  title: string;
  category: "Creative Expression" | "Communication" | "Athletics & Sport" | "Academic Engagement";
  description: string;
  focusArea: string;
  status: "Extracurricular Interest" | "Active Pursuit" | "Campus Participation";
  tags: string[];
}

export const activitiesData: ActivityItem[] = [
  {
    id: "poetry",
    number: "01",
    title: "Poetry",
    category: "Creative Expression",
    description: "Creative writing and poetic expression exploring emotion, thought, and imagination through written verses.",
    focusArea: "Creative writing, rhythm, and imaginative thinking.",
    status: "Active Pursuit",
    tags: ["Poetry", "Writing", "Imagination"]
  },
  {
    id: "declamation",
    number: "02",
    title: "Declamation",
    category: "Communication",
    description: "Participating in declamation and public speaking, focusing on articulate speech, structured presentation, and confident delivery.",
    focusArea: "Clear expression, voice modulation, and stage presence.",
    status: "Extracurricular Interest",
    tags: ["Declamation", "Public Speaking", "Communication"]
  },
  {
    id: "marathon",
    number: "03",
    title: "Marathon",
    category: "Athletics & Sport",
    description: "Participating in marathon and distance running events, developing physical stamina, pacing, and steady perseverance.",
    focusArea: "Endurance, personal discipline, and physical fitness.",
    status: "Extracurricular Interest",
    tags: ["Marathon", "Running", "Endurance"]
  },
  {
    id: "kho-kho",
    number: "04",
    title: "Kho-Kho",
    category: "Athletics & Sport",
    description: "Playing traditional Kho-Kho, fostering agile reflexes, rapid teamwork coordination, and active sportsmanship.",
    focusArea: "Teamwork, agility, and situational awareness on the field.",
    status: "Extracurricular Interest",
    tags: ["Kho-Kho", "Team Sport", "Agility"]
  },
  {
    id: "dancing",
    number: "05",
    title: "Dancing",
    category: "Creative Expression",
    description: "Engaging in dance and choreographic practice as an expressive and energetic art form combining rhythm and emotion.",
    focusArea: "Rhythmic expression, discipline, and creative energy.",
    status: "Active Pursuit",
    tags: ["Dance", "Rhythm", "Expression"]
  },
  {
    id: "seminar",
    number: "06",
    title: "Seminar Participation",
    category: "Academic Engagement",
    description: "Attending university biotechnology seminars and academic symposiums to learn about scientific topics and emerging ideas.",
    focusArea: "Listening to scientific discussions and exploring new concepts.",
    status: "Campus Participation",
    tags: ["Seminars", "Academic Learning", "Biotechnology"]
  }
];
