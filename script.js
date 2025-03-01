const completeBtnEls = document.getElementsByClassName("task-complete-btn");
const activityLogContainer = document.getElementById("activity-logs");

// Task Cards' Complete Buttons Click Event Handler
for (let btnEl of completeBtnEls) {
  btnEl.addEventListener("click", function () {
    const remainingTasksCount = parseInt(
      document.getElementById("tasks-remaining-count").innerText
    );
    const completedTasksCount = parseInt(
      document.getElementById("tasks-completed-count").innerText
    );

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

    // Set Alerts, setTimeout function is used to make sure alerts execute after the all other codes finish execution
    setTimeout(() => {
      alert("Board Updated Successfully");

      if (remainingTasksCount === 1) {
        alert("Congrats🎉!! You have successfully completed all current tasks");
      }
    }, 0);
  });
}

// Clear History Button Click Event Handler
document.getElementById("clear-history").addEventListener("click", function () {
  activityLogContainer.innerHTML = "";
});

// Make the Remaining Tasks Count dynamic, the remaining tasks count will update automatically according the number of cards in the cards container element
const taskCardsContainer = document.getElementById("Task-Cards-Container");
document.getElementById("tasks-remaining-count").innerText =
  taskCardsContainer.childElementCount;
