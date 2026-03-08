let timeLeft = 0
let timer = null
let running = false

function updateDisplay(){

let hours = Math.floor(timeLeft / 3600)
let minutes = Math.floor((timeLeft % 3600) / 60)
let seconds = timeLeft % 60

if(hours < 10) hours = "0" + hours
if(minutes < 10) minutes = "0" + minutes
if(seconds < 10) seconds = "0" + seconds

document.getElementById("timer").textContent =
hours + ":" + minutes + ":" + seconds

}

function setTimer(){

clearInterval(timer)
running = false

let hours = parseInt(document.getElementById("hoursInput").value) || 0
let minutes = parseInt(document.getElementById("minutesInput").value) || 0

timeLeft = (hours * 3600) + (minutes * 60)

updateDisplay()

}

function startTimer(){

if(running || timeLeft <= 0) return

running = true

timer = setInterval(()=>{

timeLeft--

updateDisplay()

if(timeLeft <= 0){
clearInterval(timer)
running = false
alert("Time is up!")
}

},1000)

}

function pauseTimer(){

clearInterval(timer)
running = false

}

function resetTimer(){

clearInterval(timer)
running = false
timeLeft = 0

updateDisplay()

}

updateDisplay()
function calculateCountdown(){

let examDate = document.getElementById("examDate").value

let today = new Date()

let exam = new Date(examDate)

let difference = exam - today

let days = Math.ceil(difference / (1000 * 60 * 60 * 24))

document.getElementById("result").textContent =
days + " days left until your exam"

}
function calculateGrade(){

let midterm = document.getElementById("midterm").value
let final = document.getElementById("final").value

let result = (midterm * 0.4) + (final * 0.6)

document.getElementById("gradeResult").textContent =
"Estimated Grade: " + result

}
function saveNote(){

let note = document.getElementById("note").value

localStorage.setItem("studentNote", note)

alert("Note saved!")

}
function addTask(){

let task = document.getElementById("task").value

let li = document.createElement("li")

li.textContent = task

document.getElementById("taskList").appendChild(li)

}
function convertTime(){

let hours = document.getElementById("hours").value

let minutes = hours * 60

document.getElementById("converted").textContent =
minutes + " minutes"

}