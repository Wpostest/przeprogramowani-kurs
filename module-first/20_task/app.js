/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 19 - "Dopasuj nawiasy"
*/

/*
* Cel zadania
*------------
* Otrzymując stringa zawierającego nawiasy kwadratowe [], klamry {} lub nawiasy okrągłe (), upewnij się że wszystkie z par są dopasowane i prawidłowo zagnieżdżone. Jeżeli wszystko się zgadza, zwróć true. W przypadku wykrycia błędów, zwróc false.
*
* Przykład: '[{()}]' => true
* Przykład: '[{]}' => false
*/

function checkBrackets(stringWithBrackets) {
    if(typeof(stringWithBrackets) != 'string'){
      throw new Error('Podana wartość nie jest stringiem');
    }
  
    const brackets = {']': '[', '}': '{', ')': '('};
    const holder = [];
  
    for(let char of stringWithBrackets){
      if(char === '[' | char === '{' | char === '('){
        holder.push(char);
      }
      else if(char === ']' | char === '}' | char === ')'){
        const pairBracket = brackets[char];
  
        if(holder[holder.length - 1] === pairBracket){
          holder.splice(-1, 1);
        }
        else{
          return false;
        }
      }
    }
  
    return true;
  }
  
  
  /* Weryfikacja */
  
  function verify(input, goal) {
    input = Array.isArray(input) ? `[${input.join(', ')}]` : input;
    if (input == goal) {
      console.log('Gratulacje!');
    } else {
      console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
    }
  }
  
  verify(checkBrackets("[{()}]"), true);
  verify(checkBrackets("[{]}"), false);
  verify(checkBrackets("()[{}]"), true);
  verify(checkBrackets("{[(]}}"), false);