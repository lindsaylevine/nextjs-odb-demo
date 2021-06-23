import Footer from "@components/Footer";
export default function NewsDetail({ news }) {
  return (
    <div>
      <main>
        <h3>{news.title}</h3>
        <p> {news.content} </p>
      </main>
      <Footer />
    </div>
  );
}
export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/news");
  const newsItems = await res.json();
  const breakingNews = newsItems.filter((news) => news.tag == "breaking");

  const paths = breakingNews.map((news) => ({
    params: { id: news.id.toString() },
  }));

  /*
  console.log(paths)
  [
    { params: { id: '1' } },
    { params: { id: '2' } },
    { params: { id: '3' } }
  ]
  */

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/news/${params.id}`);
  const news = await res.json();
  return { props: { news } };
}
