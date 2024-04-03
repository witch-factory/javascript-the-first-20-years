type Item = {
  title: string;
  url: string;
};

type Part = {
  title?: string;
  items: Item[];
};

export const articleList: Part[] = [
  {
    items: [
      { title: "초록", url: "/docs/paper/abstract" },
      { title: "목차", url: "/" },
      { title: "1. 소개", url: "/docs/paper/introduction" },
    ],
  },
  {
    title: "Part 1: Javascript의 기원",
    items: [
      { title: "2. Javascript 이전 시대", url: "/docs/part-1/prehistory" },
      {
        title: "3. Javascript 1.0과 1.1",
        url: "/docs/part-1/javascript-10-and-11",
      },
      { title: "4. Microsoft JScript", url: "/docs/part-1/microsoft-jscript" },
      {
        title: "5. Mocha에서 SpiderMonkey까지",
        url: "/docs/part-1/from-mocha-to-spidermonkey",
      },
      {
        title: "6. 막간: Javascript에 관한 평가",
        url: "/docs/part-1/interlude-critics",
      },
    ],
  },
  {
    title: "Part 2: 표준 만들기",
    items: [
      {
        title: "7. 표준을 어디서 만들 것인가",
        url: "/docs/part-2/finding-a-venue",
      },
      { title: "8. 첫 TC39 회의", url: "/docs/part-2/the-first-tc39-meeting" },
      {
        title: "9. 명세를 향한 여정",
        url: "/docs/part-2/crafting-the-specification",
      },
      {
        title: "10. 표준의 이름 정하기",
        url: "/docs/part-2/naming-the-standard",
      },
      { title: "11. ISO 패스트트랙", url: "/docs/part-2/iso-fast-track" },
      {
        title: "12. ECMAScript 3 정의하기",
        url: "/docs/part-2/defining-ecmascript-3",
      },
      {
        title: "13. 막간: Javascript는 더 이상 Java가 필요하지 않다",
        url: "/docs/part-2/interlude-javascript-doesnt-need-java",
      },
    ],
  },
  {
    title: "Part 3: 실패한 개혁, ES4",
    items: [
      {
        title: "14. 불만족스러운 성공",
        url: "/docs/part-3/dissatisfaction-with-success",
      },
      { title: "15. ES4, 첫번째 도전", url: "/docs/part-3/es4-take-1" },
      { title: "16. 또다른 막다른 길", url: "/docs/part-3/other-dead-ends" },
      {
        title: "17. Flash와 ActionScript",
        url: "/docs/part-3/flash-and-actionscript",
      },
      { title: "18. ES4, 두번째 도전", url: "/docs/part-3/es4-take-2" },
      {
        title: "19. 막간: Javascript, 장난감에서 벗어나다",
        url: "/docs/part-3/interlude-taking-javascript-seriously",
      },
    ],
  },
  {
    title: "Part 4: Javascript 현대화",
    items: [
      {
        title: "20. ES3.1과 ES5의 개발",
        url: "/docs/part-4/developing-es31-es5",
      },
      {
        title: "21. Harmony에서 ECMAScript 2015까지",
        url: "/docs/part-4/from-harmony-to-ecmascript-2015",
      },
      { title: "22. 결론", url: "/docs/part-4/conclusion" },
      { title: "감사의 글", url: "/docs/part-4/acknowledgements" },
    ],
  },
];
