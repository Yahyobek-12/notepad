// newClass key
let newClass = "active"; 

// for addForm =======================================================================================================
const createForm = document.querySelector(".create-form"),
    newNote = document.querySelector("li"),
    titleInp = document.querySelector(".title-inp"),
    newNotePadWrapper = document.querySelector("main"),
    removeNote = document.querySelector(".remove-note");
    
const TitleDb = JSON.parse(localStorage.getItem("to-do-list")) || [];

createForm.addEventListener("submit", (e) => {
    e.preventDefault()

    let TitleVal = titleInp.value;

    if (TitleVal === '') {
        swal("Please Write text!", "Try again", "error");
        function playSound(musicName) {
            let audio = new Audio(musicName)
            audio.play()
        }

        playSound("music/error.mp3");

    } else {
        sortArr(TitleDb);
        TitleDb.push(TitleVal);
        createNewNote(TitleDb);
        dadForm.classList.toggle(newClass);
        clickToggle.classList.toggle(newClass);
        swal("created successfully!", "Good job", "success");

        function playSound(musicName) {
            let audio = new Audio(musicName)
            audio.play()
        }

        playSound("music/succesfuly.mp3");
    }

    

    e.target.reset()
  
}); 

const sortArr = (arr) => {
    arr.sort()
} 

function createNewNote (TitleDb) {
    newNotePadWrapper.innerHTML = "";

    TitleDb.forEach((item, idx) => {
        
        newNotePadWrapper.innerHTML += `
            <li class="new-note" ${idx}>
                <h3 class="title">${item}</h3>
                <button class='remove-note'><i class="bx bx-trash"></i></button>
            </li>
        `

    });

    localStorage.setItem("to-do-list", JSON.stringify(TitleDb));

    document.querySelectorAll(".remove-note").forEach((item, idx) => {
        sortArr(TitleDb)
        item.addEventListener("click", () => {
            item.parentElement.remove()
            TitleDb.splice(idx, 1);
            createNewNote(TitleDb);
            swal("Deleted successfully!", "No Item", "success");
            localStorage.removeItem("to-do-list", JSON.stringify(TitleDb));
        });
    });

};

sortArr(TitleDb)
createNewNote(TitleDb);

