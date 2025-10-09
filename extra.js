let i = 1;
let j = 1;

while (i <= 10) {
    j = 1;
    console.log("\nTabuada do " + i + ":");
    while (j <= 10) {
        console.log("" + i + " * " + j + " = " + (i * j));
        j++;
    }
    i++;
}