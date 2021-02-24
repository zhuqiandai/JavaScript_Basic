import { Counter } from './index'

test('', () => {
  Counter.increment()
  expect(Counter.value()).toEqual(1)
})
