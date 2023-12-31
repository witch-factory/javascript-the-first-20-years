# Javascript : 만들어진 후 20년

2020 Copyright held by the owner/author(s).
This work is licensed under a Creative Commons Attribution 4.0 International License.
This is the authors’ 2020-03-11 preprint version of this work. The definitive Version of Record will be published in Proceedings of the ACM on Programming Languages, https://doi.org/10.1145/3386327.

- ALLEN WIRFS-BROCK, Wirfs-Brock Associates, Inc., 미국, allen@wirfs-brock.com
- BRENDAN EICH, Brave Software, Inc., 미국, brendan@brave.com

인도자(Shepherd)
- 류석영, KAIST, 대한민국
- Richard P. Gabriel, 시인, 작가, 컴퓨터 과학자

넷스케이프에서 10일만에 급하게 만들어진, Java의 보조격이었던 스크립트 언어가 웹의 첫 사실상의 표준이 되고 결국 세계적으로 가장 많이 쓰이는 프로그래밍 언어가 되었는지에 대한 이야기이다. 이 문서는 1995년부터 2015년까지의 시간 동안 Javascript 언어가 생기고, 디자인되고 발전하고 표준화되는 과정을 다룬다. 하지만 그 이야기는 Javascript의 기술적인 부분들에만 국한된 건 아니다. 2020년 웹을 지배하고 있는 Javascript를 만들기 위해 사람들과 조직들이 어떻게 경쟁하고 또 협력했는지에 대한 이야기이기도 하다.

CCS : 생략

추가적인 핵심 키워드 : JavaScript, ECMAScript, 표준, 웹브라우저, 브라우저 게임 이론, 프로그래밍 언어의 역사

ACM Reference Format: Allen Wirfs-Brock and Brendan Eich. 2020. JavaScript: The First 20 Years. Proc. ACM Program. Lang. 4, HOPL
(June 2020), 190 pages. https://doi.org/10.1145/3386327

# 1. Introduction

2020년 월드 와이드 웹은 보편화되어서, 웹에 연결된 수십억 대의 기기에서 수십억 개의 웹사이트에 접근할 수 있다. 그렇게 사이트에 접근하는 각 기기는 해당 페이지를 처리하고 보여줄 수 있는 웹브라우저 혹은 비슷한 프로그램을 작동시킨다. 그 페이지들의 대부분은 Javascript로 작성된 소스코드를 포함하거나 로드한다. 2020년 Javascript는 거의 틀림없이 세계에서 가장 널리 배포된 프로그래밍 언어이다. 스택오버플로우의 2018년 조사[2018]에 따르면 전문 개발자의 71.5%가 Javascript를 사용한다고 답했고 이는 Javascript가 세계에서 가장 널리 사용되는 프로그래밍 언어가 되었다는 것을 의미한다.

이 문서는 1995년부터 2015년까지의 기간 동안 Javascript 언어가 생기고, 디자인되고 발전하는 과정을 다룬다. 하지만 그 이야기가 Javascript의 기술적인 부분들에만 국한된 건 아니다. 2020년 웹을 지배하고 있는 Javascript를 만들기 위해 사람들과 조직들이 어떻게 경쟁하고 또 협력했는지에 대한 이야기이기도 하다.

이건 길고 복잡한 이야기다. 이 이야기가 더 이해하기 쉽도록 하기 위해서 이 문서는 Javascript의 발전과 진화의 주요한 단계들을 다루는 4개의 부분으로 나뉘어 있다. 각 부분의 사이에는 소프트웨어 개발자들이 Javascript에 어떻게 반응하고 사용했는지에 대한 맥락을 제공하는 짧은 막간이 있다.

1995년 웹과 웹 브라우저는 세상에 나온 신기술이었다. 그리고 넷스케이프 커뮤니케이션즈는 웹 브라우저 개발을 주도하고 있었다. Javascript는 1995년 5월, 이 문서의 저자 중 하나인 브랜든 아이크가 1995년 5월 넷스케이프에서 처음 설계하고 구현했다. Javascript는 웹 페이지에 코드 스니펫을 포함할 수 있도록 하기 위해 만들어진 작고 사용하기 쉬운 동적 언어(dynamic language<sup>g</sup>)를 목표로 했다. 코드 스니펫은 브라우저에서 페이지를 렌더링할 때 해석되어 페이지의 동적 커스터마이징을 가능하게 했고 사용자 상호 작용에도 응답할 수 있게 했다.

1부인 "Javascript의 기원"은 Javascript의 탄생과 초기의 진화에 대해서 설명한다. 넷스케이프에서 Javascript의 첫 버전을 개발할 때 있었던 동기들과 트레이드오프들에 대해서도 검토한다. 그 이름 때문에 Javascript는 Java<sup>g</sup>와 혼동되는 일이 많다. 1부에서는 언어의 이름을 짓게 된 과정, 두 언어 간의 예상되었던 관계 그리고 그 대신 일어난 일에 대해서도 설명한다. 여기에는 언어의 원래 기능에 대한 개요와 그 동기가 된 설계 결정들이 포함된다. 1부는 넷스케이프와 다른 회사들에서 일어난 Javascript의 초기 진화 과정 또한 추적한다.

웹의 초석은 독점적이지 않고 개방적인 기술[^1]에 기반하고 있다. 누구나 여러 공급 업체의 다양한 웹 서버에서 호스팅하고 또 다양한 브라우저에서 접근할 수 있는 웹페이지를 만들 수 있어야 한다. 공통 사양은 서로 다른 독립적인 구현들 간의 상호 호환을 가능하게 한다. Javascript에 어떤 표준 사양이 필요하다는 것은 극초기부터 인식되고 있었다. 이는 Javascript의 출시 첫 해에, 넷스케이프의 Javascript와 마이크로소프트가 리버스 엔지니어링을 통해 구현한 구현체 간의 상호 호환성 문제를 개발자들이 겪으면서였다. 1996년 Ecma 국제 표준화 단체의 후원을 받아 Javascript의 표준화 프로세스가 시작되었다. 언어의 첫 번째 공식 표준 사양은 "ECMAScript"라는 이름으로 1997년에 발행되었다. 두 차례의 개정판과 개선판이 1999년 말에 발행되었는데 이는 대체로 넷스케이프의 언어의 발전에 따른 것이었다.

2부인 "표준 만들기"에서는 Javascript의 표준화 노력이 어떻게 시작되었는지, 사양이 어떻게 만들어졌는지, 누가 이 노력에 기여했는지, 어떻게 결정이 내려졌는지에 대해서 설명한다.

2000년에 Javascript는 웹에서 널리 쓰이고 있었지만 넷스케이프는 빠르게 추락하고 있었다. Javascript를 만든 아이크도 다른 프로젝트로 자리를 옮겨 있었다. 앞으로 누가 Javascript의 발전을 주도할까? "자비로운 종신 독재자"[^2]역할을 할 조직이나 개인이 없는 상황에서 Javascript의 발전은 ECMAScript 표준 위원회에 맡겨졌다.

하지만 이런 설계 책임은 순조롭게 옮겨지지 않았다. ECMAScript 위원회가 Javascript 언어를 진화시키기 위한 자신만의 길을 찾으려는 시도를 하면서 10년에 걸친 잘못된 시작, 표준화 중단, 그리고 방향성이 잘못된 노력들이 생겼다. 그동안 Javascript의 사용률은 빠르게 올라갔다. 그리고 Javascript를 사용하는 사람들은 흔히 구현체에 따라 다른 확장 기능(implementation specific extensions)들을 사용했다. 이런 구현체별로 다른 확장 기능들의 사용은 유지보수되지 않는 Javascript 구현체에 종속된 엄청난 레거시를 만들었고 새로운 상호 호환성 이슈를 만들었다. 웹 개발자들은 Javascript로 복잡한 클라이언트 웹 애플리케이션을 만들기 시작했고, 따라서 이를 지원하기 위한 표준화된 언어의 개선을 요구했다.

3부 "실패한 개혁"에서는 언어를 개정하려고 했던 실패한 시도와 그로 인한 표준 위원회 내의 혼란 그리고 그 혼란이 어떻게 결국 해결되었는지를 살펴본다.

2008년 표준 위원회는 운영의 화합을 회복했고 2009년 약간 개선된 버전의 표준을 만들고 발표할 수 있었다. 그 성공으로 인해서 표준 위원회는 드디어 Javascript를 적합하게 현대화하는 작업에 착수할 준비를 마쳤다. 7년에 걸친 노력을 통해 위원회는 Javascript와 그 사양에 주요한 개선들을 만들어냈다. 그 결과로 만들어진 ECMAScript 2015는 지금도 진행중인 Javascript의 진화의 토대가 되었다. ECMAScript 2015의 출시가 완료된 후 위원회는 더 빠른 점진적인 출시가 가능하도록 프로세스를 수정했고 지금은 매년 정기적으로 개정을 하고 있다.

4부 "Javascript 현대화"에서는 ECMAScript 표준의 2009년, 2015년 버전을 만드는 데 참여했던 사람과 진행되었던 과정들의 이야기이다. 각 버전들의 목표를 다루고 그 버전들이 Javascript 개발 커뮤니티의 진화하는 요구 사항을 어떻게 다루었는지에 대해 다룬다. 이 부분에서는 각 버전에서 언어에 적용된 중요한 변경 사항과 언어에 추가된 새 기능들을 검토한다.

이 문서의 원본 자료는 가능한 한 동시대의 1차 자료(primary documents)들을 사용한다. 다행히 이런 자료들은 매우 많이 있다. 그런 문서의 저자들은 참고문헌에 포함돤 URL을 이용해서 거의 모든 1차 자료에 쉽게 접근할 수 있게 해 놓았다. 이런 1차 자료들은 Javascript의 역사 속 이야기에 직접 연루된 사람들과의 인터뷰와 개인적인 대화를 통해서 보충되었다. 이 문서의 두 저자들 또한 이 문서에서 다루는 많은 사건들의 주요한 참여자였다. 따라서 저자들의 기억 또한 다른 정보원들의 기억 이야기와 비슷하게 다룬다.

Javascript의 20년 역사는 길기 때문에 이 문서도 길다. 이 역사에는 수백 개의 사건들과 수십 명의 개인과 단체들이 얽혀 있다. 부록 A부터 E까지는 독자들이 이런 세부 사항들을 탐색하는 데에 도움을 주기 위해 제공된다. 부록 A와 부록 B는 이야기에 등장하는 인물과 조직에 대한 주석이 달린 목록을 제공합니다. 부록 C는 용어 사전으로, Javascript 고유의 용어이거나 2020년 개발 커뮤티티에서의 일반적인 쓰임새와 다른 의미를 가지고 쓰였거나, 미래에 의미가 바뀌거나 생소해질 수 있는 용어들을 포함한다. 용어 사전에 있는 단어가 처음 사용될 때는 이탤릭체로 표시되고 `g`위첨자가 붙을 것이다. 예를 들어 term<sup>g</sup> 처럼 말이다. 부록 D는 문서에서 독자가 접할 약어들을 정의한다. 부록 E는 이 문서의 네 부분 각각에 대한 네 개의 세부적인 타임라인을 제공한다.

[^1]: 웹 기술의 사양은 어떤 하나의 회사가 개발하고 통제하는 것이 아니고 어떤 회사나 조직이라도 다른 구현들과 상호 호환되는 기술의 구현을 만들고 배포할 수 있다.
[^2]: 하나의 개인이나 조직이 기술을 수정하고나 확장할 결정을 내릴 영구적이고 유일한 권한을 가진 사람으로 인식되는 기술 개발의 접근법이다. 몇몇 프로젝트는 프로젝트를 시작했거나 기술을 처음 개발한 개인에게 이런 권한을 부여한다. 특히 오픈소스 프로젝트에서 그렇다.[Meyer 2014]

## 1.1. 이름, 번호, 그리고 약어들

Javascript의 세계는 같이 보이는 여러 가지 이름들로 인해 혼란스러워 보일 수 있다. 이는 표준 지정 기관들을 같이 보게 될 때 더욱 악화되는데 이들은 그 작업 단위들과 결과물들을 두 글자나 세 글자 약어와 숫자들을 결합해서 표현하기 때문이다. 이러한 혼란을 최소화하기 위해, 우리는 몇 가지 이름과 약어를 정의하고 이 논문의 나머지 부분에서 사용되는 몇 가지 관례를 설정할 것이다.

"Javascript"는 웹 페이지에서 사용하기 위해 원래 Netscape Communications Corporation(이하 넷스케이프)에 의해 개발된 프로그래밍 언어의 일반적인 이름이다. 이 언어는 웹에서뿐만 아니라 다른 환경으로도 사용 범위를 크게 확장했고 매일 수백만 명의 프로그래머들이 이 언어에 대해 생각하고 이야기하면서 Javascript라는 이름을 사용한다. Javascript는 Java와 명확하게 구분되며 기술적으로도 매우 다르지만 그 이름의 유사성은 자주 혼동의 원인이 된다.

JavaScript®은 등록 상표이기도 하다. 이 상표는 원래 Sun Microsystems가 등록했고 이 문서가 쓰이는 시점에는 Oracle Corporation이 해당 상표를 소유하고 있다. 이 상표는 Sun에 의해 넷스케이프에 라이센스되었고 이후에는 모질라 재단에 라이센스되었다. 넷스케이프와 모질라는 언어의 특정 구현 버전을 설명하기 위해 "JavaScript 1.4"와 같은 이름을 사용했다. 언어의 몇몇 구현자들은 잠재적인 상표권 문제를 피해가기 위해 다른 이름들을 사용했다. 여러 이름들, 상표권 문제, 그리고 Java와의 혼동으로 인해 많은 현대의 사용자들과 책 저자들과 라이브러리 제작자들은 이 언어를 흔히 "JS"라고 부른다. 그리고 "js"는 일반적으로 Javascript 소스코드의 파일 확장자로 사용된다. 이 문서에서는 특정 버전, 호스트 환경, 또는 구현의 맥락에서 벗어나서 언어와 그 사용에 대해 일반적으로 말할 때 "Javascript"라는 용어를 사용한다.

| 약어 | 에디션 | 날짜 | 프로젝트 편집자 | 페이지수 |
| --- | --- | --- | --- | --- |
| ES1 | 1st Edition | 1997-06 | Guy Steele | 95 |
| ES2 | 2nd Edition | 1998-08 | Mike Cowlishaw | 101 |
| ES3 | 3rd Edition | 1999-12 | Mike Cowlishaw | 172 |
| ES3.1 | 5th Edition | 5버전의 내부적인 이름 |
| $ES4_{1}$ and $ES4_{2}$ | 4th Edition | 유기되었고, 완성되지 못했다 |
| ES5 | 5th Edition | 2009-12 | Pratap Lakshman, Allen Wirfs-Brock | 245 |
| ES5.1 | 5.1 Edition | 2011-06 | Allen Wirfs-Brock | 245 |
| ES6(ES2015) | 6th Edition | 2015-06 | Allen Wirfs-Brock | 545 |
| ES2016 | 7th Edition | 2016-06 | Brian Terlson | 546 |

Figure 1. ECMA-262 Editions, 1997-2016

---

언어에 대한 표준 사양이 만들어질 때 'Javascript'라는 단어는 피했다. 대신 표준 사양은 'ECMAScript'라는 이름을 사용한다. 'Javascript'와 'ECMAScript'는 본질적으로 같은 것에 대한 다른 이름이다. 이 논문에서 'ECMAScript'라는 용어를 사용할 때는 표준에 의해 정의된 언어에 대해서 특별히 이야기하고 있는 것이다.

ECMAScript라는 이름의 'ECMA' 부분은 스위스의 표준 기관 Ecma International에서 유래한다.  이 기관의 후원 하에 ECMAScript 표준이 개발되었다. 'ECMA'는 원래 'European Computer Manufacturers Association'라는, Ecma International의 전신인 단체의 이름의 앞글자를 딴 약자였다. 이 기관은 더 이상 'Ecma'를 약자로 여기지 않는다. Ecma International은 현재 'Ecma'에서 'E'만 대문자로 사용하지만, 과거에는 모든 글자를 대문자로 사용했다. ECMAScript가 처음 개발될 때도 그랬다. 이것이 언어 이름이 5개의 대문자로 시작하는 이유이다. 이 문서에서는 Ecma International 표준 기관을 언급할 때 보통 "Ecma"라는 단어를 사용할 것이다.

Ecma는 컴퓨팅에 관련된 많은 표준을 개발한다. 표준을 개발하는 실제 작업은 "TC"로 축약되는 Ecma 기술 위원회(Ecma Technical Committees)에서 이루어진다. 새로운 TC가 만들어지면 각 TC를 식별하기 위한 일련번호가 부여된다. TC39는 Javascript를 표준화하기 위해 만들어진 TC이다. 몇몇 Ecma TC는 특정 책임을 가진 작은 작업 그룹(Task Group)들로 나누어지기도 하고 이를 "TG"로 축약한다. 2000년부터 2007년까지 TC39의 책임은 Javascript에 더해 다른 언어들도 포함하도록 확대되었다. 그동안 ECMAScript 표준에 대한 책임은 TC39-TG1에 할당되었다. 이 논문에서는 TC39-TG1을 "TG1"이라는 약어로 칭한다.

Ecma는 TC가 작성한 각각의 표준에 번호를 할당하고 이 번호들에 "ECMA-"라는 접두사를 붙여서 지정자로 사용한다. ECMAScript 표준은 "ECMA-262"로 지정되었다. 표준이 개정될 때는 동일한 번호에 판 번호를 붙여 새로운 판이 발행된다. 예를 들어, ECMAScript 표준의 세 번째 버전은 'ECMA-262, 3rd Edition'으로 공식적으로 알려져 있다. TC39 내부 그리고 궁극적으로는 넓은 Javascript 커뮤니티 내에서는 공식 판의 명칭을 줄여 부르는 말로 'ES3'와 같은 약어를 사용하는 관례가 생겨났다. 여기서 'ES'는 'ECMAScript'를 의미한다. Figure 1은 ECMA-262<sup>g</sup> 의 판들을 나열하고 이 문서에서 사용하는 약어들을 보여준다. 

4번째 판을 만들기 위한 시도는 10년 가까이 이루어졌으며 설계에 관한 2가지 독립적인 설계 노력으로 구성되었다. 이 문서에서는 'ES4<sub>1</sub>'과 'ES4<sub>2</sub>'라는 용어를 사용하여 이런 노력 하나 혹은 다른 하나를 특정해 언급한다[^3]. "ES4"는 4번째 판을 만들기 위한 전체적인 노력을 가리키는 데 사용한다.

6번째 판의 출판을 시작으로, TC39는 출판 연도를 약어로 사용하는 관례를 도입했다. 따라서 'ES6'와 'ES2015'는 모두 'ECMA-262, 6th Edition'에 대한 비공식 약어지만 'ES2015'가 권장된다. 그러나 "ES6"가 6번째 판의 개발 동안 제일 일반적으로 사용된 약어였다. TC39 멤버들은 6번째 판의 개발 프로젝트를 가리키는 코드네임으로 "Harmony<sup>g</sup>"혹은 "ES.next<sup>g</sup>"라는 용어도 사용했다.

이 문서에서는 Javascript의 개념을 설명하기 위해 많은 인라인 코드 스니펫을 사용한다. 몇몇 스니펫들은 Javascript/ECMAScript의 특정 버전이나 판에서만 유효하다. 다른 몇몇 스니펫들은 언어에 도입되지 못한, 제안되었던 기능들을 보여준다. 이 문서 전반에 걸쳐서, Javascript/ECMAScript의 모든 버전에서 유효하지는 않은 스니펫은 적절하게 라벨링된다.

[^3]: TC39와 이 설계 노력들을 한 사람들은 이런 명명법을 사용하지 않았다. 그들은 그냥 그 작업을 "ES4"라고 불렀다