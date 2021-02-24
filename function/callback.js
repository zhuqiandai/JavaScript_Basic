export const text = 'Domo arigato!'

const unless = function (callback) {
  console.log('In useless function')
  return callback()
}
const getText = function () {
  console.log('In getText function')
  return text
}

unless(getText)
