import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";
import { articleList } from "../asset/article";
import ArticleList from "../components/ArticleList";
import Link from "@docusaurus/Link";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className='container'>
        <h1>{`${siteConfig.title} 번역`}</h1>
        <p className='hero__subtitle'>{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title='Javascript 역사 번역'
      description='Description will go into a meta tag in <head />'
    >
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className='container'>
            <div className={styles.column}>
              <p>
                이 페이지는 Allen Wirfs-Brock, Brandon Eich가 2020년 쓴{" "}
                <a href='https://dl.acm.org/doi/pdf/10.1145/3386327'>
                  "JavaScript: The First 20 Years"
                </a>
                의 번역입니다. 원본 저작권은 원 저자에게 있으며 번역 저작권은
                번역자에게 있습니다.
              </p>
              <h2>목차</h2>
              {articleList.map((part) => (
                <ArticleList
                  key={part.title ?? "first-part"}
                  title={part.title}
                  items={part.items}
                />
              ))}
              <p>
                번역하면서 참고한 자료는{" "}
                <Link to='/reference'>번역에 참고한 문헌들</Link>에서 볼 수
                있습니다.
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
