//------------------------------------ PROMOTIONS PAGE ---------------------------

// Selectors
const adInput = document.querySelector(".ad_input"); // text area from the form
const adName = document.getElementById("name"); // name from the form
const adContact = document.getElementById("contact"); // Phone number from the form
const adAddress = document.getElementById("address"); // Address from the form
const adButton = document.querySelector(".ad_button"); // The button that submits the form
const adList = document.querySelector(".ad_list"); // The empty UL that would be added to to make our information cards

// ========================================Event Listeners===================================
adButton.addEventListener("click", createAd); // acts on the plus button and this the function that adds the card information
adList.addEventListener("click", deleteCheck) // acts on the delete button to delete an information card
window.addEventListener("load", displayCards)


// =========================================Functions========================================
// Function to create the information cards
let jsonList = []; // list holding json info of cards
let num = 0;
function createAd(event){


    //=====================store card info into a json file===================================

    const form = document.querySelector('form');
    // Prevent the form from submitting and the page reloading
    event.preventDefault();
    const data = new FormData(form);
    const value = Object.fromEntries(data.entries());
    const newData = JSON.stringify(value); // turn data entered by user into json format
    jsonList.push(newData); // Add data to the json list
    console.log(jsonList);
    sessionStorage.setItem(num.toString(), newData);

    //======================= Create the cards to display to users ============================
    // Create a Div that holds the li that would be crated and the delete button
    const adDiv = document.createElement("div");
    adDiv.classList.add("ad");

    // Create Li; it is the text area of the information card that appears on submit of the form
    const adInfo = document.createElement("li");
    adInfo.innerHTML = "Contact Name: " + value.name + " <br> Contact Number: " + value.contact+ " <br> Contact Address: " + value.address+ " <br> Information: " + adInput.value+ " <br>";
    adInfo.classList.add("ad_info");

    // Create trash Button to delete the information card
    const trashButton = document.createElement('button');
    trashButton.innerHTML = "<i class='fas fa-trash'></i>"
    trashButton.classList.add("trash_button");


    // Append to  empty UL List
    adDiv.appendChild(adInfo);
    adDiv.appendChild(trashButton);
    adList.appendChild(adDiv);

    // clear input
    adInput.value = "";
    adName.value = "";
    adContact.value = "";
    adAddress.value = "";
    // increment session storage key
    num++;
}
// Function to delete each individual information card
function deleteCheck(e){
    const item = e.target;
    if (item.classList[0] === "trash_button"){
        const parentItem = item.parentElement;
        parentItem.remove();
    }
}

function displayCards(){

    if (num > 0){
        console.log("here")
        for (const i in sessionStorage){
            //======================= Create the cards to display to users ============================
            // Create a Div that holds the li that would be crated and the delete button
            const newAdDiv = document.createElement("div");
            newAdDiv.classList.add("new_ad");

            // Create Li; it is the text area of the information card that appears on submit of the form
            const adInfo = document.createElement("li");
            adInfo.innerHTML = "Contact Name: " + sessionStorage.name + " <br> Contact Number: " + sessionStorage.contact+ " <br> Contact Address: " + sessionStorage.address+ " <br> Information: " + sessionStorage.text+ " <br>";
            adInfo.classList.add("new_ad_info");

            // Create trash Button to delete the information card
            const trashButton = document.createElement('button');
            trashButton.innerHTML = "<i class='fas fa-trash'></i>"
            trashButton.classList.add("new_trash_button");


            // Append to  empty UL List
            newAdDiv.appendChild(adInfo);
            newAdDiv.appendChild(trashButton);
            adList.appendChild(newAdDiv);

        }
    }
}


