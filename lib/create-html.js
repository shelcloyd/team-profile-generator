const createTeam = (team) => {
    const teamData = [];

    const createManager = manager => {
        let htmlManager =
            `<div class="box">
                <div class="subBox">
                    <h5 class="header">${manager.name} : Manager</h5> 
                </div>
                <ul class="info">
                    <li class="list">Employee ID : ${manager.id}</li>
                    <li class="list">Email : <a href="mailto:${manager.email}">${manager.email}</a></li>
                    <li class="list">Office : ${manager.office}</li>
                </ul>
            </div>`;
        teamData.push(htmlManager);
    };

    const createEngineer = engineer => {
        let htmlEngineer =
          `<div class="box">
                <div class="subBox">
                    <h5 class="header">${engineer.name} : Engineer</h5> 
                </div>
                <ul class="info">
                    <li class="list">Employee ID : ${engineer.id}</li>
                    <li class="list">Email : <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                    <li class="list">GitHub Username : <a target="_blank" href="https://github.com/${engineer.git}">${engineer.git}</a></li>
                </ul>
            </div>`;
        teamData.push(htmlEngineer);
    };

    const createIntern = intern => {
        let htmlIntern =
            `<div class="box">
                <div class="subBox">
                     <h5 class="header">${intern.name} : Intern</h5> 
                 </div>
                <ul class="info">
                    <li class="list">Employee ID : ${intern.id}</li>
                    <li class="list">Email : <a href="mailto:${intern.email}">${intern.email}</a></li>
                    <li class="list">School : ${intern.school}</li>
                </ul>
            </div>`;
        teamData.push(htmlIntern);
    };

    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === 'Manager') {
            createManager(team[i]);
        } else if (team[i].getRole() === 'Engineer') {
            createEngineer(team[i]);
        } else if (team[i].getRole() === 'Intern') {
            createIntern(team[i]);
        }
    };
    return teamData.join('');
};

module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Teamwork Makes the Dream Work</title>

    <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Roboto:wght@300;700&display=swap" rel="stylesheet">
</head>
<body>
    <header>
        <h1 id="teamName">The Dream Team!</h1>
    </header>

    <main id="box">
        ${createTeam(team)}
    </main>
    
</body>
</html>`
}