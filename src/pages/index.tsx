import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";
import { articleList } from "./article";
import ArticleList from "../components/ArticleList";

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
  console.log(siteConfig);
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
                  key={part.title}
                  title={part.title}
                  items={part.items}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
