import Header from './components/Header';
import Game from './components/Game';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app p-7 pb-10">
      <Header />
      <main className="py-8">
        <Game />
      </main>
      <Footer />
    </div>
  );
}

export default App;
