function calculateGrade() {
    let sub1 = Number(document.getElementById("sub1").value)
    let sub2 = Number(document.getElementById("sub1").value)
    let sub3 = Number(document.getElementById("sub1").value)



    // Step 2: Validation 

    if (sub1 === "" || sub2 === "" || sub3 === "" || sub1 > 100 || sub2 > 100 || sub3 > 100) {
        alert("Please enter valid marks (0-100) for all subjects!");
    }

    // Step 3: Total & Percentage calculate karna
    let total = sub1 + sub2 + sub3
    let percentage = (total / 300) * 100

    // Step 4: Grade decide karna (conditions)


    let grade = "";

    if (percentage >= 80) {
        grade = "A+"
    }
    else if (percentage >= 70) {
        grade = "A"
    }
    else if (percentage >= 60) {
        grade = "B"
    }
    else if (percentage >= 50) {
        grade = "C"
    } else {
        grade = "Fail"
    }

    let resultBox = document.getElementById("result")
    resultBox.innerHTML = `total Marks : <b>${total}</b> <br>
 Percentage: <b>${percentage.toFixed(2)}%</b> <br>
Grade: <b>${grade}</b>`
}