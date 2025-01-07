console.log('javascript is awesome');

var number = 10;
var string = 'Hello there';
var IsJsAwesome = true;
var groceries = ['Milk','Eggs','Cheese'];

if(number == 10){
	document.getElementById('num').innerHTML = number + 5;
}else{
	document.getElementById('num').innerHTML = number;
}

function listGroceries(){
	for(var i=0; i<groceries.length; i++){
		console.log(groceries[i]);
	}
}

listGroceries();

document.getElementById('box').addEventListener('click', function(){
	console.log('I got Clicked');
});

