testConsoleDiv = document.querySelector("#testConsoleDiv");
logOfPreviousMsg = [`$ `, `$ `, `Person@Persons-PC MINGW64 ~/Documents/git-test-repo (testbranch)`, `$ git add .`, `Person@Persons-PC MINGW64 ~/Document/git-test-repo (testbranch)`, `$ git commit -m "finally added a div in my div"`, `Person@Persons-PC MINGW64 ~/Document/git-test-repo (testbranch)`, `$ git push -u origin personalBranch`]
approvedCharacters = [8, 13, 27, 32, 186];
// liItemStyling = `color:white; background: #777777; padding: 5px;`;

consoleAnswerInput = testConsoleDiv.querySelector("ul").dataset.answer;
consoleUserInput = ``;

function removeTopItemInList(){
    logOfPreviousMsg.shift();
    drawAllItems();
}

function addBottomItemInList(newStr){
    if(typeof newStr != "string");
    logOfPreviousMsg = logOfPreviousMsg.concat(newStr);
    drawAllItems();
}

function drawAllItems() { //recreates all the list items
    testConsoleDiv.querySelector("ul").innerHTML = '';//clears anything that could be inside the <ul> </ul> tags so list always will start empty
    for (let index = 0; index < logOfPreviousMsg.length; index++) { //loop over all the prefilled text the console comes with for this scenario
        var listItem = document.createElement("li"); //create a new list item
        listItem.textContent = logOfPreviousMsg[index]; //fill the text content with the prefilled content at this index
        testConsoleDiv.querySelector("ul").appendChild(listItem); //add this to the bottom of the current list so keep piling them on
        // listItem.setAttribute("style", liItemStyling); //style this with a preset variable so all are uniform and can be styled
    }
    var listItem = document.createElement("li"); //create a final list item line for text to enter
    listItem.textContent = `$ `; //set text to '$ '
    testConsoleDiv.querySelector("ul").appendChild(listItem); //add this final list item to the bottom
    // listItem.setAttribute("style", liItemStyling); //style uniform to others
    listItem.setAttribute("id", "textbox") //give it an id so we can easily reference this one out of all the others
}

function checkSubmission() {
    console.log(testConsoleDiv.querySelector("ul").dataset.answer.split(" ")); //prints out the answer hidden in html
    console.log(consoleUserInput, consoleUserInput.substring(2, consoleUserInput.length).split(" ")); //takes users answer and splits it into an array
    tempUserInputArr = consoleUserInput.split(" ")
    for (let index = 0; index < tempUserInputArr.length; index++) {
        console.log(tempUserInputArr[index], consoleAnswerInput[index])
        if (tempUserInputArr[index] == consoleAnswerInput[index]){
            console.log("correct")
            console.log(testConsoleDiv.querySelector("ul").dataset.answer.split(" "));
        }
    }
}

function keyDownEvent(event) { //every time a key is pressed anywhere on page
    if(!((47 < event.keyCode && event.keyCode <= 90) || approvedCharacters.includes(event.keyCode))){ //if its not a number letter or approved character do nothing
        return;
    }

    if(event.key === `Backspace`){  //if backspace then backspace a character
        if (testConsoleDiv.querySelector("#textbox").textContent.length < 3) { //if its at the limit of the string do nothing (Leave '$ ')
            return
        }
        var tempTextContent = testConsoleDiv.querySelector("#textbox").textContent; //get current bottom row text content
        testConsoleDiv.querySelector("#textbox").textContent = tempTextContent.substring(0, tempTextContent.length - 1); //add current bottom text with new character choice
        return
    }

    if(event.key === `Enter`){ //enter for returning a new line and submit text
        var tempTextContent = testConsoleDiv.querySelector("#textbox").textContent;
        consoleUserInput = tempTextContent;
        addBottomItemInList(`Person@Persons-PC MINGW64 ~/Documents/git-test-repo (testbranch)`);
        addBottomItemInList(tempTextContent);
        removeTopItemInList();
        removeTopItemInList();
        checkSubmission(); //call check the submission after all is drawn and submitted so its run after all the additions are made
        return
    }

    //add on any other types of characters
    var tempTextContent = testConsoleDiv.querySelector("#textbox").textContent; //get current bottom row text content
    testConsoleDiv.querySelector("#textbox").textContent = tempTextContent + event.key; //add current bottom text with new character choice


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