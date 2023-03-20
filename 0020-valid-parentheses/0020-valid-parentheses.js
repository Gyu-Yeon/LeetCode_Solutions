let isValid = function(s) {
    if (s.length < 2) {
        return false
    }
    let stack = [];
    for(let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack.push(s[i]);
        } else if (s[i] === ")") {
            if (stack.length > 0 && stack[stack.length-1] === "(") {
                stack.pop();
            } else return false            
        } else if (s[i] === "{") {
            stack.push(s[i]);
        } else if (s[i] === "}") {
            if (stack.length > 0 && stack[stack.length-1] === "{") {
                stack.pop();
            } else return false
        } else if (s[i] === "[") {
            stack.push(s[i]);
        } else if (s[i] === "]") {
             if (stack.length > 0 && stack[stack.length-1] === "[") {
                stack.pop();
            } else return false 
        }
        console.log(stack)
    }
    if (stack.length < 1) {
        return true
    } else return false
};