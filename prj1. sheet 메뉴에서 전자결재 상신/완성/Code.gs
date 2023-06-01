// 양식에 대한 고정값
let gAuthKey="GJYfCPYgb65fKPQRIny9iVYfCPYgb65fKPQL||WWUtUd";
let gFormNo=191146;
let gCallbackErpResultUrl="callbackerpreturnurl?arg1={1}&arg2={2}&arg3={3}&arg4={4}";
let gCallbackErpEventUrl="callbackerpeventurl?arg1={1}&arg2={2}&arg3={3}&arg4={4}";

// 문서마다 입력 받을 값
let gErpUserID="화면에서 입력받으세요.";
let gDocSubject="화면에서 입력받으세요";
let gErpDocKey="sheet고유의 ID를 자동으로 사용";
let gBodyHtml="눈에 보고 있는 Sheet 문서 자체를 자동으로 사용";

// sheet
let ui = SpreadsheetApp.getUi();
let doc = SpreadsheetApp.getActiveSpreadsheet();

const onOpen = () => {
	ui.createMenu("지오유")
		.addItem("본 문서를 전자결재로 상신", "eSign")
		.addSeparator()
		.addSubMenu(
			ui
				.createMenu("바로가기")
				.addItem("그룹웨어로 이동", "redirectToZioyou")
		)
		.addToUi();
}

const include = (filename) => {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

const redirectToZioyou = () => {
  let url = 'http://login.zioyou.com';  
  let html = "<script>window.open('" + url + "');google.script.host.close();</script>";
  let userInterface = HtmlService.createHtmlOutput(html);
  SpreadsheetApp.getUi().showModalDialog(userInterface, '로딩 중입니다.');
}

const eSign = () => {
  let htmlOutput = HtmlService.createHtmlOutputFromFile('form.html')
    .setHeight(600);
  SpreadsheetApp.getUi().showModalDialog(htmlOutput,'전자결재 상신');
}

const processForm = (formObject) => {
  ui.alert('dd');
  callRestAPI(formObject);
}

const callRestAPI = (formObject) => {
  const url = 'https://dev.zioyou.com/mashup/workflow.create.document';
  const formData = {
    "argErpUserID": formObject.txtErpUserID,
    "argFormNo": gFormNo,
    "argErpDocKey": gErpDocKey,
    "argCallbackErpEventUrl": gCallbackErpEventUrl,
    "argDocSubject": formObject.txtSubject,
    "argBodyHtml": doc.getUrl(),
    "argCallbackErpResultUrl": gCallbackErpResultUrl
  };
  const headers = { 
      "AuthKey": gAuthKey
    };
  const options = { 
    'method' : 'post',
    'contentType': 'application/x-www-form-urlencoded',
    'headers': headers,
    'payload': JSON.stringify(formData)
  };
  ui.alert('dfdfd');
  const response = UrlFetchApp.fetch(url, options);
  ui.alert(response);
}
