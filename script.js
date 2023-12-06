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

// for login form
const loginForm = document.querySelector(".login-form"),
    loginInp = document.querySelector(".login-inp"),
    loginBtn = document.querySelector(".login-btn"),
    profileName = document.querySelector(".accaunt-name"),
    registerPage = document.querySelector(".register");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault()

    let newLoginVal = loginInp.value;
    localStorage.setItem("newLoginVal", newLoginVal);
    registerPage.classList.toggle(newClass);

    e.target.reset()
});

let getNewLoginVal

function createAccaunt() {
    getNewLoginVal = localStorage.getItem("newLoginVal");
    profileName.innerHTML = getNewLoginVal;
}

createAccaunt()

// for profile page
const openProfile = document.querySelector("#open-accaunt"),
    profielPage = document.querySelector(".profile-dad"),
    closeProfile = document.querySelector(".remove-profile"),
    logout = document.querySelector(".logout");

openProfile.addEventListener("click", () => {
    profielPage.classList.add(newClass);
});  

closeProfile.addEventListener("click", () => {
    profielPage.classList.remove(newClass);
});

logout.addEventListener("click", () => {
    registerPage.classList.toggle(newClass)
    profielPage.classList.remove(newClass);
});
