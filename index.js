const inquirer = require("inquirer")

function initiateApp(){
inquirer.prompt([
    {
        type: 'input',
        name: 'teamManagersName',
        message: 'Who is your team manager?',     
    },
    {
        type: 'input',
        name: 'employeeID',
         message: 'What is their employee ID?',
    },
    {
        type: 'input',
        name: 'email',
         message: 'What is their email?',
    },
    {
        type: 'input',
        name: 'officeNumber',
         message: 'What is their office number?',
    },
]).then((data) => {
    console.log(data)
    createTeam()
})
}

function createTeam(){
    inquirer.prompt([
        {
            type: 'list',
            name: 'teamMemberOption',
            message: 'Would you like to add an Engineer, Intern, or finish building team?',
        
            choices:['Engineer', 'Intern', 'Finish building team']
        }
    ]).then((data) => {
        console.log(data.teamMemberOption)
        if (data.teamMemberOption ===  'Engineer') {
            addEngineer() 
        }
        if (data.teamMemberOption ===  'Intern') {
            addIntern() 
        }
        if (data.teamMemberOption ===  'Finish building team') {
            finishTeam() 
        }
    })
}

function addEngineer() {
    console.log("Add Engineer")
}

function addIntern() {
    console.log("Add Intern")
}

function finishTeam() {
    console.log("Finish Team")
}

initiateApp()
