import { assert, describe, it } from 'vitest'
import { getCurrentLanguage } from './utils'
describe('getCurrentLanguage', () => {
  it('de', () => {
    const actual = getCurrentLanguage('/de/test/')
    assert.equal(actual, 'de')
  })

  it('fr', () => {
    const actual = getCurrentLanguage('/fr/test/')
    assert.equal(actual, 'fr')
  })

  it('en', () => {
    const actual = getCurrentLanguage('/en/test/')
    assert.equal(actual, 'en')
  })

  it('it', () => {
    const actual = getCurrentLanguage('/it/test/')
    assert.equal(actual, 'it')
  })

  it('no language', () => {
    const actual = getCurrentLanguage('/test/')
    assert.equal(actual, 'en')
  })

  it('no language in route', () => {
    const actual = getCurrentLanguage('/deinroutewithoutlang/')
    assert.equal(actual, 'en')
  })

  it('root route', () => {
    const actual = getCurrentLanguage('/')
    assert.equal(actual, 'en')
  })
})
