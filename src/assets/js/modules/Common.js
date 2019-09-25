var FontFaceObserver = require('FontFaceObserver');
var font = new FontFaceObserver('Noto Sans KR');

font.load().then(function () {
  console.log('Noto Sans KR has loaded');
  document.body.className += "font-loaded";
}).catch(function () {
  console.log('Noto Sans KR failed to load.');
});