const carta = 'bici coche balón _playstation bici coche peluche';

function listGifts(letter) {
  let arr1 = [],
    obj = {};

  arr1 = letter.trim().split(' ').filter((item) => item.substr(0, 1) !== '_');
  arr1.filter((value, index, array) => {
    obj[value] = array.filter((item) => item === value).length;
  });

  return obj;
}

console.log(listGifts(carta));
