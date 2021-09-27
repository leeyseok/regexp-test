# 정규표현식(RegExp)

정규식, Regular Expression

## 역활

- 문자 검색(search)
- 문자 대체(replace)
- 문자 추출(extract)

## 테스트 사이트
https://regexr.com/

## 정규식 생성

```js
//생성자
new RegExp('표현', '옵션')
new RegExp('[a-z]', 'gi')

//리터럴 
/표현/옵션
/[a-z]/gi
```
\을 사용해서 .등의 문자를 기능적 활용이 아닌 문자로 인식 가능
/`\`[a-z]/gi

## 예제문자 

```js
const str = `
010-1234-5678
aaa@naver.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The qucik brown fox jumps over the lazy dog.
abbcccdddd
`
```


## 메소드

메소드|문법|설명 
--|--|--
text | `정규식.text(문자열)` | 일치 여부(Boolean) 전환
match | `문자열.match(정규식)` | 일치하는 문자 배열(Array) 반환
replace | `문자열.replace(정규식, 대체문자)` | 일치하는 문자 대체

## 플레그

플레그 | 설명
--| --
g | 모든 문지 일치
i | 영어 대소문자를 구분 않고 일치
m | 여러 줄 일치

## 패턴

패턴|설명
--|--
^ab | 줄 시작에 있는 ab를 일치
ab$ | 줄 끝에 있는 ab를 일치
. | 임의의 한 문자와 일치
a&#124;b | a와 또는 b와 일치
ab? | b 가 없거나 b와 일치
{3}| 3개 연속 일치
{3,}| 3개 이상 연속 일치
{3,5}| 3개 이상 5개 이하 연속 일치
[abc] | a 또는 b 또는 c 
[a-z] | a 부터 z 사이 문자 구간에 일치
[A-Z] | A 부터 Z 사이 문자 구간에 일치
[가-힣] | 가 부터 힣 사이 문자 구간에 일치
\w | 63개(Word + 대소영문 + 숫자 + 
_) 문자에 일치
\b | 63개 문자와 일치하지 않는 것
\d | 숫자에 일치
\s | 공백(Space, Tab)에 등에 일치
(?=) | 앞쪽 일치
(?<=) | 뒤쪽 일치


마크다운 특수문자 https://ascii.cl/htmlcodes.htm