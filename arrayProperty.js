//Just like you can add methods to your own constructor, you can also add methods and properties to built in classes in JavaScript like Arrays and Objects.

//Add a reverse method to the String 'class' so that every instance of String can call reverse and reverse itself.

function reverseString(){
  var str = this;
  var arr = str.split('');
  arr.reverse();

  return arr.join('');
}

String.prototype.reverse = reverseString;


console.log("This is a string".reverse());
