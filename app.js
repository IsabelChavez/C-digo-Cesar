// Pedimos una palabra al usuario para encriptarla:
var sentence = prompt ('Escriba una frase:');
function cipher(sentence, n){
    var arrayOfCodeAsciiLetter = [];
    for(i = 0; i < sentence.length; i++){
        var letter = sentence.charAt(i);
        if(letter == letter.toUpperCase()){
            var codeAsciiOfLetterUp = letter.charCodeAt(0);
            newCodeAsciiOfLetterUp = (codeAsciiOfLetterUp - 65 + n) % 26 + 65;
            arrayOfCodeAsciiLetter.push(newCodeAsciiOfLetterUp);
        }
        else {
            var codeAsciiOfLetterDown = letter.charCodeAt(0);
            newCodeAsciiOfLetterDown = (codeAsciiOfLetterDown - 97 + n) % 26 + 97;
            arrayOfCodeAsciiLetter.push(newCodeAsciiOfLetterDown);
        }
    }
    var reversArray = arrayOfCodeAsciiLetter.reverse();
    var newSentence = " ";
    for(b = 0; b < reversArray.length; b++){
        var newLetter = String.fromCharCode(reversArray[b]);
        var newSentence = newLetter.concat(newSentence);
   }
   return alert("La frase encriptada sería: " + newSentence);

}

console.log(cipher(sentence, 33));

function descipher (sentence,n){

}
