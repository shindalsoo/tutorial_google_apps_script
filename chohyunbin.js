/* 4시간동안 머리 쥐어뜯다가 만든 결과물이니까 제발 따라하지 마라 노트북 날려버린다 */
function onOpen(){
    var ui = SpreadsheetApp.getUi();
    ui.createMenu('지오유')
      .addItem('본 문서를 전자결재로 상신','aaa')
      .addSeparator()
      .addSubMenu(ui.createMenu('바로가기')
        .addItem('그룹웨어로 이동','openZioyou')
        )
      .addToUi();
  }
    /* 4시간동안 머리 쥐어뜯다가 만든 결과물이니까 제발 따라하지 마라 노트북 날려버린다 */
  function aaa(){
    alert('aaaaaaa');
  }
    /* 4시간동안 머리 쥐어뜯다가 만든 결과물이니까 제발 따라하지 마라 노트북 날려버린다 */
  function openZioyou(){
    let name = 'https://zioyoucs.com/';
    let url = 'https://zioyoucs.com/';
    showZioyou(name,url);
  }
    /* 4시간동안 머리 쥐어뜯다가 만든 결과물이니까 제발 따라하지 마라 노트북 날려버린다 */
  function showZioyou(name,url){
    let html = '<html><body><a href="'+url+'" target="blank" onclick="google.script.host.close()">'+name+'</a></body></html>';
    let ui = HtmlService.createHtmlOutput(html);
    ui.setHeight(50);
    SpreadsheetApp.getUi().showModelessDialog(ui,"지오유 바로가기");
  }
  /* 4시간동안 머리 쥐어뜯다가 만든 결과물이니까 제발 따라하지 마라 노트북 날려버린다 */

  