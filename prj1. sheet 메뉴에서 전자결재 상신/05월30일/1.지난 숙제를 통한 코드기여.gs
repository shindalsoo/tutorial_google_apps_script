//------------------------------------------------------------------------------------
// 라호성 기여
//------------------------------------------------------------------------------------
const openTab = () =>{
  let url = 'http://www.zioyou.com';
  
  //HTML 파일을 만듦
  let html = "<script>window.open('" + url + "');google.script.host.close();</script>";

  //HtmlOutput 객체를 만듦
  let userInterface = HtmlService.createHtmlOutput(html);

  //웹 페이지가 열리는 UI를 띄어줌  
  SpreadsheetApp.getUi().showModalDialog(userInterface, '로딩 중입니다.');
}

//------------------------------------------------------------------------------------
// 남우석 기여
//------------------------------------------------------------------------------------
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

const eSign = () => {
	ui.alert("본 문서를 전자결재로 상신합니다.");
	let url = doc.getUrl().replace('/edit', '');
	let hookurl = "https://hook.suk.kr/ab5ca3bf-9b63-468a-b2fe-c351013c02b0"
	let htmlOutput = HtmlService.createHtmlOutput(
		`<iframe src="${url}/pubhtml?widget=true&amp;headers=false" frameborder="0" style="width: 100%; height: fit-content;"></iframe><button onclick="window.open('${hookurl}/?url=${url}');">전자결재 상신하기</button>`
	);
	ui.showModelessDialog(htmlOutput, "전자결재 eSign");
}

const redirectToZioyou = () => {
	let url = "https://www.zioyou.com/"; // 리디렉션할 URL
	let htmlOutput = HtmlService.createHtmlOutput(
		`<script>window.open("${url}", "_blank");</script>`
	); // 리디렉션 스크립트
	let response = ui.alert(
		"이동하기",
		"지오유 홈페이지로 이동할까요?",
		ui.ButtonSet.YES_NO
	); // 리디렉션 여부 확인
	if (response == ui.Button.YES) {
		ui.showModelessDialog(htmlOutput, "지오유 홈페이지로 이동합니다."); //Model 안내 메세지와 리디렉션
	} else ui.alert("취소합니다.");
}
