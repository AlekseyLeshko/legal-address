const osomeAddress = require('../src/index')

describe('osome address', () => {
  it('yep, it\'s osome address', () => {
    expect(osomeAddress.houseNumber).toEqual('68')
    expect(osomeAddress.streetName).toEqual('Circular Road')
    expect(osomeAddress.floor).toEqual('02')
    expect(osomeAddress.apartment).toEqual('01')
    expect(osomeAddress.country).toEqual('Singapore')
    expect(osomeAddress.zipCode).toEqual('049422')
    expect(osomeAddress.fullAddress).toEqual('68 Circular Road, #02-01, Singapore 049422')
  })
})
