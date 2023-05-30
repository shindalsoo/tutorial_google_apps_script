//-------------------------------------------------------------------
// Code.gs
//-------------------------------------------------------------------
function doGet(request){ // change to doPost(e) if you are recieving POST data
  return HtmlService.createTemplateFromFile('index').evaluate();
}

function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function processForm(formObject){
  var url = "https://docs.google.com/spreadsheets/d/1ZPZz3bh2k56s5EJfSt01d2bhBmnq8euyYAYzRUaP1DQ/edit#gid=0";
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("시트1");

  ws.appendRow([
    formObject.first_name,
    formObject.last_name,
    formObject.gender,
    formObject.dateOfBirth,
    formObject.email,
    formObject.phone
  ]);
}

//-------------------------------------------------------------------
// index.html
//-------------------------------------------------------------------
<!doctype html>
<html>
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <?!= include('JavaScript'); ?>
  </head>
  <body>
    <div class="container">
      <div class="row">
        <div class="col-6">
          <form id="myForm" onsubmit="handleFormSubmit(this)">
            <p class="h4 mb-4 text-center">연락주세요</p>
            
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="first_name">성</label>
                <input type="text" class="form-control" id="first_name" name="first_name" placeholder="성을 입력하세요">
              </div>
              <div class="form-group col-md-6">
                <label for="last_name">이름</label>
                <input type="text" class="form-control" id="last_name" name="last_name" placeholder="이름을 입력하세요">
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-6">
                <p>성별</p>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="gender" id="male" value="M">
                  <label class="form-check-label" for="male">남자</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="gender" id="female" value="F">
                  <label class="form-check-label" for="female">여자</label>
                </div>
              </div>
              <div class="form-group col-md-6">
                <label for="dateOfBirth">생일</label>
                <input type="date" class="form-control" id="dateOfbirth" name="dateOfBirth">
              </div>
            </div>

            <div class="form-group">
              <label for="email">전자우편</label>
              <input type="email" class="form-control" id="email" name="email">
            </div>

            <div class="form-group">
              <label for="phone">전화번호</label>
              <input type="tel" class="form-control" id="phone" name="phone" placeholder="전화번호를 입력하세요">
            </div>

            <button type="submit" class="btn btn-primary btn-block">보내기</button>
          </form>
          <div id="output"></div>
        </div>
      </div>
    </div>
  </body>
</html>

//-------------------------------------------------------------------
// JavaScript.html
//-------------------------------------------------------------------
<script>
  function preventFormSubmit(){
    var forms = document.querySelectorAll('form');
    for (var i=0; i<forms.length; i++){
      forms[i].addEventListener('submit',function(event){
        event.preventDefault();
      })
    }
  }

  window.addEventListener('load',preventFormSubmit);

  function handleFormSubmit(formObject){
    google.script.run.processForm(formObject);
    document.getElementById("myForm").reset();
  }
</script>
