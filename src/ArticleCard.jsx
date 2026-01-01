import "./ArticleCard.css";
import DOMPurify from 'dompurify';

export default function ArticleCard({articles}) {
  return (
    <div>
      <header className="header">
        <div className="header-logo">Blog</div>
        <a href="/contact" className="header-contact">お問い合わせ</a>
      </header>
      
      <main className="main">
        {articles.map((article) => (
          <article key={article.id} className="article-card">
            <div className="article-header">
              <span className="article-date">{getDateString(article.createdAt)}</span>
              <div className="article-tags">
                {article.categories.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
            <h2 className="article-title">APIで取得した{article.title}</h2>
            <p 
              className="article-excerpt"
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



