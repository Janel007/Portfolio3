/* NAVIGATION ENTRE LES LIENS

$("nav ul li a").click(function () {
    let is_class =$(this).hasClass("actives")
    if (!is_class){
        $(this).parent().siblings().children().removeClass("actives")
        $(this).addClass("actives")
    }
})
*/

//VALIDATION DE CONNEXION
let submitBtn = document.querySelector("button")


//RECHERCHE D'UNE CATEGORIE DE RECETTE PC
function ouvrirpage() {
    let x=document.getElementById("search").value

    if (x === "les appéritifs" || x ==="appéritifs" || x ==="appéritif") {
        window.open("https://janelgreenfood.onrender.com/pages/nos%20recettes/apperetif_bouchee.html")
    }
    else if (x === "les entrées" || x ==="entrées" || x ==="entrée") {
        window.open("https://janelgreenfood.onrender.com/pages/nos%20recettes/salade.html")
    }
    else if (x === "les plats" || x ==="plats" || x ==="plat" || x ==="plats de résistance" || x ==="plat de résistance") {
        window.open("https://janelgreenfood.onrender.com/pages/nos%20recettes/plat_traditionnels.html")
    }
    else if (x === "les desserts" || x ==="desserts" || x ==="dessert") {
        window.open("https://janelgreenfood.onrender.com/pages/nos%20recettes/verrines.html")
    }
    else if (x ==="les cocktails" || x ==="cocktails" || x ==="cocktail" || x ==="boissons" || x ==="boisson"){
        window.open("https://janelgreenfood.onrender.com/pages/nos%20recettes/cocktail.html")
    }
    else {
        alert("Aucun résultat pour cette Catégorie. \n" +
            "Veuillez à bien vérifier l'orthographe de votre requête ou à entrer une autre catégorie de Recette")
    }
}

//RECHERCHE D'UNE CATEGORIE DE RECETTE PHONE
function ouvrirpage2() {
    let y=document.getElementById("search2").value

    if (y === "les appéritifs" || y ==="appéritifs" || y ==="appéritif") {
        window.open("https://janelgreenfood.onrender.com/pages/nos%20recettes/apperetif_bouchee.html")
    }
    else if (y === "les entrées" || y ==="entrées" || y ==="entrée") {
        window.open("https://janelgreenfood.onrender.com/pages/nos%20recettes/salade.html")
    }
    else if (y === "les plats" || y ==="plats" || y ==="plat" || y ==="plats de résistance" || y ==="plat de résistance") {
        window.open("https://janelgreenfood.onrender.com/pages/nos%20recettes/plat_traditionnels.html")
    }
    else if (y === "les desserts" || y ==="desserts" || y ==="dessert") {
        window.open("https://janelgreenfood.onrender.com/pages/nos%20recettes/verrines.html")
    }
    else if (y ==="les cocktails" || y ==="cocktails" || y ==="cocktail" || y ==="boissons" || y ==="boisson"){
        window.open("https://janelgreenfood.onrender.com/pages/nos%20recettes/cocktail.html")
    }
    else {
        alert("Aucun résultat pour cette Catégorie. \n" +
            "Veuillez à bien vérifier l'orthographe de votre requête ou à entrer une autre catégorie de Recette")
    }
}