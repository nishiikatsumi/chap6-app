import './App.css'
import Header from './components/Header/index.jsx';
import Home from './components/Home/index.jsx';

function App({ posts }) {

  return (
    <div>
      <Header />
      <Home articles={posts} />
    </div>
  );
}

export default App
