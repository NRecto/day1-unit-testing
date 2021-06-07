function factorial(n) {
  if (n === 0) return 1;
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

function isIsogram(text) {
  text = text.toLowerCase();
  let arr = [];
  for (let i = 0; i < text.length; i++) {
    if (arr.indexOf(text[i]) !== -1) return false;
    arr.push(text[i]);
  }
  return true;
}

const names = {
    "Brandon" : {
        "name" : "Brandon Boyd",
        "age" : 35
    },
    "Steve" : {
        "name": "Steve Tyler",
        "age" :56
    }
}

module.exports = {
  factorial,
  isIsogram,
  names
};
