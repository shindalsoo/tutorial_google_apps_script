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
};

const formatDateTime = (date) => {
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();
	const weekday = ["일", "월", "화", "수", "목", "금", "토"][date.getDay()];

	return `${year}.${month}.${day}.(${weekday}) ${hours}:${minutes}:${seconds}`;
};

const userInfo = () => {
	let about = Drive.About.get();
	let account = {
		name: about.name,
		permissionId: about.permissionId,
		user: about.user
	};

	return account;
}

const updatePermission = (docid, writable) => {
	let role = writable ? DriveApp.Permission.EDIT : DriveApp.Permission.VIEW
	DriveApp.getFileById(docid).setSharing(DriveApp.Access.ANYONE_WITH_LINK, role)
};

const eSign = () => {
	let docid = doc.getId(); // 문서 ID 가져오기
	let template = HtmlService.createTemplateFromFile('index'); // index 파일로 Template 생성
	Drive.Revisions.update({ published: true, publishedOutsideDomain: true, publishAuto: true }, docid, 1); // 문서를 최신 버전으로 업데이트

	template.docid = docid; // HTML 파일에 docid 전달
	template.docname = doc.getName(); // HTML 파일에 문서 이름 전달
	template.email = userInfo().user.emailAddress; // HTML 파일에 사용자 이메일 전달

	let output = template.evaluate();

	output.setWidth(1400);
	output.setHeight(700);

	ui.showModalDialog(output, '전자결재 eSign');
};

const eSigning = (payload) => {
	const url = 'https://dev.zioyou.com/mashup/workflow.create.document'; // 요청을 보낼 URL

	const options = {
		method: 'post',
		contentType: 'application/json',
		payload: JSON.stringify(payload)
	}; // 요청 옵션 설정

	return UrlFetchApp.fetch(url, options); // POST 요청 보내기
}

const eSignConfirm = (formObject) => {
	let now = new Date();

	let confirmData = {
		title: formObject.documentTitle,
		submitter: formObject.submitterId,
		docid: doc.getId(),
		date: formatDateTime(now),
		writable: formObject.writable === "on" ? true : false
	};

	let response = eSigning(confirmData); // 전자결재 요청 보내기

	if (response.getResponseCode() === 200) { // 요청이 성공하면 확인창 띄우기
		updatePermission(confirmData.docid, confirmData.writable); // 문서에 지정된 권한 부여

		let confirm = HtmlService.createTemplateFromFile('confirm');

		for (let key in confirmData) {
			confirm[key] = confirmData[key];
		}

		let output = confirm.evaluate().setWidth(700).setHeight(500);

		ui.showModalDialog(output, '전자결재 전송 확인');
	} else { // 요청이 실패하면 에러 메세지 띄우기
		ui.alert(`POST 요청이 실패하였습니다. 응답 코드: ${response.getResponseCode()}`);
	}
};

const redirectToZioyou = () => {
	const url = "https://www.zioyou.com/"; // 리디렉션할 URL
	let htmlOutput = HtmlService.createHtmlOutput(
		`<script>window.open("${url}", "_blank");</script>`
	); // 리디렉션 스크립트
	let response = ui.alert(
		"이동하기",
		"지오유 홈페이지로 이동할까요?",
		ui.ButtonSet.YES_NO
	); // 리디렉션 여부 확인
	if (response == ui.Button.YES) {
		ui.showModelessDialog(htmlOutput, "지오유 홈페이지로 이동합니다."); // Model 안내 메세지와 리디렉션
	} else ui.alert("취소합니다.");
}
