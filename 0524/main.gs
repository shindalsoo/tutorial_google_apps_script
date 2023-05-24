let ui = SpreadsheetApp.getUi();

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
}

const redirectToZioyou = () => {
	let url = "https://www.zioyou.com/"; // 리디렉션할 URL
	let htmlOutput = HtmlService.createHtmlOutput(
		'<script>window.open("' + url + '", "_blank");</script>'
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
