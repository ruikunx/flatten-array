function flattenArrayES5(arr) {
  var new_arr = [];
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      new_arr = new_arr.concat(flattenArrayES5(arr[i]));
    }
    else {
      new_arr = new_arr.concat(arr[i]);
    }
  }
  return new_arr;
}

const flattenArrayES6 = 
  arr => arr.reduce((accumulated, current_value) => accumulated.concat(Array.isArray(current_value) ? flattenArrayES6(current_value) : current_value), []);