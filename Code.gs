// 스프레드시트 메뉴를 생성하고 초기화할 때 호출되는 함수
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('지오유')
    .addItem('본 문서를 전자결재로 생산', 'sendDocument')
    .addSeparator()
    .addSubMenu(ui.createMenu('바로가기')
      .addItem('그룹웨이로 이동', 'openZioYou')
    )
    .addToUi();
}

// "본 문서를 전자결재로 생산" 메뉴 클릭 시 실행되는 함수
function sendDocument() {
  var htmlOutput = HtmlService.createHtmlOutputFromFile('index.html').setHeight(400);
  SpreadsheetApp.getUi().showModalDialog(htmlOutput, '전자결재 상신');
}

// "상신하기" 버튼 클릭 시 실행되는 함수
function fSend() {
  if (confirm("위 문서를 정말로 생산하시겠습니까?")) {
    google.script.run.processForm();
  }
}

// "그룹웨이로 이동" 메뉴 클릭 시 실행되는 함수
function openZioYou() {
  var html = '<html><body><a href="https://zioyoucs.com/" target="_blank">지오유로 이동</a></body></html>';
  var htmlOutput = HtmlService.createHtmlOutput(html).setWidth(300).setHeight(100);
  SpreadsheetApp.getUi().showModalDialog(htmlOutput, '지오유 사이트');
}

// 전자결재 상신 처리 함수
function processForm() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // A1 셀에 상신 메시지 표시
  sheet.getRange('A1').setValue('상신되었습니다.');
}
