// script.js
function showNotePage() {
  document.getElementById('notePage').style.display = 'block';
}

function addText() {
  const noteText = document.getElementById('noteText').value;
  const textElement = document.createElement('p');
  textElement.textContent = noteText;

  // Lấy font, cỡ chữ và kiểu chữ hiện tại
  const font = document.getElementById('fontSelector').value;
  const fontSize = document.getElementById('fontSizeSelector').value;
  const fontStyle = document.getElementById('fontStyleSelector').value;

  // Áp dụng các style vào văn bản mới
  textElement.style.fontFamily = font;
  textElement.style.fontSize = fontSize;
  textElement.style.fontStyle = fontStyle;
  
  // Thêm văn bản vào ghi chú
  document.getElementById('noteContainer').appendChild(textElement);

  // Reset lại textarea
  document.getElementById('noteText').value = '';
}

function changeFont() {
  const font = document.getElementById('fontSelector').value;
  document.getElementById('noteText').style.fontFamily = font;
}

function changeFontSize() {
  const fontSize = document.getElementById('fontSizeSelector').value;
  document.getElementById('noteText').style.fontSize = fontSize;
}

function changeFontStyle() {
  const fontStyle = document.getElementById('fontStyleSelector').value;
  document.getElementById('noteText').style.fontStyle = fontStyle;
}

function addImage() {
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = 'image/*';
  fileInput.onchange = function() {
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
      const img = document.createElement('img');
      img.src = e.target.result;
      img.style.width = '100%';
      document.getElementById('noteContainer').appendChild(img);
    };
    reader.readAsDataURL(file);
  };
  fileInput.click();
}

function addAudio() {
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = 'audio/*';
  fileInput.onchange = function() {
    const file = fileInput.files[0];
    const audio = document.createElement('audio');
    audio.controls = true;
    audio.src = URL.createObjectURL(file);
    document.getElementById('noteContainer').appendChild(audio);
  };
  fileInput.click();
}

function addVideo() {
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = 'video/*';
  fileInput.onchange = function() {
    const file = fileInput.files[0];
    const video = document.createElement('video');
    video.controls = true;
    video.src = URL.createObjectURL(file);
    document.getElementById('noteContainer').appendChild(video);
  };
  fileInput.click();
}

function addSticker() {
  const stickers = ['sticker1.png', 'sticker2.png', 'sticker3.png']; // Thêm ảnh sticker vào đây
  const sticker = document.createElement('img');
  sticker.src = stickers[Math.floor(Math.random() * stickers.length)];
  sticker.style.width = '50px';
  sticker.style.margin = '10px';
  document.getElementById('noteContainer').appendChild(sticker);
  }
