import React, { useState } from 'react';
import HomePage from './components/HomePage';
import DashboardPage from './components/DashboardPage';
import AboutPage from './components/AboutPage';
import LoginPage from './components/LoginPage';
import ChatLinePage from './components/ChatLinePage';

const FOREST_GREEN = '#228B22';
const DEEP_ORANGE = '#FF8C00';
const DARK_BLUE = '#1a202c';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <HomePage />;
      case 'dashboard': return <DashboardPage />;
      case 'about': return <AboutPage />;
      case 'login': return <LoginPage />;
      case 'chatline': return <ChatLinePage />;
      default: return <HomePage />;
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">AlienCrops</h1>
          <div className="space-x-4">
            {['home', 'dashboard', 'about', 'login', 'chatline'].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium ${
                  currentPage === page ? `bg-${DARK_BLUE}` : ''
                }`}
                style={currentPage === page ? { backgroundColor: DARK_BLUE } : {}}
              >
                {page === 'chatline' ? 'Chat Line' : page.charAt(0).toUpperCase() + page.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>
      <main className="container mx-auto mt-8 p-4">{renderPage()}</main>
    </div>
  );
}

export default App;