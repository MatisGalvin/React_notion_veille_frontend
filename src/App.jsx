import { useEffect, useState } from "react";
import { ArticleList } from "./components/ArticleList/ArticleList";
import { WelcomeBar } from "./components/WelcomeBar/WelcomeBar";
import { NotionAPI } from "./components/api/NotionAPI";

export function App() {
  const [articles, setArticles] = useState([]);

  async function fetchData() {
    const result = await NotionAPI.fetchData();
    if (result.length > 0) {
      console.log("call depuis app", result);
      setArticles(result);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto h-screen p-10 ">
      <WelcomeBar text="Retrouvez un ensemble d'articles sur le theme de :" />
      {articles && <ArticleList articleList={articles}/>}
    </div>
  );
}
