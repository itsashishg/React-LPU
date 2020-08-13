class Stack { 
    constructor() { 
        this.items = []; 
    }  
    // Push
    push(element){ 
        this.items.push(element); 
    } 
    // pop() 
    pop(){ 
      if (this.items.length == 0) 
          return -1; 
      return this.items.pop(); 
    } 
    // peek() 
    peek(){ 
      return this.items[this.items.length - 1]; 
    } 
    // isEmpty() 
    isEmpty(){ 
      return this.items.length == 0; 
    } 
}

var stack = new Stack();

console.log(stack.isEmpty());   
console.log(stack.push(10));          
console.log(stack.push("AG"));
console.log(stack.peek());   
console.log(stack.pop()); 
console.log(stack.peek());  
