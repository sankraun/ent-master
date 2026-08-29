import type { DrugInfo } from '../data/drugs';

interface DrugModalProps {
  drug: DrugInfo | null;
  onClose: () => void;
}

export default function DrugModal({ drug, onClose }: DrugModalProps) {
  if (!drug) return null;

  return (
    <div className="drug-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="drug-modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="drug-modal-header">
          <div className="drug-header-info">
            <div className="drug-class-badge">{drug.drugClass}</div>
            <h2 className="drug-modal-title">{drug.name}</h2>
            <span className="drug-generic-name">{drug.genericName}</span>
          </div>
          <button className="btn-drug-close" onClick={onClose} aria-label="Close drug reference">
            ✕
          </button>
        </div>

        {/* Body Content */}
        <div className="drug-modal-body">
          {/* Mechanism of Action */}
          <div className="drug-section">
            <h4 className="drug-section-title">
              <span className="drug-icon-dot" /> Mechanism of Action
            </h4>
            <p className="drug-moa-text">{drug.mechanismOfAction}</p>
          </div>

          {/* Dosage Matrix */}
          <div className="drug-section">
            <h4 className="drug-section-title">
              <span className="drug-icon-dot" /> Dosage & Administration
            </h4>
            <div className="drug-dosage-grid">
              <div className="dosage-box adult-box">
                <span className="dosage-label">Adult Regimen</span>
                <p className="dosage-val">{drug.adultDose}</p>
              </div>
              <div className="dosage-box pediatric-box">
                <span className="dosage-label">Pediatric Regimen</span>
                <p className="dosage-val">{drug.pediatricDose}</p>
              </div>
            </div>
          </div>

          {/* Contraindications */}
          <div className="drug-section">
            <h4 className="drug-section-title">
              <span className="drug-icon-dot" /> Contraindications
            </h4>
            <ul className="drug-contra-list">
              {drug.contraindications.map((ci, idx) => (
                <li key={idx}>{ci}</li>
              ))}
            </ul>
          </div>

          {/* Emergency Warning */}
          <div className="drug-alert-box alert-warning">
            <div className="alert-header">
              <span className="alert-title">Emergency Warning & Safety Alert</span>
            </div>
            <p className="alert-text">{drug.emergencyWarnings}</p>
          </div>

          {/* High-Yield Exam Fact */}
          <div className="drug-alert-box alert-pearl">
            <div className="alert-header">
              <span className="alert-title">High-Yield Exam Pearl</span>
            </div>
            <p className="alert-text">{drug.highYieldExamFact}</p>
          </div>
        </div>

        {/* Footer */}
        <div className="drug-modal-footer">
          <button className="btn-drug-done" onClick={onClose}>
            Close Reference
          </button>
        </div>
      </div>
    </div>
  );
}
