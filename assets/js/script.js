consoleTextInput = document.querySelector("#console");
logOfPreviousMsg = [`Person@Persons-PC MINGW64 ~/Documents/git-test-repo (testbranch)`, `$ git add .`, `Person@Persons-PC MINGW64 ~/Document/git-test-repo (testbranch)`, `$ git commit -m "finally added a div in my div"`, `Person@Persons-PC MINGW64 ~/Document/git-test-repo (testbranch)`, `$ git push -u origin personalBranch`]
approvedCharacters = [8, 13, 27, 32, 186];

function removeTopItemInList(){
    logOfPreviousMsg.shift();
    drawAllItems();
}

function addBottomItemInList(newStr){
    if(typeof newStr != "string");
    logOfPreviousMsg = logOfPreviousMsg.concat(newStr);
}


function keyDownEvent(event) {
    if(!((47 < event.keyCode && event.keyCode <= 90) || approvedCharacters.includes(event.keyCode))){
        console.log(event.keyCode, event.key);
        return;
    }
    var tempTextContent = consoleTextInput.querySelector("#textbox").textContent; //get current bottom row text content
    consoleTextInput.querySelector("#textbox").textContent = tempTextContent + event.key; //add current bottom text with new character choice

    if (event.key == "ENTER") {
        testArrayOfStuff.shift();
        consoleTextInput.children[0].innerHTML = "";
        drawAllItems();
    }
}

function drawAllItems() {
    for (let index = 0; index < logOfPreviousMsg.length; index++) {
        var listItem = document.createElement("li");
        listItem.textContent = logOfPreviousMsg[index];
        consoleTextInput.children[0].appendChild(listItem);
        listItem.setAttribute("style", " color:white; background: #777777; padding: 5px;");
    }
    var listItem = document.createElement("li");
    listItem.textContent = `$ `;
    consoleTextInput.children[0].appendChild(listItem);
    listItem.setAttribute("style", " color:white; background: #777777; padding: 5px;");
    listItem.setAttribute("id", "textbox")
}

function init(){
    drawAllItems();
}

document.addEventListener("keydown", keyDownEvent);

init();
//g 1. take input
// 2. check if correct syntax
// 3. 
// 4. box with multiple lines
// 5. delete top row
// 6. move text from one row to the one above it when enter is hit
// 7.
// 8.
// 9.