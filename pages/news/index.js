import Footer from "@components/Footer";
import styles from "../news/News.module.css";
import Link from "next/link";

export default function NewsHome({ news }) {
  return (
    <div className="container">
      <main>
        <h1>All News Headlines</h1>
        {news.map((article, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.container}>
              <Link href={`/news/${article.id}`}>
                <a>
                  <h4>
                    <b>{article.title}</b>
                  </h4>
                </a>
              </Link>
              <p>{article.excerpt}</p>
            </div>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(process.env.DATA);
  const news = await res.json();
  return {
    props: {
      news,
    },
  };
}
