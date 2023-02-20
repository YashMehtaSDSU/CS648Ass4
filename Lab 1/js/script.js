let employeeCount = 0; //for count

//add
const employees = document.querySelector('#employees');
const addForm = document.querySelector('#addForm');
addForm.addEventListener('submit', (e) => {
  event.preventDefault();

  addNewEmployee();
  
  addForm.reset();
  addForm.elements.id.focus();
  employeeCount++;
  var output = document.getElementById("empCount");
  output.value = employeeCount;


});

// VIEW
const employeesT = document.querySelector('#employees');

function addNewEmployee() {
  const id = document.getElementById("id").value;
	const name = document.getElementById("name").value;
	const extension = document.getElementById("extension").value;
	const email = document.getElementById("email").value;
	const department = document.getElementById("department").value;

  const newRow = employeesT.insertRow();
  const idCell = newRow.insertCell();
  const nameCell = newRow.insertCell();
  const extCell = newRow.insertCell();
  const emailCell = newRow.insertCell();
  const deptCell = newRow.insertCell();
  const deleteButtonCell = newRow.insertCell();

  idCell.appendChild(document.createTextNode(id));
  nameCell.appendChild(document.createTextNode(name));
  extCell.appendChild(document.createTextNode(extension));
  emailCell.appendChild(document.createTextNode(email));
  deptCell.appendChild(document.createTextNode(department));

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('btn', 'btn-danger', 'btn-sm', 'uniqueClassForDelete');
  deleteButton.textContent = 'Delete';

  deleteButtonCell.appendChild(deleteButton);
}

// DELETE EMPLOYEE
const employeesTT = document.querySelector('#employees');

employeesTT.addEventListener('click', (e) => {
  if (e.target.classList.contains('uniqueClassForDelete')) {
    const shouldDelete = confirm('Are you sure you want to delete?');

    if (shouldDelete) {
      const row = e.target.closest('tr');
      employeesTT.deleteRow(row.rowIndex);
      employeeCount--;
      var output = document.getElementById("empCount");
      output.value = employeeCount;
    }
  }
});