import React from 'react';
import Header from './components/Header';
import Game from './components/Game';
import Footer from './components/Footer';
import ScoreProvider from './context/ScoreProvider';

function App() {
  const score = sessionStorage.getItem('rpsscore') || 0;

  return (
    <ScoreProvider score={score}>
      <div className="app p-7 pb-10">
        <Header />
        <main className="flex flex-col flex-grow justify-center py-8">
          <Game />
        </main>
        <Footer />
      </div>
    </ScoreProvider>
  );
}

export default App;
