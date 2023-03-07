var arr= [1,1,1];

function todosIguales(array) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] !== array[i+1]) {
        return false;
      }
    }
    return true;
  }

  console.log(todosIguales(arr));