const loginForm = document.getElementById("loginForm")
const registerForm = document.getElementById("registerForm")
const loginMsg = document.getElementById("msg")
const registerMsg = document.getElementById("registerMsg")
const showRegister = document.getElementById("showRegister")
const showLogin = document.getElementById("showLogin")


function getUsers(){
    return JSON.parse(localStorage.getItem("users")) || []
}
function saveUsers(users){
    localStorage.setItem("users",JSON.stringify(users))
}


loginForm.addEventListener("submit",e =>{
    e.preventDefault()
    const u = document.getElementById("username").value
    const p = document.getElementById("password").value

    const users = getUsers()
    const user = users.find(user => user.username === u && user.password === p )

    if(user){
        localStorage.setItem("login","true")
        localStorage.setItem("user",u)
        window.location.href = "foodList.html"
    }else{
        loginMsg.textContent = "ada kesalahan,coba input lagi..."
    }
})

registerForm.addEventListener("submit",e => {
    e.preventDefault()
    const u = document.getElementById("registUser").value
    const p = document.getElementById("registPass").value

    if(!u || !p){
        registerMsg.textContent = "kedua nya harus diisi "
        return
    }


    let users = getUsers()

    if(users.find(user => user.username === u)){
        registerMsg.textContent = "Username sudah ada"
        return
    }

    users.push({username : u, password : p})
    saveUsers(users)
    registerMsg.style.color = "green"
    registerMsg.textContent = "pendaftararn berhasil"

    
    

    setTimeout(()=>{
        registerForm.classList.add("nyumput")
        loginForm.classList.remove("nyumput")
    },1000)
})

const logoutBtn = document.getElementById("logoutBtn")
document.getElementById("logoutBtn").addEventListener("click", () => {
        localStorage.removeItem("login")
        localStorage.removeItem("user")
        localStorage.removeItem("users")
        window.location.href = "index.html"

        
    })

showRegister.addEventListener("click", e => {
  e.preventDefault();
  loginForm.classList.add("nyumput");
  registerForm.classList.remove("nyumput");
})

showLogin.addEventListener("click", e => {
  e.preventDefault();
  registerForm.classList.add("nyumput");
  loginForm.classList.remove("nyumput");
})