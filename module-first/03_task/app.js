/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 3 - "Przeplatanie"
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję, która dla dwóch podanych parametrów wykona "przeplatanie"
* - używając kolejnych cyfr parametrów połączy je w jeden string.
*
* Przykład:
* zipIt(111, 222) // => '121212'
* zipIt(123, 456) // => '142536'
* zipIt(12, 5555) // => '152555'
*/

/*
* Punkty dodatkowe
*-----------------
* Funkcja powinna weryfikować, czy przekazane parametry są typu number. Jeśli parametry nie
* spełniają tego warunku, funkcja powinna rzucić wyjątek.
*/

function zipIt(first, second) {
    if(typeof first != "number" || typeof second != "number"){
      throw new Error("Podane wartości muszą być liczbami");
    }
  
    let string = '';
    const maxNumberLength = Math.max(...arguments).toString().length;
    
    const argumentsToString = [...arguments].map(function(item){
      return item.toString();
    })
  
  
    for(let letterIndex = 0; letterIndex < maxNumberLength; letterIndex++){
      for(let argumentIndex = 0; argumentIndex < argumentsToString.length; argumentIndex++){
        if(argumentsToString[argumentIndex].length > letterIndex){
          string += argumentsToString[argumentIndex][letterIndex];
        }
      }
    }
    
    return string;
  }
  
  /* Weryfikacja */
  
  function verify(input, goal) {
    if (input === goal) {
      console.log('Gratulacje!');
    } else {
      console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
    }
  }
  
  verify(zipIt(111, 222), '121212');
  verify(zipIt(123, 456), '142536');
  verify(zipIt(12, 5555), '152555');