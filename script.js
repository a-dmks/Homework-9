const components = prompt('Введіть довжини катетів через пробіл')

const cathetus = components.split(' ');
const hypotenuseWithMath = Math.hypot(cathetus[0], cathetus[1]);
const hypotenuseWithout = (cathetus[0]**2 + cathetus[1]**2)**0.5;

if (cathetus.length !== 2){
    alert('Помилка! Невірна кількість довжин');
}
else if (isNaN(cathetus[0]) || isNaN(cathetus[1])) {
    alert('Помилка! Ви вказали не число');
}
else {
    alert(`Розраховано за допомогою Math: ${hypotenuseWithMath}
Розраховано без допомоги Math: ${hypotenuseWithout}`);
}