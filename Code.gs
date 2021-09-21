
var token = "";     // 1. FILL IN YOUR BOT TOKEN
var telegramUrl = "" + token; // BOT API
var webAppUrl = ""; // 2. FILL IN YOUR GOOGLE WEB APP ADDRESS
var ssId = "";      // 3. FILL IN THE ID OF YOUR SPREADSHEET

var adminID = [""];   // 4. Fill in your own Telegram ID for debugging

const aboutText = `<b>────────「 👨‍💻 PLACEMENT BOT 👷‍♀️ 」</b>
╭────── <b><i>Created By :</i></b> ──────
│
├ <a href="https://github.com/saquibansari0101">⸸ Saquib Akthar</a>
├ <a href="https://github.com/AbhishekA7"> Abhishek Palve</a>
├ <a href="https://github.com/TejalPathak23"> Tejal Pathak</a>
│
├─   <b><i>Approved By : </i></b>
│
├ <a href="https://www.linkedin.com/in/vdabhade/"> Professor Vaibhav Dabhade</a>
│
├─  <b><i>GitHub Repo :</i></b>
│
├──<a href="https://github.com/saquibansari0101/TelegramBotForGoogleSheet"> TelegramBotForGoogleSheet</a>
│
╰──「v1.0.0 refer docs on GitHub for more info」
`;

const helpText = `
╭── 「<b>🟢 Help Commands ! 🟢</b>」  
│
├ /addstudent :
│Command to add new student to the application tracking sheet
│<i> usecase ♟: </i>
│/addstudent division roll_no contact_no email first_name last_name
│<i>  Example :  </i>
│/addstudent A 68 9876543210 tejalp.comp_ioe@bkc.met.edu Tejal Pathak
│
├/addrow :
│Command to add row to the application tracking sheet
│<i>usecase :</i>
│/addrow @sheet_name (yes or no) reason_if_no
│<i>Example :</i>
│/addrow @TCS yes
│/addrow @WIPRO no I am aiming for higher studies
│
├ /placed :
│Command to add where student have placed
│<i>usecase :</i>
│/placed company_name
│<i>Example:</i>
│/placed GOOGLE
│
├ /help :
│Command to ask for help
│<i>usecase :</i>
│/help message
│<i>Example:</i>
│/help Hi! I am unable to understand these commands can you help me
│
├ /addsheet :
│Command to add sheet to the application tracking sheet
│<i>Example :</i>
│/addsheet @new_sheet_name
│new_sheet_name - name of new sheet to be added
│<i>usecase :</i>
│/addsheet @WINJIT
╰────` ;


const newsheetNotAdminErrorMessage = `
╭── 「<b>🔴 Error 🔴</b>」
│  
├ <b>You are not an admin</b>
│
╰──
`;

const newsheetArgumentErrorMessage = `
╭────────「<b>🔴 Error 🔴</b>」
│ 
├ Please🙅‍♀️ check the arguments provided by you or you can refer 💻*/help*
│
╰────────
`;

const newsheetSuccessfulMessage = `
╭────────「<b>🟢 Successfull 🟢</b>」
│ 
├ New Sheet Created 👍 and is ready for you to take record in it
│
╰────────
`;

const placedArgumentErrorMessage = `
╭────────「<b>🔴 Invalid Usecase 🔴</b>」
│ 
├ */placed* command used with invalid usecase🧨! use */help* to get the example of valid use case ✍.
│
╰────────
`;

const placedAlreadyAddedMessage = `
╭────────「<b>🟢 Placed 🟢</b>」
│ 
├ 👨‍⚕️👩‍🏫 You are already placed!👩‍🔧👩‍💻
│
╰────────
`;

const placedSuccessfulMessage = `
╭────────「<b>🟢 Successfully Placed 🟢</b>」
│ 
├ Thanks👰 for letting us know that you are placed by🙏 campus placement programme !
│
╰────────
`;

const studentArgumentErrorMessage = `
╭────────「<b>🔴 Error 🔴</b>」
│ 
├ Incorrect command🧨, Please write the command as suggested in the HELP section !
│
╰────────
`;

const studentAlreadyPresentMessage = `
╭────────「<b>🟢 Already Present 🟢</b>」 
│
├ ✨ Student Already Present In DataBase ✔ if you want to update details contact co-ordinators 
│
╰────────
`;

const studentAddedSuccessfullyMessage = `
╭────────「<b>🟢 Successfull 🟢</b>」
│ 
├ ✨Student Successfully added in the DataBase ✔
│
╰────────
`;

const addrowSuccessfulMessage = `
╭────────「<b>🟢 Successfull 🟢</b>」 
│
├ Congrats 🎀! The Record is successfully Added 🎇!
│
╰────────
`;

const addrowAlreadySubmittedMessage = `
╭────────「<b>🟡 Must Ask ! 🟡</b>」
│ 
├ 🔔 You have already submitted your record, if you want to change record ask <a href="tg://user?id=724866443">Abhishek Palve</a>🧑
│
╰────────
`;

const addrowStudentNotInData = `
╭────────「<b>🟡 Instruction 🟡</b>」
│ 
├ 📢 First Please Register Your Details in Database.
│
╰────────
`;

const addrowArgumentErrorMessage = `
╭────────「<b>🔴 Error 🔴</b>」
│ 
├ 🧨Incorrect command, Please write the command as suggested in the <b>/help</b> section!
│
╰────────
`;

const invalidArgumentErrorMessageUniversal = `
╭────────「<b>🔴 Error 🔴</b>」 
│
├ Invalid command ☹, 🧨use /help to get help
│
╰──────── `;


function getMe() {
    var url = telegramUrl + "/getMe";
    var response = UrlFetchApp.fetch(url);
    Logger.log(response.getContentText());


}

/**
 * function to set webhook for the bot
 * @returns {void}
 */
function setWebhook() {
    var url = telegramUrl + "/setWebhook?url=" + webAppUrl;
    var response = UrlFetchApp.fetch(url);
    Logger.log(response.getContentText());
}

/**
 * Sends Text to the chatId provided
 * @author Tejal Pathak <tejalp.comp_ioe@bkc.met.edu>
 * @param {number} chatId - The target chatId where we want to send msg
 * @param {string} text - text you wanna send to the chatId
 * @param {number} replyToMessageId - messageId of the message of which the bot will reply with the text
 * @returns {void} Nothing
 */
function sendText(chatId, text, replyToMessageId) {
    if (typeof replyToMessageId !== "undefined")
        var url = telegramUrl + "/sendMessage?chat_id=" + chatId + "&text=" + encodeURIComponent(text) + "&parse_mode=HTML&reply_to_message_id=" + replyToMessageId;
    else
        var url = telegramUrl + "/sendMessage?chat_id=" + chatId + "&text=" + encodeURIComponent(text) + "&parse_mode=HTML";
    var response = UrlFetchApp.fetch(url);
    Logger.log(response.getContentText());
}


//Not fully implemented
function editText(chatId, text, replyToMessageId) {
    if (typeof replyToMessageId !== "undefined")
        var url = telegramUrl + "/editMessageText?chat_id=" + chatId + "&text=" + encodeURIComponent(text) + "&parse_mode=HTML&message_id=" + replyToMessageId;
    else
        var url = telegramUrl + "/sendMessage?chat_id=" + chatId + "&text=" + encodeURIComponent(text) + "&parse_mode=HTML";
    var response = UrlFetchApp.fetch(url);
    Logger.log(response.getContentText());
}

function doGet(e) {
    return HtmlService.createHtmlOutput("Hi there");
}

/**
 * 
 * @param {JSON} e - JSON recieved after someone interacts with bot
 */
function doPost(e) {
    try {
        // this is where telegram works
        var data = JSON.parse(e.postData.contents);
        var text = data.message.text; //message given by user
        var chatId = data.message.chat.id; //group chatID
        var userId = data.message.from.id; //user userID
        var name = data.message.from.first_name + " " + data.message.from.last_name; //fullname of user
        var userName = data.message.chat.userName; //telegram username of user
        var replyToMessageId = data.message.message_id;

        SpreadsheetApp.openById(ssId).getSheetByName("Log").appendRow([new Date(), userId, name, text]); //Log

        if (/\help/.test(text)) {  //\help i need help -> true | \help ->true
            sendText(chatId, helpText);
        }

        else if (/^\/newsheet @/.test(text) || /^\/newsheet@be_spreadsheet_bot @/.test(text)) { // \newsheet @TCS split-> ["newsheet", "@TCS"] -> @TCS -> TCS
            newsheet(data, text, chatId, replyToMessageId);
        }

        else if (/^\/placed/.test(text)) {
            placed(text, chatId, userId, name, replyToMessageId);
        }

        else if (/^\/addstudent/.test(text)) {
            addStudent(text, chatId, userId, name, replyToMessageId);
        }

        else if (/^\/addrow/.test(text)) {  // /addrow @TCS yes
            addRow(text, chatId, userId, replyToMessageId);
        }

        else if (/^\/about/.test(text)) {
            sendText(chatId, aboutText);
        }

        else {
            // Bot does nothing if nothing matches
        }
    } catch (e) {
        sendText(adminID[0], "🔴 Code Phat Gaya Bro Uth Ja Aur Log Check Kar 🔴 ! Ispe Phata hai \n" + text + "\n" + userName);
    }
}

/**
 * adds record in the given specifies sheet
 * @author Saquib Ansari <saquibr.comp_ioe@bkc.met.edu>
 * @param {string} text - text given by user
 * @param {number} chatId - chatId where user posted text
 * @param {number} userId - telegram_id of user
 * @param {number} replyToMessageId - messageId to reply to
 * @returns {void}
 */
function addRow(text, chatId, userId, replyToMessageId) {
    var sheetName = text.split(" ")[1];
    sheetName = sheetName.slice(1);  //TCS

    sendText(chatId, "╭────────「<b>🟡  Update 🟡 </b>」\n│\n├ 🔔 Updating details of " + sheetName + "\nwait for a moment\n│\n╰────────", replyToMessageId);

    var sheet = SpreadsheetApp.openById(ssId).getSheetByName(sheetName) ? SpreadsheetApp.openById(ssId).getSheetByName(sheetName) : sendText(chatId, "Sheet not found", replyToMessageId);
    if (/\/addrow @\w+ (?:yes|Yes|yEs|YEs|yeS|YeS|yES|YES|no|No|nO|NO)/.test(text) || /\/addrow@be_spreadsheet_bot @\w+ (?:yes|Yes|yEs|YEs|yeS|YeS|yES|YES|no|No|nO|NO)/.test(text)) {
        if (checkIfStudentExistInASheet(userId, "StudentDataBase", chatId) && !checkIfStudentExistInASheet(userId, sheetName, chatId)) {
            var studDetails = getStudentDetails(userId); // studDetails ["B", "69", "Krutik Patel", "7568423169", "krutikp.comp_ioe@bkc.met.edu", "9741852963"]
            var decision = text.split(" ")[2];

            decision = decision.toUpperCase(); //yes uppercase -> YES

            studDetails.push(userId);  // ["B", "69", "Krutik Patel", "7568423169", "krutikp.comp_ioe@bkc.met.edu", "9741852963"]

            if (decision == "YES") {
                studDetails.push("YES");
            }
            else {
                var reason = text.split(" ").slice(3).join(" ");
                studDetails.push("NO");
                studDetails.push(reason);
            }

            sheet.appendRow(studDetails);

            sendText(chatId, addrowSuccessfulMessage, replyToMessageId);

        }
        else if (checkIfStudentExistInASheet(userId, sheetName, chatId)) {
            sendText(chatId, addrowAlreadySubmittedMessage, replyToMessageId);
        }
        else {
            sendText(chatId, addrowStudentNotInData, replyToMessageId);
        }
    }
    else {
        sendText(chatId, addrowArgumentErrorMessage, replyToMessageId);
    }
}

/**
 * Only accessible for admins. Creates new sheet to take record in.
 * @author Saquib Ansari <saquibr.comp_ioe@bkc.met.edu>
 * @param {string} text - text given by user
 * @param {number} chatId - chatId where user posted text
 * @param {number} userId - telegram_id of user
 * @param {number} replyToMessageId - messageId to reply to
 * @returns {void}
 */
function newsheet(text, chatId, userId, replyToMessageId) {
    if (checkIfAdmin(userId)) {
        sendText(chatId, "sab changa si", replyToMessageId);
        var sheetName = text.split(" ")[1];
        sendText(chatId, "sab changa si", replyToMessageId);
        sheetName = sheetName.slice(1);
        sendText(chatId, "sab changa si", replyToMessageId);
        newSheetName = text.split(" ")[2];
        sendText(chatId, "sab changa si", replyToMessageId);
        if (/^\/newsheet @\w+$/.test(text) || /^\/newsheet@be_spreadsheet_bot @\w+$/.test(text)) {
            sendText(chatId, "sab changa si", replyToMessageId);
            const newSheetReply = `Creating New Sheet ${sheetName}...`;
            sendText(chatId, newSheetReply, replyToMessageId);
            var templateSheet = SpreadsheetApp.openById(ssId).getSheetByName('DummyRecord');
            var sheet = SpreadsheetApp.openById(ssId).insertSheet(sheetName, { template: templateSheet });

            sendText(chatId, newsheetSuccessfulMessage, replyToMessageId)
        }
        else {
            sendText(chatId, newsheetArgumentErrorMessage, replyToMessageId)
        }
    }
    else {
        sendText(chatId, newsheetErrorMessage, replyToMessageId);
    }
}

/**
 * stores record of placed students along with company name
 * @author Saquib Ansari <saquibr.comp_ioe@bkc.met.edu>
 * @param {string} text - text given by user
 * @param {number} chatId - chatId where user posted text
 * @param {number} userId - telegram_id of user
 * @param {string} name 
 * @param {number} replyToMessageId - messageId to reply to
 * @returns {void}
 */
function placed(text, chatId, userId, name, replyToMessageId) {
    var sheetName = "PlacedStudentsRec"
    var sheet = SpreadsheetApp.openById(ssId).getSheetByName(sheetName);
    var studentName = getNameByID(userId);
    var studDetails = [];
    var companyName = text.split(" ")[1];

    if (text.split(" ").length == 2 && checkIfStudentExistInASheet(userId, "StudentDataBase", chatId) && !checkIfStudentExistInPlaced(name)) {
        studDetails.push(studentName);
        studDetails.push("Placed");
        studDetails.push(companyName);

        sheet.appendRow(studDetails);
        sendText(chatId, placedSuccessfulMessage, replyToMessageId);
    }
    else if (checkIfStudentExistInPlaced(studentName)) {
        sendText(chatId, placedAlreadyAddedMessage, replyToMessageId)
    }
    else if (!checkIfStudentExistInASheet(userId, "StudentDataBase", chatId)) {
        sendText(chatId, "╭────────「<b>🔴 Error 🔴</b>」\n│\n├ 🔔 Please First Add Your Details\n├ Using <b>/addstudent</b>\n├ and try again\n│\n╰────────", replyToMessageId);
    }
    else {
        sendText(chatId, placedArgumentErrorMessage, replyToMessageId);
    }
}

/**
 * add student details provided by user into the "StudentDataBase" sheet
 * @author Saquib Ansari <saquibr.comp_ioe@bkc.met.edu>
 * @param {string} text - text given by user
 * @param {number} chatId - chatId where user posted text
 * @param {number} userId - telegram_id of user
 * @param {string} name 
 * @param {number} replyToMessageId - messageId to reply to
 * @returns {void}
 */
function addStudent(text, chatId, userId, name, replyToMessageId) {
    // error example: /addStudent B 56 9752 sdafljsad@sdajgads.com sadfhj aslfj
    // please add division and use it like in the example
    // example: /addStudent B 69 7568423169 krutikp.comp_ioe@bkc.met.edu Krutik Patel
    // ["/addStudent", "B", "69", "7568423169", "krutikp.comp_ioe@bkc.met.edu", "Krutik Patel"]
    //        0         1     2       3                   4                            5
    var rollNo = text.split(" ")[2];
    var division = text.split(" ")[1];
    var contactNo = text.split(" ")[3];
    var email = text.split(" ")[4];
    var telegramId = userId;
    var name = text.split(" ").slice(5).join(" ");
    var sheetName = "StudentDataBase"
    var studDetails = [];
    var decision = checkIfStudentExistInASheet(userId, sheetName, chatId);

    //division  roll_no	 name	contact_no	email	telegram_id
    if (!decision && (/\/addstudent [abAB] \d\d \d{10} [a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+ \w+ \w+/.test(text) || /\/addstudent@be_spreadsheet_bot [abAB] \d\d \d{10} [a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+ \w+ \w+/.test(text))) {
        studDetails.push(division);
        studDetails.push(rollNo);
        studDetails.push(name.toUpperCase());
        studDetails.push(contactNo);
        studDetails.push(email);
        studDetails.push(telegramId);
        // studeDetails  will look like this ["B", "69", "7568423169", "krutikp.comp_ioe@bkc.met.edu", "Krutik Patel",	"9741852963"]
        var sheet = SpreadsheetApp.openById(ssId).getSheetByName(sheetName);
        sheet.appendRow(studDetails);

        sendText(chatId, studentAddedSuccessfullyMessage, replyToMessageId);

    }
    else if (decision) {
        sendText(chatId, studentAlreadyPresentMessage, replyToMessageId);
    }
    else {
        sendText(chatId, studentArgumentErrorMessage, replyToMessageId);
    }
}

/**
 * returns StudData filled with all the details of student from "StudentDataBase" using useId
 * @author Saquib Ansari <saquibr.comp_ioe@bkc.met.edu>
 * @param {number} userId - userId of the message sender 
 * @returns {object} returns Array of StudData filled with all the details of student from "StudentDataBase"
 */
function getStudentDetails(userId) {
    var searchString = userId.toString(); //"901685468";
    var sheet = SpreadsheetApp.openById(ssId).getSheetByName("StudentDataBase");
    var column = 6; //column Index   
    var columnValues = sheet.getRange(2, column, sheet.getLastRow()).getValues(); //1st is header row
    var searchResult = columnValues.findIndex(searchString); //Row Index - 2
    Logger.log(searchResult);
    var StudData = [];

    if (searchResult !== -1) {
        var range = sheet.getRange(searchResult + 1, 1, 1, 5);
        var values = range.getValues();
        for (var row in values) {
            for (var col in values[row]) {
                StudData.push(values[row][col]);
            }
        }
        Logger.log(typeof StudData);
        Logger.log(values);
        return StudData;
    }
}

/**
 * returns the name of the student from "StudenDataBase" sheet usign userId aka telegram_id in the sheet
 * @author Saquib Ansari <saquibr.comp_ioe@bkc.met.edu>
 * @param {number} userId - userId of the sender 
 * @returns {string} return the name of the student from "StudentDataBase" sheet
 */
function getNameByID(userId) {
    var searchString = userId.toString(); //"724866443";
    var sheet = SpreadsheetApp.openById(ssId).getSheetByName("StudentDataBase");
    var column = 6; //column Index   
    var columnValues = sheet.getRange(2, column, sheet.getLastRow()).getValues(); //1st is header row
    var searchResult = columnValues.findIndex(searchString); //Row Index - 2
    Logger.log(searchResult);

    if (searchResult !== -1) {
        var nameCell = sheet.getRange(searchResult + 1, 3);
        var name = nameCell.getValue();

        Logger.log(name);
        return name;
    }
}

/**
 * Check if userId exist in the the sheetName
 * @author Saquib Ansari <saquibr.comp_ioe@bkc.met.edu>
 * @param {number} userId - userId of the sender
 * @param {string} sheetName - sheetName in which we have to check if student exist or not 
 * @returns {boolean} true if student exist in the given sheet/ false if it doesn't
 */
function checkIfStudentExistInASheet(userId, sheetName) {
    var searchString = userId;
    var sheet = SpreadsheetApp.openById(ssId).getSheetByName(sheetName);
    var column = 6;
    var columnValues = sheet.getRange(2, column, sheet.getLastRow()).getValues(); //1st is header row
    var searchResult = columnValues.findIndex(searchString); //Row Index - 2
    Logger.log(searchResult);

    if (searchResult !== -1) {
        return true;
    }
    else {
        return false;
    }
}

/**
 * Checks if the name is present in the "PlacedStudentRec" sheet
 * @author Tejal Pathak <tejalp.comp_ioe@bkc.met.edu>
 * @param {string} name - name of the student to check
 * @returns {boolean} - true if present / false if not
 */
function checkIfStudentExistInPlaced(name) {
    var searchString = name;
    var sheet = SpreadsheetApp.openById(ssId).getSheetByName("PlacedStudentsRec");
    var column = 1;
    var columnValues = sheet.getRange(2, column, sheet.getLastRow()).getValues(); //1st is header row
    var searchResult = columnValues.findIndex(searchString); //Row Index - 2
    Logger.log(searchResult);

    if (searchResult !== -1) {
        return true;
    }
    else {
        return false;
    }
}

/**
 * Checks if given userId is admin by checking the first column of the "ADMIN" sheet
 * @author Tejal Pathak <tejalp.comp_ioe@bkc.met.edu>
 * @param {number} userId - userId to check if it has admin access
 * @returns {boolean} - true if the given userId is admin, false if it isn't
 */
function checkIfAdmin(userId) {
    var searchString = userId;
    var sheet = SpreadsheetApp.openById(ssId).getSheetByName("ADMIN");
    var column = 1;
    var columnValues = sheet.getRange(2, column, sheet.getLastRow()).getValues(); //1st is header row
    var searchResult = columnValues.findIndex(searchString); //Row Index - 2
    Logger.log(searchResult);

    if (searchResult !== -1) {
        return true;
    }
    else {
        return false;
    }
}

/**
 * To seach a element in the column of sheet
 * @author Saquib Ansari <saquibr.comp_ioe@bkc.met.edu>
 * @param search 
 * @returns {number} - index in the column
 */
Array.prototype.findIndex = function (search) {
    if (search == "") return false;
    for (var i = 0; i < this.length; i++)
        if (this[i] == search) return i + 1;

    return -1;
}
