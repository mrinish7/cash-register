const billAmount = document.querySelector ("#bill-amount");
const checkButton = document.querySelector ("#check-here");
const cashGiven = document.querySelector ("#cash-given");
const message = document.querySelector ("#error-message");
const availableNotes = [2000, 500, 200, 100, 50, 10, 1];
const noOfNotes = document.querySelectorAll(".no-of-notes");

checkButton.addEventListener("click", function validatebillandcashamount ()
{hideMessage();
    if (billAmount.value > 0) {
        if (cashGiven.value > billAmount.value) {
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        } else {
            showMessage("Do you wanna wash plates ?")
        }
     } else {
        showMessage("Invalid bill amount");
    }
});

function calculateChange(amountToBeReturned) {
    for ( let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(amountToBeReturned /  availableNotes [i]);
        amountToBeReturned %= availableNotes[i]; 
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function hideMessage() {
    message.style.display = "none";
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}
