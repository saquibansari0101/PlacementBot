# π©βπ» Placement Bot π¨βπ» 

<b><i>π§¨ Creator'sπ§¨ </i></b>

1] <a href="https://github.com/saquibansari0101">Saquib Ansari</a> (Developer) <br>
2] <a href="https://github.com/AbhishekA7">Abhishek Palve</a> (Co-ordinator) <br>
3] <a href="https://github.com/TejalPathak231">Tejal Pathak </a> (Developer)<br>

<b>Guided by</b> - Prof. Vaibhav Dhabhade
<hr>

<b><i>  π Purpose for the project π  </i></b><br>
- To reduce the time required for maintaining the placement record .
<hr>


<b><i>π Explaining Function's of the Programπ </i></b><br>

- #### Initial Commands required for functioning of bot 
```bash
var token = "";     // 1. FILL IN YOUR BOT TOKEN
var telegramUrl = "" + token; // BOT API
var webAppUrl = ""; // 2. FILL IN YOUR GOOGLE WEB APP ADDRESS
var ssId = "";      // 3. FILL IN THE ID OF YOUR SPREADSHEET
var adminID = [""];   // 4. Fill in your own Telegram ID for debugging
```
These Commands are required for the functioning of the bot

- #### About text function π

```bash
const aboutText = `<b>ββββββββγ π¨βπ» PLACEMENT BOT π·ββοΈ γ</b>
β­ββββββ <b><i>Created By :</i></b> ββββββ
β
β <a href="https://github.com/saquibansari0101">βΈΈ Saquib Akthar</a>
β <a href="https://github.com/AbhishekA7"> Abhishek Palve</a>
β <a href="https://github.com/TejalPathak23"> Tejal Pathak</a>
β
ββ   <b><i>Approved By : </i></b>
β
β <a href="https://www.linkedin.com/in/vdabhade/"> Professor Vaibhav Dabhade</a>
β
ββ  <b><i>GitHub Repo :</i></b>
β
βββ<a href="https://github.com/saquibansari0101/TelegramBotForGoogleSheet"> TelegramBotForGoogleSheet</a>
β
β°ββγv1.0.0 refer docs on GitHub for more infoγ
`;
  
```
This function contains information about the creators of the bot

- #### Help Text function π


```bash
β­ββ γ<b>π’ Help Commands ! π’</b>γ  
β
β /addstudent :
βCommand to add new student to the application tracking sheet
β<i> usecase β: </i>
β/addstudent division roll_no contact_no email first_name last_name
β<i>  Example :  </i>
β/addstudent A 68 9876543210 tejalp.comp_ioe@bkc.met.edu Tejal Pathak
β
β/addrow :
βCommand to add row to the application tracking sheet
β<i>usecase :</i>
β/addrow @sheet_name (yes or no) reason_if_no
β<i>Example :</i>
β/addrow @TCS yes
β/addrow @WIPRO no I am aiming for higher studies
β
β /placed :
βCommand to add where student have placed
β<i>usecase :</i>
β/placed company_name
β<i>Example:</i>
β/placed GOOGLE
β
β /help :
βCommand to ask for help
β<i>usecase :</i>
β/help message
β<i>Example:</i>
β/help Hi! I am unable to understand these commands can you help me
β
β /addsheet :
βCommand to add sheet to the application tracking sheet
β<i>Example :</i>
β/addsheet @new_sheet_name
βnew_sheet_name - name of new sheet to be added
β<i>usecase :</i>
β/addsheet @WINJIT
β°ββββ` ;
 
```
This Function contains information about all the commands we can use in bot

- #### Message Strings Function π


```bash
 const newsheetNotAdminErrorMessage = `
β­ββ γ<b>π΄ Error π΄</b>γ
β  
β <b>You are not an admin</b>
β
β°ββ
`;

const newsheetArgumentErrorMessage = `
β­ββββββββγ<b>π΄ Error π΄</b>γ
β 
β PleaseπββοΈ check the arguments provided by you or you can refer π»*/help*
β
β°ββββββββ
`;

const newsheetSuccessfulMessage = `
β­ββββββββγ<b>π’ Successfull π’</b>γ
β 
β New Sheet Created π and is ready for you to take record in it
β
β°ββββββββ
`;

const placedArgumentErrorMessage = `
β­ββββββββγ<b>π΄ Invalid Usecase π΄</b>γ
β 
β */placed* command used with invalid usecaseπ§¨! use */help* to get the example of valid use case β.
β
β°ββββββββ
`;

const placedAlreadyAddedMessage = `
β­ββββββββγ<b>π’ Placed π’</b>γ
β 
β π¨ββοΈπ©βπ« You are already placed!π©βπ§π©βπ»
β
β°ββββββββ
`;

const placedSuccessfulMessage = `
β­ββββββββγ<b>π’ Successfully Placed π’</b>γ
β 
β Thanksπ° for letting us know that you are placed byπ campus placement programme !
β
β°ββββββββ
`;

const studentArgumentErrorMessage = `
β­ββββββββγ<b>π΄ Error π΄</b>γ
β 
β Incorrect commandπ§¨, Please write the command as suggested in the HELP section !
β
β°ββββββββ
`;

const studentAlreadyPresentMessage = `
β­ββββββββγ<b>π’ Already Present π’</b>γ 
β
β β¨ Student Already Present In DataBase β if you want to update details contact co-ordinators 
β
β°ββββββββ
`;

const studentAddedSuccessfullyMessage = `
β­ββββββββγ<b>π’ Successfull π’</b>γ
β 
β β¨Student Successfully added in the DataBase β
β
β°ββββββββ
`;

const addrowSuccessfulMessage = `
β­ββββββββγ<b>π’ Successfull π’</b>γ 
β
β Congrats π! The Record is successfully Added π!
β
β°ββββββββ
`;

const addrowAlreadySubmittedMessage = `
β­ββββββββγ<b>π‘ Must Ask ! π‘</b>γ
β 
β π You have already submitted your record, if you want to change record ask <a href="tg://user?id=724866443">Abhishek Palve</a>π§
β
β°ββββββββ
`;

const addrowStudentNotInData = `
β­ββββββββγ<b>π‘ Instruction π‘</b>γ
β 
β π’ First Please Register Your Details in Database.
β
β°ββββββββ
`;

const addrowArgumentErrorMessage = `
β­ββββββββγ<b>π΄ Error π΄</b>γ
β 
β π§¨Incorrect command, Please write the command as suggested in the <b>/help</b> section!
β
β°ββββββββ
`;

const invalidArgumentErrorMessageUniversal = `
β­ββββββββγ<b>π΄ Error π΄</b>γ 
β
β Invalid command βΉ, π§¨use /help to get help
β
β°ββββββββ `;

```
This function contains information about all the strings messages used in the bot .

- #### Get Me Function π

```bash
 function getMe() {
    var url = telegramUrl + "/getMe";
    var response = UrlFetchApp.fetch(url);
    Logger.log(response.getContentText());


}
```
Used to fetch the url.

- #### setWebhook Function π

```bash
 /**
 * function to set webhook for the bot
 * @returns {void}
 */
function setWebhook() {
    var url = telegramUrl + "/setWebhook?url=" + webAppUrl;
    var response = UrlFetchApp.fetch(url);
    Logger.log(response.getContentText());
}
```
- #### sendText Function π

```bash
function sendText(chatId, text, replyToMessageId) {
    if (typeof replyToMessageId !== "undefined")
        var url = telegramUrl + "/sendMessage?chat_id=" + chatId + "&text=" + encodeURIComponent(text) + "&parse_mode=HTML&reply_to_message_id=" + replyToMessageId;
    else
        var url = telegramUrl + "/sendMessage?chat_id=" + chatId + "&text=" + encodeURIComponent(text) + "&parse_mode=HTML";
    var response = UrlFetchApp.fetch(url);
    Logger.log(response.getContentText());
}
 
``` 
Used to parse the messages.

- #### doPost Function π

```bash
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
        sendText(adminID[0], "π΄ Code Phat Gaya Bro Uth Ja Aur Log Check Kar π΄ ! Ispe Phata hai \n" + text + "\n" + userName);
    }
}

```
- #### addRow Function π
 ```bash
 function addRow(text, chatId, userId, replyToMessageId) {
    var sheetName = text.split(" ")[1];
    sheetName = sheetName.slice(1);  //TCS

    sendText(chatId, "β­ββββββββγ<b>π‘  Update π‘ </b>γ\nβ\nβ π Updating details of " + sheetName + "\nwait for a moment\nβ\nβ°ββββββββ", replyToMessageId);

    var sheet = SpreadsheetApp.openById(ssId).getSheetByName(sheetName) ? SpreadsheetApp.openById(ssId).getSheetByName(sheetName) : sendText(chatId, "Sheet not found", replyToMessageId);
    if (/\/addrow @\w+ (?:yes|Yes|yEs|YEs|yeS|YeS|yES|YES|no|No|nO|NO)/.test(text) || /\/addrow@be_spreadsheet_bot @\w+ (?:yes|Yes|yEs|YEs|yeS|YeS|yES|YES|no|No|nO|NO)/.test(text)) {
        if (checkIfStudentExistInASheet(userId, "StudentDataBase", chatId) && !checkIfStudentExistInASheet(userId, sheetName, chatId)) {
            var studDetails = getStudentDetails(userId); // studDetails ["B",	"59",	"SAQUIB AKHTAR",	"9168594565",	"asaquib454@gmail.com",	"901685468"]
            sendText(chatId, "chalra hai idhar");
            var decision = text.split(" ")[2];

            decision = decision.toUpperCase(); //yes uppercase -> YES


            studDetails.push(userId);  // ["B",	"59",	"SAQUIB AKHTAR",	"9168594565",	"asaquib454@gmail.com",	"901685468"]

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

```
Function to add new row in the bot.
  
- #### newsheet Function π
```bash
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

 
```
Function to add new sheet in the bot.

- #### placed Function π
```bash
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
        sendText(chatId, "β­ββββββββγ<b>π΄ Error π΄</b>γ\nβ\nβ π Please First Add Your Details\nβ Using <b>/addstudent</b>\nβ and try again\nβ\nβ°ββββββββ", replyToMessageId);
    }
    else {
        sendText(chatId, placedArgumentErrorMessage, replyToMessageId);
    }
}

```


- #### get Student Details Function π

```bash
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

 
```
- #### check If Student Exist In Placed Function π
```bash
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
```

# π Connect Telegram Bot to Google Sheets π
Connect Telegram Bot to Google Sheets via Google Apps Scripts. This video explains all steps in detail: https://www.youtube.com/watch?v=24EyItKfm50&list=PLGGHwNnXfci86dfqIVLc5l391SPk-RX1F

## Step 1: Setting up the Telegram Bot β
- Go to [Telegram for Web](https://web.telegram.org/)
- Search for BothFather
- Use /newbot to create a bot. This will give you an access token to use in your script. For further Telegram information, RTFM at (https://core.telegram.org/bots/api)

## Step 2: Setting up Google Apps Script β
Create a new Google Sheet in Google Drive. Go to script editor (Tools > Script Editor) and paste the code into the newly created code.gs file. Once done, deply the script as a web application. You will get a URL to use in the code.gs file.

- Run `getMe()` and `setWebhook()` to initialise the integration.

## Step 3: Add your Spreadsheet ID to the Script β
Find your Google Sheet ID in the URL: `https://docs.google.com/spreadsheets/d/{ID_HERE}/edit` and past it into the code.gs file.

## Step 4: Add your Telegram ID to the Script for error catching β
After you seccusfully communicated with the bot, your chat ID should be in the recording spreadsheet entries. Copy and past this into the `adminID` variable in the script

# Bot Preface 
- Code of the bot
![Code](https://user-images.githubusercontent.com/84653921/133888491-e5f3c735-6702-4bce-a050-99bb127dec67.png)
- Working of the bot
![Telegram](https://user-images.githubusercontent.com/84653921/133888498-dcf84284-50d4-4bac-b14a-288af7b3f949.png)
- Final Output of the bot
![sheet](https://user-images.githubusercontent.com/84653921/133888502-db767664-7c75-4c5e-a926-54f73ffac0c1.png)



π Thanks π
