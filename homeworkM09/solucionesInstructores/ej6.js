function deleteAbc(string) {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    let char = string.charAt(i);
    if (char !== "a" && char !== "b" && char !== "c") {
      newString += char;
    }
  }
  return newString;
}

// Ejemplo de uso
console.log(deleteAbc("abcdefg")); // defg
console.log(deleteAbc("hello world")); // hello world
console.log(deleteAbc("cab")); // ''


