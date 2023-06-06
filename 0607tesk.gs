function onOpen(){
  let ui = SpreadsheetApp.getUi();
  ui.createMenu(`지오유`)
    .addItem(`본 문서를 전자결재로 상신`, `OpenZioYou`)
    .addSeparator()
    .addSubMenu(ui.createMenu(`바로가기`)
      .addItem(`그룹웨어로 이동`, `goHomePage`)
    )
    .addToUi();
};


function OpenZioYou() {
  let htmlOutput = HtmlService.createHtmlOutputFromFile(`index.html`).setWidth(1200).setHeight(700);
  SpreadsheetApp.getUi().showModalDialog(htmlOutput,`전자결재 상신`);

};

function goHomePage(){
  let url = `http://www.zioyou.com`;
  let html = "<script>window.open('" + url + "');google.script.host.close();</script>";
  let userInterface = HtmlService.createHtmlOutput(html);


  SpreadsheetApp.getUi().showModalDialog(userInterface, `지오유 홈페이지로 이동 중...`);
};


function sangsinBtn(){
  let sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  let cell = sheet.getRange(`A1`);
  let newDate = Utilities.formatDate(new Date(),"GMT+09:00", "yyyy/MM/dd hh:mm:ss");

  cell.setValue(`상신완료. ${newDate}`);
};