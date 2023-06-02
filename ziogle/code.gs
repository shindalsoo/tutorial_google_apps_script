const onOpen = () =>{
  let ui = SpreadsheetApp.getUi();
  ui.createMenu(`지오유`)
    .addItem(`본 문서를 전자결재로 상신`, `OpenZioYou`)
    .addSeparator()
    .addSubMenu(ui.createMenu(`바로가기`)
      .addItem(`그룹웨어로 이동`, `OpenTab`)
    )
    .addToUi();
};

// OpenZioYou : 전자결재 상신
const OpenZioYou = () =>{
  let htmlOutput = HtmlService.createHtmlOutputFromFile(`index.html`).setHeight(400);
  
  SpreadsheetApp.getUi().showModalDialog(htmlOutput,`전자결재 상신`);
};

// OpenTab : 새 탭으로 링크 오픈
const OpenTab = () =>{
  let url = `http://www.zioyou.com`;
  
  //HTML 파일을 만듦
  let html = "<script>window.open('" + url + "');google.script.host.close();</script>";

  //HtmlOutput 객체를 만듦
  let userInterface = HtmlService.createHtmlOutput(html);

  //웹 페이지가 열리는 UI를 띄어줌  
  SpreadsheetApp.getUi().showModalDialog(userInterface, `로딩 중입니다.`);
};

//A1 셀에 텍스트 출력
const displayText = () =>{
  let sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  let cell = sheet.getRange(`A1`);

  cell.setValue(`성공적으로 상신되었습니다.`);
};