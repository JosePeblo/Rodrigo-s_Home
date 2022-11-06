let buttons;
window.onload = querryButtons;

function querryButtons()
{
    
    buttons = document.querySelectorAll('.grid-button');
    for(let i = 0; i < buttons.length; i++)
    {
        const button = buttons[i];
        button.addEventListener('click', (evt) => {
            button.classList.toggle('btn-off');
        })
    }
}
