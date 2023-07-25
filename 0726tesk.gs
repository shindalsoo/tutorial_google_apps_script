let ui = SpreadsheetApp.getUi();

function myFunction() {
  //zioyou 라이브러리의 fShowMenu()를 실행
  zioyou.fShowMenu();
}

//zioyou 라이브러리의 fShowMenu()에서 함수 eSign()을 호출하기 때문에 선언
function eSign() {
  zioyou.eSign();
  //zioyou 라이브러리의 함수인 eSign()을 실행
}