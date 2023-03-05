// Render all employee cards from teamArray
function renderEmployeeCards(data) {
    
    // Render Manager card
    function renderManager(manager) {
        return `
            <div class="col">
                <div class="card h-100 mx-auto" style="min-width: 18rem; max-width: 22rem;">
                    <div class="card-header text-white bg-primary rounded-top p-4">
                        <h2 class="card-title">${manager.getName()}</h2>
                        <h3 class="card-title"><i class="fa-solid fa-mug-hot pe-3"></i>Manager</h3>
                    </div>
                    <div class="card-body bg-light rounded-bottom">
                        <ul class="list-group px-2 py-4">
                            <li class="list-group-item">ID: ${manager.getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">jared@fakemail.com</a></li>
                            <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
                        </ul>
                    </div>
                </div>
            </div>`;
    };

    // Render Engineer cards
    function renderEngineer(engineer) {
        return `
            <div class="col">
                <div class="card h-100 mx-auto" style="min-width: 18rem; max-width: 22rem;">
                    <div class="card-header text-white bg-primary rounded-top p-4">
                        <h2 class="card-title">${engineer.getName()}</h2>
                        <h3 class="card-title"><i class="fa-solid fa-gears pe-3"></i>Engineer</h3>
                    </div>
                    <div class="card-body bg-light rounded-bottom">
                        <ul class="list-group px-2 py-4">
                            <li class="list-group-item">ID: ${engineer.getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGitHub()}" target="_blank">${engineer.getGitHub()}</a></li>
                        </ul>
                    </div>
                </div>
            </div>`;
    };

    // Render Intern Cards
    function renderIntern (intern) {
        return `
            <div class="col">
                <div class="card h-100 mx-auto" style="min-width: 18rem; max-width: 22rem;">
                    <div class="card-header text-white bg-primary rounded-top p-4">
                        <h2 class="card-title">${intern.getName()}</h2>
                        <h3 class="card-title"><i class="fa-solid fa-graduation-cap pe-3"></i>Intern</h3>
                    </div>
                    <div class="card-body bg-light rounded-bottom">
                        <ul class="list-group px-2 py-4">
                            <li class="list-group-item">ID: ${intern.getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                            <li class="list-group-item">School: ${intern.getSchool()}</li>
                        </ul>
                    </div>
                </div>
            </div>`;
    };

    const role = data.filter(employee => employee.getRole())
    switch (role) {
        case 'Manager':
            forEach((manager) => {renderManager(manager)});
            break;
        default:
            break;
    }
}


function generateHTML(data) {
   return `
<!DOCTYPE html>
<html lang="en">
   
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
       integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/9404c85ef8.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./assets/style.css">
    <title>Team Profile</title>
</head>
   
<body>
    <!-- HEADER -->
    <header class="container-fluid bg-danger text-light mb-5 p-5 text-center">
        <h1>My Team</h1>
    </header>
   
    <!-- CARD SECTION-->
    <section class="container pt-5 my-5">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
           ${renderEmployeeCards(data)}
        </div>   
    </section>
</body>
   
</html>`;
};

module.exports = generateHTML;