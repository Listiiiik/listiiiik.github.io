document.addEventListener("DOMContentLoaded", () => {
    const noButton = document.querySelector(".no-button");
    const yesButton = document.querySelector(".yes-button");
    let messageIndex = 0;
    const messages = [
        "Ты уверена?", "Точно уверена??", "Ты совершенно уверена?", "Пуки, пожалуйста...",
        "Просто подумай об этом!", "Если ты скажешь нет, мне будет очень грустно...",
        "Мне будет очень грустно...", "Мне будет оооочень грустно...", "Ладно, хорошо, я перестану спрашивать...",
        "Шучу, скажи да, пожалуйста! ❤️"
    ];
    
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
        const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
        yesButton.style.fontSize = `${currentSize * 1.5}px`;
    });
});
