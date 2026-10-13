
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('hidden');
        menu.classList.toggle('flex');
    });

    menu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            if (window.innerWidth < 768) {
                menu.classList.add('hidden');
                menu.classList.remove('flex');
            }
        });
    });

    const cakeChoice = document.getElementById('cake-choice');

    document.querySelectorAll('.order-btn').forEach(function (button) {
        button.addEventListener('click', function () {
            cakeChoice.value = button.dataset.cake;

            document.getElementById('dat-banh').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const orderForm = document.getElementById('order-form');
    const formMessage = document.getElementById('form-message');

    orderForm.addEventListener('submit', function (event) {
        event.preventDefault();

        if (!orderForm.checkValidity()) {
            orderForm.reportValidity();
            return;
        }

        formMessage.textContent =
            'Thông tin hợp lệ! Đây là bản demo, đơn hàng chưa được gửi đến tiệm.';
        formMessage.className = 'text-sm text-green-700';

        orderForm.reset();
    });
});
