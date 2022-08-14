// Quiz 1 - is-balance => بالانس تعمیم یافته

function isBalance(input) {
  let result = null;
  let characters = [];


  for (let i = 0; i < input.length; i++) {

    characters.push(input.charAt(i));

  }
  
  const toFindDuplicates = (arry) => arry.filter((item, index) => characters.indexOf(item) === index);
  const duplicateElements = toFindDuplicates(characters);

  if (duplicateElements.length === characters.length) {
    result = "True, Characters is Balance!";
  } else {
    result = "False, Characters is not Balance!";
  }

  return result;
}

