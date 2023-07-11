//----------------------------------------------------
// Code.gs
//----------------------------------------------------
function onOpen() {
    var ui = SpreadsheetApp.getUi();
    // Or DocumentApp or FormApp.
    ui.createMenu('지오유')
        .addItem('본 문서를 전자결재로 상신', 'OpenZioYou')
        .addSeparator()
        .addSubMenu(ui.createMenu('바로가기')
            .addItem('그룹웨어로 이동', 'menuItem1'))
        .addToUi();
}
  
function menuItem1() {
    SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
     .alert('www.zioyou.com 사이트로 이동하는 기능을 만들어보세요.');
}
  
function OpenZioYou(){
    var htmlOutput = HtmlService.createHtmlOutputFromFile('index.html').setHeight(400);
    SpreadsheetApp.getUi().showModalDialog(htmlOutput, '전자결재 상신');
}
  
//----------------------------------------------------
// index.html
//----------------------------------------------------
<style>
	.ifm {
		width: 100%;
		height: 360px;
		border: 0;
	}
</style>
<script>
function fSend(){
  if (confirm("위 문서를 전자결재 상신하시겠습니까 ?")){
    alert("상신하였습니다.");
  }
}
</script>

<iframe
	class="ifm"
	src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSk92NUZKRcmXlze23plrptK9zZBPdlq6nPBYkkihPgOf9fdBYeYmgLy6eX0eJEgbP9xBQJ8m-hsMEW/pubhtml?widget=true&amp;headers=false"
></iframe>

<button onclick="fSend()">상신하기</button>
