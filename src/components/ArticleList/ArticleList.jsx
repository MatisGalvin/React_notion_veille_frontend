import { ArticleListItem } from "../ArticleListItem/ArticleListItem";

export function ArticleList({ articleList }) {
  return (
    <div className="w-full mt-5">
      <span className="text-2xl">Voici les articles :</span>
      <div className="grid lg:grid-cols-3 max-w-7xl">
        {articleList.map((article) => {
          return (
            <ArticleListItem
              name={article.properties.Name.title[0].plain_text}
              content={article.properties.Description.rich_text[0].plain_text}
              key={article.id}
            />
          );
        })}
      </div>
    </div>
  );
}
