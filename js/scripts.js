var a = prompt('Podaj wartosc a', a);
var b = prompt('Podaj wartosc b', b);

var value =  (a * a) - (2 * a * b) + (b * b);
alert('Twoj wynik to: ' +value);
console.log('Twoj wynik to: ' +value);
if (value > 0) {
    alert('Twoj wynik jest dodatni')
    console.log('Twoj wynik jest dodatni');
} else if (value < 0) {
    alert('Twoj wynik jest ujemny')
    console.log ('Twoj wynik jest ujemy');
} else  {
   alert('0 jest nieujemne ani niedodatnie, chyba');
    console.log ('0 jest nieujemne ani niedodatnie, chyba');
}
