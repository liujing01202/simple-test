function single_element(arr) {
  return arr.filter(function(val,key){
    return key % 2 == 1
  }).filter(function(val,key,newArr){
    return newArr.indexOf(val) === newArr.lastIndexOf(val);
    //indexOf是返回某个指定的字符串值在字符串中首次出现的位置
    //lastIndexOf() 方法可返回一个指定的字符串值最后出现的位置
  })
}
