import type { TopicData } from '../data/notes';

interface WelcomeScreenProps {
  topics: TopicData[];
  onSelectTopic: (topic: TopicData) => void;
}

const BookMedicalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    <line x1="12" y1="6" x2="12" y2="12" />
    <line x1="9" y1="9" x2="15" y2="9" />
  </svg>
);

export default function WelcomeScreen({ topics, onSelectTopic }: WelcomeScreenProps) {
  const earTopic = topics.find(t => t.id === 'ear');

  return (
    <div className="welcome-screen">
      <div className="welcome-hero-banner">
        <div className="welcome-logo">
          <BookMedicalIcon />
        </div>
        <h2>Welcome to ENT Master</h2>
        <p className="welcome-subtitle">
          An open, structured, high-yield clinical learning portal for Otorhinolaryngology students, residents, and practitioners.
        </p>

        {earTopic && (
          <div className="featured-topic-card" onClick={() => onSelectTopic(earTopic)}>
            <div className="featured-pill">Featured Study Module</div>
            <h3>Ear: Myiasis in ENT (High-Yield Master Notes + 14 MCQs)</h3>
            <p>
              Complete breakdown of definitions, Calliphoridae & Oestrus ovis etiology, site-specific presentations (Otomyiasis, Nasal, Oral, Tracheostomy), complication mnemonics, and the 5 Rs management protocol.
            </p>
            <button className="btn-featured-start">
              Open Notes & Practice Questions →
            </button>
          </div>
        )}
      </div>

      <div className="welcome-modules-section">
        <h3 className="section-subtitle">All ENT Topic Modules</h3>
        <div className="welcome-topics">
          {topics.map((topic) => {
            const hasContent = topic.subtopics.some(s => s.isReady);
            return (
              <div
                key={topic.id}
                className={`welcome-topic-card ${hasContent ? 'card-has-content' : ''}`}
                onClick={() => onSelectTopic(topic)}
                role="button"
                tabIndex={0}
                id={`welcome-${topic.id}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectTopic(topic);
                  }
                }}
              >
                <div className="icon-wrapper">{topic.icon}</div>
                <span className="label">{topic.name}</span>
                {hasContent ? (
                  <span className="module-badge badge-ready">Notes & MCQs Active</span>
                ) : (
                  <span className="module-badge badge-pending">Module</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
