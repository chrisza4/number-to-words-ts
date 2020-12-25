type NumberToStringMap = { [key: number]: string }

export function numberToWords(number: number): string {
  const largeNumberSuffixes = [
    '',
    'thousand',
    'million',
    'billion',
    'trillion',
    'quadrillion',
    'sextillion',
  ]
  const numberInThrees = cutNumbersInThree(number)
  if (numberInThrees.length > largeNumberSuffixes.length) {
    return 'Number too large'
  }
  return (
    numberInThrees
      .reduce<string[]>((acc, number, index) => {
        const thisThreeDigitsStr = translateThreeDigitNumber(number)
        const suffix = largeNumberSuffixes[index] || ''
        const thisDigitStr = thisThreeDigitsStr
          ? concatNumberString(thisThreeDigitsStr, suffix)
          : ''
        acc.push(thisDigitStr)
        return acc
      }, [])
      // This transformation step:
      // [101, 111, 20] -> ['one hundred one', 'one hundred eleven thousand', 'twenty million']
      .reverse()
      .join(' ')
      .trim()
  )
}

function translateThreeDigitNumber(number: number) {
  const digitThree = Math.floor((number % 1000) / 100)
  const digitThreeStr =
    digitThree >= 1 ? `${translateTwoDigitsNumber(digitThree)} hundred` : ''
  const lastTwoDigits = number % 100
  return concatNumberString(
    digitThreeStr,
    translateTwoDigitsNumber(lastTwoDigits)
  )
}

function translateTwoDigitsNumber(number: number) {
  const numberToWordMapOneDigit: NumberToStringMap = {
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
  const numberToWordMapTwoDigit: NumberToStringMap = {
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
  if (!first) {
    return second.trim()
  }
  return `${first.trim()} ${second}`
}

export function cutNumbersInThree(n: number): number[] {
  const digits = Math.floor(Math.log10(n))
  const res: number[] = []
  for (let i = 0; i <= digits; i += 3) {
    const thisDigits = n % Math.pow(10, i + 3)
    res.push(Math.floor(thisDigits / Math.pow(10, i)))
  }
  return res
}
