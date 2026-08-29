import { useState } from 'react';
import type { TopicData, SubTopicData, MedicalImage } from '../data/notes';
import { medicalDrugs } from '../data/drugs';
import type { DrugInfo } from '../data/drugs';
import MCQPractice from './MCQPractice';
import DrugModal from './DrugModal';

interface TopicContentProps {
  topic: TopicData;
  subtopic: SubTopicData;
}

export default function TopicContent({ topic, subtopic }: TopicContentProps) {
  const [activeTab, setActiveTab] = useState<'article' | 'mcq' | 'gallery'>('article');
  const [selectedImage, setSelectedImage] = useState<MedicalImage | null>(null);
  const [selectedDrug, setSelectedDrug] = useState<DrugInfo | null>(null);

  const hasNotes = subtopic.sections && subtopic.sections.length > 0;
  const hasGallery = subtopic.gallery && subtopic.gallery.length > 0;
  const primaryImage = subtopic.gallery?.[0];

  const handleOpenDrug = (drugKey: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const drug = medicalDrugs[drugKey];
    if (drug) {
      setSelectedDrug(drug);
    }
  };

  // Helper to highlight and make medication names clickable in bullet points
  const renderBulletWithDrugLinks = (text: string) => {
    // Replace drug keywords with clickable badges
    let formatted = text
      .replace(/^([A-Z\s—\–\-]{1,25}:)/g, '<strong>$1</strong>')
      .replace(/^([0-9]+\.\s+[A-Z\s]+—)/g, '<strong>$1</strong>')
      .replace(/^([A-Z]\s+[—–-]\s+[^:]+:)/g, '<strong>$1</strong>');

    return (
      <span
        dangerouslySetInnerHTML={{
          __html: formatted
            .replace(/\b(Ivermectin|ivermectin)\b/g, '<button class="inline-drug-tag" data-drug="ivermectin">💊 Ivermectin</button>')
            .replace(/\b(Turpentine|turpentine)\b/g, '<button class="inline-drug-tag" data-drug="turpentine">🧪 Turpentine Oil</button>')
            .replace(/\b(Amoxicillin|amoxicillin|penicillin|Penicillin)\b/g, '<button class="inline-drug-tag" data-drug="amoxicillin">💊 Amoxicillin</button>')
            .replace(/\b(Lidocaine|lidocaine)\b/g, '<button class="inline-drug-tag" data-drug="lidocaine">💉 Lidocaine</button>')
            .replace(/\b(Liquid paraffin|mineral oil|liquid paraffin|paraffin)\b/g, '<button class="inline-drug-tag" data-drug="paraffin">💧 Liquid Paraffin</button>')
        }}
        onClick={(e) => {
          const target = (e.target as HTMLElement).closest('.inline-drug-tag') as HTMLElement | null;
          if (target && target.dataset.drug) {
            handleOpenDrug(target.dataset.drug);
          }
        }}
      />
    );
  };

  return (
    <article className="wiki-article-wrapper">
      {/* Top Action Header with Tab Switcher */}
      <div className="wiki-article-top-bar">
        <div className="wiki-current-topic-label">
          <span className="topic-parent-name">{topic.name}</span>
          <span className="topic-divider">/</span>
          <span className="subtopic-current-name">{subtopic.name}</span>
        </div>

        <div className="wiki-view-switchers">
          <button 
            className={`wiki-switcher-btn ${activeTab === 'article' ? 'switcher-active' : ''}`}
            onClick={() => setActiveTab('article')}
          >
            Article
          </button>
          {hasGallery && (
            <button 
              className={`wiki-switcher-btn ${activeTab === 'gallery' ? 'switcher-active' : ''}`}
              onClick={() => setActiveTab('gallery')}
            >
              Media ({subtopic.gallery?.length})
            </button>
          )}
          <button 
            className={`wiki-switcher-btn wiki-mcq-btn ${activeTab === 'mcq' ? 'switcher-active' : ''}`}
            onClick={() => setActiveTab('mcq')}
          >
            Practice MCQs (14)
          </button>
        </div>
      </div>

      {activeTab === 'mcq' ? (
        <MCQPractice onBackToNotes={() => setActiveTab('article')} />
      ) : activeTab === 'gallery' && hasGallery ? (
        /* ─── MEDICAL MEDIA GALLERY ─── */
        <div className="wiki-gallery-page">
          <div className="wiki-gallery-header">
            <h2>Medical Image Library: {subtopic.name}</h2>
            <p>High-resolution clinical photographs, parasitological specimens, and morphological references.</p>
          </div>

          <div className="wiki-gallery-grid">
            {subtopic.gallery?.map((img) => (
              <div 
                key={img.id} 
                className="wiki-gallery-card"
                onClick={() => setSelectedImage(img)}
              >
                <div className="wiki-gallery-img-container">
                  <img src={img.url} alt={img.title} loading="lazy" />
                  <span className="wiki-gallery-badge">{img.species}</span>
                </div>
                <div className="wiki-gallery-meta">
                  <h4>{img.title}</h4>
                  <p>{img.caption}</p>
                  <div className="wiki-fact-pill">
                    <strong>Pearl:</strong> {img.highYieldFact}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="wiki-gallery-footer">
            <button className="btn-primary" onClick={() => setActiveTab('article')}>
              Return to Article
            </button>
            <button className="btn-secondary" onClick={() => setActiveTab('mcq')}>
              Test Knowledge (MCQs) →
            </button>
          </div>
        </div>
      ) : !hasNotes ? (
        <div className="wiki-empty-notice">
          <h3>Article in Development</h3>
          <p>The comprehensive review article for <strong>{subtopic.name}</strong> is currently being drafted. Please select an active subtopic from the sidebar (e.g. <strong>Ear → Myiasis in ENT</strong>).</p>
        </div>
      ) : (
        /* ─── MODERN WIKIPEDIA ARTICLE LAYOUT ─── */
        <div className="wiki-layout">
          {/* Article Main Body */}
          <div className="wiki-main-column">
            {/* Header / Title Area */}
            <header className="wiki-header">
              <div className="wiki-title-row">
                <h1 className="wiki-title">{subtopic.name}</h1>
                <span className="wiki-high-yield-badge">High-Yield Exam Review</span>
              </div>
              <div className="wiki-lead-summary">
                <p>
                  <strong>Myiasis in Otorhinolaryngology</strong> refers to the parasitic infestation of human or vertebrate tissues within the ear, nose, paranasal sinuses, pharynx, oral cavity, or tracheobronchial tree by the larvae (maggots) of dipterous (true) flies. It represents a potentially invasive and destructive clinical entity requiring prompt diagnosis, complete manual/endoscopic debridement, and treatment of underlying chronic mucosal pathology.
                </p>
              </div>
            </header>

            {/* Mobile Infobox (shows when screen is narrow) */}
            <div className="wiki-infobox-mobile">
              <div className="infobox-header">Quick Clinical Summary</div>
              <div className="infobox-row">
                <span className="infobox-label">Specialty:</span>
                <span className="infobox-val">Otorhinolaryngology / Parasitology</span>
              </div>
              <div className="infobox-row">
                <span className="infobox-label">Commonest Site:</span>
                <span className="infobox-val">Nasal cavity (Nasal Myiasis)</span>
              </div>
              <div className="infobox-row">
                <span className="infobox-label">Primary Organism:</span>
                <span className="infobox-val"><em>Chrysomya bezziana</em> (Calliphoridae)</span>
              </div>
              <div className="infobox-row">
                <span className="infobox-label">Predisposing Disease:</span>
                <span className="infobox-val">Atrophic Rhinitis (Ozena)</span>
              </div>
            </div>

            {/* Modern Wikipedia-style Table of Contents */}
            <nav className="wiki-toc-box">
              <div className="wiki-toc-title">Contents</div>
              <ol className="wiki-toc-list">
                {subtopic.sections.map((section, idx) => (
                  <li key={idx} className="wiki-toc-item">
                    <a href={`#section-${idx}`}>
                      <span className="toc-number">{idx + 1}</span>
                      <span className="toc-text">{section.sectionTitle.replace(/^\d+\.\s*/, '')}</span>
                    </a>
                  </li>
                ))}
                <li className="wiki-toc-item toc-special">
                  <a href="#mcq-practice" onClick={(e) => { e.preventDefault(); setActiveTab('mcq'); }}>
                    <span className="toc-number">★</span>
                    <span className="toc-text">Interactive MCQ Self-Assessment (14 Questions)</span>
                  </a>
                </li>
              </ol>
            </nav>

            {/* Pharmacotherapy Quick Popover Bar */}
            <div className="drug-quick-bar">
              <span className="drug-bar-label">Drug Dosage & Interaction Reference:</span>
              <div className="drug-chips-wrapper">
                <button className="drug-chip-btn" onClick={() => handleOpenDrug('ivermectin')}>
                  💊 Ivermectin (200 µg/kg)
                </button>
                <button className="drug-chip-btn" onClick={() => handleOpenDrug('turpentine')}>
                  🧪 Turpentine Oil (1:4)
                </button>
                <button className="drug-chip-btn" onClick={() => handleOpenDrug('amoxicillin')}>
                  💊 Amoxicillin / Clavulanate
                </button>
                <button className="drug-chip-btn" onClick={() => handleOpenDrug('lidocaine')}>
                  💉 Topical Lidocaine 4%
                </button>
                <button className="drug-chip-btn" onClick={() => handleOpenDrug('paraffin')}>
                  💧 Liquid Paraffin
                </button>
              </div>
            </div>

            {/* Inline Article Sections */}
            <div className="wiki-article-body">
              {subtopic.sections.map((section, sIdx) => (
                <section key={sIdx} id={`section-${sIdx}`} className="wiki-section">
                  <h2 className="wiki-section-h2">
                    <span className="wiki-h2-number">{sIdx + 1}</span>
                    {section.sectionTitle.replace(/^\d+\.\s*/, '')}
                  </h2>

                  <div className="wiki-section-content">
                    {section.cards.map((card, cIdx) => (
                      <div key={cIdx} className="wiki-subblock">
                        <h3 className="wiki-subblock-h3">{card.title}</h3>
                        
                        <p className="wiki-paragraph">{card.content}</p>

                        {card.bullets && card.bullets.length > 0 && (
                          <ul className="wiki-bullets">
                            {card.bullets.map((b, bIdx) => (
                              <li key={bIdx}>
                                {renderBulletWithDrugLinks(b)}
                              </li>
                            ))}
                          </ul>
                        )}

                        {/* High Yield Callout Box */}
                        {card.highlight && (
                          <div className="wiki-callout-pearl">
                            <div className="callout-pearl-header">
                              <span className="pearl-pill">High-Yield Exam Pearl</span>
                            </div>
                            <p className="callout-pearl-body">{card.highlight}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {/* Wikipedia-Style References & High-Yield Summary Banner */}
            <div className="wiki-summary-box">
              <h3>Core Examination Take-Home Framework</h3>
              <p>
                The cornerstone of ENT myiasis management is prompt complete removal under direct endoscopic visualization, repeated examinations for hidden photophobic larvae, thorough debridement of devitalized tissues, and permanent correction of predisposing chronic pathology (especially atrophic rhinitis).
              </p>
              <div className="wiki-summary-action-row">
                <button 
                  className="btn-wiki-mcq-launch"
                  onClick={() => {
                    setActiveTab('mcq');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Launch 14-Question MCQ Practice Quiz →
                </button>
              </div>
            </div>
          </div>

          {/* Right Sidebar: Wikipedia-Style Medical Infobox */}
          <aside className="wiki-infobox-sidebar">
            <div className="wiki-infobox">
              <div className="infobox-top-heading">
                <h3>Myiasis in ENT</h3>
                <span className="infobox-latin">Infestatio Dipterica Cavitaria</span>
              </div>

              {primaryImage && (
                <div 
                  className="infobox-image-box" 
                  onClick={() => setSelectedImage(primaryImage)}
                  title="Click to zoom image"
                >
                  <img src={primaryImage.url} alt={primaryImage.title} />
                  <span className="infobox-image-caption">
                    <em>Chrysomya bezziana</em> adult & larva
                  </span>
                </div>
              )}

              <table className="infobox-table">
                <tbody>
                  <tr className="infobox-category-header">
                    <th colSpan={2}>Clinical Overview</th>
                  </tr>
                  <tr>
                    <th>Specialty</th>
                    <td>Otorhinolaryngology, Infectious Diseases</td>
                  </tr>
                  <tr>
                    <th>Etiology</th>
                    <td>Dipterous true fly larvae (order <em>Diptera</em>)</td>
                  </tr>
                  <tr>
                    <th>Key Families</th>
                    <td><em>Calliphoridae</em>, <em>Oestridae</em>, <em>Sarcophagidae</em></td>
                  </tr>
                  <tr>
                    <th>High-Yield Species</th>
                    <td>
                      <em>Chrysomya bezziana</em><br />
                      <em>Oestrus ovis</em><br />
                      <em>Wohlfahrtia magnifica</em>
                    </td>
                  </tr>
                  <tr className="infobox-category-header">
                    <th colSpan={2}>Epidemiology & Sites</th>
                  </tr>
                  <tr>
                    <th>Commonest Site</th>
                    <td><strong>Nasal Myiasis</strong> (Nose & sinuses)</td>
                  </tr>
                  <tr>
                    <th>Other Sites</th>
                    <td>Ear (Otomyiasis), Oral cavity, Throat, Tracheostomy</td>
                  </tr>
                  <tr>
                    <th>Primary Risk Factor</th>
                    <td><strong>Atrophic Rhinitis</strong> (Ozena)</td>
                  </tr>
                  <tr className="infobox-category-header">
                    <th colSpan={2}>Pharmacotherapy</th>
                  </tr>
                  <tr>
                    <th>Systemic Adjunct</th>
                    <td>
                      <button className="infobox-drug-link" onClick={() => handleOpenDrug('ivermectin')}>
                        Ivermectin (200 µg/kg) ↗
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th>Topical Extractant</th>
                    <td>
                      <button className="infobox-drug-link" onClick={() => handleOpenDrug('turpentine')}>
                        Turpentine Oil (1:4) ↗
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th>Secondary Infection</th>
                    <td>
                      <button className="infobox-drug-link" onClick={() => handleOpenDrug('amoxicillin')}>
                        Amoxicillin/Clavulanate ↗
                      </button>
                    </td>
                  </tr>
                  <tr className="infobox-category-header">
                    <th colSpan={2}>Management</th>
                  </tr>
                  <tr>
                    <th>First-line</th>
                    <td>Manual/Endoscopic removal under direct vision</td>
                  </tr>
                  <tr>
                    <th>Rule of Thumb</th>
                    <td><strong>The 5 Rs:</strong> Recognize, Remove, Re-examine, Repair, Reverse cause</td>
                  </tr>
                </tbody>
              </table>

              <div className="infobox-action-card">
                <button 
                  className="btn-infobox-mcq"
                  onClick={() => setActiveTab('mcq')}
                >
                  Practice 14 MCQs →
                </button>
              </div>
            </div>

            {/* Additional Secondary Image Card in Sidebar */}
            {subtopic.gallery && subtopic.gallery[1] && (
              <div 
                className="wiki-sidebar-figure"
                onClick={() => setSelectedImage(subtopic.gallery![1])}
              >
                <img src={subtopic.gallery[1].url} alt={subtopic.gallery[1].title} />
                <span className="figure-caption">
                  <strong>Figure 2:</strong> <em>Oestrus ovis</em> larva (sheep botfly). Responsible for pharyngeal myiasis.
                </span>
              </div>
            )}
          </aside>
        </div>
      )}

      {/* Image Zoom Modal */}
      {selectedImage && (
        <div className="image-modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="image-modal-content" onClick={e => e.stopPropagation()}>
            <button className="btn-close-modal" onClick={() => setSelectedImage(null)}>✕</button>
            <img src={selectedImage.url} alt={selectedImage.title} className="modal-img" />
            <div className="modal-details">
              <span className="modal-species">{selectedImage.species}</span>
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.caption}</p>
              <div className="wiki-callout-pearl" style={{ marginTop: '12px' }}>
                <div className="callout-pearl-header">
                  <span className="pearl-pill">High-Yield Fact</span>
                </div>
                <p className="callout-pearl-body">{selectedImage.highYieldFact}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Interactive Drug Dosage & Interaction Popover Modal */}
      <DrugModal 
        drug={selectedDrug} 
        onClose={() => setSelectedDrug(null)} 
      />
    </article>
  );
}
