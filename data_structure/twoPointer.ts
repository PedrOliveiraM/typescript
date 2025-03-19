function reverseWords(s: string): string {
  let lastIndex = -1
  let len = s.length
  let res = s.split("")  

  for (let index = 0; index <= len; index++) {
    if (index == len || s[index] == ' ') {
      let start = lastIndex + 1  
      let end = index - 1


      while (start < end) {
        [res[start], res[end]] = [res[end], res[start]]
        start++
        end--
      }

      lastIndex = index  
    }
  }

  return res.join('')
}

