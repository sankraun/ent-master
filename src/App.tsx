import { useState } from 'react';
import { topics } from './data/notes';
import type { TopicData, SubTopicData } from './data/notes';
import Sidebar from './components/Sidebar';
import TopicContent from './components/TopicContent';

function App() {
  // Always active on Ear -> Myiasis in ENT by default
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

      {/* Main Content: Pure Study Notes / Article View */}
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
            <div className="header-breadcrumbs">
              <span className="breadcrumb-brand">ENT Master</span>
              <span className="breadcrumb-separator">/</span>
              <span className="breadcrumb-topic">{activeTopic.name}</span>
              <span className="breadcrumb-separator">/</span>
              <span className="breadcrumb-current">{activeSubTopic.name}</span>
            </div>
          </div>
          <div className="content-header-right">
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
