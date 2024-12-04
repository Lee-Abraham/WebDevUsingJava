/*jshint esversion: 6 */
/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let cost = 0;
let selected = "full";

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
const dayButtons = document.querySelectorAll('.day-selector > li');

dayButtons.forEach(dayButton => {
    dayButton.addEventListener('click', (e) => {
        dayButtons.forEach(dayButton => {
            dayButton.classList.remove('clicked');
        });
        e.target.classList.add('clicked');
    });
});


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

const ClearButton = document.getElementById("clear-button"); 
ClearButton.addEventListener('click', () => {
const days = document.querySelectorAll(".day-selector .blue-hover");
let calculatedCost = 0;

function clearDays()    {
    days.forEach(day => {
        day.classList.remove('clicked');
    });

    calculatedCost = 0;

}
ClearButton.addEventListener('click', clearDays);
});


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
const halfs = document.getElementById("half");
halfs.addEventListener('click', () => {
    e.target.classList.add("clicked");
    fulls.classList.remove("clicked");
});



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
const fulls = document.getElementById("full");
fulls.addEventListener('click', () => {
    e.target.classList.add("clicked");
    halfs.classList.remove("clicked");
});




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
const money = document.getElementById("calculated-cost");
halfs.addEventListener('click', () => {
    money.innerHTML = "20";
});
fulls.addEventListener("click", () => {
    money.innerHTML = "35";
});


