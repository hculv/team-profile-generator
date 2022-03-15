const inquirer = require("inquirer");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const manager = require("./lib/manager");
const fs = require("fs");
const employees = [];

function addEmployee() {
    inquirer.prompt([{
        type: "input",
        name: "name",
        message: "What is the employee's name?",
    },
    {
        type: "list",
        name: "title",
        message: "What is the employee's title?",
        choices: [
            "Manager",
            "Intern",
            "Engineer"
        ],
     },
    {
        type: "input", 
        name: "id",     
        message: "What is the employee's ID?",
    },
    {
        type: "input", 
        name: "email",     
        message: "What is the employee's email address?",
    }])
    .then(function({name, title, id, email}) {
        let titleInfo = "";
        if (title === "Manager") {
            titleInfo = "Office Number";
        } else if (title === "Intern") {
            titleInfo = "School Name";
        } else {
            titleInfo = "GitHub URL";
        }
        inquirer.prompt([{
            message: `Enter temployee's ${titleInfo}`,
            name: "titleInfo"
        },
        {
            type: "list",
            name: "moreEmployees",
            message: "Would you like to add another employee?",
            choices: [
                "yes",
                "no"
            ],
        }])
        .then(function({titleInfo, moreEmployees}) {
            let newEmployee;
            if (title === "Engineer") {
                newEmployee = new engineer(id, name, email, titleInfo);
            } else if (title === "Intern") {
              newEmployee = new intern(id, name, email, titleInfo);
            } else {
              newEmployee = new manager(id, name, email, titleInfo);
            }
            employees.push(newEmployee);
            addHtml(newEmployee)
            .then(function() {
                if (moreEmployees === "yes") {
                    addEmployee();
                } else {
                    end();
                }
            });
            
        });
    });
}


function renderHtml() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">   <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <title>Document</title>
    </head>
        <body>
        <<div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-3">My Team</h1>
        </div>
      </div>
      <div class="container">
        <div class="row">
        `
    fs.writeFile("./dist/team.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });;
}

function addHtml(employee) {
    return new Promise(function(resolve, reject) {
        const name = employee.getName();
        const title = employee.getTitle();
        const id = employee.getId();
        const email = employee.getEmail();
        let data = "";
        if (title === "Manager") {
            const officePhone = employee.getOffice();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Manager</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item"> <a href="mailto:${email}"> Send Email </a></li>
                <li class="list-group-item"> Office Phone: ${officePhone}</li>
            </ul>
            </div>
        </div>`;
        } else if (title === "Intern") {
            const school = employee.getSchool();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Intern</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item"> <a href="mailto: ${email}"> Send Email </a></li>
                <li class="list-group-item">School: ${school}</li>
            </ul>
            </div>
        </div>`;
        } else {
            const gitHub = employee.getGithub();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Manager</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item"> <a href="mailto: ${email}"> Send Email </a></li>
                <li class="list-group-item"> <a href="${gitHub}"> Visit ${name}'s GitHub!</a></li>
            </ul>
            </div>
        </div>`
        }
        console.log("adding team member");
        fs.appendFile("./dist/team.html", data, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });
    
}

function end() {
    const html = ` 
 `;

    fs.appendFile("./dist/team.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });
}

function init() {
  renderHtml();
  addEmployee();
};
init();