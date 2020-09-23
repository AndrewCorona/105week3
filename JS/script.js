//create an object literal for the pet salon (name,address,hours)
var salon={   
    salonname:`The Fashion Pet`,
    address:{
        street: `Av. University`,
        number:"215-B"
    },
    hours:{
        open:"8 a.m.",
        close:"5 p.m.",
    },
    pets:[]
}
var c=1;
class Pet{
    constructor(petName,petAge,petType,petBreed,petGender,petPrice,petService,ownerName,DropOff,contactPhone){
        this.petName=petName;
        this.petAge=petAge;
        this.petType=petType;
        this.petBreed=petBreed;
        this.petGender=petGender;
        this.petPrice=petPrice
        this.petService=petService;
        this.ownerName=ownerName;
        this.DropOff=DropOff;
        this.contactPhone=contactPhone;
        this.id=c;
        c++;
    }
}

var scooby = new Pet("Scooby",50,"Dog","Dean","Male",130,"Full Service","Shaggy","September 18 2020","45678213");

var scrappy = new Pet("Scrappy",30,"Dog","Dean","Male",60,"Hair cut","Rudy-Doo","September 14 2020","30482104");

var garfield = new Pet("Garfield",45,"Cat","Tabby","Male",50,"Nail Clipping","Jon","September 20 2020","2439479102");
console.log(scooby);
//get the inputs and store them in variables
var txtName= document.getElementById('petName');
var txtAge= document.getElementById('petAge');
var txtType= document.getElementById('petType');
var txtBreed= document.getElementById('petBreed');
var txtGender= document.getElementById('petGender');
var txtPrice= document.getElementById('petPrice');
var txtService= document.getElementById('petService');
var txtownerName= document.getElementById('ownerName');
var txtDropOff= document.getElementById('DropOff');
var txtcontactPhone= document.getElementById('contactPhone');


function register(){
    //create thePet
    var thePet=new Pet(txtName.value,txtAge.value,txtType.value,txtBreed.value,txtGender.value,Number(txtPrice.value),txtService.value,txtownerName.value,txtDropOff.value,txtcontactPhone.value);
    console.log(thePet);
    //push thePet into the array
    salon.pets.push(thePet);
    //displayTable();
    displayTable(thePet);
    profitcalc();
    clear();
}

function clear(){
    txtName.value="";
    txtAge.value="";
    txtType.value="";
    txtBreed.value="";
    txtGender.value="";
    txtPrice.value="";
    txtService.value="";
    txtownerName.value="";
    txtDropOff.value="";
    txtcontactPhone.value="";
}

function profitcalc(){
    var total = 0;
  for(var i=0;i<salon.pets.length;i++){
    total=total+salon.pets[i].petPrice;
  }
    document.getElementById("profits").innerHTML=`the total profits are: ${total}`;
  }  

function deletePet(petId){
  console.log('Delete'+petId);
//select the element
  var tr=$("#"+petId);
  var indexDelete;
//travel the array (search function) --> petId=== salon.pets[i].id
  for(var i=0;i<salon.pets.length;i++){
    var selected=salon.pets[i];
    if(selected.id===petId){
      indexDelete=i;
    }
  }
//delete the pet from the array splice()
  salon.pets.splice(indexDelete,1);
//delete the pet from the html
  tr.remove();
}

function searchPet(){
  var ss=$('#petSearch').val();
  var searchString=ss.toLowerCase();
  for(var i=0;i<salon.pets.length;i++){
    var selected= salon.pets[i];
    if(selected.petName.toLowerCase()===searchString || selected.petService.toLowerCase()===searchString){
      $('#'+selected.id).addClass('active2');
    }
  }
}

function init(){

    //default
    console.log('Script');
    salon.pets.push(scooby);
    salon.pets.push(scrappy);
    salon.pets.push(garfield);
    profitcalc();
    displayTable(scooby);
    displayTable(scrappy);
    displayTable(garfield);
    //hook events
    $('#register-btn').on('click',register);
    $('#search-btn').on('click',searchPet);
}

window.onload=init;

function displayTable(aPet){
  let tbody=document.getElementById("petTable");
  let table="";
  let row;
      row = `<tr id="${aPet.id}">
              <td>${aPet.petName}</td>
              <td>${aPet.petAge}</td>
              <td>${aPet.petType}</td>
              <td>${aPet.petBreed}</td>
              <td>${aPet.petGender}</td>
              <td>${aPet.petPrice}</td>
              <td>${aPet.petService}</td>
              <td>${aPet.ownerName}</td>
              <td>${aPet.DropOff}</td>
              <td>${aPet.contactPhone}</td>
              <td><button class="btn btn-danger" onclick="deletePet(${aPet.id});"> Delete </button></td>
          </tr>`;
   $('#petTable').append(row);       

}
//add a delete button to the table
//display how many dogs, cats, and birds we have in the array
