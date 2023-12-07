// newClass key
let newClass = "active";

// for show & close 
const clickToggle = document.querySelector(".plus"),
    dadForm = document.querySelector(".dad-form");


clickToggle.addEventListener("click", () => {
    dadForm.classList.toggle(newClass);
    clickToggle.classList.toggle(newClass);
});  

// for addForm
const createForm = document.querySelector(".create-form"),
    titleInp = document.querySelector(".title-inp"),
    descriptionInp = document.querySelector("textarea"),
    fileInp = document.querySelector(".file");

    
const NoteDb = {
    titleDb: [],
    descriptionDb: [],
};
    
document.querySelector(".form-logo").innerHTML = localStorage.getItem("titleVal");


createForm.addEventListener("submit", (e) => {
    e.preventDefault()

    let TitleVal = titleInp.value;
    let DescriptionVal = descriptionInp.value;
    
    NoteDb.titleDb.push();

    localStorage.setItem("titleVal", TitleVal)

    document.querySelector(".form-logo").innerHTML = localStorage.getItem("titleVal");

    e.target.reset()
  
});    

// For Loader Page

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