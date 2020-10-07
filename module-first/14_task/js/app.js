/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 13 - "Izogram"
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję sprawdzającą czy podane słowo jest izogramem, czyli słowem w którym każda litera występuje tylko jeden raz.
*
*
* Przykład:
* isogram('Izogram'); // => true
* isogram('Przeprogramowani'); // => false
* 
*/

function isogram(word) {
    if(typeof(word) != 'string'){
      throw new Error('Podana wartość nie jest stringiem');
    }
  
    const wordSplit = word.split('');
    const letterCount = {};
    let isIsogram = true;
  
    for(item of wordSplit){
      const letter = item.toLowerCase();
  
      if(letterCount.hasOwnProperty(letter)){
        letterCount[letter] += 1;
        isIsogram =  false;
      }
      else{
        letterCount[letter] = 1;
      }
    };
  
    return isIsogram;
  }
  
  /* Weryfikacja */
  
  function verify(input, goal) {
    if (input === goal) {
      console.log('Gratulacje!');
    } else {
      console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
    }
  }
  
  verify(isogram('izogram'), true);
  verify(isogram('Przeprogramowani'), false);
  verify(isogram('SprawdzAm'), false);