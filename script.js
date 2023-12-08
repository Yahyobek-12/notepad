// newClass key
let newClass = "active"; 

// for addForm =======================================================================================================
const createForm = document.querySelector(".create-form"),
    titleInp = document.querySelector(".title-inp"),
    newNotePadWrapper = document.querySelector("main"),
    newNote = document.querySelector("li"),
    removeNote = document.querySelector(".remove-note"),
    noNote = document.querySelector(".no-note");
    
const NoteDb = JSON.parse(localStorage.getItem("to-do-list")) || [];

createForm.addEventListener("submit", (e) => {
    e.preventDefault()

    let TitleVal = titleInp.value;

    if(TitleVal) {
        sortArr(NoteDb);
        NoteDb.push(TitleVal);
        createNewNote(NoteDb);
        dadForm.classList.toggle(newClass);
        clickToggle.classList.toggle(newClass);
    }

    e.target.reset()
  
}); 

const sortArr = (arr) => {
    arr.sort()
} 

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

    document.querySelectorAll(".remove-note").forEach((item, idx) => {
        sortArr(NoteDb)
        item.addEventListener("click", () => {
            item.parentElement.remove()
            NoteDb.splice(idx, 1);
            console.log("delted");
            createNewNote(NoteDb);
            localStorage.removeItem("to-do-list", JSON.stringify(NoteDb));
        });
    });

};

sortArr(NoteDb)
createNewNote(NoteDb);

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
timerId = setInterval(addWidth, 50);

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