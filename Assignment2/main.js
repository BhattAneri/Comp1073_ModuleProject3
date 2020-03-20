//Javascript
function Rental(name,price,rating,location,rooms,features,availability){
    this.name=name;
    this.price=price;
    this.rating=rating;
    this.location=location;
    this.rooms=rooms;
    this.availability=availability;
    this.features=features;   
}
Rental.prototype.details=function(){
        let section=document.getElementsByClassName('innerdescp');
        let para=document.querySelectorAll('p')[2];
        let detail=this.name+ ' will cost $'+this.price+' with ratings '+this.rating+' and is located at '+this.location+'. There are '+this.rooms + ' rooms. It has '+ this.features + ' and '+this.availablility+ ' available.';
        para.innerHTML=detail;
        section.appendChild(para);
        console.log(detail);  
};
Rental.prototype.details=function(){
        let section=document.getElementsByClassName('innerdescp');
       let para=document.querySelectorAll('p')[3];
       let    detail=this.name+ ' will cost $'+this.price+' with ratings '+this.rating+' and is located at '+this.location+'. There are '+this.rooms + ' rooms. It has '+ this.features + ' and '+this.availablility+ ' available.';
        para.innerHTML=detail;
        section.appendChild(para);
        console.log(detail);  
};
function Available(name,availabilty){
Rental.call(this,name,availabilty);
}
Available.prototype=Object.create(Rental.prototype);
let cuba= new Rental('Cubex',575.50,4.5,'Havana,Cuba',3,'Swimming pool and a jacuzzi','is');
let montreal=new Rental('Monty',600,3.75,'Montreal,Quebec',5,'Fire Place and a garden','is not');

function Rate(name,price,rating,location,rooms,features,availability,type){
    Rental.call(this,name,price,rating,location,rooms,features,availability);
    this.type= type;
    type='special type';
};
function Calculate(price,type,newPrice){
    Rate.call(this,price,type);
    
    if(type=='special rate'){
    newPrice= price-((20/100)*price);
}
    else{
      this.newPrice=newPrice;  
    }
}
Calculate.prototype=Object.create(Rate.prototype);
Rate.prototype=Object.create(Rental.prototype);
Rate.prototype.details=function(){
     let section=document.getElementsByClassName('innerdescp');
   let para=document.querySelectorAll('p')[4];
       let detail=this.name+ ' will cost $'+this.price+' with ratings '+this.rating+' and is located at '+this.location+'. There are '+this.rooms + ' rooms. It has '+ this.features + ' and '+this.availablility+ ' available and has '+ this.type;
        para.innerHTML=detail;
        section.appendChild(para);
        console.log(detail); 
};

let sydney= new Rate('Syden', 800,4.8,'Sydney, Australia',2,'Beach side view','is','special type');

function SuperHost(name,price,rating,location,rooms,features,availability,type){
    Rental.call(this,name,price,rating,location,rooms,features,availability);
    this.type= type;
    type='Super Host';
};
function shRating(name,price,rating,location,rooms,features,availability,type,hostrating){
    SuperHost.call(this,name,price,rating,location,rooms,features,availability,type);
    if(type=='Super Host'){
    hostrating = 4.5;
}
}
SuperHost.prototype=Object.create(Rental.prototype);
shRating.prototype=Object.create(SuperHost.prototype);
SuperHost.prototype.details=function(){
     let section=document.getElementsByClassName('innerdescp');
     let para=document.querySelectorAll('p')[5];
    let detail=this.name+ ' will cost $'+this.price+' with ratings '+this.rating+' and is located at '+this.location+'. There are '+this.rooms + ' rooms. It has '+ this.features + ' and '+this.availablility+ ' available and has '+ this.type;
        para.innerHTML=detail;
        section.appendChild(para);
        console.log(detail); 
};
let rome= new SuperHost('Roma',750,3.6,'Rome,Italy',4,'3 big rooms with balcony and one kids room','is','Super Host');












































