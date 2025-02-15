let audio = document.getElementById("background-audio");

// Play the audio when the page loads, but we will try after the user clicks "Yes".
function handleYesClick() {
    // Attempt to play the audio on click
    audio.play().catch((error) => {
        console.error("Error playing audio:", error);
    });

    // Redirect to the next page after audio plays
    window.location.href = "yes_page.html";
}

const messages = [
    "Are you sure?",
    "Really sure Sara??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}
