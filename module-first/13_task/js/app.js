/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 12 - "Mr. Elliot"
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję zmieniającą tekst na pozdrowienia od Mr. Elliota, według przykładu.
*
*
* Przykład:
* greetings('hacker'); // => 'H4Ck3r'
* greeting('Control Is An Illusion'); // => 'C0NtR0L 15 4N 1lLu510n'
* greeting('Saving The World'); // => 'S4V1Ng tHe w0rLd'
* 
*/

const replaceAt = function(input, index, replacement) {
    return input.substr(0, index) + replacement + input.substr(index + replacement.length);
}

function greeting(message) {
  if(typeof(message) != "string"){
    throw new Error("Podana wartość nie jest stringiem");
  }

  let resoult = message.toLowerCase();

  const lettersMapping = {
    'a': '4',
    'e': '3',
    'o': '0',
    'i': '1',
    's': '5',
  }

  for(let i = 0; i < resoult.length; i++){
    const letter = resoult[i];

    if(i % 2 === 0 & !lettersMapping.hasOwnProperty(letter)){
        resoult = replaceAt(resoult, i, letter.toUpperCase());
    }

    if(lettersMapping.hasOwnProperty(letter)){
      resoult = replaceAt(resoult, i, lettersMapping[letter]);
    }
  }

  return resoult;
}

/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(greeting('hacker'), 'H4Ck3r');
verify(greeting('Control Is An Illusion'), 'C0NtR0L 15 4N 1lLu510n');
verify(greeting('Saving The World'), '54V1Ng tH3 w0rLd');