
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import css from 'highlight.js/lib/languages/css';
import scss from 'highlight.js/lib/languages/scss';
import html from 'highlight.js/lib/languages/xml';
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('css', css);
hljs.registerLanguage('scss', scss);
hljs.registerLanguage('html', html);
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightBlock(block);
    });
});


var FontFaceObserver = require('FontFaceObserver');
var font = new FontFaceObserver('Noto Sans KR');

font.load().then(function () {
    document.body.className += "font-loaded";
    console.log('Noto Sans KR has loaded');
  }).catch(function () {
    console.log('Noto Sans KR failed to load.');
  });

import '../../css/fontawesome-all.css';
import '../../scss/style.scss';
