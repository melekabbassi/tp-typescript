for (var index = 2000; index <= 2030; index++) {
    if (index % 2 != 0) {
        console.log(index);
    }
}
console.log("********************************************");
for (var index = 2030; index >= 2000; index--) {
    if (index % 2 != 0) {
        console.log(index);
    }
}
console.log("********************************************");
var i3 = 2000;
while (i3 <= 2030) {
    if (i3 % 3 == 0) {
        console.log(i3);
    }
    i3++;
}
console.log("********************************************");
var i57 = 2000;
while (i57 <= 2030) {
    if (i57 % 5 == 0 && i57 % 7 == 0) {
        console.log(i57);
    }
    i57++;
}
console.log("********************************************");
var i116 = 2000;
while (i116 <= 2030) {
    if (i116 % 11 == 0 && i116 % 6 != 0) {
        console.log(i116);
    }
    i116++;
}
console.log("********************************************");
var N = 7;
var diviseurs = 0;
var i = 1;
while (i <= N) {
    if (N % i == 0) {
        diviseurs++;
    }
    i++;
}
console.log("Le nombre " + N + " à " + diviseurs + " diviseurs");
if (diviseurs == 2) {
    console.log("Le nombre " + N + " est premier");
}
