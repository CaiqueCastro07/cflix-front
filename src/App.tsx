import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MoviesPanel from './components/MoviesPanel/MoviesPanel';

function App() {
  return (
    <div className="page">
      <Header></Header>
        <MoviesPanel></MoviesPanel>
      <Footer></Footer>
    </div>
  );
}

export default App;
