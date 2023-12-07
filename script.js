// newClass key
let newClass = "active"; 

// for addForm =======================================================================================================
const createForm = document.querySelector(".create-form"),
    titleInp = document.querySelector(".title-inp"),
    newNotePadWrapper = document.querySelector("main");
    
const NoteDb = JSON.parse(localStorage.getItem("to-do-list")) || [];

createForm.addEventListener("submit", (e) => {
    e.preventDefault()

    let TitleVal = titleInp.value;
    let FileVal = fileInp.value;

    NoteDb.push(TitleVal);

    createNewNote(NoteDb);
    console.log(NoteDb);
    console.log(FileVal);

    dadForm.classList.toggle(newClass);

    e.target.reset()
  
});    


function createNewNote (NoteDb) {
    newNotePadWrapper.innerHTML = "";

    NoteDb.forEach((item, idx) => {
        
        newNotePadWrapper.innerHTML += `
            <li class="new-note" ${idx}>
                <h3 class="title">${item}</h3>
                <button class='remove-note'><i class="bx bx-trash"></i></button>
            </li>
        `

    });

    localStorage.setItem("to-do-list", JSON.stringify(NoteDb));

};

createNewNote(NoteDb)

// for show & close =======================================================================================================
const clickToggle = document.querySelector(".plus"),
    dadForm = document.querySelector(".dad-form");


clickToggle.addEventListener("click", () => {
    dadForm.classList.toggle(newClass);
    clickToggle.classList.toggle(newClass);
}); 

// For Loader Page =======================================================================================================

const loaderShort = document.querySelector(".loader-short");
const loaderPage = document.querySelector(".loader");
const counter = document.querySelector(".count")

let pos = 1;
timerId = setInterval(addWidth, 100);

function addWidth() {
    if (pos === 100) {
        clearInterval()

        setTimeout(() => {
            loaderPage.classList.add(newClass)
        }, [timerId])

        counter.classList.add(newClass)
        
    } else {
        pos++
        loaderShort.style.width = pos + "%"
        counter.innerHTML = pos + "%"
    }
}
addWidth()