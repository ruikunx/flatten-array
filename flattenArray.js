function flattenArrayES5(arr) {
  var new_arr = [];
  for (var i = 0; i < arr.length; i++) {
    var new_arr_tmp = arr[i];
    if (Array.isArray(new_arr_tmp)) {
      new_arr_tmp = flattenArrayES5(new_arr_tmp);
    }
    new_arr = new_arr.concat(new_arr_tmp);
  }
  return new_arr;
}

const flattenArrayES6 = 
  arr => arr.reduce((accumulated, current_value) => accumulated.concat(Array.isArray(current_value) ? flattenArrayES6(current_value) : current_value), []);