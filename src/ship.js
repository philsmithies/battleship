const Ship = (l) => {
  let length = l
  let body = []

  for(i = 0; i < length; i++){
    body.push('-')
  }

  function hit(value) {
    body[value] = 'X'
  }

  return {
    hit,
    get length() {return length},
    get body() {return body}
  }
}

module.exports = Ship