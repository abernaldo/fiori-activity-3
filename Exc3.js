var height = 5;

for (var i = 0; i < height; i++) {
    var line = '';

    for (var k = 0; k < height; k++) {
        if (k === i || k === height - i - 1) {
            line += '*';
        } else {
            line += ' ';
        }
    }

    console.log(line);
}
