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
    let url = fGetPubUrl();

    let index = HtmlService.createTemplateFromFile('index');
    index.docname = "제목";
    index.email = Session.getActiveuser().getEmail();
    index.url = url;

    let output = index.evaluate().setWidth(1400).setHeight(700);

    ui.showModalDialog(output, "전자결재 eSign");
}

const fGetPubUrl = () => {
    let docid = doc.getId();
    Drive.Revisions.update({ published: true, publishedOutsideDomain: true, publishAuto: true }, docid, 1);
    return `https://docs.google.com/spreadsheet/pub?key=${docid}`;
}

const callRestAPI = () => {
    const formData = {
        "argDocSubject": "",
        "argErpUserID": "",
        "argBodyHtml": "",
    };

    const endPointURI = 'https://dev.zioyou.com/mashup/workflow.create.document';

    const options = {
        method: 'post',
        contentType: 'application/json',
        payload: JSON.stringify(formData)
    };

    let response = UrlFetchApp.fetch(endPointURI, options);
    Logger.log(response);
}