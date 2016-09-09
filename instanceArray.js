/*
  Your 3 Users will be the following.
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
};

//Create an Array called 'users' that will store all our instances of User.

  var users = [
   user1 = {
      name: 'Tyler',
      email: 'tylermcginnis33@gmail.com',
      pw: 'iLoveJS'
    },
    user2 = {
      name: 'Cahlan',
      email: 'cahlan@devmounta.in',
      pw: 'iLoveHashtags'
    },
    user3 = {
      name: 'Lenny',
      email: 'lenny@thelenster.com',
      pw: 'iLoveLentilSoup'
    },
    user4 = {
      name: 'Anonymouse',
      email: 'no@nothere.com',
      pw: 'youCantSeeMypw'
    }
  ];


//Now create and push into your users array 3 separate instances of User using the data from above in that exact order

  var user5 = new User('Joe', 'me@yahoo.org', 'yehaa21');
  var user6 = new User('Jen', 'her@yahoo.org', 'thatsit');
  var user7 = new User('Lemmy', 'Lemmy@yahoo.co', 'shredder1');

console.log('Tyler\'s information is ');
//Console.log all of Tylers information

  console.log('Tyler\'s information is ' + user1.name + ' ' + user1.email + ' ' + user1.pw);

console.log('Lenny\'s information is ');
//Now console.log all of Lennys information

  console.log('Lenny\'s information is ' + user3.name + ' ' + user3.email + ' ' + user3.pw);


//Now create another instance of User using your own information and then add that to your users array.



console.log('All my users names are ');
//Now loop through your users Array and console.log every users name.
 function logUserNames(){
   for (var i = 0; i < users.lenght; i ++){
     console.log(users.name);
   }
 }

  // console.log('All my users names are ' + );
