import { useState } from 'react';
import type { TopicData, SubTopicData } from '../data/notes';

interface SidebarProps {
  topics: TopicData[];
  activeTopic: TopicData | null;
  activeSubTopic: SubTopicData | null;
  onSelectSubTopic: (topic: TopicData, subTopic: SubTopicData) => void;
  isOpen: boolean;
}

const CaduceusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v20" />
    <path d="M8 5c1-1 3-1 4 0 1-1 3-1 4 0 1 1 1 3 0 4-1 1-3 1-4 0-1 1-3 1-4 0-1-1-1-3 0-4z" />
    <path d="M6 12c1.5-1.5 4.5-1.5 6 0 1.5-1.5 4.5-1.5 6 0 1.5 1.5 1.5 4.5 0 6-1.5 1.5-4.5 1.5-6 0-1.5-1.5-1.5-4.5 0-6z" />
  </svg>
);

export default function Sidebar({
  topics,
  activeTopic,
  activeSubTopic,
  onSelectSubTopic,
  isOpen
}: SidebarProps) {
  // All dropdowns are strictly collapsed by default
  const [expandedTopicIds, setExpandedTopicIds] = useState<Record<string, boolean>>({});

  const toggleTopicDropdown = (topicId: string) => {
    setExpandedTopicIds(prev => ({
      ...prev,
      [topicId]: !prev[topicId]
    }));
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
            <span>Clinical Reference Notes</span>
          </div>
        </div>
      </div>

      <nav className="sidebar-nav">
        <div className="sidebar-section-label">ENT Topics</div>
        {topics.map((topic) => {
          const isTopicActive = activeTopic?.id === topic.id;
          const isExpanded = !!expandedTopicIds[topic.id];
          const hasReadySubtopic = topic.subtopics.some(s => s.isReady);

          return (
            <div key={topic.id} className="sidebar-topic-group">
              {/* Topic Header Accordion Toggle */}
              <div
                className={`sidebar-item ${isTopicActive ? 'active' : ''}`}
                onClick={() => toggleTopicDropdown(topic.id)}
                id={`nav-${topic.id}`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleTopicDropdown(topic.id);
                  }
                }}
              >
                <span className="sidebar-item-icon">{topic.icon}</span>
                <span className="sidebar-item-name">{topic.name}</span>
                {hasReadySubtopic && (
                  <span className="sidebar-active-pill">Notes</span>
                )}
                <span className={`sidebar-chevron ${isExpanded ? 'chevron-down' : ''}`}>
                  ▾
                </span>
              </div>

              {/* Subtopics List: ONLY visible in sidebar when dropdown is expanded */}
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
                          <span className="sidebar-subtopic-tag">Read</span>
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
          <span className="sidebar-footer-badge">Free</span>
          <span className="sidebar-footer-text">Open Medical Library</span>
        </div>
      </div>
    </aside>
  );
}
