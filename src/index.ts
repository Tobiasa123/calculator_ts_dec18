console.log("TEST")

let firstInput = document.querySelector("#first-input") as HTMLInputElement
let secondInput = document.querySelector("#second-input") as HTMLInputElement
let button = document.querySelector(".button") as HTMLElement
let screens = document.querySelector(".screens") as HTMLElement

//använd value
function addNums(): void{
    button.addEventListener("click", () => {
        console.log("clicked button..")
        const firstValue = parseFloat(firstInput.value)
        const secondValue = parseFloat(secondInput.value)

        //kolla om inte är tom
        if (!isNaN(firstValue) && !isNaN(secondValue)) {
            const result = firstValue + secondValue
            screens.textContent = result.toFixed(2)   
        } else {
            screens.textContent = "00.00"
        }
    })
}
addNums();