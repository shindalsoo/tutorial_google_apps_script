function myFunction() {
  const url = 'https://dev.zioyou.com/mashup/workflow.create.document';
  const formData = {
    "page": 1,
    "page_size": 100
  };

  const headers = { 
      "Client-Id": "28100",
      "AuthKey": "65db5b96-cbb6-4b68-8f33-c8c000000000"
    };
  Logger.log(JSON.stringify(formData));

  const options = { 
    'method' : 'post',
    'contentType': 'application/x-www-form-urlencoded',
    'headers': headers,
    'payload': JSON.stringify(formData)
  };

  const response = UrlFetchApp.fetch(url, options);
  Logger.log(response);
  var data = JSON.parse(response);
  Logger.log(data.ErrCode);
  Logger.log(data.Message);
}
