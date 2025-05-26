function myFunction() {
    //Print out job number and user values
    let inputValue = document.getElementById("job-number").value;
    let user = document.getElementById("user").value;
    
    //print out date and time
    let date = new Date();
    let shortDate = date.toLocaleDateString('en-US');
    //Get date in XX/XX/XXXX format 
    //console.log(shortDate);
    console.log(shortDate + " Job: " +inputValue+ " User: " + user);
}