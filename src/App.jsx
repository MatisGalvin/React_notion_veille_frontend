import { ArticleList } from "./components/ArticleList/ArticleList";
import { WelcomeBar } from "./components/WelcomeBar/WelcomeBar";
import { NotionAPI } from "./components/api/NotionAPI";

NotionAPI.fetchData();
export function App() {
  return (
    <div className="container mx-auto h-screen p-10 ">
      <WelcomeBar text="Retrouvez un ensemble d'articles sur le theme de :" />
      <ArticleList/>
    </div>
  );
}
