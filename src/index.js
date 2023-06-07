import analyzer from './analyzer.js';

const textArea = document.querySelector('textArea[name="user-input"]');
const btnReset = document.getElementById('reset-button');
const req1 = document.querySelector('.list1');
const req2 = document.querySelector('.list2');
const req3 = document.querySelector('.list3');
const req4 = document.querySelector('.list4');
const req5 = document.querySelector('.list5');
const req6 = document.querySelector('.list6');

textArea.addEventListener('keyup', () => {
  req1.innerHTML = analyzer.getWordCount(textArea.value);
  req2.innerHTML = analyzer.getCharacterCount(textArea.value);
  req3.innerHTML = analyzer.getCharacterCountExcludingSpaces(textArea.value);
  req4.innerHTML = analyzer.getNumberCount(textArea.value);
  req5.innerHTML = analyzer.getNumberSum(textArea.value);
  req6.innerHTML = analyzer.getAverageWordLength(textArea.value);
});

btnReset.addEventListener('click', () => {
  textArea.value = '';
  req1.innerHTML = ''
  req2.innerHTML = ''
  req3.innerHTML = ''
  req4.innerHTML = ''
  req5.innerHTML = ''
  req6.innerHTML = ''
});