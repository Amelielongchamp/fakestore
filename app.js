fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {

    data.forEach(donnee => {
      document.querySelector("#div").innerHTML += `
      <div class="w15 card m100 marginLeft">



            <div class="padding">
                <img src="${donnee.image}" alt="chemisier" class=" img ">
                <h2 class="m10">${donnee.title}</h2>
                <p class="colorBlue m10"> <strong>${donnee.price}</strong>
                </p>



                <h3 class="m10">Description</h3>
                <p class="m10">${donnee.description}
                </p>
                <p class="btn"> ajouter au panier
                </p>
            </div>

        </div>

      
      `
      
    });



  });

  
function afficher(donnee){

}