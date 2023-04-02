const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-copy");
const alertContainerEl = document.querySelector(".alert-container");

btnEl.addEventListener("click", ()=>{
    createpassword();
});
 copyIconEl.addEventListener("click", ()=>{
    copyPassword();
    alertContainerEl.classList.remove("active");
    setTimeout(()=>{
        alertContainerEl.classList.add("active");

    }, 2000);
 });
function createpassword(){
    const chars = "0123456789abcdefijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 14;
    let password ="";
    for (let index = 0; index < passwordLength; index++) {
        const randomNum = Math.floor (Math.random() * chars.length);
        password += chars.substring(randomNum, randomNum + 1);
        
        
    }
    inputEl.value = password;
      alertContainerEl.innerText = password + " copied!";
} 

function copyPassword() {
    if (inputEl.value) alertContainerEl.classList.remove("active");
    setTimeout(() => {
      alertContainerEl.classList.add("active");
    }, 2000);
    inputEl.select();
    inputEl.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inputEl.value);
    alertContainerEl.innerText = password + "copied!";
}