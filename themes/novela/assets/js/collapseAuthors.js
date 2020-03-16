let collapsed = true;

const collapsedCoauthors = document.getElementById("collapsedCoauthors");
const uncollapsedAction = document.getElementById("uncollapsedAction");

if (collapsedCoauthors) {
  collapsedCoauthors.addEventListener("click", displayCoauthors);
}

if (uncollapsedAction) {
  uncollapsedAction.addEventListener("click", hideCoauthors);
}

function displayCoauthors() {
  document.getElementById("uncollapsedCoauthors").classList.remove("hidden");
}

function hideCoauthors() {
  document.getElementById("uncollapsedCoauthors").classList.add("hidden");
}
