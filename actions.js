/**
 * Main driver function - will add more elements as I go.
 */
function driverFunction() {
    getJobNumber();     //Gets the job number
    getUser();          //Gets operator initials
    getStartDate();
    outputInfo();       //Prints our info out 
    hideLogin();
}

function wtStart() {
    displayCheckboxValue();
}

function getJobNumber() {
    let jobNumber = document.getElementById("job-number").value;
    return jobNumber;
}

function getUser() {
    let user = document.getElementById("user").value;
    return user;
}

function getStartDate() {
    let startDate = new Date().toLocaleDateString('en-US');
    return startDate;
}

function getStartTime() {
    //Need hours and minutes in hh:mm am/pm format
    let startTime = new Date();
    
    let timeStamp = startTime.toLocaleString([], {
        hour: "2-digit",
        minute: "2-digit",
    });
    return timeStamp;
}

function outputInfo() {
    console.log("Date: " +getStartDate());
    console.log("Time: " +getStartTime());
    console.log("Job#: " +getJobNumber());
    console.log("Op-initials: " +getUser());

}

function hideLogin() {
    let hideUserLogin = document.getElementById("user-login");
    hideUserLogin.style.display = 'none';
    displayProcess();
}

function displayProcess() {
    document.getElementById("process-select").style.display = "block";;
}

function displayCheckboxValue() {
    let x = document.getElementById('user-ack').value;
    console.log(x);
}
/**
 *  Show/Hide flow menus
 */
function showSheetFlow() {
    document.getElementById('sheet-flow').style.display = 'block';
    hideProcess();
}

function showFoldOnly() {
    document.getElementById('fold-only').style.display = 'block';
    hideProcess();
}

function showFoldGlue() {
    document.getElementById('fold-glue').style.display = 'block';
    hideProcess();
}

function hideProcess() {
    document.getElementById('process-select').style.display = 'none';
}