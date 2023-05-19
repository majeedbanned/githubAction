//my first class2

class Array1 {
  array = [];
  count = 0;
  length = 0;
  constructor(length) {
    this.length = length;
    this.array = new Array(length);
  }

  insert(value) {
    if (this.count === Array1.length) {
      {
        this.newarray = new Array(this.length * 2);
        this.length = this.length * 2;
      }

      for (var i = 0; i < this.count; i++) this.newarray[i] = this.array[i];

      this.array = this.newarray;
    }

    this.array[this.count++] = value;
  }

  indexOf(value) {
    for (var i = 0; i < this.count; i++) if (this.array[i] === value) return i;

    return -1;
  }
  remove(index) {
    if (index < 0 || this.count > this.length) throw Error;
    for (var i = index; i < this.count; i++) {
      this.array[i] = this.array[i + 1];
      this.count--;
    }
  }
}

myarray = new Array1(4);
myarray.insert(10);
myarray.insert(20);
myarray.insert(30);
myarray.insert(40);

myarray.remove(1);
myarray.insert(50);


console.log(myarray.indexOf(30));
