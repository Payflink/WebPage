import { setCurrencyFromAPI } from '../CurrencyContext'

describe('Set currency from API', () => {
  const actual = setCurrencyFromAPI(res => `Result ${res}`)
  it('EUR', () => {
    expect(actual({ currency: 'EUR' })).toBe('Result EUR')
  })
  it('USD', () => {
    expect(actual({ currency: 'USD' })).toBe('Result USD')
  })
  it('CHF', () => {
    expect(actual({ currency: 'CHF' })).toBe('Result CHF')
  })
  it('Other', () => {
    expect(actual({ currency: 'RUB' })).toBe(false)
  })
  it('Empty', () => {
    expect(actual({ currency: '' })).toBe(false)
  })
  it('Undefined', () => {
    expect(actual({})).toBe(false)
  })
})
