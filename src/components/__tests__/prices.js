import { totalPrice } from '../prices'

describe('Calc pro prices without devices', () => {
  it('Normal case', () => {
    expect(totalPrice(15)).toBe(54)
  })

  it('0 tablets', () => {
    expect(totalPrice(0)).toBe(39)
  })

  it('1 tablet', () => {
    expect(totalPrice(1)).toBe(39)
  })

  it('10 tablets', () => {
    expect(totalPrice(10)).toBe(39)
  })

  it('50 tablets', () => {
    expect(totalPrice(50)).toBe(159)
  })
})

describe('Calc pro prices with devices', () => {
  it('Normal case', () => {
    expect(totalPrice(15, 9)).toBe(189)
  })

  it('0 tablets', () => {
    expect(totalPrice(0, 9)).toBe(39)
  })

  it('1 tablet', () => {
    expect(totalPrice(1, 19)).toBe(58)
  })

  it('10 tablets', () => {
    expect(totalPrice(10, 29)).toBe(329)
  })

  it('50 tablets', () => {
    expect(totalPrice(50, 19)).toBe(1109)
  })
})
