"use strict";
class TakeAway {
  constructor() {
    this.menu = { burger: 13, cola: 2, pasta: 11, pizza: 11 };
    this.myOrder = {};
  }
  getMenu() {
    return this.menu;
  }
  add(key) {
    const keyExists = this.myOrder[key];
    if (keyExists) {
      this.myOrder[key] = this.myOrder[key] + 1;
    } else {
      this.myOrder[key] = 1;
    }
  }
  remove(key) {
    const keyExists = this.myOrder[key];
    if (keyExists) {
      this.myOrder[key] -= 1;
    }
  }
  getTotal() {
    let total = 0;
    // this.myOrder = { burger: 2, cola: 5 }
    // Object.entries(this.myOrder) ----> [ [burger, 2], [cola, 5] ]
    Object.entries(this.myOrder).forEach((currentItem) => {
      const itemName = currentItem[0]; // burger
      const qt = currentItem[1]; // 2
      const price = this.menu[itemName]; // 13£
      total = total + price * qt;
    });
    return total;
  }
  sendNotification() {}
}
