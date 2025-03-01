const completeBtnEls = document.getElementsByClassName("task-complete-btn");
const activityLogContainer = document.getElementById("activity-logs");

// Set Today's Date in the Dashboard
const now = new Date();
const CurrentWeekDay = now.toLocaleDateString("en-US", { weekday: "short" });
const CurrentDateMonthYear = now.toLocaleDateString("en-US", {
  month: "short",
  day: "2-digit",
  year: "numeric",
});
document.getElementById("todays-date").innerHTML = `
<span>${CurrentWeekDay} ,</span>
<span> ${CurrentDateMonthYear}</span>
`;

// Task Cards' Complete Buttons Click Event Handler
for (let btnEl of completeBtnEls) {
  btnEl.addEventListener("click", function () {
    const remainingTasksCount = parseInt(
      document.getElementById("tasks-remaining-count").innerText
    );
    const completedTasksCount = parseInt(
      document.getElementById("tasks-completed-count").innerText
    );

    // Set Alerts
    alert("Board Updated Successfully");
    if (remainingTasksCount === 1)
      alert("Congrats🎉!! You have successfully completed all current tasks");

    // Update dom of task count elements
    document.getElementById("tasks-remaining-count").innerText =
      remainingTasksCount - 1;
    document.getElementById("tasks-completed-count").innerText =
      completedTasksCount + 1;

    // Add "disabled" attribute to currently clicked button
    btnEl.setAttribute("disabled", true);
    btnEl.classList.remove("btn-modified");

    // Select the Current Complete Button's Parent Container
    const currentBtnCardEl = btnEl.parentNode.parentNode;

    // Get Current Time of Click Event in HH:MM:SS format
    const now = new Date().toLocaleTimeString();

    // Create New Elements for each Activity Log
    const newLogEl = document.createElement("div");
    newLogEl.innerText = `You have Complete The Task ${
      currentBtnCardEl.querySelector("h2").innerText
    } at ${now}`;

    // Append New Elements to the Activity Log Container
    activityLogContainer.appendChild(newLogEl);
    newLogEl.classList.add("activity-log-styles");
  });
}

// Clear History Button Click Event Handler
document.getElementById("clear-history").addEventListener("click", function () {
  activityLogContainer.innerHTML = "";
});

// Page Redirect
document
  .getElementById("blog-page-redirect")
  .addEventListener("click", function () {
    window.location.href = "blog.html";
  });

// Updates remaining tasks-count dynamically based on the number of cards.
const taskCardsContainer = document.getElementById("Task-Cards-Container");
document.getElementById("tasks-remaining-count").innerText =
  taskCardsContainer.childElementCount;

// Theme Color Btn
const colors = [
  "#191E24",
  "#EFEAE7",
  "#191E24",
  "#E4D8B5",
  "#F7E83A",
  "#162455",
  "#24252F",
  "#00111D",
  "#242932",
  "#F2F7FE",
];
let colorIndex = 0;

document.getElementById("theme-btn").addEventListener("click", function () {
  document.body.style.backgroundColor = colors[colorIndex];
  colorIndex++;

  if (colorIndex >= colors.length) {
    colorIndex = 0;
  }
});
