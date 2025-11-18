function doGet() {
  // Open the spreadsheet and get the sheet
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Form Responses 1");

  // Get the data range for each column (assuming 3 columns, A–C) (subtract 1 for the headers)
  var col1 = sheet.getRange("A:A").getValues().filter(String).length-1;

  // Build the JSON object (replace keys with your field names)
  var result = {
    "count": col1,
  };

  // Return JSON response
  return ContentService
           .createTextOutput(JSON.stringify(result))
           .setMimeType(ContentService.MimeType.JSON);
}
