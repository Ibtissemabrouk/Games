let counter = document.getElementById("panier");
let newList =  document.getElementById("myproducts");
let x = +localStorage.getItem("counter");

function moveToBuy(produit){
let btn= document.getElementById(produit);
btn.classList.add("disabled");
btn.classList.add ("bg-secondary");
x++;
localStorage.setItem("counter",x);
counter.innerText = x ;
if (localStorage.getItem(produit)){
    localStorage.setItem(produit, +localStorage.getItem(produit)+1);
    }
    else{
        localStorage.setItem(produit,1)
    }
}
counter.innerText = x ;

function resetPanier(){
localStorage.clear();
counter.innerText = 0 ;
x = 0 ;

}
function showPanier(){
const btn = document.getElementById("shows");
btn.classList.remove("bg-warning");
btn.setAttribute("disabled",true);
let monPanier = Object.entries(localStorage);
console.log("monPanier",monPanier);
let articles = monPanier.filter (element => element [0] !=="counter"
    ) ;
    let somme = monPanier.filter(element=> element [0] =="counter");
   articles.map(el=>{
   let prod= document.createElement("li");
   prod.innerText = `${el[0]}_____NB: ${el[1]}`;
   newList.appendChild(prod);
   })
document.getElementById("somme").innerText = `Somme : ${somme[0][1]}`
}