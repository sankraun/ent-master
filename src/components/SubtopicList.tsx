import type { TopicData, SubTopicData } from '../data/notes';

interface SubtopicListProps {
  topic: TopicData;
  onSelectSubTopic: (subTopic: SubTopicData) => void;
}

export default function SubtopicList({ topic, onSelectSubTopic }: SubtopicListProps) {
  return (
    <div className="subtopic-hub-container">
      {/* Topic Hero Banner */}
      <div className="subtopic-hub-hero">
        <div className="hub-hero-icon">{topic.icon}</div>
        <div className="hub-hero-info">
          <span className="hub-hero-badge">ENT Curriculum Module</span>
          <h1>{topic.name}</h1>
          <p>{topic.description}</p>
        </div>
      </div>

      {/* Subtopics Listing Section */}
      <div className="subtopics-section">
        <div className="subtopics-section-header">
          <h2>Select a Sub-Topic to Study</h2>
          <span className="subtopics-count-badge">
            {topic.subtopics.length} {topic.subtopics.length === 1 ? 'Subtopic' : 'Subtopics'}
          </span>
        </div>

        <div className="subtopics-grid">
          {topic.subtopics.map((subtopic, idx) => {
            return (
              <div
                key={subtopic.id}
                className={`subtopic-card ${subtopic.isReady ? 'subtopic-card-ready' : 'subtopic-card-pending'}`}
                onClick={() => {
                  if (subtopic.isReady) {
                    onSelectSubTopic(subtopic);
                  }
                }}
                role="button"
                tabIndex={0}
                id={`subtopic-${subtopic.id}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    if (subtopic.isReady) onSelectSubTopic(subtopic);
                  }
                }}
              >
                <div className="subtopic-card-top">
                  <span className="subtopic-num">{idx + 1}</span>
                  {subtopic.isReady ? (
                    <span className="badge-pill badge-active">Full Notes & MCQs</span>
                  ) : (
                    <span className="badge-pill badge-upcoming">In Syllabus</span>
                  )}
                </div>

                <h3 className="subtopic-title">{subtopic.name}</h3>
                <p className="subtopic-summary">{subtopic.summary}</p>

                <div className="subtopic-card-bottom">
                  {subtopic.isReady ? (
                    <button className="btn-open-subtopic">
                      Open Notes & MCQs →
                    </button>
                  ) : (
                    <span className="subtopic-pending-text">Notes in preparation</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
