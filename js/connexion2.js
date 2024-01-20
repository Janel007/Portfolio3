function saveData() {
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let user_record = []

    user_record = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]

    if(user_record.some((v) =>{

        return v.email===email && v.password===password

    })){

        alert("Vous êtes connecté")

        let current_user = user_record.filter((v)=>{
            return v.email===email && v.password===password
        })[0]

        localStorage.setItem("nom",current_user.nom)
        localStorage.setItem("email",current_user.email)
        window.location.href="../pages/login/login.html"
    }else{
        alert("connexion échoué")
    }

}