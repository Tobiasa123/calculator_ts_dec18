"use strict";
console.log("TEST");
let firstInput = document.querySelector("#first-input");
let secondInput = document.querySelector("#second-input");
let button = document.querySelector(".button");
let screens = document.querySelector(".screens");
//använd value
function addNums() {
    button.addEventListener("click", () => {
        console.log("clicked button..");
        const firstValue = parseFloat(firstInput.value);
        const secondValue = parseFloat(secondInput.value);
        //kolla om inte är tom
        if (!isNaN(firstValue) && !isNaN(secondValue)) {
            const result = firstValue + secondValue;
            screens.textContent = result.toFixed(2);
        }
        else {
            screens.textContent = "00.00";
        }
    });
}
addNums();
