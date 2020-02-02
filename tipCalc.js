//calc tip
const calcTip = () => {
    let billAmnt = document.getElementById("billAmount").value
    let qualService = document.getElementById("qualService").value
    let numOfDiners = document.getElementById("diners").value
    //checks for missed fields
    if (billAmnt === "" || qualService === 0) {
       return alert("Please Enter Values")
       console.log("hello")
    }
    // Check to see if input is empty or 1 or less
    if (numOfDiners === "" || numOfDiners <= 1 ) {
        numOfDiners = 1
        document.getElementById("each").style.display = "none"
    } 
        else { document.getElementById("each").style.display = "block"
        }
    // Calculate Tip
    let total = (billAmnt * qualService) / numOfDiners
        total = Math.round(total * 100)
    //Ensures 2 places always after decimal
        total = total.toFixed(2)
    //Display tip
        document.getElementById("totalTip").style.display = "block"
        document.getElementById("tip").innerHTML = total
    //Hide the tip amount on load
        document.getElementById("totalTip").style.display = "none"
        document.getElementById("each").style.display = "none"
    // on click to display
        document.getElementById("calculate").onclick = calcTip()
    }
    console.log(calcTip())