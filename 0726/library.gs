let ui = SpreadsheetApp.getUi();

function fShowMenu(){
  ui.createMenu("지오유")
    .addItem("본 문서를 전자결재로 상신", 'eSign')
    .addToUi();
}

function eSign(){
    let response = ui.prompt("당신의 이름은 무엇입니까?");
}