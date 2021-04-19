Function.prototype.inherits = function(parentClass) {
  // function Surrogate(){};
  // Surrogate.prototype = parentClass.prototype;
  // this.prototype = new Surrogate();
  // this.prototype.constructor = this;
  this.prototype = Object.create(parentClass.prototype);
  this.prototype.constructor = this;
}


function MovingObject () {
}
MovingObject.prototype.movingObjectTalk = function(){
  debugger
  console.log("Hello, I'm a moving object");
}

function Ship () {
  
}
Ship.inherits(MovingObject);

Ship.prototype.shipTalk = function(){
  console.log("Hello, I'm a ship");
}

function Asteroid () {
}

Asteroid.inherits(MovingObject);

Asteroid.prototype.asteroidTalk = function(){
  console.log("Hello, I'm a asteroid");
}

