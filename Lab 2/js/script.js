var $ = function(e){
    "use strict";
    return window.document.getElementById(e);
}
let arrEmployees = [
    [12345678, "Naman Mehta", 1111, "n@gmail.com", "Executive"],
    [87654321, "Naman Gala", 2222, "na@gmail.com", "Administrative"],
    [85296374, "Naman Shah", 3333, "nam@gmail.com", "Sales"],
    [74185214, "Smit Parekh", 4444, "s@gmail.com", "Marketing"],
    [02588520, "Smit Vaghela", 5555, "sm@gmail.com", "Quality Assurance"]
]

if (localStorage.getItem('employees') !== null) {
    arrEmployees = JSON.parse(localStorage.getItem('employees'))
}

let form        = document.getElementById('addForm')
let empTable    = document.getElementById('empTable')
let empCount    = document.getElementById('empCount')

buildGrid()

// ADD EMPLOYEE
function addEmployee(arrEmployees){
    let empID       = parseInt(document.getElementById('id').value)
    let empName     = document.getElementById('name').value
    let empExt      = parseInt(document.getElementById('extension').value)
    let empEmail    = document.getElementById('email').value
    let empDept     = document.getElementById('department').value
    let arrNewEmployee = [empID, empName, empExt, empEmail, empDept]
    arrEmployees.push(arrNewEmployee)
}
form.addEventListener('submit', (e) => {
    e.preventDefault()
    addEmployee(arrEmployees);
    buildGrid()
    form.reset()
    form.id.focus()
})

// REMOVE EMPLOYEE
function removeEmployee(arrEmployees, rowIndex) {
    arrEmployees.splice(rowIndex - 1, 1)
}

  empTable.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this employee?')) {
            let rowIndex = e.target.parentNode.parentNode.rowIndex
            removeEmployee(arrEmployees, rowIndex);
            buildGrid()
        }
    }
})

//build
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    empTable.lastElementChild.remove()
    // REBUILD THE TBODY FROM SCRATCH
    let tbody = document.createElement('tbody')
    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    for (let employee of arrEmployees) {
        tbody.innerHTML += 
        `
        <tr>
            <td>${employee[0]}</td>
            <td>${employee[1]}</td>
            <td>${employee[2]}</td>
            <td>${employee[3]}</td>
            <td>${employee[4]}</td>
            <td><button class="btn btn-sm btn-danger delete">Delete</button></td>
        </tr>
        `
    }
    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.appendChild(tbody)
    // UPDATE EMPLOYEE COUNT
    empCount.value = `(${arrEmployees.length})`
    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(arrEmployees))
}