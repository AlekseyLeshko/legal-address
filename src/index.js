const houseNumber = '68'
const streetName = 'Circular Road'
const floor = '02'
const apartment = '01'
const country = 'Singapore'
const zipCode = '049422'

module.exports = {
  houseNumber,
  streetName,
  floor,
  apartment,
  country,
  zipCode,
  fullAddress: `${houseNumber} ${streetName}, #${floor}-${apartment}, ${country} ${zipCode}`,
}
