function flattenArrayES5(arr) {
  var new_arr = [];
  for (var i = 0; i < arr.length; i++) {
    var arr_value = arr[i];
    if (Array.isArray(arr_value)) {
      new_arr = new_arr.concat(flattenArrayES5(arr_value));
    }
    else {
      new_arr = new_arr.concat(arr_value);
    }
  }
  return new_arr;
}

const flattenArrayES6 = 
  arr => arr.reduce((accumulated, current_value) => accumulated.concat(Array.isArray(current_value) ? flattenArrayES6(current_value) : current_value), []);