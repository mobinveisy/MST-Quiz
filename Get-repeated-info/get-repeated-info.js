// quiz 2 - get repeated info => سوال چاپ ارقام

export default function getRepeatedInfo(number) {
  let result = null;
  number = number.toString();
  let numbersArray = [];
  let resultArray = [];
  let resultObj = {};

  for (let i = 0; i < number.length; i++) {
    numbersArray.push(number.charAt(i));
  }

  let n = [];
  numbersArray.forEach((num) => {
    let obj = {};

    obj[num] = num.repeat(num);
    resultArray.push(obj);
    Object.keys(resultObj).forEach((key) => {
      if (key === num) {
        n.push(key);
        let count = n.filter((n) => n === key);
        obj[num] = num.repeat(num * (count.length + 1));
        resultArray.push(obj);
      }
    });
    resultObj = Object.assign({}, ...resultArray);
  });
  result = resultObj;
  return result;
}
