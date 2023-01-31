// Inheritance: It is a concept in which some properties and methods of an Object are being used by another Object.

//vehicle class
class vehicle {
  constructor(company, model, maxSpeed, average) {
    this.company = company;
    this.model = model;
    this.maxSpeed = maxSpeed;
    this.average = average;
    // this.#cost = cost
  }
}


//bike class
class bike extends vehicle {
  #cost;
  constructor(company, model, maxSpeed, average, type, cost) {
    super(company, model, maxSpeed, average)
    this.type = type;
    this.#cost = cost
  }

  company() {
    console.log(`bike company is ${this.company}`);
  }
  model() {
    console.log(`bike model name is ${this.model}`);
  }
  maxSpeed() {
    console.log(`bike maximum speed is ${this.maxSpeed}`);
  }
  average() {
    console.log(`bike average speed is ${this.average}`);
  }
  getPrize() {
    // console.log(this.#prize);
    // return this.#cost
    return this.#cost + (this.#cost * 30 / 100)
  }
}


//car class
class car extends vehicle {
  #cost;
  constructor(company, model, maxSpeed, average, type, cost) {
    super(company, model, maxSpeed, average)
    this.type = type;
    this.#cost = cost
  }

  company() {
    console.log(`car company is ${this.company}`);
  }
  model() {
    console.log(`car model name is ${this.model}`);
  }
  maxSpeed() {
    console.log(`car maximum speed is ${this.maxSpeed}`);
  }
  average() {
    console.log(`car average speed is ${this.average}`);
  }
  prize() {
    return this.#cost + (this.#cost * 30 / 100)
  }
  getPrize() {
    // console.log(this.prize());
    return this.#cost + (this.#cost * 30 / 100)
  }
}


//bike object
const splender = new bike("Hero", "splender", 120, 60, "standard", 70000)
console.log(`${splender.company} has build ${splender.model} ${splender.type} bike which give ${splender.average} mailage with ${splender.maxSpeed} maximum speed and bike prize is ${splender.getPrize()}`);

//car object
const Q3 = new car("Audi", "Q3", "180", 5, "luxury", 5000000)
console.log(`${Q3.company} has build ${Q3.model} ${Q3.type} car which give ${Q3.average} mailage with ${Q3.maxSpeed} maximum speed and bike prize is ${Q3.getPrize()}`);
