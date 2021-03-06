// Import stylesheets
import './style.css';
import { Books } from './Books.js';

// Write Javascript code!
const appDiv = document.getElementById('app');
var Person = function(name) {
  this.name = name;
  this.canTalk = true;
};

Person.prototype.greet = function() {
  if (this.canTalk) {
    return ('Hi, I am ' + this.name);
  }
};

var Employee = function(name, title) {
  Person.call(this, name);
  this.title = title;
};

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee; //If you don't set Object.prototype.constructor to Employee, 
                                           //it will take prototype.constructor of Person (parent). 
                                           //To avoid that, we set the prototype.constructor to Employee (child).


Employee.prototype.greet = function() {
  if (this.canTalk) {
    return  ('Hi, I am ' + this.name + ', the ' + this.title);
  }
};

var Customer = function(name) {
  Person.call(this, name);
};

Customer.prototype = Object.create(Person.prototype);
Customer.prototype.constructor = Customer; //If you don't set Object.prototype.constructor to Customer, 
                                           //it will take prototype.constructor of Person (parent). 
                                           //To avoid that, we set the prototype.constructor to Customer (child).


var Mime = function(name) {
  Person.call(this, name);
  this.canTalk = false;
};

Mime.prototype = Object.create(Person.prototype);
Mime.prototype.constructor = Mime; //If you don't set Object.prototype.constructor to Mime,
                                   //it will take prototype.constructor of Person (parent).
                                   //To avoid that, we set the prototype.constructor to Mime (child).


var bob = new Employee('Bob', 'Builder');
console.log(bob);
var joe = new Customer('Joe');
var rg = new Employee('Red Green', 'Handyman');
var mike = new Customer('Mike');
var mime = new Mime('Mime');
var SM=new Books('The Gopi Diaries: Coming Home','Sudha Murthy');
var htmlDisplay="hello ";
htmlDisplay=htmlDisplay + bob.greet() +"<br/>";
// Hi, I am Bob, the Builder
htmlDisplay=htmlDisplay + SM.getDetails() +"<br/>";
// Hi, I am Joe
rg.greet();
// Hi, I am Red Green, the Handyman
mike.greet();
// Hi, I am Mike
mime.greet();
appDiv.innerHTML = htmlDisplay;

