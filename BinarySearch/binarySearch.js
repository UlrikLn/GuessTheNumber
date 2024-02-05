"use script";

const values = [1, 2, 3, 5, 7, 8, 9, 11, 12, 14, 15];

function search() {
    // Get the input value
    const inputValue = document.getElementById('searchValue').value;
    
    // Check if the input is a valid number
    if (!isNaN(inputValue)) {
        // Convert the input value to a number
        const searchNumber = parseInt(inputValue);

        // Call the binarySearch function with the input number and results container
        binarySearch(searchNumber, values, document.getElementById('results'));
    } else {
        // Display an error message for invalid input
        document.getElementById('results').innerHTML = "Please enter a valid number" + "<br>";
    }
}

function binarySearch(value, values, resultsContainer) {
    // Clear the existing content in the results container
    resultsContainer.innerHTML = '';

    let start = 0;
    let end = values.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (value === values[middle]) {
            resultsContainer.innerHTML += middle + " is the index of the value " + value + "<br>";
            return;
        } else if (value < values[middle]) {
            //resultsContainer.innerHTML += "The Middle is right now: " + middle + "<br>";
            //resultsContainer.innerHTML += "The Start is right now: " + start + "<br>";
            //resultsContainer.innerHTML += "The End is right now: " + end + "<br>";
            end = middle - 1;
            //resultsContainer.innerHTML += "The median of " + start + " & " + end + "<br>";
        } else if (value > values[middle]) {
            //resultsContainer.innerHTML += "The middle is right now: " + middle + "<br>";
            //resultsContainer.innerHTML += "The Start is right now: " + start + "<br>";
            //resultsContainer.innerHTML += "The End is right now: " + end + "<br>";
            start = middle + 1;
            //resultsContainer.innerHTML += "The median of " + start + " & " + end + "<br>";
        }
    }

    // Display a message if the value is not found
    resultsContainer.innerHTML += "Value not found in the array" + "<br>";
}

compare(value, values);{
         if (value === values[middle]) {
            resultsContainer.innerHTML += middle + " is the index of the value " + value + "<br>";
            return 0;
        } else if (value < values[middle]) {
            //resultsContainer.innerHTML += "The Middle is right now: " + middle + "<br>";
            //resultsContainer.innerHTML += "The Start is right now: " + start + "<br>";
            //resultsContainer.innerHTML += "The End is right now: " + end + "<br>";
            end = middle - 1;
            //resultsContainer.innerHTML += "The median of " + start + " & " + end + "<br>";
        } else if (value > values[middle]) {
            //resultsContainer.innerHTML += "The middle is right now: " + middle + "<br>";
            //resultsContainer.innerHTML += "The Start is right now: " + start + "<br>";
            //resultsContainer.innerHTML += "The End is right now: " + end + "<br>";
            start = middle + 1;
            //resultsContainer.innerHTML += "The median of " + start + " & " + end + "<br>";
        }

}

binarySearchFunction(value, values, compare());{
    let start = 0;
    let end = values.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        compare(value, values);
    }

}

