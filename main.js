BuildTree();
function BuildTree() {
    var inputNum = process.argv[2];
    var linenum = parseInt(inputNum);
    var line, spaNum, starNum;
    var star, space;
    for (line = 0; line < linenum; line++) {
        star = "";
        space = "";
        for (spaNum = 0; spaNum < (linenum - line - 1); spaNum++) {
            space = space + " ";
        }
        for (starNum = 0; starNum < (2 * line + 1); starNum++) {
            star = star + "*";
        }
        console.log(space + star);
    }
}
