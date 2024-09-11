function selectionSort(array) {
  for(let i = 0; i < array.length; i++){
    let smallest = array[i]
    let smallestIndex = i
   for(let j = i; j < array.length; j++){
    if(array[j] < smallest){
        smallest = array[j]
        smallestIndex = j
    }
    if(j == array.length - 1){
       let temp = smallest
       array[smallestIndex] = array[i]
       array[i] = temp
    }  
   }
  }

  return array
}