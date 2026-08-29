import { useState } from 'react';
import { topics } from './data/notes';
import type { TopicData, SubTopicData } from './data/notes';
import Sidebar from './components/Sidebar';
import SubtopicList from './components/SubtopicList';
import TopicContent from './components/TopicContent';
import WelcomeScreen from './components/WelcomeScreen';

function App() {
  // Start on Ear topic by default with subtopics list shown
  const [activeTopic, setActiveTopic] = useState<TopicData | null>(
    topics.find(t => t.id === 'ear') || topics[0]
  );
  const [activeSubTopic, setActiveSubTopic] = useState<SubTopicData | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSelectTopic = (topic: TopicData) => {
    setActiveTopic(topic);
    setActiveSubTopic(null); // First show the list of subtopics!
    setSidebarOpen(false);
  };

  const handleSelectSubTopic = (topic: TopicData, subtopic: SubTopicData) => {
    setActiveTopic(topic);
    setActiveSubTopic(subtopic);
    setSidebarOpen(false);
  };

  const handleGoHome = () => {
    setActiveTopic(null);
    setActiveSubTopic(null);
    setSidebarOpen(false);
  };

  const handleBackToSubTopics = () => {
    setActiveSubTopic(null);
  };

  return (
    <div className="app-layout">
      {/* Mobile overlay */}
      <div
        className={`sidebar-overlay ${sidebarOpen ? 'visible' : ''}`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <Sidebar
        topics={topics}
        activeTopic={activeTopic}
        activeSubTopic={activeSubTopic}
        onSelectTopic={handleSelectTopic}
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
            <div className="header-breadcrumbs">
              <span 
                className="breadcrumb-home" 
                onClick={handleGoHome}
                role="button"
                tabIndex={0}
              >
                ENT Master
              </span>
              {activeTopic && (
                <>
                  <span className="breadcrumb-separator">/</span>
                  <span 
                    className={`breadcrumb-topic ${activeSubTopic ? 'breadcrumb-clickable' : 'breadcrumb-current'}`}
                    onClick={() => setActiveSubTopic(null)}
                    role="button"
                    tabIndex={0}
                  >
                    {activeTopic.name}
                  </span>
                </>
              )}
              {activeSubTopic && (
                <>
                  <span className="breadcrumb-separator">/</span>
                  <span className="breadcrumb-current">{activeSubTopic.name}</span>
                </>
              )}
            </div>
            {activeSubTopic && (
              <span className="topic-badge">Study Notes</span>
            )}
          </div>
          <div className="content-header-right">
            <button 
              className="btn-header-home"
              onClick={handleGoHome}
              title="Return to Overview"
            >
              Overview
            </button>
          </div>
        </header>

        <div className="content-body">
          {!activeTopic ? (
            <WelcomeScreen 
              topics={topics} 
              onSelectTopic={handleSelectTopic} 
            />
          ) : activeSubTopic ? (
            <TopicContent 
              topic={activeTopic} 
              subtopic={activeSubTopic} 
              onBackToSubTopics={handleBackToSubTopics}
              key={activeSubTopic.id}
            />
          ) : (
            <SubtopicList 
              topic={activeTopic} 
              onSelectSubTopic={(sub) => handleSelectSubTopic(activeTopic, sub)} 
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
