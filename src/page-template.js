// create the team
const generateTeam = (team) => {
  // create the manager html
  const generateManager = (manager) => {
    return `
        <div class= "card">
        <div class= "manager">
            <h2 class="employee-name">${manager.getName()}</h2>
            <h3 class="employee-role"> ${manager.getRole()}</h3>
        </div>
        <div class="info">
            <ul class="info-list">
                <li class="info-item">ID: ${manager.getId()}</li>
                <li class="info-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="info-item">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
        `;
  };

  // create the html for engineers
  const generateEngineer = (engineer) => {
    return `
        <div class= "card">
    <div class= "engineer">
        <h2 class= "employee-name">${engineer.getName()}</h2>
        <h3 class= "employee-role"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
    </div>
    <div class="info">
        <ul class="info-list">
            <li class="info-item">ID: ${engineer.getId()}</li>
            <li class="info-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="info-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
        </ul>
    </div>
</div>
        `;
  };

  // create the html for interns
  const generateIntern = (intern) => {
    return `
        <div class="card">
    <div class="intern">
        <h2 class="employee-name">${intern.getName()}</h2>
        <h3 class="employee-role"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
    </div>
    <div class="info">
        <ul class="info-list">
            <li class="info-item">ID: ${intern.getId()}</li>
            <li class="info-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="info-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>
        `;
  };

  const html = [];

  html.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManager(manager))
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => generateEngineer(engineer))
      .join("")
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateIntern(intern))
      .join("")
  );

  return html.join("");
};

// export function to generate entire page
module.exports = (team) => {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Team Generator</title>
  
    <link rel="stylesheet" href="../dist/style.css">
    
</head>
<body>
    <h1 class="main-title">My Team</h1>
    <div> 
        ${generateTeam(team)}
    </div>
     
</body>
</html>
    `;
};
