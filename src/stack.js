class Stack {
  constructor() {
    this._items = [];
  }

  push(value) {
    this._items.push(value);
  }

  peek() {
    return this._items[this._items.length - 1];
  }

  pop() {
    return this._items.pop();
  }
}

module.exports = Stack;
module.exports.Stack = Stack;