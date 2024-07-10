import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Home from './home/Home';
import Footer from './footer/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
