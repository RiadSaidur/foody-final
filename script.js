window.addEventListener('load', () => {
    const contact = document.getElementById('contact');
    const circle = document.getElementById('circle');

    contact.addEventListener('mouseenter', () => {
        circle.classList.add('circle');
        console.log(circle.classList)
    });

    contact.addEventListener('mouseleave', () => {
        circle.classList.remove('circle');
    });
})