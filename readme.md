## 코딩 컨벤션의 필요성


디자인과 브라우저, 스크립트, 성능 향상과 추후 유지보수의 편의를 위해 작성합니다.

통일된 코드의 작성으로 새로운 담당자가 와도 코드를 빠르게 파악, 이해 할 수 있도록합니다.

추후 추가적인 개발이 있을 경우, 통일된 기준으로 소스 코드를 작성하도록 합니다.



## 네이밍/코드 작성 규칙


### 네이밍
 - 네이밍은 `영문 소문자, 숫자, 언더스코어(_)`로 작성합니다.
 - `언더스코어(_)`는 2개 이상의 단어 조합시에 사용합니다.
 - `언더스코어(_)`를 이용한 조합은 3단계를 넘지 않도록 합니다. (네이밍 안에 언더스코어 3개이상 사용자제)
 - 네이밍은 숫자로 시작할 수 없습니다.
 - id는 문서 전체 고유 식별요소 이므로 한 문서에서 여러번 사용하지 않습니다.
 - 레이아웃을 구성하는 id에는 꾸밈요소 스타일을 지정하지 않습니다.
 - 이미지 네이밍은 `'형태_의미_상태'` 순서로 조합합니다. `ex: menu_community_on.png`
 - 파일 네이밍은 백업본의 경우 `_YYMMDD`를 추가 합니다.


### HTML 작성 규칙
 - 새로운 문서 작성시에는 `default.html` 내용을 기본으로 작성합니다.
 - 모든 엘리먼트와 어트리뷰트는 소문자로 작성합니다.
 - 어트리뷰트 안에 들어가는 속성값은 `큰따옴표("")`안에 작성합니다.
 - 특수기호는 엔티티코드를 사용합니다.
 - 들여쓰기는 2칸 탭을 이용하여 사용합니다.(4칸 탭일경우 설정을 변경하여 사용)
 - HTML문서와 CSS에서 각 코드 그룹간의 구분을 위하여 그룹 간 1줄씩 빈줄을 만들수 있도록합니다.(권장사항)


### HTML 주석
 - 주석은 끝나는 부분에만 `<!-- // 주석내용 -->` 으로 표시합니다.
 - 주석 기호와 내용 사이에는 공백 한칸을 추가합니다.

### CSS 들여쓰기/줄바꿈
 - 모든 속성은 영문 소문자로 작성합니다.
 - CSS는 줄바꿈과 들여쓰기를 사용하지 않습니다.
 - 다중 선택자 간에는 공백을 사용하지 않습니다. `ex : a:hover,a:active,a:focus`
 - 중괄호 좌,우 공백을 한칸씩 삽입합니다.
 - 속성명 다음에는 공백을 사용하지 않습니다.
 - CSS 또한 그룹간의 구분을 위해 1줄씩 빈줄을 만들수 있도록합니다.(권장사항)


### css 인코딩
 - 폰트 이름이 영문이 아닐경우, 한글주석이 포함되어있을 경우를 고려하여, 스타일을 제대로 렌더링하려면 반드시 CSS상단에 인코딩을 선언합니다. `@charset "utf-8";`


### CSS 속성
 - 속성 순서는 아래 표기 순서를 따릅니다.
  1. 표시(display)
  1. 넘침(overflow)
  1. 흐름(float)
  1. 위치(position)
  1. 크기(width,height)
  1. 간격(margin,padding)
  1. 테두리(border)
  1. 배경(background)
  1. 폰트(font)
  1. 동작(animation)
  1. 기타(위에 언급되지 않은 속성)

 - 세분화된 속성 표기 순서는 `top, right, bottom, left` 순으로 작성합니다.
 - 컬러 코드 값은 6자리 값을 사용합니다.
 - 위치값은 center, left 등으로 표기하지 않고 숫자로 사용합니다.
 - 속성값이 0일경우 단위를 표시하지 않습니다.
 - 상,우,하,좌의 속성값이 동일하면 축약하여 사용합니다.


### CSS 주석
 - 주석은 주석기호와 주석내용 사이에 공백 한칸을 추가합니다.
 - 종료 주석은 사용하지 않습니다.
 - 그룹 영역별로 시작시에 주석을 추가합니다.




