const str = `
010-1234-5678
theaaa@naver.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The qucik brown fox jumps over the lazy dog.
abbcccdddd
`


console.log(
  str.match(/\bf\w{1,}\b/g)
)