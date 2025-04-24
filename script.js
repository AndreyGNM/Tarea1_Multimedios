document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.mobile-toggle');

    toggleButtons.forEach(button => {
        button.addEventListener('click', () => 
        {
            button.classList.toggle('active');
        });
    });
}); 