/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let obj = {};
    let counter = 0;
    for (let i = 0; i < s.length; i++) {
        if(!obj[s[i]]) {
            obj[s[i]] = counter
            counter++
        }
    }
    let ss = [];
    for (let i = 0; i < s.length; i++) {
        ss.push(obj[s[i]]);
    }
    
    let obj2 = {};
    let counter2 = 0;
    for (let i = 0; i <t.length; i++) {
        if (!obj2[t[i]]) {
            obj2[t[i]] = counter2;
            counter2++
        }
    }
    let tt = [];
    for (let i = 0; i < t.length; i++) {
        tt.push(obj2[t[i]]);
    }
    console.log(tt)
    console.log(ss)
    for (let i = 0; i < ss.length; i++) {
        if (ss[i] !== tt[i]) return false;
    }
    return true
};