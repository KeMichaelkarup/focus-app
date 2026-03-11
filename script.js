let timeLeft = 1500;
let timerInterval = null;
let tasks = [];
let currentTask = null;

// TIMER
function updateTimer() {
  timeLeft--;
  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    setNudge("Godt arbejde! Klar til næste opgave?");
  }

  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;

  document.getElementById("timer-display").textContent =
    `${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`;

  const progress = 565 - (565 * (timeLeft / 1500));
  document.getElementById("progress-ring").style.strokeDashoffset = progress;

  decideNudge();
}

document.getElementById("start-btn").onclick = () => {
  if (!timerInterval) {
    timerInterval = setInterval(updateTimer, 1000);
    setNudge("Fokuser på: " + (currentTask || "din opgave"));
  }
};

document.getElementById("pause-btn").onclick = () => {
  clearInterval(timerInterval);
  timerInterval = null;
  setNudge("Pause — klar når du er.");
};

document.getElementById("plus-btn").onclick = () => {
  timeLeft += 300;
  setNudge("Flere minutter tilføjet.");
};

// TASKS
document.getElementById("add-task-btn").onclick = () => {
  const val = document.getElementById("task-input").value.trim();
  if (!val) return;

  tasks.push(val);
  currentTask = val;

  const li = document.createElement("li");
  li.textContent = val;
  document.getElementById("task-list").appendChild(li);

  setNudge("Klar til at fokusere på: " + val);
};

// NUDGE ENGINE
function setNudge(msg) {
  document.getElementById("nudge-text").textContent = msg;
}

function decideNudge() {
  if (!currentTask) {
    setNudge("Tilføj en opgave for at komme i gang.");
    return;
  }
  if (!timerInterval) {
    setNudge("Tryk start for at fokusere på: " + currentTask);
    return;
  }
  setNudge("Fortsæt fokus: " + currentTask);
}
``
