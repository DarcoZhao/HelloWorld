var x:string = process.argv[2];
var num:number = parseInt(x);
Tree(num);


function Tree (x:number){
    var line, spaNum, starNum:number;
    var star, space:string;

    for(line=0; line<num; line++){
        star = "";
        space = "";
        for(spaNum=0; spaNum<(num-line-1); spaNum++){
            space = space + " ";
        }
        for(starNum=0; starNum<(2*line+1); starNum++){
            star = star + "*";
        }
        console.log(space + star);
    }
}

