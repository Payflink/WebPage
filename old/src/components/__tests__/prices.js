import { totalPrice, planPrice } from '../prices'

describe('Calc total prices', () => {
  it('Menu plan', () => {
    expect(totalPrice('gaston-menu')).toBe(49)
  })

  it('Order plan', () => {
    expect(totalPrice('gaston-order')).toBe(89)
  })

  it('Pay plan', () => {
    expect(totalPrice('gaston-pay')).toBe(89)
  })
})

describe('Calc plan prices', () => {
  it('Menu plan', () => {
    expect(planPrice('gaston-menu')).toBe(49)
  })

  it('Order plan', () => {
    expect(planPrice('gaston-order')).toBe(89)
  })

  it('Pay plan', () => {
    expect(planPrice('gaston-pay')).toBe(89)
  })
})
