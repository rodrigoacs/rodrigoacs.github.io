function calculate(initial, final) {
  initial = new Date(`01/01/2023 ${initial}:00`).getTime()
  final = new Date(`01/01/2023 ${final}:00`).getTime()

  return (final - initial) / 60000
}

function calculate2() {
  let intervals = document.getElementsByClassName('interval')
  let spentTime = 0
  for (let i = 0; i < intervals.length; i++) {
    let initial = intervals[i].firstElementChild.value
    let final = intervals[i].lastElementChild.value

    if (!initial | !final) {
      break
    }

    spentTime += calculate(initial, final)
  }
  printResult(spentTime)
}

function printResult(time) {
  let hours = parseInt(time / 60)
  let minutes = time - hours * 60
  document.getElementById('result').innerText = `${hours} horas e ${minutes} minutos`
}