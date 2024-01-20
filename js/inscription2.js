function saveData() {
    let nom = document.getElementById("nom").value // cette ecriture permet de recuperer la valeur du champ
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    //localStorage.setItem("nom",nom)
    //localStorage.setItem("email",email)
    //localStorage.setItem("password",password)


   let user_record = []
    user_record = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]

    if(user_record.some((v) =>{
      return v.email===email
    })){
      alert("Se compte est déja existant")
   }
   else{
      user_record.push({
         "nom":nom,
         "email":email,
          "password":password,
      })
   }
   localStorage.setItem("users",JSON.stringify(user_record))
}
