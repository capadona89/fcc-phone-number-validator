const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsContainer = document.getElementById("results-div");

const regex = new RegExp('^(1\\s?)?(\\([0-9]{3}\\)|[0-9]{3})[\\s\\-]?[0-9]{3}[\\s\\-]?[0-9]{4}$');

const isValidNumber = input => {
  if (input === '') {
    alert('Please provide a phone number');
    return;
  }

  const paragraph = document.createElement('p');
  paragraph.className = 'results-text';
  regex.test(input) ? paragraph.style.color = '#096b2e' : paragraph.style.color = '#9a3719';
  paragraph.appendChild(
    document.createTextNode(`${regex.test(input) ? 'Valid' : 'Invalid'} US Number: ${input}`)
  );
  resultsContainer.appendChild(paragraph);
}

checkBtn.addEventListener("click", () => {
  isValidNumber(input.value);
  input.value = '';
});

input.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    isValidNumber(input.value);
    input.value = '';
  }
});

clearBtn.addEventListener("click", () => {
  resultsContainer.textContent = '';
})