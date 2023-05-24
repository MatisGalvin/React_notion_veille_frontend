import { ArticleListItem } from "../ArticleListItem/ArticleListItem";

export function ArticleList({ articleList }) {
  return (
    <div className="w-full mt-5">
      <span className="text-2xl">Voici les articles :</span>
      <div className="grid lg:grid-cols-3 max-w-7xl">
        {articleList.map((article) => {
          return (
            <ArticleListItem
              name={article.properties.nom.title[0].plain_text}
              url={article.properties.url.url}
              themes={article.properties.theme.multi_select}
              key={article.id}
            />
          );
        })}
      </div>
    </div>
  );
}
