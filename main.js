
let button1 = document.querySelector('#button1');

function handleClick(evt) {
    evt.preventDefault();

    console.log("Button Clicked")
};

button1.addEventListener("click", handleClick);

