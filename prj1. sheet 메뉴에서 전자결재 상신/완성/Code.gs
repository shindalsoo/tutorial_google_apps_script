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
  ui.showModalDialog(userInterface, '로딩 중입니다.');
}

const eSign = () => {
  gBodyHtml = fGetPubUrl();
	let template = HtmlService.createTemplateFromFile('form.html');
    	template.subj = doc.getName(); // HTML 파일에 값 전달
      template.userid = fGetUserInfo().driveUser.emailAddress;
      template.bodyhtml = gBodyHtml;
	let output = template.evaluate();
      output.setWidth(1400);
      output.setHeight(700);
  ui.showModalDialog(output, '전자결재 eSign');  
}

const processForm = (formObject) => {
  callRestAPI(formObject);
}

const fGetPubUrl = () => {
  var fileId = doc.getId();
  //Drive : 좌메뉴->편집기->서비스->추가->Drive API
  Drive.Revisions.update({published: true, publishedOutsideDomain: true, publishAuto: true}, fileId, 1);
  return "https://docs.google.com/spreadsheet/pub?key=" + fileId; 
}

function fGetUserInfo() {
  var about = Drive.About.get();
  var user = {
    name: about.name,
    permissionId: about.permissionId,
    driveUser: about.user
  };
  return user;
}

const callRestAPI = (formObject) => {
  const url = 'https://dev.zioyou.com/mashup/workflow.create.document';
  const formData = {
    "argErpUserID": formObject.txtErpUserID,
    "argFormNo": gFormNo,
    "argErpDocKey": gErpDocKey,
    "argCallbackErpEventUrl": gCallbackErpEventUrl,
    "argDocSubject": formObject.txtSubject,
    "argBodyHtml": gBodyHtml,
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
  const response = UrlFetchApp.fetch(url, options);
  ui.alert(response);
}
