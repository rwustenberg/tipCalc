//calc tip
const calcTip = () => {
    let billAmnt = 
document.getElementById("billAmount").value
    let qualService = 
document.getElementById("qualService").value
    let numOfDiners = 
document.getElementById("diners").value
    
    //checks for missed fields
    if (billAmnt === "" || qualService === 0) {
        console.log("No Values Entered in Form")
        return alert("Please Enter Values")
    }
    // Check to see if input is empty or 1 or less
    if (numOfDiners === "" || numOfDiners <= 1 ) {
        numOfDiners = 1
        document.getElementById("each").style.display = "none"
    } 
    else {
        document.getElementById("each").style.display = "block"
    }

    // Calculate Tip
    let total = (billAmnt * qualService) / numOfDiners
    //Ensures 2 places always after decimal
    total = Math.round(total).toFixed(2)
    console.log("the Total is: " + total)

    //Display tip
    document.getElementById("totalTip").style.display = "block"
    document.getElementById("tip").innerHTML = total
}