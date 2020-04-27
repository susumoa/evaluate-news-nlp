export function validateInput(inputText) {
  const input = inputText.trim();
  const expression = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
  const regex = new RegExp(expression);

  if (input === '') {
    return false;
  } else if (!input.match(regex)) {
    return false;
  } else {
    return true;
  }
}
