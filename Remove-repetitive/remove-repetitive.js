// Quiz 4 - remove repetitive => پاک کردن تکراریها

export default function removerRepetitive(string) {
  
  let reuslt = null;

  const unrepeated = (str) => [...new Set(str)].join("");

  reuslt = unrepeated(string);

  return reuslt;

}
