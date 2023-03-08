let newArray =[];
function filter(arrayOfStrings) {
    for (let i = 0; i < arrayOfStrings.length; i++) {
      if (arrayOfStrings[i].charAt(0) === "a") {
        newArray.push(arrayOfStrings[i]);
      }
    }
    return newArray;
  
    /* const filteredArray = arrayOfStrings.filter((element) =>
      element.startsWith("a")
    );
    return filteredArray; */
  }

  let arr =['adan','andres','pepe','messi'];
  let fil = filter(arr);
  console.log(fil);