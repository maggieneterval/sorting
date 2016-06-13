

function bubbleSort (array) {
		for(var i=0; i<array.length; i++) {
			for (var j = 0; j < array.length-i; j++){
					compareAndSwap(array, j);
			}
		}
		return array;
	}

function compareAndSwap (array, firstIndex) {
				if (array[firstIndex] > array[firstIndex + 1]){
					var temp = array[firstIndex + 1];
					array[firstIndex + 1] = array[firstIndex];
					array[firstIndex] = temp;
				}
	}

