function doGet(request){
  return HtmlService.createTemplateFromFile('index').evaluate();
}

function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function processForm(formObject) {
  var url = "https://docs.google.com/spreadsheets/d/13y_7cAgUg4W_X_ElWQ9C0Wrek_jmzdttWpDyWD1vl7c/edit#gid=0";
  var ss =SpreadsheetApp.openByUrl(url);
  var ws =ss.getSheetByName("지우시트");

  ws.getRange("A1").setValue("상신되었습니다");

  ws.appendRow([
    formObject.UserName,
    formObject.Gender,
    formObject.Tel,
    formObject.Bigo
  ])
  
}
