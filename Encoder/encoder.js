// Quiz 3 - encode => سوال رمزنگاری رشتهها
export default function encoder({ inputString, repeatCount = 1 }) {
  let result = null;
  let value = inputString;
  let lastStr = value.slice(-1);
  value = value.replace(lastStr, "");
  value = lastStr + value.slice(0);

  let characters = [];
  let updatedCharacters = [];

  for (let i = 0; i < value.length; i++) {
    characters.push(value.charAt(i));
  }

  characters.map((char) => {
    let charCode = char.charCodeAt();
    if (charCode === 122) {
      charCode = 96;
    }
    let changeCodeToChar = String.fromCharCode(charCode + repeatCount);
    updatedCharacters.push(changeCodeToChar);
  });

  result = updatedCharacters;
  return result;
}

