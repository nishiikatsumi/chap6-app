import './App.css'
import ArticleCard from './ArticleCard'

function App({ posts }) {

  return (
    <ArticleCard articles={posts} />
  );
}

export default App
