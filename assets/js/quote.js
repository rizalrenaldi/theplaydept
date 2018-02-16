var quotes = [
  'Sometimes music is all you need.',
  'Where words fail, music speaks.',
  'My music will tell you more about me than I ever will.',
  'Music is the strongest form of magic.',
  'Without music, life would be a mistake.',
  'Good music does not have an expiration date.'
];

$(document).ready(function() {
    var quote = quotes[Math.floor(Math.random() * quotes.length)];
    $("#quote").append(quote);
    console.log('Jadinya adalah' + quote);
  });
