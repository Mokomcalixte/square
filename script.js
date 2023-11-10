// Créer un tableau contenant les noms de vos films préférés
/*let filmsPreferes = [
    "casa de papel",
    "Agent stone",
    "Manifest",
    "The originals",
    "Vampire Diaries"
];

// Afficher les films préférés
console.log(filmsPreferes);
 let animes =[{title:"Barbie",}, {title:""}];

 //[1] renvoie a 
 console.log(animes[1].title);



//fonctions en javascript


function afficherBonjour(nom) {
    console.log("Bonjour " + nom + " !");
}
afficherBonjour("calixte");*/

//#a pour rappeller le nom de la classe dans le html

/*document.querySelector("#a").addEventListener('click',function(e){
    e.target.style.display ="none";
}) */


//ce code est semblable au code du bas
const body = document.querySelector("body")
body.addEventListener("click",(e) => {
    console.log(e.target)

    //classList renvoie aux classes
    if (e.target.classList.contains("square"))
    {
        e.target.classList.toggle("reverse-rotation")
        //e.target.style.animation ="reverse-rotation 2s linear both infinite"

    }
})


/* "DOMContentLoaded" pour s'assurer que le script s'exécute une fois que l'ensemble du
 document HTML a été complètement chargé. Voici une explication de chaque partie du code */


/*document.addEventListener('DOMContentLoaded', function() { ... }); :
Cela signifie que l'ensemble du code à l'intérieur des accolades { ... } sera exécuté dès 
que le document HTML a été complètement chargé dans le navigateur.*/

/*document.addEventListener('DOMContentLoaded', function() {
    var squares = document.querySelectorAll('.square');

    squares.forEach(function(square) {
        square.addEventListener('click', function() {
            this.classList.toggle('reverse-rotation');
            this.classList.toggle('clicked');
            //e.target.style.backgroundcolor="pink";
        });
    });
});*/
