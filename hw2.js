function hasSameDigit(arr1, arr2) {
  try {
    return arr1.some(num => arr2.includes(num));
  } catch (error) {
    console.error('Ошибка при проверке наличия одинаковых цифр: ', error);
    return false;
  }
}

