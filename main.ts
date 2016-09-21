
BuildTree();


function BuildTree ():void {
    var inputNum:string = process.argv[2];
    var linenum:number = parseInt(inputNum);

    var line, spaNum, starNum:number;
    var star, space:string;

    for(line=0; line<linenum; line++){
        star = "";
        space = "";
        for(spaNum=0; spaNum<(linenum-line-1); spaNum++){
            space = space + " ";
        }
        for(starNum=0; starNum<(2*line+1); starNum++){
            star = star + "*";
        }
        console.log(space + star);
    }
}