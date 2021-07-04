const Ship = (l) => {
  let length = l
  let body = []

  for(i = 0; i < length; i++){
    body.push('-')
  }

  function hit(value) {
    body[value] = 'X'
  }

  function isSunk() {
    for(i = 0; i < length; i++){
      if(body[i] == '-') return false
    }
    return true
  }

  return {
    hit,
    isSunk,
    get length() {return length},
    get body() {return body}
  }
}

module.exports = Ship