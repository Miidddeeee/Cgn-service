const messages = [
    { name: 'John', message: 'Hello there!' },
    { name: 'Alice', message: 'How are you?' },
    { name: 'Bob', message: 'Nice to meet you!' },
];

let currentIndex = 0;

function navigate(direction) {
    if (direction === 'forward') {
        currentIndex = (currentIndex + 1) % messages.length;
    } else if (direction === 'backward') {
        currentIndex = (currentIndex - 1 + messages.length) % messages.length;
    }

    updateDisplay();
}

function updateDisplay() {
    const currentMessage = messages[currentIndex];
    document.getElementById('name').textContent = currentMessage.name;
    document.getElementById('message').textContent = currentMessage.message;
}

// Initial display
updateDisplay();


    