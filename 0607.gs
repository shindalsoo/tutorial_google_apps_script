function myFunction() {
  
}

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('지오유')
    .addItem('본 문서를 전자결재로 상신', 'LoadDocs')
    .addSeparator()
    .addSubMenu(ui.createMenu('바로가기')
      .addItem('그룹웨어로 이동', 'OpenZioyou')
    )
    .addToUi();
}

function LoadDocs() {
  var htmlOutput = HtmlService.createHtmlOutputFromFile('index.html').setHeight(400);
  SpreadsheetApp.getUi().showModelessDialog(htmlOutput, '전자결제 상신');
}

function OpenZioyou() {
  // 열고자 하는 링크
  let url = "http://www.zioyou.com";

  let html = "<script>window.open('" + url + "','_blank');</script>";
  let userInterface = HtmlService.createHtmlOutput(html);

  SpreadsheetApp.getUi().showModalDialog(userInterface, '지오유 홈페이지로 이동합니다.');
}

function processDocx() {
  let sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  let cell = sheet.getRange('A1');
  cell.setValue('성공하셨습니다.');
}
