function single_element(arr) {

  var filtered=arr.filter(functon(n,i){
    if ((i+1)%2==0)
      return arr[i];
  })
for (var i = 0; i < filtered.length; i++) {
  for (var j = i+1; i < filtered.length; j++) {
    if (filtered[i]!=filtered[j]) {
      return filtered[i];
    }
  }
}
}
