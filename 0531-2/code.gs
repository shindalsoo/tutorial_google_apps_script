const doGet = (request) => {
    return HtmlService.createTemplateFromFile('index').evaluate();
};

const include = (filename) => {
    return HtmlService.createHtmlOutputFromFile(filename).getContent();
};

const processForm = (formObject) => {
    let url = SpreadsheetApp.getActiveSpreadsheet().getUrl();
    let sheet = SpreadsheetApp.openByUrl(url).getSheetByName('suk');

    sheet.appendRow([
        formObject.username,
        formObject.gender,
        formObject.tel,
        formObject.content
    ]);
};