consoleTextInput = document.querySelector("#console");

testArrayOfStuff = ['apples', 'reaching out', 'touching me', `good times never seem so good`, `im feeling sad`, `to believe there never was oh no no`];

function logkey(event) {
    console.log(event.key.toUpperCase());

    if (event.key == "h") {
        testArrayOfStuff.shift();
        consoleTextInput.children[0].innerHTML = "";
        drawAllItems();
    }
}

function drawAllItems() {
    for (let index = 0; index < testArrayOfStuff.length; index++) {
        var listItem = document.createElement("li");
        listItem.textContent = testArrayOfStuff[index];
        consoleTextInput.children[0].appendChild(listItem);
        listItem.setAttribute("style", " color:white; background: #777777; padding: 5px; margin-left: 35px;");
    }
}

function init(){
    drawAllItems();
}

document.addEventListener("keydown", logkey);

init();
// 1. take input
// 2. check if correct syntax
// 3. 
// 4. box with multiple lines
// 5. delete top row
// 6. move text from one row to the one above it when enter is hit
// 7.
// 8.
// 9.