import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './Nav-bar'
import Destini from './Destini';
import Hotels from './Hotels';
import Footer from './Footer';



function App() {
  return (
    <>
    <div className="hero-container ">
      <Navbar />
      <h1 className="hero-quote"> Tourism isn’t just about seeing places</h1>
      <h2 className="hero-quote2">it’s about feeling them in your soul</h2>
      {/* Search Bar Floating on Image */}
      <div className="search-bar">
        <input type="text" placeholder="Search destinations..." />
        <button>Search</button>
      </div>
    </div>
    <Destini/>
    <Hotels/>
    <Footer/>
    </>
  );
}

export default App;

