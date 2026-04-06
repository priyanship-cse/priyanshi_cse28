
    let employees = [];

    function addEmployee() {
        let name = document.getElementById("name").value.trim();
        let empId = document.getElementById("empId").value.trim();
        let salary = parseFloat(document.getElementById("salary").value);
        let dept = document.getElementById("dept").value.trim();

        // Validation
        if (name === "" || empId === "" || isNaN(salary) || dept === "") {
            alert("Please fill all fields properly");
            return;
        }

        // Object
        let emp = {
            name: name,
            id: empId,
            salary: salary,
            department: dept
        };

        employees.push(emp);

        alert("Employee Added Successfully!");

        clearFields();
        displayEmployees();
    }

    function clearFields() {
        document.getElementById("name").value = "";
        document.getElementById("empId").value = "";
        document.getElementById("salary").value = "";
        document.getElementById("dept").value = "";
    }

    function displayEmployees() {
        let output = "<h3>All Employees</h3>";

        employees.forEach(emp => {
            output += `
                <p>
                    Name: ${emp.name} |
                    ID: ${emp.id} |
                    Salary: ${emp.salary} |
                    Dept: ${emp.department}
                </p>
            `;
        });

        document.getElementById("result").innerHTML = output;
    }


       
    
