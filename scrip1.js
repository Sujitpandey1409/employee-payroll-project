// thios script belongs to index1,style1
function handleAdd(event) {
  event.preventDefault(); // Prevent form submission
  window.location.href = "http://127.0.0.1:5500/index.html";
}
// Attach event listener to the add button button
document.getElementById("addButton").addEventListener("click", handleAdd);

// document.addEventListener("DOMContentLoaded", function () {
//     // Retrieve form data from local storage
//     const employeeData = JSON.parse(localStorage.getItem("employeeData"));

//     if (employeeData) {
//         // Get the table body element
//         const tableBody = document.getElementById("employeeTableBody");

//         // Loop through the employee data and create table rows
//         employeeData.forEach(function (employee, index) {
//             // Create a new table row
//             const row = document.createElement("tr");
//             // row.className='tBody';
//             if (index % 2 === 1) {
//                 row.classList.add("row-even");
//             }

//             // Create table cells and populate with data
//             const imageCell = document.createElement("td");
//             const nameCell = document.createElement("td");
//             const genderCell = document.createElement("td");
//             const departmentCell = document.createElement("td");
//             const salaryCell = document.createElement("td");
//             const startDateCell = document.createElement("td");
//             const actionCell = document.createElement("td");

//             // Set the content of the cells employee.profileImage
//             console.log(employee.department);
//             const image = document.createElement("img");
//             image.src = employee.profileImage;
//             imageCell.appendChild(image);
//             nameCell.textContent = employee.name;
//             genderCell.textContent = employee.gender;
//             departmentCell.textContent = employee.department;
//             salaryCell.textContent = employee.salary+"LPA";
//             startDateCell.textContent = employee.startDate;
//             actionCell.innerHTML = `<button class="edit">Edit</button> <button class="delete">Delete</button>`;

//             // Append cells to the row
//             row.appendChild(imageCell);
//             row.appendChild(nameCell);
//             row.appendChild(genderCell);
//             row.appendChild(departmentCell);
//             row.appendChild(salaryCell);
//             row.appendChild(startDateCell);
//             row.appendChild(actionCell);

//             // Append the row to the table body
//             tableBody.appendChild(row);
//         });
//     }
// });
document.addEventListener("DOMContentLoaded", function () {
  // Retrieve form data from local storage
  const employeeData = JSON.parse(localStorage.getItem("employeeData"));

  if (employeeData) {
    // Get the table body element
    const tableBody = document.getElementById("employeeTableBody");

    // Function to handle delete button click
    function handleDelete(event) {
      const row = event.target.closest("tr"); // Get the parent row of the clicked button
      const employeeId = row.getAttribute("data-id");

      // Remove the row from the table
      tableBody.removeChild(row);

      // Retrieve existing data from local storage
      const existingData = JSON.parse(localStorage.getItem("employeeData"));

      // Find the index of the employee in the data array based on the employee ID
      const index = existingData.findIndex(employee => employee.id === employeeId);

      // Remove the employee from the data array
      existingData.splice(index, 1);

      // Store the updated data in local storage
      localStorage.setItem("employeeData", JSON.stringify(existingData));
    }

    // Loop through the employee data and create table rows
    employeeData.forEach(function (employee, index) {
      // Create a new table row
      const row = document.createElement("tr");
      row.setAttribute("data-id", employee.id);
      if (index % 2 == 1) { row.classList.add("row-even") }

      // Create table cells and populate with data
      const imageCell = document.createElement("td");
      const nameCell = document.createElement("td");
      const genderCell = document.createElement("td");
      const departmentCell = document.createElement("td");
      const salaryCell = document.createElement("td");
      const startDateCell = document.createElement("td");
      const actionCell = document.createElement("td");

      // Populate the table cells with data
      imageCell.innerHTML = `<img src="${employee.profileImage}" alt="Profile Image" style="
      padding-left: 48%;">`;
      nameCell.textContent = employee.name;
      genderCell.textContent = employee.gender;
      departmentCell.textContent = employee.department;
      salaryCell.textContent = employee.salary+" LPA";
      startDateCell.textContent = employee.startDate;

      // Create the delete button
      const deleteButton = document.createElement("a");
      deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
      deleteButton.addEventListener("click", handleDelete);


      // Append the delete button to the action cell
      actionCell.appendChild(deleteButton);

      // Append the table cells to the row
      row.appendChild(imageCell);
      row.appendChild(nameCell);
      row.appendChild(genderCell);
      row.appendChild(departmentCell);
      row.appendChild(salaryCell);
      row.appendChild(startDateCell);
      row.appendChild(actionCell);

      // Append the row to the table body
      tableBody.appendChild(row);
    });
  }
});

