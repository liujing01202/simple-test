function median(arr) {
  var newArr = arr.concat(); //复制一份，防止计算中位数时导致原数组发生改动
  var len = newArr.length;
  newArr.sort(function(a,b) {
    return a - b;
  });

  if(len % 2 == 0) {
    return (newArr[len/2-1] + newArr[len/2]) / 2;
  } else {
    return newArr[(len-1)/2];
  }
}

function calculate_median(arr) {
  var list = arr.filter(function(val, key) {
    return key % 2 === 1;
  })

  return median(list);

}
