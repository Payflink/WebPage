import { totalPrice, planPrice } from '../prices'

describe('Calc total prices', () => {
  it('Normal case', () => {
    expect(totalPrice('gaston-menu')).toBe(49)
  })

  it('0 tablets', () => {
    expect(totalPrice('gaston-order')).toBe(89)
  })

  it('1 tablet', () => {
    expect(totalPrice('gaston-pay')).toBe(89)
  })
})

describe('Calc plan prices', () => {
  it('Normal case', () => {
    expect(planPrice('gaston-menu')).toBe(49)
  })

  it('0 tablets', () => {
    expect(planPrice('gaston-order')).toBe(89)
  })

  it('1 tablet', () => {
    expect(planPrice('gaston-pay')).toBe(89)
  })
})
