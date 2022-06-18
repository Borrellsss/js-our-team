// BONUS:
// Utilizzare gli input presenti nella pagina per permettere
// all'utente di aggiungere nuovi membri del team: cliccando
// sul pulsante "add" viene creato un nuovo oggetto, il quale
// viene inserito nell'array iniziale e viene stampata una nuova
// card con tutte le informazioni inserite dall'utente.

// *FUNCTIONS*
// *dichiaro la funzione che richiamerò al click sul "button"*
// *con id "addMemberButton" che prenderà la "value" delle input*
// *e crea un nuovo "object" (membro del team). La funzione poi,*
// *richiamando a sua volta la funzione "printNewMember" va ad*
// *inserire i dati ottenuti in una nuova card*
function addNewMember() {
    newMemberName = inputName.value;
    // !CONSOLE.LOG DI DEBUG!
    console.log(newMemberName);

    newMemberRole = inputRole.value;
    // !CONSOLE.LOG DI DEBUG!
    console.log(newMemberRole);

    newMemberPhoto = inputImage.value;
    // !CONSOLE.LOG DI DEBUG!
    console.log(newMemberPhoto);
    
    // *metodo 1*
    // newMember["name"] = newMemberName;
    // newMember["role"] = newMemberRole;
    // newMember["photo"] = newMemberPhoto;

    // *metodo 2*
    newMember = {
        name: newMemberName,
        role: newMemberRole,
        photo: newMemberPhoto,
    };

    // !CONSOLE.LOG DI DEBUG!
    console.log(newMember);

    teamMembers.push(newMember);
    // !CONSOLE.LOG DI DEBUG!
    console.log(teamMembers);

    printNewMember();
}

function printNewMember() {

    teamCardsWrapper.innerHTML +=  `<div class="team-card">
                                        <div class="card-image">
                                            <img
                                                src="${newMember.photo}"
                                                alt="${newMember.name}"
                                            />
                                        </div>
                                        <div class="card-text">
                                            <h3>${newMember.name}</h3>
                                            <p>${newMember.role}</p>
                                        </div>
                                    </div>`;
}

// *VARIABLES*
// *arrays*
// *dichiaro un array di "objects"*
const teamMembers = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        photo: "../img/wayne-barnett-founder-ceo.jpg",
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        photo: "../img/angela-caroll-chief-editor.jpg",
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        photo: "../img/angela-lopez-social-media-manager.jpg",
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        photo: "../img/scott-estrada-developer.jpg",
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        photo: "../img/walter-gordon-office-manager.jpg",
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        photo: "../img/barbara-ramos-graphic-designer.jpg",
    },
];
// !CONSOLE.LOG DI DEBUG!
console.log(teamMembers);

// *DOM elemets*
const teamCardsWrapper = document.querySelector(".team-container");
const inputName = document.getElementById("name");
const inputRole = document.getElementById("role");
const inputImage = document.getElementById("image");
const addMemberBtn = document.getElementById("addMemberButton");

// *other global scope variables*
let thisMember;
let newMember = {};
// !CONSOLE.LOG DI DEBUG!
console.log(newMember);

let newMemberName;
let newMemberRole;
let newMemberPhoto;

// *LOGIC*
for(let i = 0; i < teamMembers.length; i++) {
    // *salvo nella variabile "thisMember" ogni singolo "object"*
    // *presente nell'array "teamMembers"*
    thisMember = teamMembers[i];
    // !CONSOLE.LOG DI DEBUG!
    // console.log(thisMember);

    teamCardsWrapper.innerHTML  += `<div class="team-card">
                                        <div class="card-image">
                                            <img
                                                src="${thisMember.photo}"
                                                alt="${thisMember.name}"
                                            />
                                        </div>
                                        <div class="card-text">
                                            <h3>${thisMember.name}</h3>
                                            <p>${thisMember.role}</p>
                                        </div>
                                    </div>`;
}

addMemberBtn.addEventListener("click", addNewMember);