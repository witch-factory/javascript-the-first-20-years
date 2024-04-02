import styles from "./styles.module.css";

function PaperTOC(): JSX.Element {
  return (
    <>
      <h2>목차</h2>
      <ul>
        <li>초록</li>
        <li>본문</li>
        <li>1. 소개</li>
      </ul>
      <ul>
        <h3>Part 1: Javascript의 기원</h3>
        <li>2. Javascript 이전 시대</li>
        <li>3. Javascript 1.0과 1.1</li>
        <li>4. Microsoft JScript</li>
        <li>5. Mocha에서 SpiderMonkey까지</li>
        <li>6. 막간: Javascript에 관한 평가</li>
      </ul>
      <ul>
        <h3>Part 2: 표준 만들기</h3>
        <li>7. 표준을 어디서 만들 것인가</li>
        <li>8. 첫 TC39 회의</li>
        <li>9. 명세 작성하기</li>
        <li>10. 표준 이름 정하기</li>
        <li>11. ISO 패스트트랙</li>
        <li>12. ECMAScript 3 정의하기</li>
        <li>13. 막간: Javascript는 더 이상 Java가 필요하지 않다</li>
      </ul>
      <ul>
        <h3>Part 3: 실패한 개혁, ES4</h3>
        <li>14. 불만족스러운 성공</li>
        <li>15. ES4, 첫번째 도전</li>
        <li>16. 또다른 막다른 길</li>
        <li>17. Flash와 ActionScript</li>
        <li>18. ES4, 두번째 도전</li>
        <li>19. 막간: Javascript, 장난감에서 벗어나다</li>
      </ul>
      <ul>
        <h3>Part 4: Javascript 현대화</h3>
        <li>20. ES3.1과 ES5의 개발</li>
        <li>21. Harmony에서 ECMAScript 2015까지</li>
        <li>22. 결론</li>
        <li>감사문</li>
      </ul>
      <ul>
        <h3>부록</h3>
        <li>목록 작성 중</li>
      </ul>
    </>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
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
          <PaperTOC />
        </div>
      </div>
    </section>
  );
}
