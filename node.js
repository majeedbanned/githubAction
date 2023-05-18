//my first class

class Array1 {
  array = [];
  count = 0;
  length = 0;
  constructor(length) {
    this.length = length;
    this.array = new Array(length);
  }

  insert(value) {
    if (this.count > this.length) throw Error
    this.array[this.count++] = value;
  }
  
  remove(index) {
    if (index < 0 || this.count > this.length) throw Error;
    for (var i = index; i < this.count; i++) {
      this.array[i] = this.array[i + 1];
      this.count--;
    }
  }
}

myarray = new Array1(3);
myarray.insert(10);
myarray.insert(20);
myarray.insert(30);
myarray.insert(40);

myarray.remove(1);
myarray.insert(50);

console.log(myarray);
