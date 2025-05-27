document.addEventListener('DOMContentLoaded', () => {
  const display = document.getElementById('inputField')
  const buttons = document.querySelectorAll('.buttons button')

  function calculateExpression(expression) {
    try {
      if (!/^[0-9+\-*/.() ]+$/.test(expression)) {
        return 'Error'
      }

      return new Function('return ' + expression)()
    } catch (error) {
      return 'Error'
    }
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const value = button.textContent

      if (value === '=') {
        display.value = calculateExpression(display.value)
      } else if (value === 'AC') {
        display.value = ''
      } else if (value === 'CE') {
        display.value = display.value.slice(0, -1)
      } else {
        display.value += value
      }
    })
  })
})
