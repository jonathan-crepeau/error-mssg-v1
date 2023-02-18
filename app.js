const btn = document.getElementById('signup-btn');

btn.addEventListener('click', handleClick);

function handleClick(event) {
    event.preventDefault();
    console.log('clicked!');
}