var height = 5;
var input = height;

while (input > 0) {
    
    var spaces = ' '.repeat(height - input);
    var pattern = '*'.repeat(input);

    console.log(spaces + pattern);
    input--;
}