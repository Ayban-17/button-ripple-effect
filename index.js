const buttonElement = document.querySelector('.btn')

buttonElement.addEventListener("mouseover", (event) =>{
    const y = event.pageY - buttonElement.offsetTop;
    const x = event.pageX - buttonElement.offsetLeft;

    buttonElement.style.setProperty("--xPosition", x + "px");
    buttonElement.style.setProperty("--yPosition", y + "px");
})