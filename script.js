const input = document.getElementById("input");
const output = document.getElementById("output");

const commands = {
  help: "Available commands: help, scan, login",
  scan: "Scanning network... 3 devices found.",
  login: "ACCESS DENIED"
};

input.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    const cmd = input.value.trim();

    const line = document.createElement("p");
    line.textContent = ">> " + cmd;
    output.appendChild(line);

    const response = document.createElement("p");

    if (commands[cmd]) {
      response.textContent = commands[cmd];
    } else {
      response.textContent = "Unknown command";
    }

    output.appendChild(response);

    input.value = "";

    window.scrollTo(0, document.body.scrollHeight);
  }
});