function showVerticalMessage(word) {
   word = 'strada';

   if (word.startsWith('s')) {
      word = 'Stradad';
   };
   if (word.length > 6) {
      word = word.slice(0, 6);
   }
   for (let str of word) {
      console.log(str);
   }
}

showVerticalMessage();