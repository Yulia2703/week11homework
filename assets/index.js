const text = document.getElementById("text");

const getInfo = () => {
    const userText = text.value;
    console.log(userText);
    text.value = "";
}
