// Quiz 5 - operations -  اعمال تکریبی
export default function operations(ops) {
  let result = null;
  let charactersResult = [];

  let charactersOps = ops.split(" ");

  charactersOps.forEach((char) => {
    if (!isNaN(+char)) {
      charactersResult.push(+char);
    } else {
      if (charactersResult.length > 0) {
        if (char === "D") {
          const lastIndex = charactersResult.slice(-1);
          charactersResult.push(lastIndex * 2);
        } else if (char === "R") {
          charactersResult.pop();
        } else if (char === "+") {
          if (charactersResult.length > 1) {
            const lastTwoIndex = charactersResult.slice(-2);
            charactersResult.push(lastTwoIndex[0] + lastTwoIndex[1]);
          }
        }
      }
    }
  });
  let numberResult = 0;
  charactersResult.map((num) => {
    numberResult += num;
  });

  result = numberResult;
  return result;
}
