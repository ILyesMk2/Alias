document.addEventListener('click', function(e) {
    const droplet = document.createElement('div');
    droplet.classList.add('droplet');

    droplet.style.top = `${e.clientY + window.scrollY}px`;
droplet.style.left = `${e.clientX + window.scrollX}px`;

    droplet.style.backgroundColor = '#008080';

    document.body.appendChild(droplet);

    droplet.addEventListener('animationend', () => {
        droplet.remove();
    });
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const shakableElements = document.querySelectorAll('.shakable');

shakableElements.forEach((element) => {
  element.addEventListener('click', () => {
    element.classList.add('shaking');
    setTimeout(() => {
      element.classList.remove('shaking');
    }, 300);
  });
});
