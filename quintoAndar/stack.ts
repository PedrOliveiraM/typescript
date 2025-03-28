class Stack<T> {
  private stack: T[] = [];

  private pop() {
    this.stack.shift();
  }

  private push(element: T) {
    this.stack.unshift();
  }

  private peek() {
    return this.stack[0];
  }

  private isEmpty() {
    return this.stack.length === 0;
  }

  private size() {
    return this.stack.length;
  }
}