import { useParams } from 'react-router-dom';
import { getDateString } from '../../utils/getDateString.jsx';
import { posts } from '../../data/posts.js';

import classes from './Article.module.css';
import DOMPurify from 'dompurify';

export default function Article() {
  const { id } = useParams();
  const articles = posts;

  const article = articles.find((a) => a.id === parseInt(id));

  if (!article) {
    return <p>記事が見つかりません</p>;
  }

  return (
    <div>
      <main className={classes.main}>
        <article key={article.id} className={classes.card}>
          <div>
            <img src="/800x400.png" />
          </div>
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
            className={classes.content}
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.content) }}
          />
        </article>
      </main>
    </div>
  );
}



