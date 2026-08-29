export interface MedicalImage {
  id: string;
  url: string;
  title: string;
  caption: string;
  species: string;
  highYieldFact: string;
}

export interface NoteCard {
  title: string;
  tags: Array<{ label: string; type: 'anatomy' | 'clinical' | 'important' | 'key-point' }>;
  content: string;
  bullets?: string[];
  highlight?: string;
  image?: MedicalImage;
}

export interface NotesSection {
  sectionTitle: string;
  cards: NoteCard[];
}

export interface SubTopicData {
  id: string;
  name: string;
  summary: string;
  isReady: boolean;
  sections: NotesSection[];
  gallery?: MedicalImage[];
}

export interface TopicData {
  id: string;
  name: string;
  icon: string;
  description: string;
  subtopics: SubTopicData[];
}

export const myiasisImages: MedicalImage[] = [
  {
    id: 'chrysomya-larva',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Chrysomya-bezziana-adult-larva.jpg',
    title: 'Chrysomya bezziana (Old World Screwworm)',
    caption: 'Adult fly and cylindrical, segmented dipterous larva with anterior mouthhooks used for burrowing.',
    species: 'Family: Calliphoridae',
    highYieldFact: 'Obligate parasite that invades healthy and necrotic living tissue; the primary agent in severe destructive nasal & aural ENT myiasis.'
  },
  {
    id: 'oestrus-ovis-larva',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Oestrus-ovis-larva.jpg/640px-Oestrus-ovis-larva.jpg',
    title: 'Oestrus ovis (Sheep Nasal Botfly Larva)',
    caption: 'Macroscopic view of Oestrus ovis larva showing dark transverse spines and dorsal segmentation.',
    species: 'Family: Oestridae',
    highYieldFact: 'Strongly associated with nasal and throat myiasis in shepherds/farmers handling sheep & goats; symptoms often mimic acute allergic rhinitis/pharyngitis.'
  },
  {
    id: 'screwworm-morphology',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Screwworm_larva.jpg/640px-Screwworm_larva.jpg',
    title: 'Dipterous Screwworm Larval Morphology',
    caption: 'Detailed anatomical view showing concentric bands of dark spines resembling screw threads.',
    species: 'Cochliomyia / Chrysomya species',
    highYieldFact: 'The screw-like cuticular spines lock the larva firmly into deep mucosal folds and cartilage, requiring careful direct endoscopic extraction.'
  },
  {
    id: 'chrysomya-cluster',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Chrysomya-bezziana-adults-myiasis-larvae-2.jpg',
    title: 'Chrysomya Infestation & Larval Aggregation',
    caption: 'Multiple hatched larvae aggregating in cavity tissue under anaerobic/moist conditions.',
    species: 'Chrysomya bezziana larvae cluster',
    highYieldFact: 'Female flies deposit ~200 eggs simultaneously, which hatch within 24 hours. Larvae are photophobic and migrate into deep paranasal recesses.'
  }
];

export const topics: TopicData[] = [
  {
    id: 'ear',
    name: 'Ear',
    icon: 'E',
    description: 'Otology modules covering external, middle, and inner ear diseases, ear infestations, and surgical otology.',
    subtopics: [
      {
        id: 'myiasis-in-ent',
        name: 'Myiasis in ENT',
        summary: 'Comprehensive high-yield notes covering definition, classification, Calliphoridae & Oestrus ovis etiology, Otomyiasis, Nasal myiasis, Oral myiasis, Tracheostomy, mnemonics (MAGGOTS, PAINFUL EAR, O-S-P-B-C), and the 5 Rs management framework.',
        isReady: true,
        gallery: myiasisImages,
        sections: [
          // ─── SECTION 1: FUNDAMENTALS ───
          {
            sectionTitle: '1. Definition & Classification',
            cards: [
              {
                title: 'Definition of Myiasis',
                tags: [{ label: 'Important', type: 'important' }],
                content: 'Myiasis is defined as the infestation of living humans or vertebrate animals by dipterous (true fly) larvae, which feed on living tissue, dead tissue, body fluids, or occasionally ingested food.',
                bullets: [
                  'Etymology: "Mya" = fly',
                  'The term "myiasis" was proposed by Hope',
                  'Maggot = larval stage of Diptera (the order of two-winged true flies)',
                ],
                highlight: 'Myiasis is defined specifically as infestation by dipterous larvae — not any other insect order. This distinction is frequently tested in exams.'
              },
              {
                title: 'Anatomical Classification of Myiasis',
                tags: [{ label: 'Important', type: 'important' }, { label: 'Key Point', type: 'key-point' }],
                content: 'Myiasis is classified according to the anatomical site of involvement into cutaneous, cavitary, and accidental/special forms.',
                bullets: [
                  'A. Cutaneous Myiasis: Furuncular myiasis, Migratory myiasis, Wound myiasis',
                  'B. Cavitary Myiasis: ENT myiasis, Ophthalmomyiasis, Urogenital myiasis, Intestinal myiasis, Cerebral myiasis, Tracheopulmonary myiasis',
                  'C. Other: Accidental / pseudomyiasis, Myiasis in specialized clinical settings',
                ],
                highlight: 'ENT Myiasis sites — remember the mnemonic "E N T + A": Ear (Otomyiasis), Nose (Nasal myiasis), Throat/Oral cavity, Airway (larynx/trachea/tracheostomy).'
              },
            ]
          },

          // ─── SECTION 2: ETIOLOGY & PREDISPOSING FACTORS ───
          {
            sectionTitle: '2. Important Causative Organisms & Predisposing Factors',
            cards: [
              {
                title: 'Important Causative Flies',
                tags: [{ label: 'Important', type: 'important' }],
                content: 'The most commonly associated family in medical myiasis is Calliphoridae (blowflies and screwworm flies). Several species are critical for examinations.',
                bullets: [
                  'Chrysomya bezziana — Old World screwworm (aggressive living tissue invader)',
                  'Cochliomyia hominivorax — New World screwworm',
                  'Wohlfahrtia magnifica — flesh fly (Sarcophagidae)',
                  'Oestrus ovis — sheep nasal botfly (Oestridae)',
                  'Lucilia sericata — common green bottle fly',
                ],
                highlight: 'Exam Pearl: Oestrus ovis (sheep nasal botfly) is strongly associated with nasal, nasopharyngeal, and throat myiasis in patients with close exposure to sheep and goats.'
              },
              {
                title: 'General Predisposing Factors',
                tags: [{ label: 'Clinical', type: 'clinical' }, { label: 'Key Point', type: 'key-point' }],
                content: 'Remember the core clinical rule: "Flies love foul, exposed, and neglected tissue."',
                bullets: [
                  'Poor personal hygiene & low socioeconomic conditions',
                  'Tropical and subtropical climate',
                  'Poor nutrition, senility, debilitation, bedridden state',
                  'Mental or physical disability, chronic alcoholism',
                  'Neglected wounds and ulcerated/necrotic malignancies',
                  'Chronic infected purulent discharges',
                  'Conditions causing persistent mouth opening',
                  'Chronic atrophic or destructive diseases of the nose, ear, or oral cavity',
                ],
              },
            ]
          },

          // ─── SECTION 3: ORAL MYIASIS ───
          {
            sectionTitle: '3. Oral Myiasis',
            cards: [
              {
                title: 'Definition & "BAD MOUTH" Risk Factors',
                tags: [{ label: 'Clinical', type: 'clinical' }, { label: 'Important', type: 'important' }],
                content: 'Oral myiasis is the infestation of the oral cavity by fly larvae. Use the mnemonic "BAD MOUTH" to recall the clinical predisposing factors.',
                bullets: [
                  'B — Bad oral hygiene (THE MOST IMPORTANT RISK FACTOR)',
                  'A — Alcoholism',
                  'D — Debility / mental impairment',
                  'M — Mouth kept open for prolonged periods',
                  'O — Oral wounds / trauma',
                  'U — Ulcerative or suppurative lesions',
                  'T — Tumours (oral malignancy)',
                  'H — Halitosis / periodontal disease',
                ],
                highlight: 'Poor oral hygiene is the single most important risk factor for oral myiasis.'
              },
              {
                title: 'Clinical Features, Complications & Management',
                tags: [{ label: 'Clinical', type: 'clinical' }, { label: 'Key Point', type: 'key-point' }],
                content: 'Patients present with oral/facial pain, swelling, active movement sensation, and visible larvae with foul malodour.',
                bullets: [
                  'Rare presentation: A larva may die in the submucosa and present as a firm mass resembling a salivary gland adenoma',
                  'Complications: Extensive soft-tissue destruction, deep tissue involvement, palatal perforation',
                  'Imaging: CT is indicated if deep fascial extension or bony destructive complications are suspected',
                  'Mechanical removal: Forceps extraction under vision with debridement of necrotic tissue',
                  'Suffocation principle: Anaerobic occlusion forces larvae to emerge',
                  'Systemic therapy: Systemic Ivermectin may be used as an adjunct',
                ],
                highlight: 'Never stop after removing only the visible maggots. Always inspect the depth of the cavity/wound for hidden larvae and debride necrotic tissue.'
              },
            ]
          },

          // ─── SECTION 4: OTOMYIASIS ───
          {
            sectionTitle: '4. Aural Myiasis (Otomyiasis)',
            cards: [
              {
                title: 'Definition & Predisposing Factors',
                tags: [{ label: 'Clinical', type: 'clinical' }],
                content: 'Otomyiasis is the larval infestation of the external auditory canal (EAC) and/or middle ear cleft.',
                bullets: [
                  'Children (especially <10 years of age)',
                  'Debilitated and bedridden patients',
                  'Widened ear canal (e.g. post-mastoidectomy cavity)',
                  'Chronic otorrhoea / active CSOM (foul discharge attracts flies)',
                  'Poor personal hygiene',
                  'Bilateral disease is uncommon',
                ],
              },
              {
                title: 'Clinical Presentation — "PAINFUL EAR"',
                tags: [{ label: 'Clinical', type: 'clinical' }, { label: 'Key Point', type: 'key-point' }],
                content: 'Use the mnemonic "PAINFUL EAR" to recall the clinical signs and symptoms.',
                bullets: [
                  'P — Pain / severe otalgia',
                  'A — Aural itching and irritation',
                  'I — Impaired hearing (conductive hearing loss)',
                  'N — Nausea / vertigo (if labyrinth/inner ear involved)',
                  'F — Foreign-body / crawling movement sensation',
                  'U — Unpleasant malodour',
                  'L — Liquid discharge / blood-stained otorrhoea',
                  'Examination: Inflamed EAC skin, purulent secretion, actively moving larvae, possible TM perforation',
                ],
              },
              {
                title: 'Complications & Treatment Principles',
                tags: [{ label: 'Clinical', type: 'clinical' }, { label: 'Important', type: 'important' }],
                content: 'Management follows: Immobilize/Kill → Remove → Clean → Assess damage.',
                bullets: [
                  'Complications: Tympanic membrane perforation, middle-ear ossicular necrosis, mastoid invasion, intracranial extension, meningitis, and death in severe neglected disease',
                  'CT Temporal Bone: NOT ordered routinely in uncomplicated cases; indicated when there is suspicion of mastoid destruction, bone erosion, deep extension, or neurological signs',
                  'Treatment: Careful manual extraction under microscope, gentle microsuction/irrigation, treat secondary bacterial infection, assess TM integrity after clearance',
                ],
                highlight: 'Avoid blind aggressive instrumentation in the ear canal — larvae may lie adjacent to a fragile perforated tympanic membrane or facial nerve canal. Always perform repeat otoscopy after clearance.'
              },
            ]
          },

          // ─── SECTION 5: NASAL MYIASIS ───
          {
            sectionTitle: '5. Nasal Myiasis — The Most Common ENT Site',
            cards: [
              {
                title: 'Pathogenesis & High-Yield Numbers',
                tags: [{ label: 'Important', type: 'important' }, { label: 'Key Point', type: 'key-point' }],
                content: 'Nasal myiasis is the most common anatomical site of ENT myiasis. Flies deposit eggs inside or near the nostrils while the patient sleeps.',
                bullets: [
                  'Sequence: Foul-smelling nasal discharge → Attracts flies (especially Chrysomya) → Fly deposits ~200 eggs → Eggs hatch into larvae within 24 hours → Larvae invade mucosa/submucosa → Progressive tissue destruction',
                  'High-Yield Number: ~200 eggs deposited at one time',
                  'Hatching Time: Approximately 24 hours',
                ],
                highlight: 'Nasal myiasis is the single most common presentation of ENT myiasis.'
              },
              {
                title: 'Most Important Predisposing Condition: Atrophic Rhinitis',
                tags: [{ label: 'Important', type: 'important' }, { label: 'Key Point', type: 'key-point' }],
                content: 'Atrophic rhinitis is the single most important predisposing nasal condition for myiasis.',
                bullets: [
                  'Atrophic Rhinitis — Primary and most common association',
                  'Leprosy (Hansen disease)',
                  'Tuberculosis / Lupus vulgaris',
                  'Rhinoscleroma',
                  'Syphilitic destructive nasal lesions',
                  'Chronic neglected infected wounds & malignant ulceration',
                ],
                highlight: 'Viva One-Liner: If asked for the commonest predisposing nasal disease in nasal myiasis, the answer is ATROPHIC RHINITIS.'
              },
              {
                title: 'Clinical Presentation — "MAGGOTS" Mnemonic',
                tags: [{ label: 'Clinical', type: 'clinical' }, { label: 'Key Point', type: 'key-point' }],
                content: 'Use the mnemonic "MAGGOTS" for nasal myiasis presentation.',
                bullets: [
                  'M — Movement / crawling foreign-body sensation',
                  'A — Anosmia',
                  'G — Gory (blood-stained or mucopurulent discharge)',
                  'G — Gross foul smell (ozena-like malodour)',
                  'O — Oozing / epistaxis',
                  'T — Tenderness / facial pain',
                  'S — Seeing maggots emerging from the nostril',
                ],
                highlight: 'A definitive history of worms or maggots emerging from the anterior nostril is pathognomonic.'
              },
              {
                title: 'Complications — "O-S-P-B-C" Mnemonic',
                tags: [{ label: 'Important', type: 'important' }, { label: 'Clinical', type: 'clinical' }],
                content: 'Nasal myiasis can cause invasive destruction. Remember "O-S-P-B-C".',
                bullets: [
                  'O — Orbit: orbital cellulitis, subperiosteal abscess, proptosis, loss of vision',
                  'S — Septum: septal ulceration, septal perforation, saddle-nose deformity',
                  'P — Palate: palatal necrosis and perforation (oro-nasal fistula)',
                  'B — Bone / Sinuses: erosion of ethmoid/sphenoid sinus walls, facial skeleton destruction',
                  'C — CNS: cribriform plate erosion, intracranial invasion, pneumocephalus, meningitis, death',
                ],
                highlight: 'Nasal myiasis is not just "maggots in the nose." It is an invasive destructive disease capable of causing orbital blindness, saddle nose, palatal perforation, and fatal meningitis.'
              },
              {
                title: 'Endoscopy & Management Protocol',
                tags: [{ label: 'Clinical', type: 'clinical' }, { label: 'Key Point', type: 'key-point' }],
                content: 'Nasal endoscopy is both DIAGNOSTIC and THERAPEUTIC.',
                bullets: [
                  'Photophobic Nature: Larvae actively retreat from light into deep recesses. Anterior inspection alone is inadequate.',
                  'Endoscopic Removal: Forceps extraction under direct telescopic visualization',
                  'Immobilizing Agents: Diluted turpentine traditionally used to induce larvae to emerge (use cautiously)',
                  'Nasal Toilet: Warm saline douches to flush slough, dead larvae, and crusts',
                  'Secondary Infection: Systemic antibiotics for cellulitis or secondary bacterial infection',
                  'Adjunct Therapy: Systemic Ivermectin (~200 µg/kg) in extensive infestations',
                  'Underlying Disease: Treat atrophic rhinitis to prevent recurrence',
                ],
              },
            ]
          },

          // ─── SECTION 6: THROAT & TRACHEOSTOMY ───
          {
            sectionTitle: '6. Throat & Tracheostomy Myiasis',
            cards: [
              {
                title: 'Throat / Pharyngeal Myiasis (Oestrus ovis)',
                tags: [{ label: 'Clinical', type: 'clinical' }, { label: 'Key Point', type: 'key-point' }],
                content: 'Throat myiasis is commonly caused by Oestrus ovis in individuals exposed to sheep and goats.',
                bullets: [
                  'Clinical: Foreign-body sensation, pharyngeal itching, burning, cough',
                  'Allergy Mimicry: Often misdiagnosed as acute allergic rhinitis/pharyngitis (sneezing, rhinorrhoea, lacrimation)',
                  'Airway Warning: If larvae drop into the larynx, they can precipitate laryngospasm, acute stridor, and severe dyspnoea',
                  'Treatment: Topical lidocaine spray, saline gargles, mechanical extraction; airway assessment takes absolute priority',
                ],
              },
              {
                title: 'Tracheostomy Myiasis — "AIRWAY FIRST"',
                tags: [{ label: 'Clinical', type: 'clinical' }, { label: 'Important', type: 'important' }],
                content: 'Occurs in neglected tracheostomy sites with moist secretions, soiled dressings, and fly exposure.',
                bullets: [
                  'Dangers: Acute airway obstruction by larvae/crusts, tracheal bleeding, deep bronchopulmonary migration, aspiration pneumonia',
                  'Management Principle: AIRWAY FIRST',
                  '1. Assess respiratory distress and verify tracheostomy tube patency',
                  '2. Gentle suctioning of secretions and accessible larvae',
                  '3. Direct inspection of stoma and upper tracheal lumen',
                  '4. Flexible bronchoscopy if distal tracheobronchial migration is suspected',
                  '5. Replace contaminated tube and dressings, enforce barrier protection',
                ],
                highlight: 'In tracheostomy myiasis, never focus solely on the superficial stoma — always investigate for distal tracheal migration and impending airway obstruction.'
              },
            ]
          },

          // ─── SECTION 7: RESIDENT PEARLS & THE 5 Rs ───
          {
            sectionTitle: '7. Resident Pearls, Differential Diagnoses & The 5 Rs',
            cards: [
              {
                title: 'The "5 Rs" of ENT Myiasis Management',
                tags: [{ label: 'Key Point', type: 'key-point' }, { label: 'Important', type: 'important' }],
                content: 'The definitive clinical management framework for viva and exams:',
                bullets: [
                  '1. RECOGNIZE — Active movement, foul smell, bleeding, visible larvae',
                  '2. REMOVE — Complete mechanical / endoscopic extraction under direct visualization',
                  '3. RE-EXAMINE — Perform repeated examinations because photophobic larvae hide deep',
                  '4. REPAIR / REMOVE NECROSIS — Surgical debridement and manage destructive complications',
                  '5. REVERSE THE CAUSE — Treat atrophic rhinitis, clean chronic discharge, improve hygiene and wound protection',
                ],
                highlight: 'The three things examiners love: 1. Atrophic rhinitis predisposes to nasal myiasis. 2. Oestrus ovis from sheep/goats causes throat myiasis mimicking allergy. 3. Larvae are photophobic, mandating repeat endoscopic inspection.'
              },
              {
                title: 'Ivermectin & Specimen Handling',
                tags: [{ label: 'Clinical', type: 'clinical' }],
                content: 'Pharmacological and diagnostic pearls for clinical practice:',
                bullets: [
                  'Ivermectin: Useful oral adjunct in heavy infestation (~200 µg/kg), but NEVER replaces mechanical removal under vision',
                  'Specimen Handling: Collect representative larvae in 70% ethanol for entomological identification; NEVER delay emergency treatment waiting for laboratory species confirmation',
                  'Differential Diagnoses: Foreign bodies, necrotizing fungal infections (Mucormycosis), sinonasal malignancy, severe otitis externa with debris, necrotic oral tumours',
                ],
              },
            ]
          }
        ]
      },
      {
        id: 'otitis-media',
        name: 'Acute Otitis Media (AOM)',
        summary: 'Etiology (S. pneumoniae, H. influenzae), 4 clinical stages (tubal occlusion, pre-suppuration, suppuration, resolution/complication), diagnosis, and pharmacological/surgical management (Myringotomy).',
        isReady: false,
        sections: []
      },
      {
        id: 'csom-cholesteatoma',
        name: 'CSOM & Cholesteatoma',
        summary: 'Tubotympanic (safe/mucosal) vs Atticoantral (unsafe/squamous) disease, pathogenesis of cholesteatoma, bone erosion, intracranial complications, and tympanomastoidectomy techniques.',
        isReady: false,
        sections: []
      },
      {
        id: 'otosclerosis',
        name: 'Otosclerosis & Stapes Surgery',
        summary: 'Autosomal dominant stapedial fixation, conductive hearing loss, Schwartze sign, Carhart notch on audiogram, and Stapedotomy vs Stapedectomy surgical steps.',
        isReady: false,
        sections: []
      },
      {
        id: 'menieres-disease',
        name: 'Ménière Disease & Vestibular Disorders',
        summary: 'Endolymphatic hydrops, classic symptom tetrad (episodic vertigo, fluctuating sensorineural hearing loss, tinnitus, aural fullness), medical management, and chemical labyrinthectomy.',
        isReady: false,
        sections: []
      }
    ]
  },
  {
    id: 'nose',
    name: 'Nose',
    icon: 'N',
    description: 'Rhinology modules covering nasal anatomy, paranasal sinuses, epistaxis, infectious & granulomatous rhinitis, and FESS.',
    subtopics: [
      {
        id: 'atrophic-rhinitis',
        name: 'Atrophic Rhinitis (Ozena)',
        summary: 'Klebsiella ozaenae etiology, roominess of nasal cavity with foul greenish-black crusting, anosmia (mercy anosmia), and medical/surgical management (Young operation).',
        isReady: false,
        sections: []
      },
      {
        id: 'epistaxis',
        name: 'Epistaxis & Vascular Anatomy',
        summary: "Kiesselbach plexus (Little's area) anterior bleeds vs Woodruff plexus posterior bleeds, anterior/posterior packing, sphenopalatine artery ligation, and endovascular embolization.",
        isReady: false,
        sections: []
      },
      {
        id: 'nasal-polyps-fess',
        name: 'Nasal Polyps & FESS',
        summary: 'Ethmoidal vs Antrochoanal polyps, Samter triad (AERD), ostiomeatal complex (OMC) obstruction, and step-by-step Functional Endoscopic Sinus Surgery (FESS).',
        isReady: false,
        sections: []
      },
      {
        id: 'deviated-nasal-septum',
        name: 'Deviated Nasal Septum (DNS) & Septoplasty',
        summary: 'Types of septal deviation, nasal valve obstruction, Septoplasty (Killian/Freer approach) vs Submucosal Resection (SMR), and postoperative complications.',
        isReady: false,
        sections: []
      }
    ]
  },
  {
    id: 'throat',
    name: 'Throat',
    icon: 'T',
    description: 'Pharyngology modules covering adenotonsillar disease, deep neck space infections, pharyngeal malignancies, and sleep apnea.',
    subtopics: [
      {
        id: 'acute-chronic-tonsillitis',
        name: 'Tonsillitis & Adenoid Hypertrophy',
        summary: "Waldeyer's ring anatomy, GABHS tonsillitis, Paradise criteria for tonsillectomy, adenoid facies, and pediatric OSA.",
        isReady: false,
        sections: []
      },
      {
        id: 'quinsy-deep-neck-infections',
        name: 'Quinsy (Peritonsillar Abscess) & Parapharyngeal Infections',
        summary: 'Trismus, hot potato voice, uvular deviation, needle aspiration/I&D, Ludwig angina, and parapharyngeal space anatomy.',
        isReady: false,
        sections: []
      },
      {
        id: 'nasopharyngeal-carcinoma',
        name: 'Nasopharyngeal Carcinoma (NPC)',
        summary: 'EBV association, fossa of Rosenmüller origin, Trotter triad, neck nodal metastasis pattern, and definitive radiotherapy/chemoradiotherapy.',
        isReady: false,
        sections: []
      }
    ]
  },
  {
    id: 'oral-cavity',
    name: 'Oral Cavity',
    icon: 'OC',
    description: 'Oral medicine and oncological surgery covering mucosal lesions, premalignancy, and tongue/floor of mouth carcinoma.',
    subtopics: [
      {
        id: 'leukoplakia-osmf',
        name: 'Leukoplakia, Erythroplakia & OSMF',
        summary: 'WHO premalignant classifications, betel nut pathogenesis in Oral Submucous Fibrosis (OSMF), trismus staging, and biopsy guidelines.',
        isReady: false,
        sections: []
      },
      {
        id: 'oral-squamous-carcinoma',
        name: 'Carcinoma of Tongue & Oral Cavity',
        summary: 'Lateral border tongue SCC, TNM staging, depth of invasion (DOI), wide local excision with neck dissection, and microvascular reconstruction.',
        isReady: false,
        sections: []
      }
    ]
  },
  {
    id: 'salivary-gland',
    name: 'Salivary Gland',
    icon: 'SG',
    description: 'Salivary gland pathology covering non-neoplastic inflammatory disease, calculi, and benign/malignant salivary neoplasms.',
    subtopics: [
      {
        id: 'pleomorphic-adenoma-tumors',
        name: 'Salivary Gland Neoplasms (Pleomorphic Adenoma, Warthin)',
        summary: 'Rule of 80s in parotid pathology, facial nerve identification landmarks in parotidectomy, Mucoepidermoid carcinoma, and Adenoid cystic carcinoma.',
        isReady: false,
        sections: []
      },
      {
        id: 'sialolithiasis',
        name: 'Sialolithiasis & Sialadenitis',
        summary: "Wharton duct vs Stensen duct calculus predisposition, mealtime syndrome, diagnostic imaging, and Sialendoscopy techniques.",
        isReady: false,
        sections: []
      }
    ]
  },
  {
    id: 'larynx-trachea',
    name: 'Larynx & Trachea',
    icon: 'LT',
    description: 'Laryngology and airway modules covering voice pathology, nerve paralysis, laryngeal carcinoma, and tracheostomy.',
    subtopics: [
      {
        id: 'vocal-cord-paralysis',
        name: 'Vocal Cord Paralysis & Semon Law',
        summary: 'Recurrent laryngeal nerve vs Superior laryngeal nerve anatomy, Semon law of abductor vulnerability, medialization thyroplasty, and airway emergencies.',
        isReady: false,
        sections: []
      },
      {
        id: 'laryngeal-carcinoma',
        name: 'Carcinoma Larynx (Glottic, Supraglottic, Subglottic)',
        summary: 'Early presentation of glottic cancer vs silent supraglottic spread, radiation therapy vs Laser cordectomy vs Total laryngectomy and voice rehabilitation.',
        isReady: false,
        sections: []
      },
      {
        id: 'tracheostomy-care',
        name: 'Tracheostomy & Emergency Airway Management',
        summary: 'Elective vs Emergency surgical tracheostomy (2nd-3rd rings), Cricothyroidotomy, acute and late complications, and tracheostomy decannulation protocols.',
        isReady: false,
        sections: []
      }
    ]
  },
  {
    id: 'surgeries',
    name: 'Surgeries',
    icon: 'Sx',
    description: 'Operative Otorhinolaryngology covering key ENT surgical procedures, indications, step-by-step techniques, and complications.',
    subtopics: [
      {
        id: 'tympanoplasty-mastoidectomy-sx',
        name: 'Tympanoplasty & Mastoidectomy Steps',
        summary: "Wullstein tympanoplasty types I-V, temporalis fascia underlay/overlay technique, Macewen triangle, and cortical vs modified radical mastoidectomy.",
        isReady: false,
        sections: []
      },
      {
        id: 'fess-surgery-steps',
        name: 'Functional Endoscopic Sinus Surgery (FESS) Steps',
        summary: 'Uncinectomy, anterior ethmoidectomy, maxillary antrostomy, frontal sinusotomy, Lamina papyracea safety boundary, and orbital/skull base safety checks.',
        isReady: false,
        sections: []
      },
      {
        id: 'tonsillectomy-adenoidectomy-sx',
        name: 'Tonsillectomy & Adenoidectomy Techniques',
        summary: 'Dissection and snare, bipolar diathermy, coblation tonsillectomy, managing primary, reactionary (6-8h), and secondary hemorrhage.',
        isReady: false,
        sections: []
      },
      {
        id: 'total-laryngectomy-sx',
        name: 'Total Laryngectomy & Voice Rehabilitation',
        summary: 'Skeletonization of larynx, hyoid resection, pharyngeal mucosal closure, permanent tracheostoma construction, and Tracheoesophageal Puncture (TEP) with Blom-Singer valve.',
        isReady: false,
        sections: []
      }
    ]
  }
];
