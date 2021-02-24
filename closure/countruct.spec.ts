import { constructCounter } from './construct'

let counter1
let counter2
beforeEach(() => {
  counter1 = constructCounter()
  counter2 = constructCounter()
})

test('', () => {
  counter1.increment()
  counter2.decrement()

  expect(counter1.value()).toEqual(1)
})
