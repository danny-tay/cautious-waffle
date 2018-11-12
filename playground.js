function isEven(num){
	return num % 2 === 0;
}

function factorial(num){
var result = 1;
for (var i = 1; i <=num; i++) {
	result *= i;
}
	return result;
}

function kebabToSnake(str){
	return str.replace(/-/g, "_");
}

function printReverse(my_array){
	for(var i = my_array.length-1; i>=0; i--){
		console.log(my_array[i]);
	}
}

function isUniform(my_array){
	var item = my_array[0];
	for (var i=1; i<my_array.length; i++ ){
		if (my_array[i] != item){
			return false;
		}
	}
	return true;
}

function sumArray(my_array){
	var sum = 0;
	my_array.forEach(function(num){
		sum += num;
	});
	return sum;
}

function max(my_array){
	var big = my_array[0];
	my_array.forEach(function(num){
		if(num>big){
			big = num;
		};
	});
	return big;
}