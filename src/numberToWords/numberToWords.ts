export function numberToWords(number: number): string {
  let str = ''

  const moreThanDigitThree = Math.floor(number / 1000)
  if (moreThanDigitThree >= 1) {
    str = concatNumberString(
      str,
      `${translateThreeDigitNumber(moreThanDigitThree)} thousand `
    )
  }
  return concatNumberString(str, translateThreeDigitNumber(number % 1000))
}

function translateThreeDigitNumber(number: number) {
  let str = ''
  const digitThree = Math.floor((number % 1000) / 100)
  if (digitThree >= 1) {
    str = concatNumberString(
      str,
      `${translateTwoDigitsNumber(digitThree)} hundred `
    )
  }
  const lastTwoDigits = number % 100
  return concatNumberString(str, translateTwoDigitsNumber(lastTwoDigits))
}

function translateTwoDigitsNumber(number: number) {
  const numberToWordMapOneDigit = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
  }
  const numberToWordMapTwoDigit = {
    2: 'twenty',
    3: 'thirty',
    4: 'fourty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety',
  }

  const digitTwo = Math.floor(number / 10)
  if (digitTwo >= 2) {
    const suffix = numberToWordMapOneDigit[number % 10]
    return concatNumberString(`${numberToWordMapTwoDigit[digitTwo]} `, suffix)
  }
  return numberToWordMapOneDigit[number]
}

function concatNumberString(first: string, second: string): string {
  if (!second) {
    return first.trim()
  }
  return first + second
}
