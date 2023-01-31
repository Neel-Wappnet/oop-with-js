// Abstraction:Data abstraction refers to providing only essential information about the data to the outside world, hiding the background details or implementation. 


//abstact class
class person {
  constructor() {
    this.name = "abc"
    if (this.constructor === person) throw new Error("this is an Abstarct class, can't create instance of abstact class")
  }
}
person.prototype.info = () => this.name

//instance of abstact class person
// const per = new person()


//extend abstact class person
class teacher extends person {
  constructor(name) {
    super();
    this.name = name
  }
}

//instace of teaccher class
const teacher1 = new teacher("teacher1")
console.log(teacher1);