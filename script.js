
const rangeInput = document.getElementById("salary");
const sliderValue = document.getElementById("sliderValue");
rangeInput.value=0
// **Update the value display as the range input changes **
rangeInput.addEventListener("input", function () {
    sliderValue.textContent = rangeInput.value + " LPA";
});
// **inserting options to select values**
// Loop through the array and create options
insertOptionValues = (location, list) => {
    for (let i = 0; i < list.length; i++) {
        const option = document.createElement("option");
        option.value = list[i];
        option.text = list[i];
        location.appendChild(option);
    }
}
const dayElement = document.getElementById("day");
const monthElement = document.getElementById("month");
const yearElement = document.getElementById("year");
// Array of day names
const days = [];
for(i=1;i<=31;i++){days.push(i)}
const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const years = []
const startYear = 1990; // Change this to your desired starting year
const endYear = new Date().getFullYear(); // Get the current year 
for (let year = startYear; year <= endYear; year++) {
    years.push(year)
}
insertOptionValues(dayElement, days)
insertOptionValues(monthElement, months)
insertOptionValues(yearElement, years)

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve form data
    const name = document.getElementById("name").value;
    const gender = document.querySelector('input[name="radioGroup"]:checked').value;
    const departments = [];
    document.querySelectorAll('input[name="department"]:checked').forEach(function (checkbox) {
        departments.push(checkbox.value);
    });
    const salary = document.getElementById("salary").value;
    const startDate = document.getElementById("day").value + "-" + document.getElementById("month").value + "-" + document.getElementById("year").value;
    const profileImage = document.querySelector('input[name="imageGroup"]:checked').value;

    // Create an object to store employee data
    const employee = {
        name: name,
        gender: gender,
        department: departments,
        salary: salary,
        startDate: startDate,
        profileImage: profileImage
    };

    // Retrieve existing data from local storage
    const existingData = JSON.parse(localStorage.getItem("employeeData")) || [];

    // Add the new employee data to the existing data
    existingData.push(employee);

    // Store the updated data in local storage
    localStorage.setItem("employeeData", JSON.stringify(existingData));

    // Redirect to index1.html
    window.location.href = "http://127.0.0.1:5500/index1.html";
}

// Attach event listener to the form submit button
document.getElementById("submitButton").addEventListener("click", handleSubmit);
