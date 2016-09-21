var x:number = Get();
BuildTree(x);


function Get ():number {
    var x:string = process.argv[2];
    var num:number = parseInt(x);
    return num;
}

function BuildTree (x:number):void {
    var line, spaNum, starNum:number;
    var star, space:string;

    for(line=0; line<x; line++){
        star = "";
        space = "";
        for(spaNum=0; spaNum<(x-line-1); spaNum++){
            space = space + " ";
        }
        for(starNum=0; starNum<(2*line+1); starNum++){
            star = star + "*";
        }
        console.log(space + star);
    }
}