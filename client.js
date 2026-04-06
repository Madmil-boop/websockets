

const socket = io("http://localhost:3000");

const messageContainer = document.getElementById("message-container");

socket.on("message", (message) => {
    let newPara = document.createElement("p");
    newPara.textContent = message.username + ": " + message.text;
    messageContainer.appendChild(newPara);
});

const messageInput = document.querySelector("#messageInput");
const sendButton = document.querySelector("#sendButton");
sendButton.addEventListener("click", () => {
    socket.emit("message", messageInput.value);
    messageInput.value = "";
});

