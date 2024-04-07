const messages = [
    { name: 'Sarah Johnson', message: 'I recently hired CGN JANITORIAL Services for both painting and cleaning my apartment, and I couldn\'t be happier with the results! The painters were professional and meticulous, and the cleaners left my place sparkling. Highly recommend! ' },
    { name: 'Emily Brown', message: 'CGN JANITORIAL SERVICE did an amazing job painting and cleaning my office space. The painters paid close attention to detail, and the cleaners left every corner spotless. The entire process was hassle-free and exceeded my expectations.' },
    { name: 'Michael Davis', message: 'I recently CGN JANITORIAL SERVICE for painting and cleaning services for my new home, and I\'m thrilled with the results! The painters were skilled and efficient, and the cleaners left my house feeling fresh and welcoming. Highly recommended for their professionalism and quality of work!' },
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


    