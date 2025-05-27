/**
 * Main driver function - will add more elements as I go.
 */
function driverFunction() {
    getJobNumber();     //Gets the job number
    getUser();
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

function outputInfo() {
    console.log(getJobNumber() + ' ' + getUser());
}