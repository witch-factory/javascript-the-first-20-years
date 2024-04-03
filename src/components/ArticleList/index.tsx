import Link from "@docusaurus/Link";

type Item = {
  title: string;
  url: string;
};

function ArticleList({
  title,
  items,
}: {
  title?: string;
  items: Item[];
}): JSX.Element {
  return (
    <ul>
      {title && <h3>{title}</h3>}
      {items.map((item) => (
        <li key={item.url}>
          <Link to={item.url}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default ArticleList;
