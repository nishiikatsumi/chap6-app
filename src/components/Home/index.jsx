import { Link } from 'react-router-dom';
import { getDateString } from '../../utils/getDateString.jsx';
import { posts } from '../../data/posts.js';

import classes from './Home.module.css';
import DOMPurify from 'dompurify';

export default function Home() {
  const articles = posts;

  return (
    <div>
      <main className={classes.main}>
        {articles.map((article) => (
          <Link
            key={article.id}
            to={`/articles/${article.id}`}
            className={classes.cardLink}
          >
            <article key={article.id} className={classes.card}>
              <div className={classes.header}>
                <span className={classes.date}>{getDateString(article.createdAt)}</span>
                <div className={classes.tags}>
                  {article.categories.map((tag) => (
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

        ))}
      </main>
    </div>
  );
}




