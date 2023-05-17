// Get the submit button element from the DOM
const submitButton = document.querySelector('.submit');

/* Listen for the submit button to be clicked then
call the product() function */
submitButton.addEventListener('click', product);

function product() {
  // Get the input elements from the DOM and their values
  const field1 = document.querySelector('.field1').value;
  const field2 = document.querySelector('.field2').value;
  const field3 = document.querySelector('.field3').value;

  // Do the math on the values in the input fields
  const result = field1 * field2 * field3;

  // Get the result field from the DOM
  let resultField = document.querySelector('.result');

  /* Set the result field to the value of result from
  line 15 above */
  resultField.value = result;
}