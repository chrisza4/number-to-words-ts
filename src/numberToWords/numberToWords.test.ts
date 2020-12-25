import { numberToWords, cutNumbersInThree } from './numberToWords'

describe('numberToWords', () => {
  it('Can translate single digit', () => {
    expect(numberToWords(1)).toEqual('one')
    expect(numberToWords(2)).toEqual('two')
    expect(numberToWords(3)).toEqual('three')
    expect(numberToWords(4)).toEqual('four')
    expect(numberToWords(5)).toEqual('five')
    expect(numberToWords(6)).toEqual('six')
    expect(numberToWords(7)).toEqual('seven')
    expect(numberToWords(8)).toEqual('eight')
    expect(numberToWords(9)).toEqual('nine')
  })

  it('Can translate numbers between 10 and 20', () => {
    expect(numberToWords(10)).toEqual('ten')
    expect(numberToWords(11)).toEqual('eleven')
    expect(numberToWords(12)).toEqual('twelve')
    expect(numberToWords(13)).toEqual('thirteen')
    expect(numberToWords(14)).toEqual('fourteen')
    expect(numberToWords(15)).toEqual('fifteen')
    expect(numberToWords(16)).toEqual('sixteen')
    expect(numberToWords(17)).toEqual('seventeen')
    expect(numberToWords(18)).toEqual('eighteen')
    expect(numberToWords(19)).toEqual('nineteen')
    expect(numberToWords(20)).toEqual('twenty')
  })

  it('Can translate numbers between 20 and 30', () => {
    expect(numberToWords(21)).toEqual('twenty one')
    expect(numberToWords(22)).toEqual('twenty two')
    expect(numberToWords(23)).toEqual('twenty three')
    expect(numberToWords(24)).toEqual('twenty four')
  })

  it('Can translate numbers between 30 and 40', () => {
    expect(numberToWords(31)).toEqual('thirty one')
    expect(numberToWords(32)).toEqual('thirty two')
    expect(numberToWords(33)).toEqual('thirty three')
    expect(numberToWords(39)).toEqual('thirty nine')
  })

  it('Can translate numbers between 40 and 100', () => {
    expect(numberToWords(43)).toEqual('fourty three')
    expect(numberToWords(56)).toEqual('fifty six')
    expect(numberToWords(69)).toEqual('sixty nine')
    expect(numberToWords(99)).toEqual('ninety nine')
  })

  it('Can translate number between 100 to 999', () => {
    expect(numberToWords(100)).toEqual('one hundred')
    expect(numberToWords(101)).toEqual('one hundred one')
    expect(numberToWords(534)).toEqual('five hundred thirty four')
    expect(numberToWords(999)).toEqual('nine hundred ninety nine')
  })

  it('Can translate number between 1000 to 999999', () => {
    expect(numberToWords(1000)).toEqual('one thousand')
    expect(numberToWords(5555)).toEqual('five thousand five hundred fifty five')
    expect(numberToWords(46833)).toEqual(
      'fourty six thousand eight hundred thirty three'
    )
    expect(numberToWords(999999)).toEqual(
      'nine hundred ninety nine thousand nine hundred ninety nine'
    )
  })

  it('Can translate number between 1,000,000 to 999,999,999', () => {
    expect(numberToWords(1_000_000)).toEqual('one million')
    expect(numberToWords(1_005_555)).toEqual(
      'one million five thousand five hundred fifty five'
    )
    expect(numberToWords(20_111_999)).toEqual(
      'twenty million one hundred eleven thousand nine hundred ninety nine'
    )
    expect(numberToWords(999_999_999)).toEqual(
      'nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine'
    )
  })

  it('Can translate number between 1,000,000,000 to 999,999,999,999', () => {
    expect(numberToWords(1_000_000_000)).toEqual('one billion')
    expect(numberToWords(1_001_005_555)).toEqual(
      'one billion one million five thousand five hundred fifty five'
    )
    expect(numberToWords(20_020_111_999)).toEqual(
      'twenty billion twenty million one hundred eleven thousand nine hundred ninety nine'
    )
    expect(numberToWords(999_999_999_999)).toEqual(
      'nine hundred ninety nine billion nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine'
    )
  })

  describe('cutNumbersInThree', () => {
    it('Able to cut number in three', () => {
      expect(cutNumbersInThree(300)).toEqual([300])
      expect(cutNumbersInThree(1300)).toEqual([300, 1])
      expect(cutNumbersInThree(20_111_999)).toEqual([999, 111, 20])
      expect(cutNumbersInThree(333_920_111_999)).toEqual([999, 111, 920, 333])
    })
  })
})
