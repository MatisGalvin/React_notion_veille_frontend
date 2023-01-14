import { ArticleListItem } from "../ArticleListItem/ArticleListItem";

export function ArticleList(){
  return <div>
    <span className="text-2xl">Voici les articles :</span>
    <ArticleListItem/>
  </div>
}