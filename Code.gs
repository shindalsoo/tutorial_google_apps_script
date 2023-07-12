// 양식에 대한 고정값
let gAuthKey = "GbYfCPydIC5fKP5fmx5wz8gXeEOXpzWWd0UJ";
let gFormNo = "152521"; //문자열로
let gCallbackErpResultUrl = encodeURIComponent("callbackerpreturnurl?arg1={1}&arg2={2}&arg3={3}&arg4={4}");
let gCallbackErpEventUrl = encodeURIComponent("callbackerpeventurl?arg1={1}&arg2={2}&arg3={3}&arg4={4}");

// 문서마다 입력 받을 값
let gErpUserID = "접속한 사용자의 Email주소 사용";
let gDocSubject = "화면에서 입력받으세요";
let gErpDocKey = "sheet고유의 ID를 자동으로 사용";
let gBodyHtml = "눈에 보고 있는 Sheet 문서 자체를 자동으로 사용";

// sheet
let ui = SpreadsheetApp.getUi();
let doc = SpreadsheetApp.getActiveSpreadsheet();
let scriptPrp = PropertiesService.getScriptProperties()

const onOpen = () => {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  spreadsheet.getRange('A1').setValue(getSpreadsheetName());

	ui.createMenu("지오유")
		.addItem("본 문서를 전자결재로 상신", "eSign")
		.addItem("본 문서를 게시방에 게시", "eSign1")
		.addItem("본 문서를 프로젝트 WBS에 게시", "eSign2")
		.addSeparator()
		.addSubMenu(
			ui
				.createMenu("바로가기")
				.addItem("그룹웨어로 이동", "redirectToZioYou")
		)
		.addToUi();

}

const include = (filename) => {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

const redirectToZioYou = () => {
  let url = "http://login.zioyou.com";
  let html = "<script>window.open('" + url + "');google.script.host.close();</script>";
  let userInterface = HtmlService.createHtmlOutput(html).setHeight(50).setWidth(200);
  ui.showModalDialog(userInterface, '로딩 중입니다.');
}
const redirectToWorkFlow = (url) => {
  let html = "<script>window.open('" + url + "');google.script.host.close();</script>";
  let userInterface = HtmlService.createHtmlOutput(html).setHeight(50).setWidth(200);
  ui.showModalDialog(userInterface, '로딩 중입니다.');
}

const eSign = () => {
  gErpUserID = fGetUserInfo().driveUser.emailAddress;
  gBodyHtml = fGetPubUrl();
  gErpDocKey = doc.getId();

  scriptPrp.setProperty('gErpUserID', gErpUserID);
  scriptPrp.setProperty('gBodyHtml', gBodyHtml);
  scriptPrp.setProperty('gErpDocKey', gErpDocKey);

	let template = HtmlService.createTemplateFromFile('form.html');
    	template.subj = doc.getName(); // HTML 파일에 값 전달
      template.userid = fGetUserInfo().driveUser.emailAddress; //가능
      template.userid = Session.getActiveUser().getEmail(); //가능
      template.bodyhtml = gBodyHtml;
	let output = template.evaluate();
      output.setWidth(1400);
      output.setHeight(600);
  ui.showModalDialog(output, '전자결재 상신하기');  
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
    "argErpUserID": scriptPrp.getProperty('gErpUserID'),
    "argFormNo": gFormNo,
    "argErpDocKey": scriptPrp.getProperty('gErpDocKey'),
    "argCallbackErpEventUrl": gCallbackErpEventUrl,
    "argDocSubject": formObject.txtSubject,
    "argBodyHtml": encodeURIComponent(scriptPrp.getProperty('gBodyHtml')),
    "argCallbackErpResultUrl": gCallbackErpResultUrl
  };
  const headers = { 
      "AuthKey": gAuthKey
    };
  const options = { 
    'method' : 'post',
    'contentType': 'application/x-www-form-urlencoded', //application/json
    'headers': headers,
    'payload': formData //JSON.stringify(formData)
  };
  //ui.alert(JSON.stringify(formData));
  let response = UrlFetchApp.fetch(url, options);
  let data = JSON.parse(response.getContentText());
  redirectToWorkFlow(data.result);
}

function getSpreadsheetName() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var name = ss.getName();
  return name;
}
