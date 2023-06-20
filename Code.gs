// 스프레드시트 메뉴를 생성하고 초기화할 때 호출되는 함수
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  
  // "지오유" 메뉴 생성
  ui.createMenu('지오유')
    .addItem('본 문서를 전자결재로 생산', 'sendDocument')
    .addSeparator()
    .addSubMenu(ui.createMenu('바로가기')
      .addItem('그룹웨이로 이동', 'openZioYou')
    )
    .addToUi();
}

// 공개 URL을 가져오는 함수
function fGetPubUrl() {
  var fileId = SpreadsheetApp.getActiveSpreadsheet().getId();
  Drive.Revisions.update({ published: true, publishOutsideDomain: true, publishAuto: true }, fileId, 1);
  return "https://docs.google.com/spreadsheet/pub?key=" + fileId;
}

// 사용자 정보를 가져오는 함수
function fGetUserInfo() {
  var about = Drive.About.get();
  var user = {
    name: about.name,
    permissionId: about.permissionId,
    driveUser: about.user
  };
  return user;
}

// "본 문서를 전자결재로 생산" 메뉴 클릭 시 실행되는 함수
function sendDocument() {
  var tpl = HtmlService.createTemplateFromFile("index.html");
    tpl.bodyhtml = fGetPubUrl();
    tpl.subj = SpreadsheetApp.getActiveSpreadsheet().getName();
    tpl.userid = fGetUserInfo().driveUser.emailAddress;
  var output = tpl.evaluate();
    output.setWidth(1400);
    output.setHeight(700);
  SpreadsheetApp.getUi().showModalDialog(output, '전자결재 eSign');
}

// "그룹웨이로 이동" 메뉴 클릭 시 실행되는 함수
function openZioYou() {
  var html = '<html><body><a href="https://zioyoucs.com/" target="_blank">지오유로 이동</a></body></html>';
  var htmlOutput = HtmlService.createHtmlOutput(html).setWidth(300).setHeight(100);
  SpreadsheetApp.getUi().showModalDialog(htmlOutput, '지오유 사이트');
}