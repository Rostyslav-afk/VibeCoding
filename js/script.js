const button = document.getElementById('myButton');
const message = document.getElementById('message');
let isButtonClick = false;

// Functions
const showMessage = function () {
    message.textContent = 'Ви натиснули кнопку!';
    isButtonClick = true;
    console.log(isButtonClick);

    if (isButtonClick === true) {
        alert("Ви пройшли гру!")
        window.location.href = "./pages/level2.html";
    }
};

button.addEventListener('mouseenter', () => {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();

    // Отримаємо розміри
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    const maxX = container.clientWidth - buttonWidth;
    const maxY = container.clientHeight - buttonHeight;

    // Випадкові координати в межах [0, max], потім зміщуємо центр координат
    const randomX = Math.floor(Math.random() * (maxX + 1));
    const randomY = Math.floor(Math.random() * (maxY + 1));

    // Встановлюємо нову позицію
    button.style.position = 'absolute';
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
});


