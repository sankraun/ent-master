export interface MCQQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // 0-indexed
  explanation: string;
  topicTag: string;
}

export const myiasisMCQs: MCQQuestion[] = [
  {
    id: 1,
    question: "Which of the following is the true definition of 'myiasis'?",
    options: [
      "Infestation of living tissues by any insect larvae",
      "Infestation of living humans or vertebrate animals by dipterous (true fly) larvae",
      "Fungal infection complicating chronic suppurative otitis media",
      "Bacterial colonization of ulcerated mucosal surfaces"
    ],
    correctAnswer: 1,
    explanation: "Myiasis is specifically defined as the infestation of living humans or vertebrate animals by dipterous (true fly) larvae that feed on living/dead tissue, body fluids, or ingested food.",
    topicTag: "Definition"
  },
  {
    id: 2,
    question: "Who proposed the term 'myiasis'?",
    options: [
      "Hope",
      "Wullstein",
      "Killian",
      "Schwartze"
    ],
    correctAnswer: 0,
    explanation: "The term 'myiasis' was first proposed by Hope (derived from 'Mya' meaning fly).",
    topicTag: "History & Etymology"
  },
  {
    id: 3,
    question: "Which family of flies is most commonly associated with cavitary and cutaneous myiasis?",
    options: [
      "Culicidae",
      "Calliphoridae",
      "Muscidae",
      "Tabanidae"
    ],
    correctAnswer: 1,
    explanation: "Calliphoridae (blowflies/screwworms) is the most commonly associated family in medical myiasis (e.g., Chrysomya bezziana, Cochliomyia hominivorax, Lucilia sericata).",
    topicTag: "Etiology"
  },
  {
    id: 4,
    question: "Which organism is known as the sheep nasal botfly and is associated with throat/nasal myiasis mimicking allergic symptoms?",
    options: [
      "Chrysomya bezziana",
      "Wohlfahrtia magnifica",
      "Oestrus ovis",
      "Lucilia sericata"
    ],
    correctAnswer: 2,
    explanation: "Oestrus ovis is the sheep nasal botfly, strongly linked to nasal, pharyngeal, and ocular symptoms among individuals with sheep and goat exposure.",
    topicTag: "Causative Organism"
  },
  {
    id: 5,
    question: "What is the single most common anatomical site for ENT myiasis?",
    options: [
      "Middle ear (Otomyiasis)",
      "Nasal cavity (Nasal myiasis)",
      "Vocal cords",
      "Submandibular gland"
    ],
    correctAnswer: 1,
    explanation: "Nasal myiasis is the most frequent and classic anatomical presentation of ENT myiasis.",
    topicTag: "Epidemiology"
  },
  {
    id: 6,
    question: "Which underlying condition is considered the most important predisposing nasal pathology for nasal myiasis?",
    options: [
      "Deviated nasal septum (DNS)",
      "Atrophic rhinitis",
      "Vasomotor rhinitis",
      "Antrochoanal polyp"
    ],
    correctAnswer: 1,
    explanation: "Atrophic rhinitis with crusting and foul-smelling discharge is the single most important and classic predisposing condition for nasal myiasis.",
    topicTag: "Risk Factors"
  },
  {
    id: 7,
    question: "Approximately how many eggs can a fly deposit at a single time in nasal myiasis, and what is their approximate hatching time?",
    options: [
      "10-20 eggs; 7 days",
      "50 eggs; 48 hours",
      "200 eggs; 24 hours",
      "1,000 eggs; 12 hours"
    ],
    correctAnswer: 2,
    explanation: "Approximately 200 eggs are deposited at one time, which can hatch rapidly within about 24 hours.",
    topicTag: "Pathogenesis"
  },
  {
    id: 8,
    question: "Why can anterior rhinoscopy fail to detect larvae in a patient with active nasal myiasis?",
    options: [
      "Larvae are microscopic",
      "Larvae are photophobic and migrate into deep recesses",
      "Larvae only feed during nocturnal hours",
      "Larvae instantly dissolve in nasal mucus"
    ],
    correctAnswer: 1,
    explanation: "Dipterous larvae exhibit marked negative phototropism (photophobic) and actively retreat into the deep sinonasal recesses upon light exposure, making endoscopic examination essential.",
    topicTag: "Clinical Pearl"
  },
  {
    id: 9,
    question: "What does the mnemonic 'O-S-P-B-C' represent in nasal myiasis?",
    options: [
      "Classification of fly species",
      "Complications: Orbit, Septum, Palate, Bone/sinuses, CNS",
      "Treatment protocol steps",
      "Diagnostic criteria for surgical clearance"
    ],
    correctAnswer: 1,
    explanation: "O-S-P-B-C stands for Orbit (cellulitis/proptosis), Septum (perforation/saddle nose), Palate (perforation), Bone/sinuses (erosion), and CNS (meningitis/death).",
    topicTag: "Complications"
  },
  {
    id: 10,
    question: "What is the single most important risk factor for oral myiasis?",
    options: [
      "Poor oral hygiene",
      "Dental caries in molars",
      "Use of acrylic dentures",
      "Gingival hyperplasia from phenytoin"
    ],
    correctAnswer: 0,
    explanation: "Poor oral hygiene (the 'B' in the 'BAD MOUTH' mnemonic) is the primary risk factor for oral cavity myiasis.",
    topicTag: "Oral Myiasis"
  },
  {
    id: 11,
    question: "In a patient with otomyiasis, which of the following is true regarding management?",
    options: [
      "Perform vigorous blind curettage immediately",
      "A routine CT temporal bone is required for every uncomplicated case",
      "Perform gentle extraction/microsuction under vision and repeat otoscopy after clearance",
      "Prescribe systemic antibiotics without removing larvae"
    ],
    correctAnswer: 2,
    explanation: "Blind instrumentation should be avoided. Complete, careful extraction under vision with repeat otoscopic evaluation to assess for hidden larvae and TM status is the standard of care.",
    topicTag: "Otomyiasis"
  },
  {
    id: 12,
    question: "What is the primary management priority in tracheostomy myiasis?",
    options: [
      "Immediate microbiological culture",
      "Prescription of topical insecticides",
      "Airway assessment, clearance, and maintaining tube patency",
      "Elective surgical revision of the stoma"
    ],
    correctAnswer: 2,
    explanation: "In tracheostomy myiasis, airway patency and preventing distal tracheal migration/aspiration take precedence over all other measures ('Airway First').",
    topicTag: "Tracheostomy"
  },
  {
    id: 13,
    question: "What is the role of systemic Ivermectin in the management of ENT cavitary myiasis?",
    options: [
      "It completely replaces the need for mechanical removal",
      "It is an adjunct for extensive or difficult clearance, not a substitute for direct removal",
      "It is contraindicated in all dipterous infestations",
      "It should only be given after 4 weeks of observation"
    ],
    correctAnswer: 1,
    explanation: "Ivermectin (typically ~200 µg/kg) is a useful adjunct in extensive cases, but mechanical removal under direct visual control remains the cornerstone of treatment.",
    topicTag: "Pharmacotherapy"
  },
  {
    id: 14,
    question: "Which of the following describes the '5 Rs' framework for managing ENT myiasis?",
    options: [
      "Refer, Radiograph, Resect, Reconstruct, Radiate",
      "Recognize, Remove, Re-examine, Repair/Remove necrosis, Reverse the cause",
      "Rinse, Reassure, Rest, Rehydrate, Re-evaluate",
      "Record, Report, Resist, Rotate, Relieve"
    ],
    correctAnswer: 1,
    explanation: "The 5 Rs of ENT Myiasis: 1. Recognize, 2. Remove, 3. Re-examine, 4. Repair/Remove necrosis, 5. Reverse the underlying predisposing cause.",
    topicTag: "Clinical Framework"
  }
];
