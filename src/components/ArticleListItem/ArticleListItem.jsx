import { ArticleTagList } from "../ArticleTagList/ArticleTagList";

export function ArticleListItem({ name, url, themes }) {
  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow m-5 relative h-80">
      <h2 className="mb-2 text-lg font-bold tracking-tight text-gray-900 max-h-20 overflow-hidden">
        {name}
      </h2>
      <div className="max-h-32 overflow-scroll md:max-h-44 lg:max-h-32 ">
        <ArticleTagList themes={themes} />
      </div>

      <a
        href={url}
        target="_blank"
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 absolute bottom-5 left-5"
      >
        Aller vers l'article
        <svg
          aria-hidden="true"
          className="w-4 h-4 ml-2 -mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </div>
  );
}
