// Отримати від користувача 3 рядки та вивести їх у довільному порядку однією командою (конкатенація);

const strFirst = prompt('Введіть перший рядок');
const strSecond = prompt('Введіть другий рядок');
const strThird = prompt('Введіть третій рядок');

if (!strFirst || !strSecond || !strThird) {
  alert('Ви нічого не ввели!');
} else {
  alert(`${strThird}, ${strFirst}, ${strSecond}.`);
}

// Розбити за цифрами п'ятизначне число і вивести у вихідному порядку через пробіл.

const number = prompt('Введіть п\'ятизначне число');

if (!number) {
  alert('Ви нічого не ввели!');
} else if (isNaN(number) || number.length !== 5) {
  alert('Ви ввели невалідні дані!');
} else {
  function splitNumber(num) {
    return num.split('').join(' ');
  }
  const array = splitNumber(number);
  alert(array);
}

