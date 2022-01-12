var count = 0;

// TODO: Add a comment describing the functionality of the following document.querySelector() methods -- pullig in  elements from the html and assigning them as variables:
var incrementEl = document.querySelector('#increment');
var decrementEl = document.querySelector('#decrement');
var countEl = document.querySelector('#count');

// TODO: Add a comment describing the functionality of the following code -- sets the initial count:
function setCounterText() {
  countEl.textContent = count;
}
// TODO: Add a comment describing the functionality of the following event listener -- increasing the number by 1 with a click:
incrementEl.addEventListener('click', function() {
  count++;
  setCounterText();
});

// TODO: Add a comment describing the functionality of the following event listener -- decreasing the number by 1 until it hits 0 with a click:
decrementEl.addEventListener('click', function() {
  // Action will fire if count is greater than  0
  if (count > 0) {
    count--;
    setCounterText();
  }
});
