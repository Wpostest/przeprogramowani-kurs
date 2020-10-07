/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 2 - "Walidacja"
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję, która sprawdzi, czy przekazane hasło spełnia określone warunki:
*
* a) Ma długość od 3 do 10 znaków
* b) Zawiera jeden ze znaków specjalnych - !, @ lub #
* c) Zawiera cyfrę
*
* Przykład:
* validatePassword('test') // => false
* validatePassword('test11!') // => true
*/

/*
* Punkty dodatkowe
*-----------------
* Funkcja powinna weryfikować, czy przekazany parametr jest typu string. Jeśli parametr nie
* spełnia tego warunku, funkcja powinna rzucić wyjątek.
*/

function validatePassword(password) {
    if(typeof password != "string"){
      throw new Error('Podana wartość nie jest stringiem');
    }
  
    const regexSpecialChars = /[!@#]/;
    const regexNumbers = /\d/;
  
    if(password.length < 3 || password.length > 10){
      alert('Hasło powinno mieć długość od 3 do 10 znaków');
      return false;
    }
    else if(!regexSpecialChars.test(password)){
      alert('Hasło powinno zawierać przynajmniej jeden znak specialny !,@ lub #');
      return false;
    }
    else if(!regexNumbers.test(password)){
      alert('Hasło powinno zawierać przynajmniej jedną liczbę');
      return false;
    }
  
    return true;
  }
  
  /* Weryfikacja */
  
  function verify(input, goal) {
    if (input === goal) {
      console.log('Gratulacje!');
    } else {
      console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
    }
  }
  
  verify(validatePassword(''), false);
  verify(validatePassword('lol'), false);
  verify(validatePassword('ToDziala1#'), true);