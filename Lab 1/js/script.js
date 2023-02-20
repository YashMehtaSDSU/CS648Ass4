// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
const employeeCountOutput = document.querySelector('#employeeCountOutput');
let employeeCount = 0;

// ADD EMPLOYEE
const employees = document.querySelector('#employees');
const addForm = document.querySelector('#addForm');
addForm.addEventListener('submit', (e) => {
    event.preventDefault();
    const id = document.getElementById("id").value;
	const name = document.getElementById("name").value;
	const extension = document.getElementById("extension").value;
	const email = document.getElementById("email").value;
	const department = document.getElementById("department").value;

  const newEmployeeRow = document.createElement('tr');
  newEmployeeRow.innerHTML = `
    <td>${id}</td>
    <td>${name}</td>
    <td>${extension}</td>
    <td>${email}</td>
    <td>${department}</td>
    <td>
      <button class="btn btn-danger btn-sm deleteEmployeeBtn">Delete</button>
    </td>
  `;
  employees.appendChild(newEmployeeRow);
  
  addForm.reset();
  addForm.elements.id.focus();
  employeeCount++;
  var output = document.getElementById("empCount");
  output.value = employeeCount;


});
// VIEW
const employeesT = document.querySelector('#employees');

function addEmployeeToTable(id, name, extension, email, department) {
  const newRow = employeesT.insertRow();
  const idCell = newRow.insertCell();
  const nameCell = newRow.insertCell();
  const extCell = newRow.insertCell();
  const emailCell = newRow.insertCell();
  const deptCell = newRow.insertCell();

  idCell.appendChild(document.createTextNode(id));
  nameCell.appendChild(document.createTextNode(name));
  extCell.appendChild(document.createTextNode(extension));
  emailCell.appendChild(document.createTextNode(email));
  deptCell.appendChild(document.createTextNode(department));

  const viewButton = document.createElement('button');
  viewButton.classList.add('btn', 'btn-primary', 'btn-sm', 'viewEmployeeBtn');
  viewButton.textContent = 'View';

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('btn', 'btn-danger', 'btn-sm', 'deleteEmployeeBtn');
  deleteButton.textContent = 'Delete';

  actionsCell.appendChild(viewButton);
  actionsCell.appendChild(deleteButton);
}

// DELETE EMPLOYEE
const employeesTT = document.querySelector('#employees');

employeesTT.addEventListener('click', (e) => {
  if (e.target.classList.contains('deleteEmployeeBtn')) {
    const shouldDelete = confirm('Are you sure you want to delete this employee?');
    if (shouldDelete) {
      const row = e.target.closest('tr');
      employeesTT.deleteRow(row.rowIndex);
      employeeCount--;
      var output = document.getElementById("empCount");
      output.value = employeeCount;
    }
  }
});