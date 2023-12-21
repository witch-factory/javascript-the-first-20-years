# Javascript : 만들어진 후 20년

- ALLEN WIRFS-BROCK, Wirfs-Brock Associates, Inc., 미국
- BRENDAN EICH, Brave Software, Inc., 미국

인도자(Shepherd)
- 류석영, KAIST, 대한민국
- Richard P. Gabriel, 시인, 작가, 컴퓨터 과학자

넷스케이프에서 10일만에 급하게 만들어진, Java의 보조격이었던 스크립트 언어가 웹의 첫 사실상의 표준이 되고 결국 세계적으로 가장 많이 쓰이는 프로그래밍 언어가 되었는지에 대한 이야기이다. 이 문서는 1995년부터 2015년까지의 시간 동안 Javascript 언어가 생기고, 디자인되고 발전하고 표준화되는 과정을 다룬다. 하지만 그 이야기는 Javascript의 기술적인 부분들에만 국한된 건 아니다. 2020년 웹을 지배하고 있는 Javascript를 만들기 위해 사람들과 조직들이 어떻게 경쟁하고 또 협력했는지에 대한 이야기이기도 하다.

CCS : 생략

추가적인 핵심 키워드 : JavaScript, ECMAScript, 표준, 웹브라우저, 브라우저 게임 이론, 프로그래밍 언어의 역사

ACM Reference Format: Allen Wirfs-Brock and Brendan Eich. 2020. JavaScript: The First 20 Years. Proc. ACM Program. Lang. 4, HOPL
(June 2020), 190 pages. https://doi.org/10.1145/3386327

# 1. Introduction

2020년 월드 와이드 웹은 보편화되어서, 웹에 연결된 수십억 대의 기기에서 수십억 개의 웹사이트에 접근할 수 있다. 그렇게 사이트에 접근하는 각 기기는 해당 페이지를 처리하고 보여줄 수 있는 웹브라우저 혹은 비슷한 프로그램을 작동시킨다. 그 페이지들의 대부분은 Javascript로 작성된 소스코드를 포함하거나 로드한다. 2020년 Javascript는 거의 틀림없이 세계에서 가장 널리 배포된 프로그래밍 언어이다. [스택오버플로우의 2018년 조사](https://insights.stackoverflow.com/survey/2018/#most-popular-technologies)에 따르면 전문 개발자의 71.5%가 Javascript를 사용한다고 답했고 이는 Javascript가 세계에서 가장 널리 사용되는 프로그래밍 언어가 되었다는 것을 의미한다.

