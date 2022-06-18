// Viene fornito un layout di base in cui è presente
// una card di esempio inserita staticamente nell’html.
// Questa card serve solo come timbro del markup necessario
// per ottenere il risultato finale e dovrà quindi essere rimossa dall’html.
// Aggiungere un file js in cui definire un array di oggetti
// che rappresentano i membri del team. Ogni membro ha le informazioni
// necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Una volta definita la struttura dati, prendendo come riferimento
// la card di esempio presente nell'html, stampare dinamicamente
// una card per ogni membro del team.

// *VARIABLES*
// *arrays*
// *dichiaro un array di "objects"*
const teamMembers = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        photo: "img/wayne-barnett-founder-ceo.jpg",
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        photo: "img/angela-caroll-chief-editor.jpg",
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        photo: "img/angela-lopez-social-media-manager.jpg",
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        photo: "img/scott-estrada-developer.jpg",
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        photo: "img/walter-gordon-office-manager.jpg",
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        photo: "img/barbara-ramos-graphic-designer.jpg",
    },
];

// *DOM elemets*
const teamCardsWrapper = document.querySelector(".team-container");

// *other global scope variables*
let thisMember;

// *LOGIC*
for (let i = 0; i < teamMembers.length; i++) {
    // *salvo nella variabile "thisMember" ogni singolo "object"*
    // *presente nell'array "teamMembers"*
    thisMember = teamMembers[i];

    // !CONSOLE.LOG DI DEBUG!
    // console.log(thisMember);

    teamCardsWrapper.innerHTML  += `<div class="team-card">
                                        <div class="card-image">
                                            <img
                                                src="${thisMember.photo}"
                                                alt="Wayne Barnett"
                                            />
                                        </div>
                                        <div class="card-text">
                                            <h3>${thisMember.name}</h3>
                                            <p>${thisMember.role}</p>
                                        </div>
                                    </div>`;
}