/**
 * Sheeting
 */
function selectSheeting(){
    console.log("sheeting");
    hideButtons();
    setSheetingH1();
}

/**
 * Fold Only
 */
function selectFoldOnly() {
    console.log("Fold Only");
    hideButtons();
}

/**
 * Self-Mailing
 */
function selectSelfMailer() {
    console.log("Self-mailer");
    hideButtons();
}

function hideButtons() {
    document.querySelectorAll('button').forEach(el => el.style.display = 'none');
}

function setSheetingH1() {
    let heading = document.getElementById('instruction-heading');
    heading.innerText = "Sheeting/Postcards";
}