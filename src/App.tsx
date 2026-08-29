import { useState } from 'react';
import { topics } from './data/notes';
import type { TopicData, SubTopicData } from './data/notes';
import Sidebar from './components/Sidebar';
import TopicContent from './components/TopicContent';

const CaduceusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v20" />
    <path d="M8 5c1-1 3-1 4 0 1-1 3-1 4 0 1 1 1 3 0 4-1 1-3 1-4 0-1 1-3 1-4 0-1-1-1-3 0-4z" />
    <path d="M6 12c1.5-1.5 4.5-1.5 6 0 1.5-1.5 4.5-1.5 6 0 1.5 1.5 1.5 4.5 0 6-1.5 1.5-4.5 1.5-6 0-1.5-1.5-1.5-4.5 0-6z" />
  </svg>
);

function App() {
  const [activeTopic, setActiveTopic] = useState<TopicData>(topics[0]);
  const [activeSubTopic, setActiveSubTopic] = useState<SubTopicData>(topics[0].subtopics[0]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSelectSubTopic = (topic: TopicData, subtopic: SubTopicData) => {
    setActiveTopic(topic);
    setActiveSubTopic(subtopic);
    setSidebarOpen(false);
  };

  return (
    <div className="app-layout">
      {/* Mobile overlay */}
      <div
        className={`sidebar-overlay ${sidebarOpen ? 'visible' : ''}`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar with dropdown topics */}
      <Sidebar
        topics={topics}
        activeTopic={activeTopic}
        activeSubTopic={activeSubTopic}
        onSelectSubTopic={handleSelectSubTopic}
        isOpen={sidebarOpen}
      />

      {/* Main Content */}
      <main className="main-content">
        <header className="content-header">
          <div className="content-header-left">
            <button
              className="menu-toggle"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle sidebar"
              id="menu-toggle"
            >
              ☰
            </button>

            {/* Mobile Header Brand (Only visible on mobile) */}
            <div className="mobile-header-brand">
              <div className="mobile-header-logo">
                <CaduceusIcon />
              </div>
              <span className="mobile-brand-title">ENT Master</span>
            </div>

            {/* Desktop Breadcrumbs (Hidden on mobile) */}
            <div className="header-breadcrumbs desktop-only">
              <span className="breadcrumb-brand">ENT Master</span>
              <span className="breadcrumb-separator">/</span>
              <span className="breadcrumb-topic">{activeTopic.name}</span>
              <span className="breadcrumb-separator">/</span>
              <span className="breadcrumb-current">{activeSubTopic.name}</span>
            </div>
          </div>

          <div className="content-header-right desktop-only">
            <span className="topic-badge">Clinical Reference</span>
          </div>
        </header>

        <div className="content-body">
          <TopicContent 
            topic={activeTopic} 
            subtopic={activeSubTopic} 
            key={activeSubTopic.id}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
