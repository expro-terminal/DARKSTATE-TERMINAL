const input = document.getElementById("cmd");
const output = document.getElementById("output");

let loggedIn = false;

// CLOCK SYSTEM
function updateClock() {
  const now = new Date();
  document.getElementById("clock").textContent = now.toLocaleString();
}
setInterval(updateClock, 1000);
updateClock();

// COMMAND SYSTEM
input.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    const value = input.value.trim();

    const line = document.createElement("p");
    line.textContent = ">> " + value;
    output.appendChild(line);

    handleCommand(value);

    input.value = "";
    window.scrollTo(0, document.body.scrollHeight);
  }
});

function handleCommand(cmd) {
  const res = document.createElement("p");

  // LOGIN SYSTEM (terminal-based)
  if (!loggedIn) {
    if (cmd === "login operator darkstate") {
      loggedIn = true;
      document.getElementById("userline").textContent = 'You\'re logged in as "operator"';
      res.textContent = "ACCESS GRANTED";
    } else {
      res.textContent = "AUTH REQUIRED — try: login operator darkstate";
    }
    output.appendChild(res);
    return;
  }

  // COMMANDS AFTER LOGIN
  if (cmd === "help") {
    res.textContent = "Commands: database, status, logout";
  }

  else if (cmd === "status") {
    res.textContent = "SYSTEM ONLINE // PROJECT DARKSTATE ACTIVE";
  }

  else if (cmd === "logout") {
    location.reload();
  }

  else if (cmd === "database") {
    showDatabase();
    res.textContent = "Loading database...";
  }

  else {
    res.textContent = "UNKNOWN COMMAND";
  }

  output.appendChild(res);
}

function showDatabase() {
  const db = document.createElement("div");

  db.innerHTML = `
    <h3>DATABASE NODES</h3>
    <ul>
      <li><a href="pages/node-alpha.html">NODE-ALPHA</a></li>
      <li><a href="pages/node-beta.html">NODE-BETA</a></li>
      <li><a href="pages/node-gamma.html">NODE-GAMMA</a></li>
    </ul>
  `;

  output.appendChild(db);
}
