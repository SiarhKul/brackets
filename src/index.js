module.exports = function check(str, bracketsConfig) {
    const arr = []
    for (const elArr of bracketsConfig) {
      arr.push(elArr.join(''))
    }
    console.log(arr);

    for (let i = 0; i < arr.length; i++) {
      if (str.includes(arr[i])) {
        str = str.replace(arr[i], '');
        i = -1;
      }
    }

    if (str.length === 0) {
      return true
    } else {
      return false
    }

}

