const url = document.querySelector("#url")
let emaill;
if(window.sessionStorage.getItem("email1")){
    document.getElementById("email").value = window.sessionStorage.getItem("email1")
}
url.addEventListener("blur",()=>{
     window.sessionStorage.setItem("email1",url.value)
})


const copyright = document.getElementById("copyright");

let date = new Date()

copyright.innerHTML = `Copyright &copy; SHORTAD ${date.getFullYear()}. All Rights Reserved`;
