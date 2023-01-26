console.log('loaded')

document.getElementById('copyButton').addEventListener('click', copyDivToClipboard)

function copyDivToClipboard() {
    console.log('copied')
    var range = document.createRange();
    range.selectNode(document.getElementById("codeStore"));
    window.getSelection().removeAllRanges(); 
    window.getSelection().addRange(range); 
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
   }