import React from 'react';
import Header from './components/Header';
import Game from './components/Game';
import Footer from './components/Footer';
import ScoreProvider from './context/ScoreProvider';

function App() {
  const score = localStorage.getItem('rpsscore') || 0;

  return (
    <ScoreProvider score={score}>
      <div className="app bg-gradient">
        <div className="app__content">
          <Header />
          <main className="u-container">
            <Game />
          </main>
          <Footer />
        </div>
      </div>
    </ScoreProvider>
  );
}

export default App;
