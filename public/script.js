//키보드이벤트
var ctrl = false;
var modal = false;
document.addEventListener('keydown',function(e) {
  const keyCode = e.keyCode;
  // console.log(keyCode);
  if(keyCode == '27' && modal == true) {
    modal = false;
    modal_vanish();
  }
  if(keyCode == '13') {
    if(modal == true) {
      var auth = new XMLHttpRequest();
      var p = { o : document.getElementById('pwd').value};
      auth.addEventListener("load",function() {
        if(auth.status == 200) {
          location.href = '/edit';
        }
      });
      auth.open("POST","/auth");
      auth.setRequestHeader("Content-Type", "application/json");
      auth.send(JSON.stringify(p));
      modal_vanish();
    }
  }
  if(keyCode == '17') {
    ctrl = true;
  }
  if(keyCode == '81') {
    if(ctrl == true && modal == false) {
      modal_show();
      ctrl = false;
      modal = true;
    }
  }
});
document.addEventListener('keyup',function(e) {
  const keyCode = e.keyCode;
  if(keyCode == '17') {
    ctrl = false;
  }
});
//키보드이벤트
function modal_vanish() {
modal = false;
document.body.removeChild(document.querySelector('.m'));
}
function modal_show() {
modal = true;
document.body.innerHTML += `
<div class="m">
  <div class="content">
    <input type="password" id="pwd">
  </div>
</div>
`;
document.getElementById('pwd').focus();
}
