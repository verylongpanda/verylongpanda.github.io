document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('myButton');
    const message = document.getElementById('message');

    button.addEventListener('click', function() {
        message.textContent = 'ボタンがクリックされました！静的サイトでもインタラクティブな動きが可能です。';
    });
});