var color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
var suffixes = ["th", "st", "nd", "rd"];

color.forEach((col, index) => {
    var pos = index + 1;
    var suffix = (pos % 10 === 1 && pos !== 11) ? suffixes[1] :
                 (pos % 10 === 2 && pos !== 12) ? suffixes[2] :
                 (pos % 10 === 3 && pos !== 13) ? suffixes[3] : suffixes[0];
                 
    console.log(`${pos}${suffix} choice is ${col}.`);
});
