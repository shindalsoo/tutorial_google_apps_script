function myFunction() {
  
}
function onOpen(){
  var ui = SpreadsheetApp.getUi();
  ui.createMenu("지오유")
    .addItem('본 문서를 전자결재로 상신', 'aaa')
    .addSeparator()
    .addSubMenu(ui.createMenu('바로가기')
      .addItem('그룹웨어로 이동','openURL')
    )
    .addToUi();
}

function aaa(){
  
}

function openURL() {
  var url = "http://www.zioyou.com";
  var htmlOutput = HtmlService.createHtmlOutput('<script>window.open("' + url + '");google.script.host.close();</script>');
  SpreadsheetApp.getUi().showModalDialog(htmlOutput, '지오유 홈페이지로 이동합니다.');
}