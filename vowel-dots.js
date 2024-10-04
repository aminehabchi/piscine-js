var vowels=/[a|e|i|o|u|A|E|I|O|U]/g
function vowelDots(s){
   return s.replace(vowels,"$&.")
}

