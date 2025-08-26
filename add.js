function calculateGrade() {
    // Step 1: Get values from input fields and convert to numbers
    let sub1 = Number(document.getElementById("sub1").value);
    let sub2 = Number(document.getElementById("sub2").value);
    let sub3 = Number(document.getElementById("sub3").value);

    // Step 2: Validation (check empty OR invalid marks)
    if (
        isNaN(sub1) || isNaN(sub2) || isNaN(sub3) ||
        sub1 === "" || sub2 === "" || sub3 === "" ||
        sub1 < 0 || sub2 < 0 || sub3 < 0 ||
        sub1 > 100 || sub2 > 100 || sub3 > 100
    ) {
        alert("⚠️ Please enter valid marks between 0 and 100 for all subjects!");
        return; // Stop execution if validation fails
    }

    // Step 3: Calculate total & percentage
    let total = sub1 + sub2 + sub3;
    let percentage = (total / 300) * 100;

    // Step 4: Decide grade based on percentage
    let grade = "";
    if (percentage >= 80) {
        grade = "A+";
    } else if (percentage >= 70) {
        grade = "A";
    } else if (percentage >= 60) {
        grade = "B";
    } else if (percentage >= 50) {
        grade = "C";
    } else {
        grade = "Fail";
    }

    // Step 5: Display result on screen
    let resultBox = document.getElementById("result");
    resultBox.innerHTML = `
        <b>Total Marks:</b> ${total} <br>
        <b>Percentage:</b> ${percentage.toFixed(2)}% <br>
        <b>Grade:</b> ${grade}
    `;
}