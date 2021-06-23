import { news } from "../../../data";

export default function handler({ query: { id } }, res) {
  const oneArticle = news.find((article) => article.id == id);
  res.status(200).json(oneArticle);
}
