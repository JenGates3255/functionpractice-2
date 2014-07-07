$(document).on('ready', function(){


// //#1__________________________________________________ok____
// var getName = function (a){
// 	return a.name;
// };
// console.log(getName({ name: 'Luisa', age: 25 }));

// //#2__________________________________________________ok___
// array = ['javascript', 'is', 'awesome'];
// var number = 0

// var totalLetters = function (a){

// 		number += a.length;
// 		console.log(number);
// };
// array.forEach(totalLetters)

//boooonnnuuuuusss fromjosh__________________________ok___
//list items into array
// 	var array = ['a','b','c'];
// //take each index of array and print hello world
// 	var print = function(b){
// 		console.log(b);
// 	};
// array.forEach(print)

//#3___________________________________________________ok__
 //create keyval w/ two argus
//  var keyValue = function(mom, dad){
// // return an obj w. a key of 1st arg and value of second 
// 	var something = {};
// 	something[mom]= dad;
// 	return something;
//  };
//  console.log (keyValue('airport','JFK'));
//#4_______________________________________________________

//create func names negindex
// var negativeIndex = function(){
	
// 	};


// //#5______________________________________________________
	// var x = '';
	// var removeM = function(string){
	// 	for (var i = 0; i < string.length; i++) {
	// 		if (string[i]!= 'm'){
	// 			x+=string[i]; 
	// 		}
	// 	};
	// 	return x
	// }
	// console.log(removeM('Family'))

// //#6_________________________________________________________

// var printObject = function (key){
// 	for (i in key){
// 	var	value = key[i];
// 		console.log (i + ' is ' + value)
// 	}

// 	};
// 	printObject({ a: 10, b: 20, c: 30 })



// //#7_________________________________________________________
//Write a function called 'vowels' which 
//takes a string and returns an array of all 
//the vowels in the string, including duplicates.
//  var z = [];
//  var vowels = function(string){
//  	for (var i = 0; i < string.length; i++){
//  		//var characters = 'aeiou';
//  		var characters = ['a', 'e', 'i', 'o', 'u'];

//  		if (characters.indexOf(string[i]) !== -1){
//  			z.push(string[i]);
//  		}
//  	};
//  	return z;
//  }
// console.log(vowels('Meow Meow Meow'));

//  //#8________________________________________________________
//  Write a function called 'twins' which takes an array and returns
//  true if every pair of items in the array is the same.
 // var a = [];
//  var twins = function(meow){
//   var pass = true ;
//   // if its an odd number of items - will not pass
//   	if (meow.length % 2){
//   		pass = false;
//   	}
//   	// check if each odd value matches even value 
//   	for (var i = 0; i < meow.length; i+=2) {
//   		if (meow[i] != meow[i+1]){
//   			pass = false
//   		}
//   	};
 
//  return pass;
//  }
// var pass = ['a', 'a', 'b', undefined];
// var fail = ['a', 'a', 'b', 'z'];
// console.log(twins(pass));
// console.log(twins(fail));
// //#9_________________________________________________________
// Write a function called 'or' which takes an array of booleans and 
// returns true if any one of them is true. Given an empty array, return
// false. If you find an item that is true, the function should return 
// true immediately and not continue checking further values.

var or = function(meow) {
  for (var i=0; i<meow.length; i++){ 
  	 if(meow[i]){
  		return true
  		}
  	}	
  	return false;
} 	
  	
var hey = [false, false, true, false]; //should return true
var hello = [false, false, false]; //should return false
var howdy = []; //should return false
console.log(or(hey));
console.log(or(hello));
console.log(or(howdy));

// //#10________________________________________________________
// Write a function called 'unique' which takes an array of 
// strings, and returns a new array consisting of the unique 
// values (no duplicates).
var zoey = [];
var prev;
var unique = function(input){
	for (var i = 0; i < input.length; i++) {
		if (!(i in input))
			continue;
		if (input[i] !== prev || zoey.length === 0){
			zoey.push(input[i]);
			prev = input[i];
		}
	}
	
	return zoey
}


var first = ['a', 'b', 'a', 'c', 'd', 'd']; // should return ['a', 'b', 'c', 'd']
var second = ['todd', 'avery', 'maria', 'avery'];// should return ['todd', 'avery', 'maria']

console.log(unique(first))
console.log(unique(second))

});




