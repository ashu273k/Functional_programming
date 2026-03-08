class Order {
  static count = 0;
  #id;

  constructor() {
    this.#id = Order.count
    Order.count = Order.count+1;
  }

  getId() {
    return this.#id
  }

  static getCount() {
    return Order.count
  }
}

const o1 = new Order();
const o2 = new Order();
console.log(o1.getId());
console.log(o2.getId());
console.log(Order.getCount());