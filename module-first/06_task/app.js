/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 5 - "Pangram"
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję, która sprawdzi, czy podany parametr to tzw. pangram.
*
* Pangram to możliwe do zrozumienia zdanie wykorzystujące wszystkie litery danego alfabetu.
*
*
* Przykład:
*
* isPangram('test') // => false
* isPangram('Dość gróźb fuzją, klnę, pych i małżeństw!') // => true
*/

/*
* Punkty dodatkowe
*-----------------
* Zweryfikuj, czy konkretna litera występuje w podanym zdaniu tylko jeden raz.
*/

function isPangram(sentence) {
    if(typeof sentence != "string"){
      throw new Error('Podana wartość nie jest stringiem');
    }
  
    const alphabet = 'aąbcćdeęfghijklłmnńoóprsśtuwyzźż'.split("");
    sentence = sentence.toLowerCase();
    const used = [];
  
    for(let i = 0; i < sentence.length; i++){
      const num = alphabet.indexOf(sentence[i]);
  
      if(used.includes(sentence[i])){
        return false;
      }
  
      if(sentence[i] === alphabet[num]){
        used.push(alphabet[num]);
        alphabet.splice(num, 1);
      }
    }
  
    return (alphabet.length == 0);
  }
  
  /* Weryfikacja */
  
  function verify(input, goal) {
    if (input === goal) {
      console.log('Gratulacje!');
    } else {
      console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
    }
  }
  
  verify(isPangram('test'), false);
  verify(isPangram('Dość gróźb fuzją, klnę, pych i małżeństw!'), true);
  verify(isPangram('Dość gróźb fuzją, klnę, pych i małże!'), false);