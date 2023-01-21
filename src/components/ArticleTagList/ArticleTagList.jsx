export function ArticleTagList({ themes }) {
  return themes.map((theme, i) => {
    console.log(theme.color)
    const color = theme.color === "default" ? "gray" : theme.color
    return <p style={{backgroundColor: color}} className='mr-6 w-40 mb-3 p-2 text-slate-50 rounded'>{theme.name}</p>;
  });
}
