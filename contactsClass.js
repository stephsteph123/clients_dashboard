class Contact {
  // properties
  public name: String;
  public picture: String;
  private email: String;
  private phone: String;
  private sin: Number;
constructor(name, picture){
  this.name = name;
  this.picture = picture;
}
// methods
  talking = function(){
    console.log("I'm talking");
  }
  meeting = function(){
    console.log("I'm meeting");
  }
  sharingDetails = function(){
    return this.sin
  }
}; 

let baby = new Contact()
baby.sharingDetails() // getter method
baby.sin

// public properties, private properties
// class always singular
// encapsulate, 
// read, OOP and JS OOP
// webpack needed to convert OOP into JS

// ajax render on the fly, 
// single page, update sections on the fly
// routing, use URL to get components within shell