function add(n,m) {
    return n+m
}
 function mul(n, m) {
   return n * m;
 }
 function sub(n, m) {
   return n - m;
 }function div(n, m) {
   return n / m;
 }
let op = compose(add, mul, sub, div);
console.log(op(10,10))