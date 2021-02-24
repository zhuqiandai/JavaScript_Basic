export const Counter = (function () {
  let privateCounter = 0
  function changeBy(val) {
    privateCounter += val
  }

  return {
    increment: function () {
      changeBy(1)
    },

    decrement: function () {
      changeBy(-1)
    },

    value: function () {
      return privateCounter
    },
  }
})()
