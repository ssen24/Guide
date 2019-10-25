// deps for editor
require('codemirror/lib/codemirror.css'); // codemirror
require('tui-editor/dist/tui-editor.css'); // editor ui
require('tui-editor/dist/tui-editor-contents.css'); // editor content
require('highlight.js/styles/github.css'); // code block highlight

var Editor = require('tui-editor');

var editor = new Editor({
    el: document.querySelector('#editSection'),
    initialEditType: 'wysiwyg',
    previewStyle: 'vertical',
    height: '300px'
});


// var Viewer = require('tui-editor/dist/tui-editor-Viewer');

// var viewer = new Viewer({
//     el: document.querySelector('#viewerSection'),
//     height: '500px',
//     initialValue: '# content to be rendered'
// });

var formSubmitButton = document.querySelector("#form-submit");

formSubmitButton.addEventListener('click', function() {
    var contents = document.querySelector("#contents");

    //contents.value = editor.getMarkdown(); //markdown 저장
    contents.value = editor.getHtml(); //html 저장
    alert('게시물을 등록하였습니다.');
});
