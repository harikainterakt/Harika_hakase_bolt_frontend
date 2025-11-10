import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import AuthModal from './components/AuthModal';
import Dashboard from './components/Dashboard';

type AppState = 'landing' | 'dashboard';

function App() {
  const [appState, setAppState] = useState<AppState>('landing');
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

  const handleShowAuth = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setShowAuth(true);
  };

  const handleAuthSuccess = () => {
    setShowAuth(false);
    setAppState('dashboard');
  };

  const handleLogout = () => {
    setAppState('landing');
  };

  const handleCloseAuth = () => {
    setShowAuth(false);
  };

  const handleSwitchAuth = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
  };

  return (
    <div className="min-h-screen">
      {appState === 'landing' ? (
        <LandingPage onShowAuth={handleShowAuth} />
      ) : (
        <Dashboard onLogout={handleLogout} />
      )}
      
      <AuthModal
        isOpen={showAuth}
        mode={authMode}
        onClose={handleCloseAuth}
        onSwitch={handleSwitchAuth}
        onSuccess={handleAuthSuccess}
      />
    </div>
  );
}

export default App;