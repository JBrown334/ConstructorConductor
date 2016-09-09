//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  function Person(name, age){
    this.name = name;
    this.age = age;
  }


//Now create three instances of Person with data you make up

  var me = new Person('Joe', 31);
  var you = new Person('Willy', 98);
  var ned = new Person('Ned', 58);



//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

var sayName = function(){
  alert(this.name);
};

Person.prototype.sayName = sayName;

// me.sayName();
