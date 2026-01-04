import { Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header/index.jsx';
import Home from './components/Home/index.jsx';
import Article from './components/Article/index.jsx';
import Contact from './components/Contact/index.jsx';

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:id" element={<Article />} />
				<Route path="/contact" 
				  element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App
