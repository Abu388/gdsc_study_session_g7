// Function to handle button click
function displayValue(event) {
    // Get the value of the clicked button
    const buttonValue = event.target.value;
  
    // Update the input field value with the button's value
    document.getElementById('displayInput').value = buttonValue;
  }
  
  // Create buttons dynamically
  const buttonValues = ['Button 1', 'Button 2', 'Button 3'];
  
  const buttonsContainer = document.getElementById('buttonsContainer');
  
  buttonValues.forEach(value => {
    const button = document.createElement('button');
    button.textContent = value;
    button.value = value;
    button.addEventListener('click', displayValue);
    buttonsContainer.appendChild(button);
  }); 