import Hero from './sections/Hero.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';

//https://gltf.pmnd.rs/

const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;