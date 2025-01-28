const text = document.getElementById("text");

const getInfo = () => {
    const userText = text.value;
    console.log(userText);
    text.value = "";
}

list.addEventListener('click', (evt) =>  {
if (evt.target.tagName ==='LI') {
    evt.target.classList.toggle('active');}
})
