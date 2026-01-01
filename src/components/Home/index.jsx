import classes from './Home.module.css';
import DOMPurify from 'dompurify';

export default function Home({articles}) {
  return (
    <div>
      <main className={classes.main}>
        {articles.map((article) => (
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
        ))}
      </main>
    </div>
  );
}

function getDateString (createDateUTC) {
  const date = new Date(createDateUTC);
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
}


