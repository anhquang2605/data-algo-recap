//define stack class
class Stack {
    constructor() {
        this.stack = [];
    }
    push(value) {
        this.stack.push(value);
    }
    pop() {
        if(this.stack.length === 0) {
            return null;
        }
        return this.stack.pop();
    }
    read () {
        if(this.stack.length === 0) {
            return null;
        }
        return this.stack[this.stack.length - 1];
    }

    size () {
        return this.stack.length;
    }

    isEmpty () {
        return this.stack.length === 0;
    }

    clear () {
        this.stack = [];
    }

    print () {
        console.log(this.stack);
    }
    
    createStackFromArr (arr) {
        for (let i = 0; i < arr.length; i++) {
            this.push(arr[i]);
        }
    }
}

const linterCheck = (str) => {
    const allowedOpenChars = {
       '(': ')',
       '{': '}',
       '[': ']'
    }
    const allowedCloseChars = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    const stack = new Stack();
    for (let i = 0; i < str.length; i++) {
        let currentChar = str[i];
        if(i === 0) { 
            if(allowedCloseChars[currentChar]) {
                return currentChar + " is not allowed at the beginning of the string";
            } 
        }
        if(allowedOpenChars[currentChar]) { //if the character is an opening character, push it to the stack
            stack.push(currentChar);
            continue;
        }
        if(allowedCloseChars[currentChar]) {// checking if the character is a closing character, if it is, check if the last character in the stack is the corresponding opening character
            if(stack.isEmpty()) {
                return currentChar + " is not allowed if no opening character is present";
            } 
            const last = stack.read();
            if(last !== allowedCloseChars[currentChar]) {
                return currentChar + " does not match the last opening character";
            } else {
                stack.pop();
            }
        }
    }
    if(stack.isEmpty()) {
        return "String is valid";
    } else {
        return "String is not valid because there are still opening characters that are not closed " + stack.stack.join(", ");
        
    }
}

const str = "{{[()]}";
console.log(linterCheck(str));
