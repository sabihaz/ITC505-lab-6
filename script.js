// Select the elements for the counter and buttons
const counterValue = document.getElementById('counterValue');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

// Initialize the counter
let counter = 0;

// Function to update the counter value
function updateCounter() {
    counterValue.textContent = counter;
}

// Event listener for the "Increase" button
incrementButton.addEventListener('click', function() {
    counter++;
    updateCounter();
});

// Event listener for the "Decrease" button
decrementButton.addEventListener('click', function() {
    counter--;
    updateCounter();
});
