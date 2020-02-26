downloadInnerHtml('test','text','.ejs');

function downloadInnerHtml(filename, mimeType, extension) {
  var elHtml = document.querySelector('section .main_text');
  var link = document.createElement('a');
  link.setAttribute('download', filename + extension);
  link.setAttribute('href', 'data:' + mimeType  +  ';charset=utf-8,' + encodeURIComponent(elHtml));
  link.click();
}
