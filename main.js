var x = Get();
BuildTree(x);
function Get() {
    var x = process.argv[2];
    var num = parseInt(x);
    return num;
}
function BuildTree(x) {
    var line, spaNum, starNum;
    var star, space;
    for (line = 0; line < x; line++) {
        star = "";
        space = "";
        for (spaNum = 0; spaNum < (x - line - 1); spaNum++) {
            space = space + " ";
        }
        for (starNum = 0; starNum < (2 * line + 1); starNum++) {
            star = star + "*";
        }
        console.log(space + star);
    }
}
