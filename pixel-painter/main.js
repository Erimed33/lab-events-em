const colors = document.querySelectorAll('.color')
const currentColor = document.getElementById('current-color')

// const currrentColor
// function changeColor() 

// color.onClick{() => }
// }

colors.forEach((color) => {
    color.addEventListener('click', (event) => 
{
    currentColor.style.background = color.style.background;
})
})