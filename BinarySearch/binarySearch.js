"use script";

const values = [1,2,3,5,7,8,9,11,12,14,15];

function binarySearch(value, values){
    let start = 0;
    let end = values.length - 1;
    
    
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (value === values[middle]) {
            return middle + " is the index of the value " + value;
        } else if (value < values[middle]) {
            console.log("The middle is right now: " + middle);
            end = middle - 1;
            console.log("The median of " + start + " & " + end);
        } else if (value > values[middle]) {
            console.log("The middle is right now: " + middle);
            start = middle + 1;
            console.log("The median of " + start + " & " + end);
        }
    }

    return "Value not found in the array";
}

console.log(binarySearch(100, values))
