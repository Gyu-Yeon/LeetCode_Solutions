var reverseString = function(s ) {
    
    for(let start  = 0, end = s.length - 1; start < end; start++){
        temp = s[start];
        s[start] = s[end];
        s[end] = temp;
        end--;
    }
    return s;
};