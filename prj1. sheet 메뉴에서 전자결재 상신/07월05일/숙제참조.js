function copySpreadSheet(string $spreadsheetId, string $title, string $email) {
    $serviceSheets = new Google_Service_Sheets($this->getClient());
    $serviceDrive = new Google_Service_Drive($this->getClient());
    $fileCopy = $serviceDrive->files->copy($spreadsheetId, new Google_Service_Drive_DriveFile());
    $requests = [
        'updateSpreadsheetProperties' => [
            'properties' => [
                'title'         => $title,
            ],
            'fields' => 'title'
        ]
    ];
    $requestBody = new Google_Service_Sheets_BatchUpdateSpreadsheetRequest([
        'requests' => $requests,
    ]);
    $response = $serviceSheets->spreadsheets->batchUpdate($fileCopy->getId(), $requestBody);
    return $serviceSheets->spreadsheets->get($fileCopy->getId());
}

$drive = new Google_Service_Drive($client);
$newPermission = new Google_Service_Drive_Permission();
$newPermission->setEmailAddress('EMAIL@WHATE.COM');
$newPermission->setType('group');
$newPermission->setRole('writer');
$response = $drive->permissions->create($newSpreadsheetId, $newPermission);

//관련소스
const request: sheets_v4.Params$Resource$Spreadsheets$Sheets$Copyto = {
  // The ID of the spreadsheet containing the sheet to copy.
  spreadsheetId: '9MhcPzrWE-Pv9MKhJwow6cWi9uO46RcDTfxhvT9X1fY',
  // The ID of the sheet to copy.
  sheetId: 3,
  requestBody: {
    // The ID of the spreadsheet to copy the sheet to.
    destinationSpreadsheetId: '9MhcPzrWE-Pv9MKhJwow6cWi9uO46RcDTfxhvT9X1fY'
  }
};
try {
  const response = (await this.sheets.spreadsheets.sheets.copyTo(request)).data;
  console.log(JSON.stringify(response, null, 2));
} catch (err) {
  console.error(err);
}