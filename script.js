document.addEventListener("DOMContentLoaded", () => {
    const noButton = document.querySelector(".no-button");
    const yesButton = document.querySelector(".yes-button");
    let messageIndex = 0;
    
    function moveNoButton() {
        const maxX = window.innerWidth - noButton.clientWidth;
        const maxY = window.innerHeight - noButton.clientHeight;
        
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;
        
        noButton.style.position = "absolute";
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    }
    
    noButton.addEventListener("mouseenter", moveNoButton);
    
    noButton.addEventListener("click", () => {
        noButton.textContent = messages[messageIndex];
        messageIndex = (messageIndex + 1) % messages.length;
    });
    
    yesButton.addEventListener("click", () => {
        window.location.href = "yes_page.html";
    });
});
