function calculateIndividual(initial, final) {
  initial = new Date(`01/01/2023 ${initial}:00`).getTime()
  final = new Date(`01/01/2023 ${final}:00`).getTime()

  return (final - initial) / 60000
}

function calculateAll() {
  let intervals = document.getElementsByClassName("interval")
  let spentTime = 0
  let formatedTime = []
  for (let i = 0; i < intervals.length; i++) {
    let initial = intervals[i].children[0].value
    let final = intervals[i].children[1].value

    if (!initial | !final) {
      break
    }

    let spentIndividual = calculateIndividual(initial, final)
    formatedTime = formatTime(spentIndividual)
    intervals[i].children[3].value = `${formatedTime[0]} hora(s) e ${formatedTime[1]} minuto(s)`
    spentTime += spentIndividual
  }

  formatedTime = formatTime(spentTime)
  document.getElementById("result").innerText = `${formatedTime[0]} hora(s) e ${formatedTime[1]} minuto(s)`
}

function formatTime(time) {
  let hours = parseInt(time / 60)
  let minutes = time - hours * 60
  return [hours, minutes]
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
  let individualTime = document.createElement("input")
  individualTime.type = "text"
  individualTime.readOnly = true

  div.appendChild(inputTime)
  div.appendChild(inputTime2)
  div.appendChild(inputText)
  div.appendChild(individualTime)

  times[times.length - 1].appendChild(div)
}