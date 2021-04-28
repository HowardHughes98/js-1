

var age = prompt('сколько вам лет?');
 if ( age <= 18 ) {
     alert('вы еще молоды вам нужно учиться');
 } else if (age <= 50) {
     alert('вам нужно работать');
 }else if (age <=59) {
     alert('вам скоро на пенсию');
 }else if (age <=150 ) {
     alert('вы пенсионер');
 }else {
     alert('что-то пошло не так');
 }