//Secret Society
/*Find the name of a secret society based on the first letter of each member's name.
 

Examples:
- `secretName(["Esperanza", "Franco", "Nia"])` should return `'EFN'`.
- `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` should return `'CJMPRR'`.
- `secretName(['Harry', 'Ron', 'Hermione'])` should return `'HHR'`.*/

//const secretName = ["Esperanza", "Franco", "Nia"];
const secretName = ['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'];
let sN = [];
for (let i=0;i<secretName.length;i++){
    sN.push(secretName[i].charAt(0));
}console.log(sN.join(""))