/**
 * Main driver function - will add more elements as I go.
 */
function driverFunction() {
    getJobNumber();     //Gets the job number
    getUser();          //Gets operator initials
    getStartDate();
    outputInfo();       //Prints our info out - will be exporting to CSV best case scenario
    //
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