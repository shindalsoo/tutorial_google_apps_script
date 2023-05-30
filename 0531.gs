function myFunction() {}

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu("지오유")
    .addItem("본 문서를 전자결재로 상신", "aaa")
    .addSeparator()
    .addSubMenu(
      ui
        .createMenu("바로가기")
        .addItem("그룹웨어로 이동", "bbb")
        .addItem("네이버로 이동", "ddd")
        .addItem("구글로 이동", "ccc")
    )

    .addToUi();
}
function aaa() {
  SpreadsheetApp.getUi().alert("본 문서를 전자결재로 상신합니다.");
}

function bbb() {
  SpreadsheetApp.getUi().alert("지오유 홈페이지로 이동");
  openLink("https://www.zioyou.com/", "잠시만 기다려 주세요");
}

function ccc() {
  SpreadsheetApp.getUi().alert("구글로 이동");
  openLink("https://www.Google.com/", "잠시만 기다려 주세요");
}

function ddd() {
  SpreadsheetApp.getUi().alert("개발자는 구글쓰자;");
}

function openGLink(url, title) {
  var htmlOutput = HtmlService.createHtmlOutput(
    '<script>window.open("' + url + '");google.script.host.close();</script>'
  );
  SpreadsheetApp.getUi().showModalDialog(htmlOutput, title);
}
function openLink(url, title) {
  var htmlOutput = HtmlService.createHtmlOutput(
    '<script>window.open("' + url + '");google.script.host.close();</script>'
  );
  SpreadsheetApp.getUi().showModalDialog(htmlOutput, title);
}
