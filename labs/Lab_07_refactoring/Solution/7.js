//1
function task1() {
    console.log('Задание 1');
    var var1 = prompt('var one'); 
    var var2 = prompt('var two');
    if (var1 === var2) console.log('equal');
	else console.log('not equal');
    var1 += 'world';
}
//2
function task2() {
    console.log('Задание 2');
    let fruits = new Array('apple', 'strawberry', 'blueberry', 'raspberry', 'lemon');
    console.log(fruits.join('\n'));
    fruits.forEach(fruit => {
        switch (fruit) {
            case 'apple':
                console.log(`${fruit} green`);
                break;
            case 'strawberry':
                console.log(`${fruit} red`);
                break;
            case 'blueberry':
                console.log(`${fruit} blue`);
                break;
            case 'raspberry':
                console.log(`${fruit} light red`);
                break;
            case 'lemon':
                console.log(`${fruit} yellow`);
                break;
            default:
                throw new Error('Fruit not found');
        }
    })
}
//3
function task3() {
    console.log('Задание 3');
    let countWorkers = parseInt(prompt('Введите кол-во человек: ', undefined));
    let salaryWorker = parseInt(prompt('Введите зарплату на человека: ', undefined));
    while (isNaN(countWorkers)) {alert('Введено неверное количество человек!');
        countWorkers = parseInt(prompt('Введите кол-во человек ', undefined));}
    while (isNaN(salaryWorker)) {
        alert('Введена неверная зарплата на человека!');
        salaryWorker = parseInt(prompt('Введите зарплату на человека: ', undefined));
    }
    alert(`Затраты за зарплату: ${countWorkers * salaryWorker}`);
}
//4
function task4() {
    console.log('Задание 4');
    let badStudents = [];
    let meanRate = [];
    let students = [
    {FIO:'Петров А.А.', rate:5},
    {FIO:'Иванов Б.Б.', rate:3.4},
    {FIO:'Сидоров Г.Г.', rate:9},
    {FIO:'Немолодой Д.Д', rate:2},
    {FIO:'Молодой Е.Е', rate:3.4}
    ];
    students.forEach(student => {
        if (student.rate < 0 || student.rate > 5) return;
        if (student.rate < 4) badStudents.push(student);
        meanRate.push(student.rate);
    })
    console.log(`Средняя оценка: ${meanRate.reduce((a, b) => a + b) / meanRate.length}`);
    console.log('Список плохих студентов:');
    if (badStudents.length > 0) {
        badStudents.forEach(student => {
            console.log(`ФИО: ${student.FIO}, Оценка: ${student.rate}`);
        });
    } else {
        console.log('Все студенты хорошие!');
    }
}
task1();
task2();
task3();
task4();
//5 я всё компилил перед деплоем,ошибок нет