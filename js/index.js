/* NAVIGATION ENTRE LES LIENS */

$("nav ul li a").click(function () {
    let is_class =$(this).hasClass("actives")
    if (!is_class){
        $(this).parent().siblings().children().removeClass("actives")
        $(this).addClass("actives")
    }
})


//VALIDATION DE CONNEXION
let submitBtn = document.querySelector("button")


//RECHERCHE D'UNE CATEGORIE DE RECETTE
function ouvrirpage() {
    let x=document.getElementById("search").value

    if (x === "les appéritifs" || x ==="appéritifs" || x ==="appéritif") {
        window.open("")
    }
    else if (x === "les entrées" || x ==="entrées" || x ==="entrée") {
        window.open("")
    }
    else if (x === "les plats" || x ==="plats" || x ==="plat" || x ==="plats de résistance" || x ==="plat de résistance") {
        window.open("")
    }
    else if (x === "les desserts" || x ==="desserts" || x ==="dessert") {
        window.open("")
    }
    else if (x ==="les cocktails" || x ==="cocktails" || x ==="cocktail"){
        window.open("")
    }
    else {
        alert("Aucun résultat pour cette Catégorie. \n" +
            "Veuillez à bien vérifier l'orthographe de votre requête ou à entrer une autre catégorie de Recette")
    }
}