 let clients = [
     {
         firstName: "Александр",
         lastName: "Иванчук",
         date: "11-29-1990",
         phone: "8 (929) 988-90-09",
         amounts: [2549, 2098, 764, 7266]

     },
     {
         firstName: "Анатолий",
         lastName: "Стаценко",
         date: "02-12-1987",
         phone: null,
         amounts: [563, 8287, 889]

     },
     {
         firstName: "Марина",
         lastName: "Петрова",
         date: "07-26-1997",
         phone: "8 (899) 546-09-08",
         amounts: [6525, 837, 1283, 392]

     },
     {
         firstName: "Иван",
         lastName: "Караванов",
         date: "09-12-1999",
         phone: null,
         amounts: [7634, 283, 9823, 3902]

     },
     {
         firstName: "Оксана",
         lastName: "Абрамова",
         date: "01-24-2002",
         phone: "8 (952) 746-99-22",
         amounts: [342, 766, 362]

     },
 ];

// Part 1

  let newClient = {};

 newClient.firstName = prompt('Введите ваше имя: ');
 console.log(newClient.firstName);

 newClient.lastName = prompt('Введите вашу фамилию: ');
 console.log(newClient.lastName);

 newClient.date = prompt('Введите вашу дату рождения в формате мм-дд-гггг: ');
 console.log(newClient.date);

newClient.amounts = [];



 while (confirm("Добавить покупку для клиента " + newClient.firstName + " ?")) {

      newClient.amounts.push(Number(prompt('Введите сумму покупки: ')));
  }


  clients.push(newClient)


// Part 2

function fullName (clients) {
      return clients.firstName  +' ' + clients.lastName;
}
  fullName(clients[0]);





function getBirthday (date) {
    const birthday = new Date(date);
    const today = new Date();
    let result = birthday.toLocaleString('ru', {
        month: "long",
        day: "numeric"
    })

if (birthday.getMonth() === today.getMonth()&& birthday.getDate()  === today.getDate()) {
    return result + "(сегодня)";
}
return result;
}

getBirthday(clients[0].date);
console.log(getBirthday(clients[0].date));

function getAllAmount(amounts) {
    let sum = 0;
    for (let i = 0; i < amounts.length; i++) {
        sum += amounts[i];
    }
   return sum;
}

 getAllAmount(clients[0].amounts);




 function getAverageAmount(sum) {
     let aveSum = getAllAmount(sum);
     return (aveSum/sum.length).toFixed(1);
 }

 getAverageAmount(clients[0].amounts);


 let showClients = (clients) => {

     for (let i = 0; i < clients.length; i++) {
       console.log( 'Клиент ' + fullName(clients[i]) + ' имеет среднюю сумму чека ' + getAverageAmount(clients[i].amounts) + '.' + 'День рождения клиента: ' + getBirthday(clients[i].date));
     }

 };
 showClients(clients);

try {
    showClients();
}catch (error) {
    console.log(error + 'Вызвана функция без параметров');
}


 let bestClients = [
     {
         firstName: "Каролина",
         lastName: "Жиздан",
         date: "10-20-1997",
         phone: "8 (929) 978-10-02",
         amounts: [3659, 5489, 1000, 8962]

     },

     {
         firstName: "Захар",
         lastName: "Мынзарарь",
         date: "02-11-1992",
         phone: "8 (952) 546-39-12",
         amounts: [7334, 273, 1823, 3942]

     },
     {
         firstName: "Оксана",
         lastName: "Проник",
         date: "04-21-2001",
         phone: "8 (952) 246-19-28",
         amounts: [3142, 7656, 3672]

     },
 ];


 setTimeout(function () {
     showClients(bestClients);
 }, 3000);


function whoSpentMore(clients) {
    let max = 0;
    let client = '';
    for (let i = 0; i < clients.length; i++) {
        if (getAllAmount(clients[i].amounts) >= max) {
            max = getAllAmount(clients[i].amounts);
            client = fullName(clients[i]);
        }

       }
    console.log('Больше всех потратил ' + client + ' Сумма покупок: ' + max);
}
    whoSpentMore(clients);
    whoSpentMore(bestClients);





