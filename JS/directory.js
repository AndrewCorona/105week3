console.log("directory.js");
function display(aPet){
    //create the vars
    var pets=salon.pets;
    var text="";
    var petSection=document.getElementById("petSection");
    const dogIcon='<i class="fas fa-dog"></i>';
    const catIcon='<i class="fas fa-cat"></i>';
    const birdIcon='<i class="fas fa-crow"></i>';


    //travel the pets array
    for(var i=0;i<pets.length;i++){

      if (aPet.petType === "Dog") {
        petIcon = dogIcon;
      }
    else if (aPet.petType === "Cat") {
      petIcon = catIcon;
    }
    else if (aPet.petType === "Bird") {
      petIcon = birdIcon;
    }

    }

    //display the pets on the html
    $('#petSection'),append(text);
    
}