const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const message = document.getElementById('message');

function getRandomPosition(element) {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const btnRect = element.getBoundingClientRect();
    const padding = 10;
    const maxLeft = containerRect.width - btnRect.width - padding;
    const maxTop = containerRect.height - btnRect.height - padding;
    const left = Math.random() * maxLeft;
    const top = Math.random() * maxTop;
    return { left, top };
}

noBtn.addEventListener('mouseenter', () => {
    const pos = getRandomPosition(noBtn);
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${pos.left}px`;
    noBtn.style.top = `${pos.top}px`;
});

yesBtn.addEventListener('click', () => {
    message.textContent = "Hi, Rea! Thanks for saying Yes! Now, this will have a follow up message to be sent on IG. 💖";
    message.classList.remove('hidden');
    document.querySelector('.buttons').style.display = 'none';
});
