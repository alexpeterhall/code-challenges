function alternate(s) {
  const uniqueLetters = [...new Set(s)]
  const allLetterCombos = []
  const sequenceMatches = []

  for (let i = 0; i < uniqueLetters.length - 1; i++) {
    for (let j = i + 1; j < uniqueLetters.length; j++) {
      allLetterCombos.push([uniqueLetters[i], uniqueLetters[j]])
    }
  }

  allLetterCombos.forEach((combo) => {
    const inputValue = [...s]
    const currentSequence = inputValue.filter((letter) => {
      if (combo.includes(letter)) return letter
    })
    for (let i = 0; i < currentSequence.length - 1; i++) {
      if (currentSequence[i] === currentSequence[i + 1]) return
    }
    sequenceMatches.push(currentSequence)
  })

  if (sequenceMatches.length === 0) return 0
  let result = 0
  sequenceMatches.forEach((sequence) => {
    if (sequence.length > result) result = sequence.length
  })
  return result
}

module.exports = { alternate }
