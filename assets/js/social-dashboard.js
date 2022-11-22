// Get html element & selectors and assign them to variables 
const body = document.querySelector("body"); // checkbox
const checkbox = document.querySelector("input"); //input:checkbox
const switchBtn = document.querySelector(".switch"); //switch / Toggle button

// Run the toggle function after page loads
window.onload = darkBtnToggle(0);

// check if the "Enter" key has been pressed and click on the toggle switch to run the "darkBtnToggle()" function.
switchBtn.addEventListener("keypress", (event) => {
	if (event.key === "Enter") { checkbox.click(); }
})

/* 
    1. Below function to check if the dark mode button is clicked or not and set colour scheme accordingly.

    2. Timer function to change the colour scheme in accordiance with the css transition duration.
*/
function darkBtnToggle(n) {
    if(checkbox.checked){
        setTimeout(() => {
            body.classList.add("dark");
        }, n);
        
    } else {
        setTimeout(() => {
            body.classList.remove("dark");
        }, n);
    }
}
