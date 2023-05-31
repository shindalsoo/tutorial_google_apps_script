const onOpen = () =>{
  let ui = SpreadsheetApp.getUi();
  ui.createMenu('지오유')
    .addItem('본 문서를 전자결재로 상신', 'aaa')
    .addSeparator()
    .addSubMenu(ui.createMenu('바로가기')
      .addItem('그룹웨어로 이동', 'openTab')
    )
    .addToUi();
}

const aaa = () =>{
  alert('본 문서를 전자결재로 상신합니다.');
}

// openTab : 크롬브라우저에 탭을 추가하여 링크를 여는 코드
const openTab = () =>{
  let url = 'http://www.zioyou.com';
  
  //HTML 파일을 만듦
  let html = "<script>window.open('" + url + "');google.script.host.close();</script>";

  //HtmlOutput 객체를 만듦
  let userInterface = HtmlService.createHtmlOutput(html);

  //웹 페이지가 열리는 UI를 띄어줌  
  SpreadsheetApp.getUi().showModalDialog(userInterface, '로딩 중입니다.');
}