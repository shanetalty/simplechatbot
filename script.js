const botResponses = {
    hello: "Hello! How can I assist you?",
    help: "Sure! I'm here to help. Please tell me what you need.",
    bye: "Goodbye! Have a great day!",
    default: "I'm sorry, I didn't understand that. Can you rephrase?",
};

function sendMessage() {
    const inputField = document.getElementById("userInput");
    const chatbox = document.getElementById("chatbox");
    const userMessage = inputField.value.trim();

    if (userMessage === "") return;

    // Display user message
    const userMsgDiv = document.createElement("div");
    userMsgDiv.className = "message user";
    userMsgDiv.textContent = userMessage;
    chatbox.appendChild(userMsgDiv);

    // Get bot response
    const botResponse = getBotResponse(userMessage.toLowerCase());

    // Display bot response
    const botMsgDiv = document.createElement("div");
    botMsgDiv.className = "message bot";
    botMsgDiv.textContent = botResponse;
    chatbox.appendChild(botMsgDiv);

    // Clear input field
    inputField.value = "";

    // Scroll to bottom
    chatbox.scrollTop = chatbox.scrollHeight;
}

function getBotResponse(userMessage) {
    // Simple keyword matching
    for (const key in botResponses) {
        if (userMessage.includes(key)) {
            return botResponses[key];
        }
    }
    return botResponses.default;
}
