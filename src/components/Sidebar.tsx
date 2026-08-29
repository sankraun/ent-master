import { useState } from 'react';
import type { TopicData, SubTopicData } from '../data/notes';

interface SidebarProps {
  topics: TopicData[];
  activeTopic: TopicData | null;
  activeSubTopic: SubTopicData | null;
  onSelectTopic: (topic: TopicData) => void;
  onSelectSubTopic: (topic: TopicData, subTopic: SubTopicData) => void;
  isOpen: boolean;
}

const CaduceusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v20" />
    <path d="M8 5c1-1 3-1 4 0 1-1 3-1 4 0 1 1 1 3 0 4-1 1-3 1-4 0-1 1-3 1-4 0-1-1-1-3 0-4z" />
    <path d="M6 12c1.5-1.5 4.5-1.5 6 0 1.5-1.5 4.5-1.5 6 0 1.5 1.5 1.5 4.5 0 6-1.5 1.5-4.5 1.5-6 0-1.5 1.5-4.5 1.5-6 0-1.5-1.5-1.5-4.5 0-6z" />
  </svg>
);

export default function Sidebar({
  topics,
  activeTopic,
  activeSubTopic,
  onSelectTopic,
  onSelectSubTopic,
  isOpen
}: SidebarProps) {
  // Track which topic dropdowns are currently expanded (accordion state)
  const [expandedTopicIds, setExpandedTopicIds] = useState<Record<string, boolean>>({
    // Keep all closed by default or open on demand
  });

  const toggleTopicDropdown = (topic: TopicData, e: React.MouseEvent) => {
    e.stopPropagation();
    const isCurrentlyExpanded = !!expandedTopicIds[topic.id];
    setExpandedTopicIds(prev => ({
      ...prev,
      [topic.id]: !isCurrentlyExpanded
    }));
    onSelectTopic(topic);
  };

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <div className="sidebar-brand">
          <div className="sidebar-logo">
            <CaduceusIcon />
          </div>
          <div className="sidebar-brand-text">
            <h1>ENT Master</h1>
            <span>Clinical Reference Library</span>
          </div>
        </div>
      </div>

      <nav className="sidebar-nav">
        <div className="sidebar-section-label">Medical Topics</div>
        {topics.map((topic) => {
          const isTopicActive = activeTopic?.id === topic.id;
          const isExpanded = !!expandedTopicIds[topic.id] || (isTopicActive && expandedTopicIds[topic.id] !== false);
          const hasReadySubtopic = topic.subtopics.some(s => s.isReady);

          return (
            <div key={topic.id} className="sidebar-topic-group">
              <div
                className={`sidebar-item ${isTopicActive ? 'active' : ''}`}
                onClick={(e) => toggleTopicDropdown(topic, e)}
                id={`nav-${topic.id}`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setExpandedTopicIds(prev => ({ ...prev, [topic.id]: !isExpanded }));
                    onSelectTopic(topic);
                  }
                }}
              >
                <span className="sidebar-item-icon">{topic.icon}</span>
                <span className="sidebar-item-name">{topic.name}</span>
                {hasReadySubtopic && (
                  <span className="sidebar-active-pill">Active</span>
                )}
                <span className={`sidebar-chevron ${isExpanded ? 'chevron-down' : ''}`}>
                  ▾
                </span>
              </div>

              {/* Subtopic dropdown list ONLY when explicitly expanded */}
              {isExpanded && (
                <div className="sidebar-subtopics-list">
                  {topic.subtopics.map((subtopic) => {
                    const isSubTopicActive = activeSubTopic?.id === subtopic.id;
                    return (
                      <div
                        key={subtopic.id}
                        className={`sidebar-subtopic-item ${isSubTopicActive ? 'subtopic-active' : ''} ${!subtopic.isReady ? 'subtopic-disabled' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (subtopic.isReady) {
                            onSelectSubTopic(topic, subtopic);
                          }
                        }}
                        role="button"
                        tabIndex={0}
                        id={`nav-subtopic-${subtopic.id}`}
                      >
                        <span className="subtopic-dot" />
                        <span className="sidebar-subtopic-name">{subtopic.name}</span>
                        {subtopic.isReady && (
                          <span className="sidebar-subtopic-tag">Notes</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-footer-left">
          <span className="sidebar-footer-badge">Free Reference</span>
          <span className="sidebar-footer-text">Open Clinical Syllabus</span>
        </div>
      </div>
    </aside>
  );
}
