// Encapsulation: The process of wrapping properties and functions within a single unit is known as encapsulation.

class clickable {

  //properties
  #count = 0;
  // constructor() {  }

  //methods
  click() {
    return this.#count++;
  }
  getCount() {
    console.log(`${this.#count}`);
  }
  resetCount() {
    return this.#count = 0;
  }
}

const button = new clickable()
button.click()
button.click()
button.resetCount()
button.click()
button.click()

button.getCount()