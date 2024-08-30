function modifyText(text, action) {

  return text.split(/\b/)
    .map(word => {
      if (/^[a-z]+$/i.test(word)) {
        return word.charAt(0).toUpperCase() + word.slice(1) + "'s";
      } else if (/\W/.test(word)) {
        return word.split('').map(char => /\W/.test(char) ? ` ${char} ` : char).join('');
      }
      return word;
    })
    .join('')
    .replace(/\s+/g, ' ')
    .trim();

}

const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');

document.getElementById('translate').addEventListener('click', () => {
  outputText.textContent = modifyText(inputText.value);
});
