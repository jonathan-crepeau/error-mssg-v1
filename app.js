const btn = document.getElementById('signup-btn');
const form = document.getElementById('signup-form');
const inputs = document.querySelectorAll('.input-field');

inputs.forEach((input) => {
    input.addEventListener('input', handleWriting);
});

btn.addEventListener('click', handleClick);
// formInput.addEventListener('click', handleWriting);

/*!SECTION
1. get all input elements

*/


function handleClick(event) {
    event.preventDefault();
    console.log('button clicked!');
    document.querySelectorAll('.alert').forEach((alert) => alert.remove());

    const formInputs = [...form.elements];
    formInputs.forEach((input) => {
        if (input.type !== 'button' && input.value === '') {
            input.classList.add('input-error');
            if (!input.nextElementSibling.classList.contains('alert')) {
                input.insertAdjacentHTML('afterend', `
                <div class="alert ${input.id}-message">
                    Please input your ${input.placeholder}
                </div>
            `);
            }
        }
    })
}


function handleWriting(event) {
    event.preventDefault();
    event.target.classList.remove('input-error');
    if (document.querySelector(`.${event.target.id}-message`)) {
        document.querySelector(`.${event.target.id}-message`).remove();
    }
}