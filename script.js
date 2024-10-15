document.addEventListener("DOMContentLoaded", function () {
    const correctPassword = "12345"; // Задайте свой пароль
    const passwordModal = document.getElementById("passwordModal");
    const mainContent = document.getElementById("mainContent");
    const submitButton = document.getElementById("submitPassword");
    const passwordInput = document.getElementById("passwordInput");
    const errorMessage = document.getElementById("errorMessage");
    
    // Вкладки
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");

    // Обработчик для вкладок
    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Скрыть все вкладки и убрать активный класс
            tabContents.forEach(content => content.classList.remove("active"));
            tabButtons.forEach(btn => btn.classList.remove("active"));

            // Показать выбранную вкладку и добавить активный класс
            const tabId = button.getAttribute("data-tab");
            document.getElementById(tabId).classList.add("active");
            button.classList.add("active");
        });
    });

    submitButton.addEventListener("click", function () {
        const enteredPassword = passwordInput.value;
        if (enteredPassword === correctPassword) {
            passwordModal.style.display = "none";
            mainContent.classList.remove("hidden");
        } else {
            errorMessage.classList.remove("hidden");
        }
    });

    passwordInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            submitButton.click();
        }
    });
});
