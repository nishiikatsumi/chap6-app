import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getDateString } from '../../utils/getDateString.jsx';

import classes from './Home.module.css';
import DOMPurify from 'dompurify';

export default function Home() {

  const [posts, setPosts] = useState([])

  // APIでpostsを取得する処理をuseEffectで実行します。
  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch("https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts")
      const data = await res.json()
      setPosts(data.posts)
    }

    fetcher()
  }, [])

  if (posts.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <main className={classes.main}>
        {posts.map(article => (
          <Link
            key={article.id}
            to={`/articles/${article.id}`}
            className={classes.cardLink}
          >
            <article className={classes.card}>
              <div className={classes.header}>
                <span className={classes.date}>{getDateString(article.createdAt)}</span>
                <div className={classes.tags}>
                  {article.categories && article.categories.map((tag) => (
                    <span key={tag} className={classes.tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <h2 className={classes.title}>APIで取得した{article.title}</h2>
              <p
                className={classes.excerpt}
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.content) }}
              />
            </article>
          </Link>
        ))};
      </main>
    </div>
  );
}




