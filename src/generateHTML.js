// function addManager(manager) {
//     return`${manager.getName()}
//     ${manager.getRole()}
//     ${manager.getId()}
//     ${manager.getEmail()}
//     ${manager.getRole()}
//     ${manager.getOfficeNumber()}`;
// }


function generateHTML(data) {
   return `${JSON.stringify(data)}`
};

module.exports = generateHTML;