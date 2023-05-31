const openTab = () =>{
  let url = 'http://www.zioyou.com';
  
  //HTML 파일을 만듦
  let html = "<script>window.open('" + url + "');google.script.host.close();</script>";

  //HtmlOutput 객체를 만듦
  let userInterface = HtmlService.createHtmlOutput(html);

  //웹 페이지가 열리는 UI를 띄어줌  
  SpreadsheetApp.getUi().showModalDialog(userInterface, '로딩 중입니다.');
}
