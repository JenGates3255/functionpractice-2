var parkingLot = {
	rows: , 
	cols: , 
	slots: [
null, 
{owner: 'jen', color: 'red'},
null,
{ owner: 'jon', color:'green'},
null,
{ owner: 'sally', color: 'blue'},
{ owner: 'chad', color: 'black'},
null,
null
];
};

var createParkingLot = function(parkingLotData){
	var table = $('table');

	return table; 
}

$(document).on('ready', function() {

var table = createParkingLot(parkingLot);
$('body').append(table);

/////////////////////




// #1
var getName = function(p){
	return p.name;
};	
console.log(getName({name: 'Jen', age: 25 }) );


// #2
var totalLetters = function(words) {
	return words.join('').length;
};
	console.log(totalLetters(['javascript', 'is', 'awesome']));

//3
var living = [{city: 'City', location:'Denver'}]
var keyValue = function(p){
	return living.join(':');		
					};
				console.log(living(city , location));	
	

//4





});
// var name = function() {

// console.log(name);
// console.log(location());
// 	};

// var location = function(arg) {
// 	return 'denver';
// 	};
// getName('jen', location);
/////////////////////////////////////////
// var getName = function() {

// console.log("im learning!")
// };
// getName();
////////////////////////////////////////
// var getName = function(name) {

// console.log(name)
// };
// getName("jen");


// var totalLetters = function();





