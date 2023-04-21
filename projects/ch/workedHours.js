function calculateIndividual(initial, final) {
  initial = new Date(`01/01/2023 ${initial}:00`).getTime()
  final = new Date(`01/01/2023 ${final}:00`).getTime()

  return (final - initial) / 60000
}

function calculateAll() {
  let intervals = document.getElementsByClassName("interval")
  let spentTime = 0
  for (let i = 0; i < intervals.length; i++) {
    let initial = intervals[i].children[0].value
    let final = intervals[i].children[1].value

    if (!initial | !final) {
      break
    }

    spentTime += calculateIndividual(initial, final)
  }
  printResult(spentTime)
}

function printResult(time) {
  let hours = parseInt(time / 60)
  let minutes = time - hours * 60
  document.getElementById("result").innerText = `${hours} horas e ${minutes} minutos`
}

function addActivity() {
  let times = document.getElementsByClassName("times")
  let div = document.createElement("div")
  div.classList = "interval"
  let inputTime = document.createElement("input")
  inputTime.type = "time"
  let inputTime2 = document.createElement("input")
  inputTime2.type = "time"
  let inputText = document.createElement("input")
  inputText.type = "text"

  div.appendChild(inputTime)
  div.appendChild(inputTime2)
  div.appendChild(inputText)

  times[times.length - 1].appendChild(div)
}