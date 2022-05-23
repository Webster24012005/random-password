const number = document.querySelector(".number")
const password = document.querySelector(".password")
const copyImg = document.querySelector(".copy")
const button = document.querySelector(".btn")

let passwordLength = 0;

number.onchange = function(){
    passwordLength = +number.value
}

function createPassword() {
    const str = "1234567890qwertyuiopasdfghjklzxcvbnm,-.?/|\!@#$%^&*()_+;:QWERTYUIOPASDFGHJKLZXCVBNM"
    let readyPassword = "";
  /*   if(passwordLength == 0){
        password.innerText = "Длина пароля 0"
    }
 */
for(let i=0; i<passwordLength; i++) {
    let r = Math.floor( Math.random() * str.length )
    readyPassword += str[r]
}
password.value = readyPassword
}

button.onclick = createPassword

copyImg.onclick = function(){
    password.select()
    password.setSelectionRange(0, 20)
    document.execCommand("copy")
}