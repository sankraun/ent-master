export interface DrugInfo {
  id: string;
  name: string;
  genericName: string;
  drugClass: string;
  mechanismOfAction: string;
  adultDose: string;
  pediatricDose: string;
  contraindications: string[];
  emergencyWarnings: string;
  highYieldExamFact: string;
}

export const medicalDrugs: Record<string, DrugInfo> = {
  ivermectin: {
    id: 'ivermectin',
    name: 'Ivermectin',
    genericName: 'Ivermectin',
    drugClass: 'Antiparasitic / Avermectin derivative',
    mechanismOfAction: 'Binds selectively to glutamate-gated chloride channels in invertebrate nerve and muscle cells, causing hyperpolarization, paralysis, and death of larvae.',
    adultDose: '200 µg/kg single oral dose (repeated at 24–48 hours if severe/recurrent cavitary myiasis).',
    pediatricDose: '200 µg/kg single oral dose in children weighing ≥15 kg (Safety in <15 kg not established).',
    contraindications: [
      'Hypersensitivity to ivermectin',
      'Children weighing <15 kg',
      'Pregnancy (Category C) and lactation (unless benefits outweigh risks)',
      'Concurrent central nervous system depressant use'
    ],
    emergencyWarnings: 'In cavitary ENT myiasis, Ivermectin is an ADJUNCT and NEVER replaces urgent mechanical removal, airway stabilization, or surgical debridement of necrotic tissues.',
    highYieldExamFact: 'Viva Question: Standard dose in extensive myiasis is ~200 µg/kg oral. Always assess and secure the airway prior to oral antiparasitic administration.'
  },
  turpentine: {
    id: 'turpentine',
    name: 'Turpentine Oil (Diluted)',
    genericName: 'Rectified Turpentine Oil (1:4 with liquid paraffin)',
    drugClass: 'Topical Irritant / Immobilizing Chemical Agent',
    mechanismOfAction: 'Creates an intensely irritating and hypoxic local environment, suffocating dipterous larvae and stimulating them to migrate outward toward the cavity orifice for easier forceps extraction.',
    adultDose: 'Topical instillation of diluted mixture (1 part turpentine to 4 parts liquid paraffin/mineral oil) on soaked cotton pledgets for 10–15 minutes.',
    pediatricDose: 'Use with extreme caution; small cotton pledget placement only under direct visualization. Avoid liquid instillation in neonates/infants.',
    contraindications: [
      'Known chemical hypersensitivity',
      'Large tympanic membrane perforations with exposed middle-ear mucosa (risk of ototoxicity / chemical labyrinthitis)',
      'Severe denuded skull base or suspected CSF rhinorrhoea (risk of chemical meningitis)'
    ],
    emergencyWarnings: 'CAUTION: Avoid uncontrolled liquid pouring into the nasal cavity due to high risk of laryngeal aspiration, bronchospasm, chemical pneumonitis, and severe mucosal ulceration.',
    highYieldExamFact: 'Always use diluted preparations (1:4) on a wick or cotton pledget. Do not flood the nasal cavity or ear canal blindly.'
  },
  amoxicillin: {
    id: 'amoxicillin',
    name: 'Amoxicillin / Clavulanic Acid',
    genericName: 'Amoxicillin + Clavulanate (Augmentin)',
    drugClass: 'Beta-lactam Antibacterial with Beta-lactamase inhibitor',
    mechanismOfAction: 'Inhibits bacterial cell wall synthesis while clavulanic acid prevents enzymatic degradation by beta-lactamases produced by secondary colonizing organisms (e.g. S. aureus, Klebsiella, Pseudomonas).',
    adultDose: '625 mg to 1 g PO q8–12h, or 1.2 g IV q8h in severe secondary cellulitis or destructive sinus infection.',
    pediatricDose: '40–45 mg/kg/day (based on amoxicillin component) divided q8–12h.',
    contraindications: [
      'History of penicillin or beta-lactam anaphylaxis',
      'History of amoxicillin-clavulanate-associated cholestatic jaundice / hepatic dysfunction'
    ],
    emergencyWarnings: 'Antibiotics treat secondary bacterial infection, cellulitis, and sepsis—they have NO effect on living dipterous larvae and do not substitute for mechanical clearance.',
    highYieldExamFact: 'In patients with infectious mononucleosis (EBV), aminopenicillins cause a classic maculopapular rash; use alternative coverage if EBV is suspected.'
  },
  lidocaine: {
    id: 'lidocaine',
    name: 'Lidocaine 4% (Topical)',
    genericName: 'Lidocaine Hydrochloride Topical Solution / Spray',
    drugClass: 'Amide-type Local Anesthetic',
    mechanismOfAction: 'Reversibly blocks voltage-gated sodium channels on neuronal membranes, preventing nerve impulse conduction and abolishing local pain and gag reflex.',
    adultDose: '2–4 sprays of 4% topical solution (or 10% metered dose spray) applied to nasal mucosa or posterior pharyngeal wall prior to endoscopy/extraction. Maximum single dose: 4.5 mg/kg (not to exceed 300 mg).',
    pediatricDose: '2–3 mg/kg maximum topical dose with strict calculation to avoid systemic absorption toxicity.',
    contraindications: [
      'Amide-class local anesthetic allergy',
      'Severe cardiac conduction blocks / arrhythmias (with systemic absorption)'
    ],
    emergencyWarnings: 'Monitor maximum dose. Overdose or rapid mucosal absorption can cause Local Anesthetic Systemic Toxicity (LAST): perioral numbness, tinnitus, seizures, and cardiovascular collapse.',
    highYieldExamFact: 'Topical lidocaine spray induces temporary paralysis of pharyngeal sensations—patients must remain NPO (nothing by mouth) for at least 1 hour post-procedure to prevent aspiration.'
  },
  paraffin: {
    id: 'paraffin',
    name: 'Liquid Paraffin / Mineral Oil',
    genericName: 'Liquid Paraffin (Mineral Oil)',
    drugClass: 'Inert Occlusive Emollient / Suffocating Agent',
    mechanismOfAction: 'Forms an airtight lipid barrier over the larval respiratory spiracles, creating complete anaerobic occlusion. This suffocates the larvae and forces them to crawl toward the surface.',
    adultDose: 'Instill 2–3 ml into the external auditory canal or apply on nasal cotton packs for 10–20 minutes prior to instrumentation.',
    pediatricDose: 'Instill 1–2 ml into the ear canal or place lubricated cotton ball.',
    contraindications: [
      'Aspiration risk (do not instill large volume into nasal cavity in patients with altered sensorium or absent airway reflexes)'
    ],
    emergencyWarnings: 'In ear canal application, ensure the oil is at body temperature (37°C) to prevent caloric-induced nystagmus and vertigo.',
    highYieldExamFact: 'Liquid paraffin is safe, non-ototoxic, and serves as an ideal carrier vehicle for diluted turpentine or as a standalone suffocating agent in otomyiasis.'
  }
};
