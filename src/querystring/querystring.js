const querystring = require('querystring')

let str = 'param1=aaa&param2=bbb&param2=ccc'
console.log(querystring.parse(str));

let obj = {
    a: 'aaa',
    b: 'bbb',
    c: 'ccc'
}
console.log(querystring.stringify(obj));
