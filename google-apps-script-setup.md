# Google Apps Script Setup for Demo Request Form

This document provides instructions on how to set up a Google Apps Script to handle form submissions from the Auditric landing page and save the data to a Google Sheet.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet
2. Name it "Auditric Demo Requests"
3. Add the following column headers in the first row:
   - Timestamp
   - Name
   - Email
   - Company
   - Phone
   - Industry
   - Message

## Step 2: Create a Google Apps Script

1. In your Google Sheet, go to **Extensions** > **Apps Script**
2. Delete any code in the editor and paste the following code:

```javascript
function doPost(e) {
  try {
    // Parse the JSON data from the request
    const data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet and sheet
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getActiveSheet();
    
    // Get current timestamp
    const timestamp = new Date();
    
    // Prepare row data
    const rowData = [
      timestamp,
      data.name || '',
      data.email || '',
      data.company || '',
      data.phone || '',
      data.industry || '',
      data.message || ''
    ];
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'success',
      'message': 'Data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Step 3: Deploy the Script as a Web App

1. Click on **Deploy** > **New deployment**
2. Click on **Select type** > **Web app**
3. Configure the deployment:
   - Description: "Auditric Demo Form Handler"
   - Execute as: "Me"
   - Who has access: "Anyone"
4. Click **Deploy**
5. Authorize the app when prompted
6. Copy the Web App URL provided after deployment

## Step 4: Update the Form Component

1. Open the `src/components/DemoRequestForm.js` file
2. Replace the placeholder URL in the `scriptURL` variable with your actual Google Apps Script Web App URL:

```javascript
const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
```

## Testing the Integration

1. Run your React application
2. Fill out the demo request form and submit
3. Check your Google Sheet to verify that the data was saved correctly

## Troubleshooting

- If you encounter CORS issues, make sure your Google Apps Script is deployed with "Anyone" access
- If the form submission fails, check the browser console for error messages
- Verify that the Google Apps Script URL is correct and the script is properly deployed

## Security Considerations

- The Google Sheet will be accessible to anyone with the link
- Consider implementing additional security measures for production use
- You may want to add email notifications for new submissions 