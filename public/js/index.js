
window.onload = function() {
  //클릭이벤트

  //아이콘 클릭
  var title_b = document.querySelector('header .title>h1'); //blog
  title_b.onclick = function() {location.href="/" }
  //클릭이벤트 끝
}
window.addEventListener('DOMContentLoaded', function()
{
  //페이지 로드
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load",function() {
    if(oReq.status != 200) {
      document.querySelector('.main_article').innerHTML += oReq.status;
    }
    else {
    var jsonobj = JSON.parse(this.responseText);
      for(var i in jsonobj) {
      var post = ``;
        if(i < 1) {
          if(jsonobj[i].pic == 'Y') {
            post +=
              `<div class="main_pic" onclick="location.href='/`+jsonobj[i].content+'-'+jsonobj[i].value+`'">
              <img src="`+jsonobj[i].thumbnail+`">
              </div>`;
            }
            post +=
            `<div class="main_text">
              <div class="main_text_head" onclick="location.href='/`+jsonobj[i].content+'-'+jsonobj[i].value+`'">
                `+jsonobj[i].subject+`
              </div>
                <div class="main_text_author">
                  <div class="author_name">

                  </div>
                  <div class="author_date">
                  `+jsonobj[i].signdate+`
                  </div>
                </div>
              </div>`;
              document.querySelector('.main_article').innerHTML += post;
        }
        else if((i < 3) && (i >= 1)) {
          if(i == 1) {
            var line = `
              <p> Recent </p>
              <hr color= "#f3f3f3">`;
            document.getElementsByClassName('recent_line')[0].innerHTML += line;
          }
          post +=`
          <div class="sub_article">`;
          if(jsonobj[i].pic == 'Y') {
            post +=`
              <div class="sub_pic">
                <img src="`+jsonobj[i].thumbnail+`" onclick="location.href='/`+jsonobj[i].content+'-'+jsonobj[i].value+`'">
              </div>`;
            }
            post +=`
              <div class="sub_text">
                <div class="sub_text_head" onclick="location.href='/`+jsonobj[i].content+'-'+jsonobj[i].value+`'">
                  `+jsonobj[i].subject+`
                </div>
                <div class="sub_text_desc">
                </div>
                <div class="sub_text_author">
                  <div class="author_name">

                  </div>
                  <div class="author_date">
                    `+jsonobj[i].signdate+`
                  </div>
                </div>
              </div>
            </div>`;
            document.querySelector('.sub_wrap').innerHTML += post;
        }
        else if(i>= 3) {
          if(i == 3) {
            var line = `
              <p> All </p>
              <hr color= "#f3f3f3">`;
            document.getElementsByClassName('recent_line')[1].innerHTML += line;
          }
          post +=`
          <div class="all_article">`;
          if(jsonobj[i].pic == 'Y') {
            post +=`
              <div class="all_pic">
                <img src="`+jsonobj[i].thumbnail+`" onclick="location.href='/`+jsonobj[i].content+'-'+jsonobj[i].value+`'">
              </div>`;
            }
            post +=`
              <div class="all_text">
                <div class="all_text_head" onclick="location.href='/`+jsonobj[i].content+'-'+jsonobj[i].value+`'">
                  `+jsonobj[i].subject+`
                </div>
                <div class="all_text_desc">
                </div>
                <div class="all_text_author">
                  <div class="author_name">

                  </div>
                  <div class="author_date">
                    `+jsonobj[i].signdate+`
                  </div>
                </div>
              </div>
            </div>`;
            document.querySelector('.all_wrap').innerHTML += post;
        }
        }
      }
    });
    // console.log(jsonobj.length);
  oReq.open("GET","/api?limit=12");
  oReq.send();
  //페이지 로드 끝
                                                            //LATEST
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
            location.href = '/api';
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
});
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
}
