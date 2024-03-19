const userInput = document.getElementById('text-input');
const checkPalindromeBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

const checkForPalindrome = (input) => {
  const originalInput = input; 

  if (input === '') {
    alert('Please input a value');
    return;
  }

  resultDiv.replaceChildren();

  const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
  let resultMsg = `<strong>${originalInput}</strong> ${
    lowerCaseStr === [...lowerCaseStr].reverse().join('') ? 'is' : 'is not'
  } a palindrome.`;

  const paraEl = document.createElement('p');
  paraEl.className = 'user-input';
  paraEl.innerHTML = resultMsg;
  resultDiv.appendChild(paraEl);
  };

checkPalindromeBtn.addEventListener('click', () => {
  checkForPalindrome(userInput.value);
  userInput.value = '';
});

userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault
        checkPalindromeBtn.click()
    }
})
