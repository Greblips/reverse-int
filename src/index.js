module.exports = function reverse (n) {
    let str = n.toString();
    let arr = str.split('');

    if(arr[0] === '-'){
      arr.shift();
      return arr.reverse().join('');
    }
    return arr.reverse().join('');
}
