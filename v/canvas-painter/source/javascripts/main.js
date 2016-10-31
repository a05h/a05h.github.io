//init

var canvas = document.getElementById('canvas');

var buttonClear = document.getElementById('button-clear');
buttonClear.addEventListener('click', clearCanvas, false);

var paletteWhite = document.getElementById('palette-white');
paletteWhite.addEventListener('click', setColorWhite, false);
var paletteRed = document.getElementById('palette-red');
paletteRed.addEventListener('click', setColorRed, false);
var paletteBlue = document.getElementById('palette-blue');
paletteBlue.addEventListener('click', setColorBlue, false);
var paletteGreen = document.getElementById('palette-green');
paletteGreen.addEventListener('click', setColorGreen, false);

var primaryColor = document.getElementById('primary-color');
primaryColor.addEventListener('click', setPrimaryColor, false);
var secondaryColor = document.getElementById('secondary-color');
secondaryColor.addEventListener('click', setSecondaryColor, false);

var brushWidthContainer = document.getElementById('brush-width-container');
brushWidthContainer.addEventListener('click', setBrushSize, false);
var brushWidthElement = document.getElementById('brush-width-element');

var eraserWidthContainer = document.getElementById('eraser-width-container');
eraserWidthContainer.addEventListener('click', setEraserSize, false);
var eraserWidthElement = document.getElementById('eraser-width-element');

var brush = canvas.getContext('2d');
var eraser = canvas.getContext('2d');

var canvasContainer = document.getElementById('canvas-container');
var paintStyle = getComputedStyle(canvasContainer);
canvas.width = parseInt(paintStyle.getPropertyValue('width'));
canvas.height = parseInt(paintStyle.getPropertyValue('height'));

//draw events

var mouse = {x: 0, y: 0};
var onPaint = function() {
    brush.lineTo(mouse.x, mouse.y);
    brush.stroke();
};

canvas.addEventListener('mousemove', function(e) {
  mouse.x = e.pageX - this.offsetLeft;
  mouse.y = e.pageY - this.offsetTop;
}, false);

canvas.addEventListener('mousedown', function(e) {
    brush.beginPath();
    brush.moveTo(mouse.x, mouse.y);
    canvas.addEventListener('mousemove', onPaint, false);
}, false);

canvas.addEventListener('mouseup', function() {
    canvas.removeEventListener('mousemove', onPaint, false);
}, false);

function resetArea() {
  canvas.removeEventListener('mousemove', onPaint, false);
};

//basic values

brush.lineWidth = 5;
brush.lineJoin = 'round';
brush.lineCap = 'round';
brush.strokeStyle = '#141414';

//clear

function clearCanvas() {
  brush.clearRect(0, 0, canvas.width, canvas.height);
};

//brush size

function setBrushSize(clickArea) {
  //draw control element
  var width = window.getComputedStyle(brushWidthContainer).getPropertyValue('width'); //100px
  width = parseFloat(width.substr(null)); //100
  brushWidthElement.style.width = ((clickArea.pageX - brushWidthContainer.offsetLeft) / width) * 100 + "%";
  //set brush value
  if (clickArea.pageX >= 742) {
    var thisClick = (clickArea.pageX - 742) / 5;
  } else if (clickArea.pageX >= 83 && clickArea.pageX < 741) {
    var thisClick = (clickArea.pageX - 83) / 5;
  } else {
    var thisClick = (clickArea.pageX - 22) / 5;
  };
  brush.lineWidth = thisClick;
};

function setEraserSize(clickArea) {
  //draw control element
  var width = window.getComputedStyle(eraserWidthContainer).getPropertyValue('width'); //100px
  width = parseFloat(width.substr(null)); //100
  eraserWidthElement.style.width = ((clickArea.pageX - eraserWidthContainer.offsetLeft) / width) * 100 + "%";
};

//palette

function defaultPaletteChoice() {
  paletteWhite.style.borderRadius = '5px';
  paletteRed.style.borderRadius = '5px';
  paletteBlue.style.borderRadius = '5px';
  paletteGreen.style.borderRadius = '5px';
};

function setColorWhite() {
  brush.strokeStyle = '#F6F6F6';
  defaultPaletteChoice();
  paletteWhite.style.borderRadius = '20px';
};

function setColorRed() {
  brush.strokeStyle = '#E61932';
  defaultPaletteChoice();
  paletteRed.style.borderRadius = '20px';
};

function setColorBlue() {
  brush.strokeStyle = '#565BCF';
  defaultPaletteChoice();
  paletteBlue.style.borderRadius = '20px';
};

function setColorGreen() {
  brush.strokeStyle = '#6BB438';
  defaultPaletteChoice();
  paletteGreen.style.borderRadius = '20px';
};

//colorpicker

function setPrimaryColor() {

};

function setSecondaryColor() {

};
