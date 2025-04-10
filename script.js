// script.js
function showNotePage() {
  document.getElementById('notePage').style.display = 'block';
}

function addText() {
  const noteText = document.getElementById('noteText').value;
  const textElement = document.createElement('p');
  textElement.textContent = noteText;
  textElement.style.fontFamily = document.getElementById('fontSelector').value;
  textElement.style.fontSize = document.getElementById('fontSizeSelector').value;
  textElement.style.fontStyle = document.getElementById('fontStyleSelector').value;
  document.getElementById('noteContainer').appendChild(textElement);
  document.getElementById
