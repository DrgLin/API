function getData(e) {
  //console.log(e);  先確認連線是否正常
  //console.log(e.result.records[0].Zone); 測試陣列
  var KAG = e.result.records; // 取得陣列 並宣告變數KAG
  //  console.log(KAG); 測試變數是否正常
  var ADarea = document.querySelector('.selectlist'); //取代傳統寫法
  var totalLIST = document.querySelector('.total'); //讀取要擺放的位置
  var btLIST = document.querySelector('.btlist');


  /////////組一個不重複的選單 STAR /////////
  var newARRY = [];
  for (var i = 0; i < KAG.length; i++) {
    newARRY.push(KAG[i].Zone);
  }
  //console.log(newARRY);

  newARRY[0] = '--請選擇行政區域--';
  //****console.log(newARRY); // 陣列確認後發現有重複值

  var result = Array.from(new Set(newARRY));
  // **獲取不重複的內容** --> //console.log(result);   自動判斷陣列內有無重複值  //result 不重複
  // **不重複參考路徑 --> https://guahsu.io/2017/06/JavaScript-Duplicates-Array/

  // 網頁畫面塞入選單
  var select = document.querySelector('.selectlist');
  str = "";

  for (var i = 0; i < result.length; i++) {

    str += '<option>' + result[i] + '</option>';
  }
  select.innerHTML = str;

  // console.log('total: '+result + '總數: '+result.length );
  /////////組一個不重複的選單 EDN /////////


  // 從下拉選單更新資料
  function area(e) {
    var titZone = document.querySelector('.tit');


    str = "";
    for (var i = 0; i < KAG.length; i++) {
      if (e.target.value == KAG[i].Zone) {

        str += '<div class="col-xs-12 col-sm-6"><div class="item"><div class="thumbnail"><div class="pic"><img src="' +
          KAG[i].Picture1 + '" alt="' + KAG[i].Name +
          '" class="img-responsive center-block"></div><h3>' +
          KAG[i].Name + '</h3><h4>' + KAG[i].Zone +
          '</h4><div class="caption"><p><time>' + KAG[i].Opentime +
          '</time></p><p>' + KAG[i].Add + '<button type="button" class = "mybtn btn-primary"	data-toggle="modal" data-target="#' +
          KAG[i].id +
          '">more </button></p><p><span itemprop="telephone"><a href="tel:' + KAG[i].Tel +
          '">' + KAG[i].Tel + '</a></span></p><p class="Ticke_tinfo">' +
          KAG[i].Ticketinfo + '</p></div></div></div></div><div class = "modal fade" id="' +
          KAG[i].id +
          '" tabindex="-1"role="dialog" aria-labelledby="exampleModalLabel" aria - hidden="true"><div class="modal-dialog" role="document"> <div class="modal-content">' +
          '<div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">' + KAG[i].Add +
          '</h5></div> <div class="modal-body">' + KAG[i].Toldescribe + '</div><div class = "modal-footer" ><button type="button" class="btn btn-secondary" data-dismiss="modal" > Close </button></div> </div> </div> </div>'



        titZone.textContent = KAG[i].Zone;
      }
    }
    totalLIST.innerHTML = str;

  }

  // 從li選單更新資料
  function area2(e) {
    var titZone = document.querySelector('.tit');
    str = "";
    if (e.target.nodeName !== 'LI') {
      return
    }
    for (var i = 0; i < KAG.length; i++) {
      if (e.target.textContent == KAG[i].Zone) {

        str += '<div class="col-xs-12 col-sm-6"><div class="item"><div class="thumbnail"><div class="pic"><img src="' +
          KAG[i].Picture1 + '" alt="' + KAG[i].Name +
          '" class="img-responsive center-block"></div><h3>' +
          KAG[i].Name + '</h3><h4>' + KAG[i].Zone +
          '</h4><div class="caption"><p><time>' + KAG[i].Opentime +
          '</time></p><p>' + KAG[i].Add + '<button type="button" class = "mybtn btn-primary"	data-toggle="modal" data-target="#' +
          KAG[i].id +
          '">more </button></p><p><span itemprop="telephone"><a href="tel:' + KAG[i].Tel +
          '">' + KAG[i].Tel + '</a></span></p><p class="Ticke_tinfo">' +
          KAG[i].Ticketinfo + '</p></div></div></div></div><div class = "modal fade" id="' +
          KAG[i].id +
          '" tabindex="-1"role="dialog" aria-labelledby="exampleModalLabel" aria - hidden="true"><div class="modal-dialog" role="document"> <div class="modal-content">' +
          '<div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">' + KAG[i].Add +
          '</h5></div> <div class="modal-body">' + KAG[i].Toldescribe + '</div><div class = "modal-footer" ><button type="button" class="btn btn-secondary" data-dismiss="modal" > Close </button></div> </div> </div> </div>'



        titZone.textContent = KAG[i].Zone;
      }
    }
    totalLIST.innerHTML = str;
  }


  ADarea.addEventListener('click', area, false)
  btLIST.addEventListener('click', area2, false)


}