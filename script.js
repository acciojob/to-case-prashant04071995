function toCase(text) {
  if (!text) {
    return '-';
  }

  const lowerCaseText = text.toLowerCase();
  const upperCaseText = text.toUpperCase();
  const result = `${lowerCaseText}-${upperCaseText}`;

  return result;
}

const text = prompt("Enter text:");
alert(toCase(text));
