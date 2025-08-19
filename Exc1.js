function numToWords(number) {
    var ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", 
                  "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    var tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

        if (number === 0) {
        return "Zero";
    }

let numresult = "";
    
    if (number >= 100) {
        numresult += ones[Math.floor(number / 100)] + " Hundred ";
        number = number % 100;  
    }

    if (number >= 20) {
        numresult += tens[Math.floor(number / 10)] + " ";
        number = number % 10; 
    }

    if (number > 0) {
        numresult += ones[number];
    }        

    return numresult.trim();
}

let Input = prompt("Input a number between 1 and 999:");

var number = parseInt(Input);  

if (isNaN(number)) {
    console.log("Invalid number.");
} else if (number > 0 && number <= 999) {
    console.log(numToWords(number)); 
} else {
    console.log("Input a number between 1 and 999.");
}
