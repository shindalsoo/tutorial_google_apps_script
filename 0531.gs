function myFunction() {
  
}
function onOpen(){
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('지오유')
    .addItem('본 문서를 전자결제로 상신','aaa')
    .addSeparator()
    .addSubMenu(ui.createMenu('바로가기')
      .addItem('그룹웨어로 이동','homepage')
    )
    .addToUi();
}

function homepage() {
  var link = 'http://www.zioyou.com';
  var htmlOutput = HtmlService.createHtmlOutput('<script>window.open("' + link + '");</script>');
  SpreadsheetApp.getUi().showModalDialog(htmlOutput, '홈페이지로 이동합니다'); 
}

function aaa() {
  SpreadsheetApp.getUi().alert('본 문서를 전자결제로 상신합니다.');
}