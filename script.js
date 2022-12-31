const components = prompt('Введіть довжини катетів через пробіл')

if (components) {
    const cathetus = components.split(' ');
    if (cathetus.length !== 2) {
        alert('Помилка! Невірна кількість довжин');
    } else if (isNaN(cathetus[0]) || isNaN(cathetus[1])) {
        alert('Помилка! Ви вказали невалідні довжини');
    } else {
        alert(`Розраховано за допомогою Math: ${Math.hypot(cathetus[0], cathetus[1])}
Розраховано без допомоги Math: ${(cathetus[0]**2 + cathetus[1]**2)**0.5}`);
    }
} else {
    alert('Ви не ввели довжини :(')
}