const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');
const chatMessages = document.getElementById('chat-messages');

// Helper to add messages to the DOM
function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');
    
    if (sender === 'bot') {
        // Parse Markdown into HTML for beautiful bot messages
        messageDiv.innerHTML = marked.parse(text);
    } else {
        // Keep user messages as safe plain text
        messageDiv.textContent = text;
    }
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll
}

chatForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const message = userInput.value.trim();
    if (!message) return;

    // Display user message
    addMessage(message, 'user');
    userInput.value = '';

    // Add a temporary loading message
    const loadingDiv = document.createElement('div');
    loadingDiv.classList.add('message', 'bot-message');
    loadingDiv.textContent = 'Typing...';
    chatMessages.appendChild(loadingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    try {
        // Send request to your backend
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message })
        });
        
        const data = await response.json();
        
        // Remove loading and display formatted response
        chatMessages.removeChild(loadingDiv);
        addMessage(data.reply || "Sorry, I couldn't understand that.", 'bot');
        
    } catch (error) {
        chatMessages.removeChild(loadingDiv);
        addMessage('**Error:** Could not connect to the server.', 'bot');
    }
});