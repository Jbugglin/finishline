/**
 * These functions will take the values from the user input and
 *  print them out asa test. This function will then call the function 
 *   to clear out the inputs as the submit button is clicked. 
 */
function printout() {
    let jobNumber = document.getElementById('job-number').value;
    let userInitial = document.getElementById('user-initials').value;
    clearInput();
    console.log("Job#: " +jobNumber);
    console.log("User: " +userInitial);
    getShortDate();
    getTime();
}

function clearInput() {
    document.getElementById('job-number').value = '';
    document.getElementById('user-initials').value = '';
}

/**
 * These Functions will get our starting time and date for reporting 
 *  purposes
 */
function getShortDate(){
    let currentDate = new Date().toLocaleDateString('en-US');
    console.log("Short Date: " +currentDate);
}

function getTime(){
    let date = new Date();

    //Get Hours - 24H format
    let hours = date.getHours();

    //Get minutes
    let minutes = date.getMinutes();

    //Output
    console.log("Start Time: " +hours+ ":" +minutes);
}

/**
 * On Submit, hide the logging details.
 */