function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('지오유')
    .addItem('본 문서를 전자결재로 상신', 'openZioyou')
    .addSeparator()
    .addSubMenu(ui.createMenu('바로가기')
      .addItem('그룹웨어로 이동', 'goToZioyou')
    )
    .addToUi();
}

function openZioyou() {
  var htmlOutput = HtmlService.createHtmlOutputFromFile('index')
    .setWidth(600)
    .setHeight(500);
  SpreadsheetApp.getUi().showModalDialog(htmlOutput, '전자결제 상신');
}

function goToZioyou() {
  var url = 'http://www.zioyou.com';
  var html = '<script>window.open("' + url + '");google.script.host.close();</script>';
  var htmlOutput = HtmlService.createHtmlOutput(html);
  SpreadsheetApp.getUi().showModalDialog(htmlOutput, '그룹웨어로 이동');
}

function updateSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  sheet.getRange("A1").setValue("성공하였습니다.");
}
