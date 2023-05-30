function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('지오유')
      .addItem('본 문서를 전자결재로 상신','aaa')
      .addSeparator()
      .addSubMenu(ui.createMenu('바로가기')
        .addItem('그룹웨어로 이동','bbb')
      )
      .addToUi();
}
function aaa() {
  alert('aaaaaa');
}
function bbb() {
  //지오유로 이동시키기
  var urls = ['https://www.zioyou.com/'];
  openTabs(urls);
}

function openTabs(urls) {
  if(!Array.isArray(urls))
    urls = [urls];
  
  var html = 
      "<script>" + 
        urls.map(function(url) {
          return "window.open('" + url + "');";
        })
      .join('') +
        "google.script.host.close();" + 
          "</script>"; 
  
  var userInterface = HtmlService.createHtmlOutput(html)
  .setWidth( 90 )
  .setHeight( 1 );
  
  SpreadsheetApp.getUi().showModalDialog(userInterface, '로딩 중입니다.');
}
