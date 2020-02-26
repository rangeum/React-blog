Date.prototype.format = function (f) {
    if (!this.valueOf()) return " ";
    var weekKorName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
    var weekKorShortName = ["일", "월", "화", "수", "목", "금", "토"];
    var weekEngName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var weekEngShortName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var d = this;
    return f.replace(/(yyyy|yy|MM|dd|KS|KL|ES|EL|HH|hh|mm|ss|a\/p)/gi, function ($1) {
        switch ($1) {
            case "yyyy": return d.getFullYear(); // 년 (4자리)
            case "yy": return (d.getFullYear() % 1000).zf(2); // 년 (2자리)
            case "MM": return (d.getMonth() + 1).zf(2); // 월 (2자리)
            case "dd": return d.getDate().zf(2); // 일 (2자리)
            case "KS": return weekKorShortName[d.getDay()]; // 요일 (짧은 한글)
            case "KL": return weekKorName[d.getDay()]; // 요일 (긴 한글)
            case "ES": return weekEngShortName[d.getDay()]; // 요일 (짧은 영어)
            case "EL": return weekEngName[d.getDay()]; // 요일 (긴 영어)
            case "HH": return d.getHours().zf(2); // 시간 (24시간 기준, 2자리)
            case "hh": return ((h = d.getHours() % 12) ? h : 12).zf(2); // 시간 (12시간 기준, 2자리)
            case "mm": return d.getMinutes().zf(2); // 분 (2자리)
            case "ss": return d.getSeconds().zf(2); // 초 (2자리)
            case "a/p": return d.getHours() < 12 ? "오전" : "오후"; // 오전/오후 구분
            default: return $1;
        }
    });
};
String.prototype.string = function (len) { var s = '', i = 0; while (i++ < len) { s += this; } return s; };
String.prototype.zf = function (len) { return "0".string(len - this.length) + this; };
Number.prototype.zf = function (len) { return this.toString().zf(len); };
window.onload=function(){
  //
  document.getElementById('btn_write').addEventListener('click',function(e) {
  var req = new XMLHttpRequest();
  req.addEventListener('load',function() {
    if(req.status==200) {
      var APP_SERVER = req.responseText;
      var Contents = {
        Title : document.getElementsByClassName('title_input')[0].value,
        Content : editor.codemirror.getValue(),
        Author : 'Kim Duri',
        Date : new Date().format("yyyy.MM.dd"),
        Time : new Date().format("HH:mm:ss")
      };
      var send_ctts = new XMLHttpRequest();
      send_ctts.addEventListener("load",function() {
        if(send_ctts.status == 200) {
          location.href='/';
        }
      });
      send_ctts.open("POST",`https://${APP_SERVER}/push`);
      send_ctts.setRequestHeader("Content-Type","application/json");
      send_ctts.send(JSON.stringify(Contents));
      console.log(APP_SERVER, Contents);
    } else console.log('Failed');
  });
  req.open("POST","/getServ");
  req.setRequestHeader("Content-Type","text/plain");
  req.send('');
  },false);
  //
  var editor = new Editor({
  element: document.getElementById("editor")
  });
  editor.render();
  document.addEventListener('keydown',function(e) {
    const keyCode = e.keyCode;
    if(keyCode == '27' && modal == true) {
      modal = false;
      modal_vanish();
    }
    if(keyCode == '13') {
      if(ctrl == true) {
        //ctrl + Enter
      }
    }
    if(keyCode == '17') {
      ctrl = true;
    }
  });
  // document.getElementById('btn_write').addEventListener('click',function(e) {
  //   var Contents = {
  //     Title : document.getElementsByClassName('title_input')[0].value,
  //     Content : editor.codemirror.getValue(),
  //     Author : 'Kim Duri',
  //     Date : new Date().format("yyyy.MM.dd"),
  //     Time : new Date().format("hh:mm:ss")
  //   };
  //   var send_ctts = new XMLHttpRequest();
  //   send_ctts.addEventListener("load",function() {
  //     if(send_ctts.status == 200) {
  //       location.href='/';
  //     }
  //   });
  //   send_ctts.open("POST",`api.${APP_SERVER}/getList`);
  //   send_ctts.setRequestHeader("Content-Type","application/json");
  //   send_ctts.send(JSON.stringify(Contents));
  // },false);
    document.addEventListener('keyup',function(e) {
      const keyCode = e.keyCode;
      if(keyCode == '17') {
        ctrl = false;
      }
    });
}
function getServ() {
  var req = new XMLHttpRequest();
  req.addEventListener('load',function() {
    if(req.status==200) {
      var APP_SERVER = req.responseText;
      var Contents = {
        Title : document.getElementsByClassName('title_input')[0].value,
        Content : editor.codemirror.getValue(),
        Author : 'Kim Duri',
        Date : new Date().format("yyyy.MM.dd"),
        Time : new Date().format("hh:mm:ss")
      };
      // var send_ctts = new XMLHttpRequest();
      // send_ctts.addEventListener("load",function() {
      //   if(send_ctts.status == 200) {
      //     location.href='/';
      //   }
      // });
      // send_ctts.open("POST",`api.${APP_SERVER}/getList`);
      // send_ctts.setRequestHeader("Content-Type","application/json");
      // send_ctts.send(JSON.stringify(Contents));
      console.log(APP_SERVER, Contents);
    } else console.log('Failed');
  });
  req.open("POST","/getServ");
  req.setRequestHeader("Content-Type","text/plain");
  req.send('');
}
