var prompt = require('readline-sync');
var breed = prompt.question('what breed is your dog?');

var dogs = {
    terrier: 'suzy',
    husky: 'Sir Sniffy',
    pug: 'Notorius PUG'
};

if(dogs[breed]===undefined){
    console.log('Your dog breed was not found :(');
}
else{

    console.log('Your dog\'s name is ' + dogs[breed]+ ' How cool!');
}
