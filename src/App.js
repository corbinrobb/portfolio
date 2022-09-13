import About from './About';
import './App.css';
import Footer from './Footer';
import Header from './Header';
// import NavBar from './NavBar';
import Showcase from './Showcase';
import Tech from './Tech';

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <main>
        <Header />
        <Showcase />
        <Tech />
        <About />
        <Footer />
      </main>
    </div>
  );
}

export default App;
