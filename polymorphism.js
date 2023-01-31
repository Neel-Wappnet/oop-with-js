// Polymorphism: Polymorphism means the same function with different signatures is called many times.

class shape {
  area() {
    return 0
  }
}

//extend shape class
class circle extends shape {
  area(radius) {
    return (3.14 * radius * radius)
  }
}

//extend shape class
class rectangle extends shape {
  area(l, w) {
    return (l * w)
  }
}

//extend shape class
class triangle extends shape {
  area(l, b) {
    return (0.5 * l * b)
  }
}

const t1 = new triangle()
console.log(t1.area(5, 6));

const r1 = new rectangle()
console.log(r1.area(4, 5));

const c1 = new circle()
console.log(c1.area(10))

console.log(c1.area());