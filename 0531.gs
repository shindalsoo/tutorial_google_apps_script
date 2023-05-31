function onOpen() {
  let ui = SpreadsheetApp.getUi();
  ui.createMenu('지오유')
    .addItem('본 문서를 전자결재로 상신', 'LoadDocs')
    .addSeparator()
    .addSubMenu(ui.createMenu('바로가기')
      .addItem('그룹웨어로 이동', 'OpenZioyou')
    )
    .addToUi();
}

function LoadDocs() {
  var url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSk92NUZKRcmXlze23plrptK9zZBPdlq6nPBYkkihPgOf9fdBYeYmgLy6eX0eJEgbP9xBQJ8m-hsMEW/pubhtml?widget=true&amp;headers=false';
  
  var html = '<iframe height="800px" width="800px" src="'+url+'"></iframe>';
  var ui = HtmlService.createHtmlOutput(html)
      .setWidth(800)
      .setHeight(800);
  SpreadsheetApp.getUi().showModalDialog(ui, '팝업으로 전자결제를 상신합니다.');
}

function OpenZioyou() {
  // 열고자 하는 링크
  let url = "http://www.zioyou.com";

  let html = "<script>window.open('" + url + "','_blank');</script>";
  let userInterface = HtmlService.createHtmlOutput(html);

  SpreadsheetApp.getUi().showModalDialog(userInterface, '지오유 홈페이지로 이동합니다.');
}
